using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace msaproject.Models
{
    public class Character
    {
           [Key]
           public int Id { get; set; }
            [Required]
            public string Vision { get; set; } = null!;
        [Required]
           public string Name { get; set; } = null!;
        [Required]
           public string Weapon { get; set; } = null!;
        [Required]
            public string Background { get; set; } = null!;
        [Required]
             public string ImageURI { get; set; } = null!;
 
        public string CharacterCard { get; set; } = null!;
        public string food { get; set; } = null!;

        public ICollection<Town> Towns { get; set; } = new List<Town>();
        public ICollection<Comment> Comments { get; set; } = new List<Comment>();


    }
}
