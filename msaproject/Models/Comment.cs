using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace msaproject.Models
{
    public class Comment
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Content { get; set; } = null!;
        [Required]
        public int TownId { get; set; }

        public Character Character { get; set; } = null!;
        public Town Town { get; set; } = null!;
        [Required]
        public int CharacterId { get; set; } 
        public DateTime Modified { get; set; }
        public DateTime Created { get; set; }
       
    }
}
