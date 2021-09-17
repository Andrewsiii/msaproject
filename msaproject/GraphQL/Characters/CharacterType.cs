using HotChocolate;
using HotChocolate.Types;
using Microsoft.EntityFrameworkCore;
using msaproject.Data;
using msaproject.Extensions;
using msaproject.GraphQL.Comments;
using msaproject.GraphQL.Towns;
using msaproject.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace msaproject.GraphQL.Characters
{
    public class CharacterType: ObjectType<Character>
    {
        protected override void Configure(IObjectTypeDescriptor<Character> descriptor)
        {
            descriptor.Field(c => c.Id).Type<NonNullType<IdType>>();
            descriptor.Field(c => c.Vision).Type<NonNullType<StringType>>();
            descriptor.Field(c => c.Name).Type<NonNullType<StringType>>();
            descriptor.Field(c => c.Weapon).Type<NonNullType<StringType>>();
            descriptor.Field(c => c.Background).Type<NonNullType<StringType>>();
            descriptor.Field(c => c.ImageURI).Type<NonNullType<StringType>>();
            descriptor.Field(c => c.food).Type<NonNullType<StringType>>();
            descriptor.Field(c => c.CharacterCard).Type<NonNullType<StringType>>();
            descriptor.Field(c => c.Description).Type<NonNullType<StringType>>();

            descriptor
                .Field(s => s.Towns)
                .ResolveWith<Resolvers>(r => r.GetTowns(default!, default!, default))
                .UseDbContext<AppDbContext>()
                .Type<NonNullType<ListType<NonNullType<TownType>>>>();

            descriptor
               .Field(c => c.Comments)
               .ResolveWith<Resolvers>(r => r.GetComments(default!, default!, default))
               .UseAppDbContext<AppDbContext>()
               .Type<NonNullType<ListType<NonNullType<CommentType>>>>();
        }
        private class Resolvers
        {
            public async Task<IEnumerable<Town>> GetTowns(Character character, [ScopedService] AppDbContext context,
                CancellationToken cancellationToken)
            {
                return await context.Towns.Where(c => c.CharacterId == character.Id).ToArrayAsync(cancellationToken);
            }


            public async Task<IEnumerable<Comment>> GetComments(Character character, [ScopedService] AppDbContext context,
               CancellationToken cancellationToken)
            {
                return await context.Comments.Where(c => c.CharacterId == character.Id).ToArrayAsync(cancellationToken);
            }

        }
    }
    
}
