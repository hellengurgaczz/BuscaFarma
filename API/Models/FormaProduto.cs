namespace API.Models
{
    public class FormaProduto
    {
        public int Id { get; set; }
        public string nomeForma { get; set; }
        public Farmacia IdFarmacia { get; set; }
        public Produto produto { get; set; }
        public int IdProduto { get; set; }

    }
}