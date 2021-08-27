namespace msaproject.GraphQL.Characters
{
    public record EditCharacterInput(
    
        string CharacterId,
        string? Name,
        string? Vision,
       string? Weapon,
       string? Background,
       string? ImageURI
    );
}
