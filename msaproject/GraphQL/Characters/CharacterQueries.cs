using HotChocolate;
using HotChocolate.Types;
using msaproject.Data;
using msaproject.Extensions;
using msaproject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace msaproject.GraphQL.Characters
{
    [ExtendObjectType(name: "Query")]
    public class CharacterQueries
    {
        [UseAppDbContext]
        [UsePaging]
        public IQueryable<Character> GetCharacters([ScopedService] AppDbContext context)
        {
            return context.Characters;
        }

        [UseAppDbContext]
        public Character GetCharacter(int id, [ScopedService] AppDbContext context)
        {
            return context.Characters.Find(id);
        }
    }
}
