using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Produto> Produtos { get; set; }
        public DbSet<Farmacia> Farmacias { get; set; }
        public DbSet<FormaProduto> FormasProduto { get; set; }

    }
}