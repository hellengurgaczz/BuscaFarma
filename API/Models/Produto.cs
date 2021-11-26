using System;

namespace API.Models
{
    public class Produto
    {
        public int id { get; set; }
        public string nomeProduto { get; set; }
        public double precoProduto { get; set; }
        public string formaProduto { get; set; }
        public int descontoProduto { get; set; }
        public int idFarmacia { get; set; }

    }
}