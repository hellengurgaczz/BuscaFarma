using System.Linq;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/produto")]

    public class produtoController : ControllerBase
    {
        private readonly DataContext _context;
        public produtoController(DataContext context) => _context = context;


        //POST: api/produto/cadastrar
        [HttpPost]
        [Route("cadastrar")]

        public IActionResult Create([FromBody] Produto produto)
        {
            _context.Produtos.Add(produto);
            _context.SaveChanges();
            return Created("", produto);
        }

        //GET: api/listar/produto
        [HttpGet]
        [Route("listar")]
        public IActionResult List() => Ok(_context.Produtos.ToList());

        //GET: api/produto/buscarProduto/{id}
        [HttpGet]
        [Route("buscarProduto/{nome}")]
        public IActionResult GetById([FromRoute] string nomeProduto)
        {

            Produto produto = _context.Produtos.Find(nomeProduto);
            if (produto == null)
            {
                return NotFound();
            }
            return Ok(produto);
        }

        //DELETE: api/produto/deletar/
        [HttpDelete]
        [Route("deletar/{nome}")]
        public IActionResult Delete([FromRoute] string nome)
        {
            Produto produto = _context.Produtos.FirstOrDefault
            (
                produto => produto.nomeProduto == nome
            );
            if (produto == null)
            {
                return NotFound();
            }
            _context.Produtos.Remove(produto);
            _context.SaveChanges();
            return Ok(_context.Produtos.ToList());
        }

        //PUT: api/produto/atualizar
        [HttpPut]
        [Route("atualizar")]
        public IActionResult Update([FromBody] Produto produto)
        {
            _context.Produtos.Update(produto);
            _context.SaveChanges();
            return Ok(produto);
        }

    }
}