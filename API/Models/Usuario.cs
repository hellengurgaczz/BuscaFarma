using System.Collections.Generic;

namespace API.Models
{
    public class Usuario
    {
        public int Id { get; set; }
        public string NomeUsuario { get; set; }
        public string EmailUsuario { get; set; }
        public string FavoritosUsuario { get; set; }

    }
}