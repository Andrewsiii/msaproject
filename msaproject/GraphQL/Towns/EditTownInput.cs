
using HotChocolate;
using HotChocolate.Types;
namespace msaproject.GraphQL.Towns
{
    public record EditTownInput
    (
       
        string TownId,
        string? Name,
        string? Description,
        string? ImageURL
    );
}
