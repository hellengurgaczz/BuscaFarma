namespace API.Models
{
    public class FormaProduto
    {
        public int id { get; set; }
        public string formaProduto { get; set; }
        public int idFarmacia { get; set; }
        public int idProduto { get; set; }

    }
}