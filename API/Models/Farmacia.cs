using System;

namespace API.Models
{
    public class Farmacia
    {
        public Farmacia() => criadoEm = DateTime.Now;
        public int id { get; set; }
        public string nomeFarmacia { get; set; }
        public string enderecoFarmacia { get; set; }
        public int telefoneFarmacia { get; set; }
        public DateTime criadoEm { get; set; }
    }
}