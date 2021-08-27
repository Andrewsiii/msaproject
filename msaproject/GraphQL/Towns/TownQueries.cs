using HotChocolate;
using HotChocolate.Types;
using msaproject.Data;
using msaproject.Extensions;
using msaproject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace msaproject.GraphQL.Towns
{
    [ExtendObjectType(name: "Query")]
    public class TownQueries
    {
        [UseAppDbContext]
        [UsePaging]
        public IQueryable<Town> GetTowns([ScopedService] AppDbContext context)
        {
            return context.Towns;
        }
        [UseAppDbContext]
        public Town GetTown(int Id, [ScopedService] AppDbContext context)
        {
            return context.Towns.Find(Id);
        }
    }
}
