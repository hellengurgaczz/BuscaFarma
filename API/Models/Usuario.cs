using System;

namespace API.Models
{
    public class Usuario
    {
        public Usuario() => criadoEm = DateTime.Now;
        public int id { get; set; }
        public string nomeUsuario { get; set; }
        public string emailUsuario { get; set; }
        public string favoritosUsuario { get; set; }
        public DateTime criadoEm { get; set; }
    }
}