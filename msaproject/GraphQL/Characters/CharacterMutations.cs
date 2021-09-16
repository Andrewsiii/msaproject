using HotChocolate;
using HotChocolate.Types;
using msaproject.Data;
using msaproject.Extensions;
using msaproject.Models;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace msaproject.GraphQL.Characters
{
    [ExtendObjectType(name: "Mutation")]
    public class CharacterMutations
    {
        [UseAppDbContext]
        public async Task<Character> AddCharacterAsync(AddCharacterInput input,[ScopedService] AppDbContext context, CancellationToken cancellationToken)
        {
            var character = new Character
            {
                Name = input.Name,
                Vision = input.Vision,
                Weapon = input.Weapon,
                Background = input.Background,
                ImageURI = input.ImageURI,
                food = input.food,
                CharacterCard = input.CharacterCard,
                Description = input.Description
            };
            context.Characters.Add(character);
            await context.SaveChangesAsync(cancellationToken);
            return character;
        }
        [UseAppDbContext]
        public async Task<Character> EditCharacterAsync(EditCharacterInput input, [ScopedService] AppDbContext context, CancellationToken cancellationToken)
        {
            var character = await context.Characters.FindAsync(int.Parse(input.CharacterId));

            character.Name = input.Name ?? character.Name;
            character.Vision = input.Vision ?? character.Vision;
            character.Background = input.Background ?? character.Background;
            character.ImageURI = input.ImageURI ?? character.ImageURI;
            character.Weapon = input.Weapon ?? character.Weapon;
            character.food = input.food ?? character.food;
            character.Weapon = input.CharacterCard ?? character.CharacterCard;
            character.Description = input.Description ?? character.Description;

            await context.SaveChangesAsync(cancellationToken);
            return character;
        }
    }
}
