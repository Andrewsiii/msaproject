using HotChocolate;
using HotChocolate.Types;
using msaproject.Data;
using msaproject.GraphQL.Characters;
using msaproject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace msaproject.GraphQL.Towns
{
    public class TownType : ObjectType<Town>
    {
        protected override void Configure(IObjectTypeDescriptor<Town> descriptor)
        {
            descriptor.Field(t => t.Id).Type<NonNullType<IdType>>();
            descriptor.Field(t => t.Name).Type<NonNullType<StringType>>();
            descriptor.Field(t => t.Description).Type<NonNullType<StringType>>();
            
             descriptor
                 .Field(t => t.Character)
                 .ResolveWith<Resolver>(r => r.GetCharacter(default!, default!, default))
                 .UseDbContext<AppDbContext>()
                 .Type<NonNullType<CharacterType>>();

         }
         private class Resolver
         {
             public async Task<Character> GetCharacter(Town town, [ScopedService] AppDbContext context,
                 CancellationToken cancellationToken)
             {
                 return await context.Characters.FindAsync(new object[] { town.CharacterId }, cancellationToken);
             }
            
        }
        }
    }

