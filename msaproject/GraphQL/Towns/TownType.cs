using HotChocolate;
using HotChocolate.Types;
using Microsoft.EntityFrameworkCore;
using msaproject.Data;
using msaproject.GraphQL.Characters;
using msaproject.GraphQL.Comments;
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
            descriptor.Field(t => t.ImageURL).Type<NonNullType<StringType>>();
            descriptor
                 .Field(t => t.Character)
                 .ResolveWith<Resolvers>(r => r.GetCharacter(default!, default!, default))
                 .UseDbContext<AppDbContext>()
                 .Type<NonNullType<CharacterType>>();
            descriptor
                .Field(p => p.Comments)
                .ResolveWith<Resolvers>(r => r.GetComments(default!, default!, default))
                .UseDbContext<AppDbContext>()
                .Type<NonNullType<ListType<NonNullType<CommentType>>>>();
        }
         private class Resolvers
         {
             public async Task<Character> GetCharacter(Town town, [ScopedService] AppDbContext context,
                 CancellationToken cancellationToken)
             {
                 return await context.Characters.FindAsync(new object[] { town.CharacterId }, cancellationToken);
             }
            public async Task<IEnumerable<Comment>> GetComments(Town town, [ScopedService] AppDbContext context,
                CancellationToken cancellationToken)
            {
                return await context.Comments.Where(c => c.TownId == town.Id).ToArrayAsync(cancellationToken);
            }

        }
        }
    }

