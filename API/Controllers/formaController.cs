using System.Linq;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/produto/forma")]
    public class FormaController : ControllerBase
    {
        private readonly DataContext _context;

        public FormaController(DataContext context) => _context = context;

        //POST: api/produto/forma/cadastrar
        [HttpPost]
        [Route("cadastrar")]
        public IActionResult Create([FromBody] FormaProduto formaProduto)
        {
            _context.FormasProduto.Add(formaProduto);
            _context.SaveChanges();
            return Created("", formaProduto);
        }

        //GET: api/produto/forma/listar
        [HttpGet]
        [Route("listar")]
        public IActionResult List() => Ok(_context.FormasProduto.ToList());

    }
}