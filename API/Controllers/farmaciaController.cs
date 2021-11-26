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
            return Created("", farmacia);
        }

    }
}