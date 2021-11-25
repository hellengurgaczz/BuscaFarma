using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/farmacia")]
    public class farmaciaController : ControllerBase
    {
        //POST: api/farmacia/criar
        [HttpPost]
        [Route("cadastrar")]
        /*public IActionResult Criar([FromBody] Farmacia farmacia)
        {
            _context.Farmacias.Add(farmacia);
            _context.SaveChanges();
            return Created("", farmacia);
        }*/

    }
}