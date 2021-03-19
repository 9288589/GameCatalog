using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
   // Game Catalog Class Entity
    public class Game
    {
        [Key]
        public int ID { get; set; }
        public string gameName { get; set; }
        public string gameDescription { get; set; }
        public string gamePhotoUrl { get; set; }
        public string price { get; set; }
        
        
    }
}
