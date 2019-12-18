using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using M_Quiron_Recap.Domains;
using M_Quiron_Recap.Interfaces;
using M_Quiron_Recap.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace M_Quiron_Recap.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class PacientesController : ControllerBase
    {
        private IPacientesRepository PacientesRepository { get; set; }

        public PacientesController()
        {
            PacientesRepository = new PacientesRepository();
        }

        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(PacientesRepository.Listar());
        }

        [HttpPost]
        public IActionResult Cadastrar(Pacientes paciente)
        {
            try
            {
                PacientesRepository.Cadastrar(paciente);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensagem = "Ih, deu erro." + ex.Message });
            }
        }

    }
}