using System.Linq;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/farmacia")]
    public class farmaciaController : ControllerBase
    {
        private readonly DataContext _context;
        public farmaciaController(DataContext context) => _context = context;


        //POST: api/farmacia/criar
        [HttpPost]
        [Route("cadastrar")]
        public IActionResult Create([FromBody] Farmacia farmacia)
        {
            _context.Farmacias.Add(farmacia);
            _context.SaveChanges();
            return Ok(farmacia);
        }

        //GET: api/farmacia/listar
        [HttpGet]
        [Route("listar")]
        public IActionResult List() => Ok(_context.Farmacias.ToList());

        //GET: api/produto/buscarFarmacia/{nome}
        [HttpGet]
        [Route("buscarFarmacia/{nomeFarmacia}")]
        public IActionResult GetByName([FromRoute] string nomeFarmacia)
        {
            Farmacia farmacia = _context.Farmacias.FirstOrDefault(
                farmacia => farmacia.NomeFarmacia == nomeFarmacia
            );
            if (farmacia == null)
            {
                return NotFound();
            }
            return Ok(farmacia);
        }

        //DELETE: api/farmacia/deletar
        [HttpDelete]
        [Route("deletarFarmacia/{nomeFarmacia}")]
        public IActionResult Delete([FromRoute] string NomeFarmacia)
        {
            Farmacia farmacia = _context.Farmacias.FirstOrDefault
            (
                farmacia => farmacia.NomeFarmacia == NomeFarmacia
            );
            if (farmacia == null)
            {
                return NotFound();
            }
            _context.Farmacias.Remove(farmacia);
            _context.SaveChanges();
            return Ok(_context.Produtos.ToList());
        }


        //PUT: api/farmacia/atualizar
        [HttpPut]
        [Route("atualizar")]
        public IActionResult Update([FromBody] Farmacia farmacia)
        {
            _context.Farmacias.Update(farmacia);
            _context.SaveChanges();
            return Ok(farmacia);
        }



    }
}