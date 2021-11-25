namespace API.Models
{
    public class Produto
    {
        public string nomeProduto { get; set; }
        public int idProduto { get; set; }
        public double precoProduto { get; set; }
        public string formaProduto { get; set; }
        public int descontoProduto { get; set; }
        public int idFarmacia { get; set; }

    }
}