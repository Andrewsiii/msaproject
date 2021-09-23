using msaproject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace msaproject.GraphQL.Characters
{
    public record LoginPayload(
        Character character,
        string jwt);
}
