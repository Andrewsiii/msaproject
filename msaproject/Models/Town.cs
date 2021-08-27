using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace msaproject.Models
{
    public class Town
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; } = null!;
        [Required]
        public string Description { get; set; } = null!;

        public int CharacterId { get; set; } 
        public Character Character { get; set; } = null!;
        public ICollection<Character> Characters { get; set; } = new List<Character>();
        public ICollection<Comment> Comments { get; set; } = new List<Comment>();
    }
}
