namespace API.Models
{
    public class Produto
    {
        public int id { get; set; }
        public string NomeProduto { get; set; }
        public string DescricaoProduto { get; set; }
        public double PrecoProduto { get; set; }
        public int DescontoProduto { get; set; }
        public Farmacia Farmacia { get; set; }
        public int FarmaciaId { get; set; }
        public FormaProduto FormaProduto { get; set; }
        public int FormaProdutoId { get; set; }

    }
}