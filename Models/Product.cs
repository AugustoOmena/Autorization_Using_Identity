using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace WebAppTestePS.Models
{
    public class Product
    {
        public int Id { get; set; }
        [MaxLength(100)]
        public string Name { get; set; } = "";
        [MaxLength(100)]
        public string Brand { get; set; } = "";
        [MaxLength(100)]
        public string Category { get; set; } = "";
        [Precision(16, 2)]
        public decimal Price { get; set; }
        public string Description { get; set; } = "";
        [MaxLength(100)]
        public string Image1FileName { get; set; } = "";
        [MaxLength(100)]
        public string Image2FileName { get; set; } = "";
        [MaxLength(100)]
        public string Image3FileName { get; set; } = "";
        [MaxLength(100)]
        public string Image4FileName { get; set; } = "";
        [MaxLength(100)]
        public string Image5FileName { get; set; } = "";
        public DateTime CreateAt { get; set; }
    }
}
