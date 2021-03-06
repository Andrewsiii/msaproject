using HotChocolate;
using HotChocolate.Types;
using msaproject.Data;
using msaproject.Extensions;
using msaproject.GraphQL.Characters;
using msaproject.GraphQL.Towns;
using msaproject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace msaproject.GraphQL.Comments
{
    public class CommentType : ObjectType<Comment>
    {
        protected override void Configure(IObjectTypeDescriptor<Comment> descriptor)
        {
            descriptor.Field(c => c.Id).Type<NonNullType<IdType>>();
            descriptor.Field(c => c.Content).Type<NonNullType<StringType>>();
            descriptor.Field(p => p.Modified).Type<NonNullType<DateTimeType>>();
            descriptor.Field(p => p.Created).Type<NonNullType<DateTimeType>>();
            descriptor
                .Field(c => c.Character)
                .ResolveWith<Resolvers>(r => r.GetCharacter(default!, default!, default))
                .UseAppDbContext<AppDbContext>()
                .Type<NonNullType<CharacterType>>();
            descriptor
                .Field(c => c.Town)
                .ResolveWith<Resolvers>(r => r.GetTown(default!, default!, default))
                .UseDbContext<AppDbContext>()
                .Type<NonNullType<TownType>>();

        }

        private class Resolvers
        {
            public async Task<Character> GetCharacter(Comment comment, [ScopedService] AppDbContext context,
                CancellationToken cancellationToken)
            {
                return await context.Characters.FindAsync(new object[] { comment.CharacterId }, cancellationToken);
            }
            public async Task<Town> GetTown (Comment comment, [ScopedService] AppDbContext context,
                CancellationToken cancellationToken)
            {
                return await context.Towns.FindAsync(new object[] { comment.TownId }, cancellationToken);
            }
        }
    }
}
