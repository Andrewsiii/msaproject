using HotChocolate;
using HotChocolate.Types;
using msaproject.Data;
using msaproject.Extensions;
using msaproject.GraphQL.Towns;
using msaproject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace msatown.GraphQL.Characters
{
    [ExtendObjectType(name: "Mutation")]
    public class TownMutations
    {
        [UseAppDbContext]
        public async Task<Town> AddTownAsync(AddTownInput input, [ScopedService] AppDbContext context, CancellationToken cancellationToken)
        {
            var town= new Town
            {
                Name = input.Name,
                Description = input.Description,
                CharacterId = int.Parse(input.CharacterId),
              
            };
            context.Towns.Add(town);
            await context.SaveChangesAsync(cancellationToken);
            return town;
        }
        [UseAppDbContext]
        public async Task<Town> EditTownAsync(EditTownInput input, [ScopedService] AppDbContext context, CancellationToken cancellationToken)
        {
            var town = await context.Towns.FindAsync(int.Parse(input.TownId));
            town.Name = input.Name ?? town.Name;
            town.Description = input.Description ?? town.Description;
          
            await context.SaveChangesAsync(cancellationToken);
            return town;
        }
    }
}
