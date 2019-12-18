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
    public class MedicosController : ControllerBase
    {
        private IMedicosRepository MedicosRepository { get; set; }


        public MedicosController()
        {
            MedicosRepository = new MedicosRepository();
        }

        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(MedicosRepository.Listar());
        }

        [HttpPost]
        public IActionResult Cadastrar(Medicos medico)
        {
            try
            {
                MedicosRepository.Cadastrar(medico);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensagem = "Ih, deu erro." + ex.Message });
            }
        }

    }
}