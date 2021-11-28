using System.Linq;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
            produto.Farmacia = _context.Farmacias.Find(produto.FarmaciaId);
            produto.FormaProduto = _context.FormasProduto.Find(produto.FormaProdutoId);
            _context.Produtos.Add(produto);
            _context.SaveChanges();
            return Created("", produto);
        }

        //GET: api/produto/listar
        [HttpGet]
        [Route("listar")]
        public IActionResult List() => Ok(_context.Produtos.Include(produto => produto.Farmacia).Include(produto => produto.FormaProduto).ToList());

        //GET: api/produto/buscarProduto/{nome}
        [HttpGet]
        [Route("buscarProduto/{nomeProduto}")]
        public IActionResult getByName([FromRoute] string NomeProduto)
        {

            Produto produto = _context.Produtos.FirstOrDefault
             (
                produto => produto.NomeProduto == NomeProduto
             );
            if (produto == null)
            {
                return NotFound();
            }
            return Ok(produto);
        }

        //DELETE: api/produto/deletar
        [HttpDelete]
        [Route("deletarProduto/{nomeProduto}")]
        public IActionResult Delete([FromRoute] string NomeProduto)
        {
            Produto produto = _context.Produtos.FirstOrDefault
            (
                produto => produto.NomeProduto == NomeProduto
            );
            if (produto == null)
            {
                return NotFound();
            }
            _context.Produtos.Remove(produto);
            _context.SaveChanges();
            return Ok(_context.Produtos.ToList());
        }

        //PUT: api/produto/atualizarProduto
        [HttpPut]
        [Route("atualizarProduto")]
        public IActionResult Update([FromBody] Produto NomeProduto)
        {
            _context.Produtos.Update(NomeProduto);
            _context.SaveChanges();
            return Ok(NomeProduto);
        }

    }
}