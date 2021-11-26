using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/usuario")]
    public class usuarioController : ControllerBase
    {
        private readonly DataContext _context;
        public usuarioController(DataContext context) => _context = context;
        //POST: api/usuario/cadastrar
        [HttpPost]
        [Route("cadastrar")]

        public IActionResult Create([FromBody] Usuario usuario)
        {
            _context.Usuarios.Add(usuario);
            _context.SaveChanges();
            return Created("", usuario);
        }

    }
}