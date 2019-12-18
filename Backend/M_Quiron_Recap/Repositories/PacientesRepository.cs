using M_Quiron_Recap.Domains;
using M_Quiron_Recap.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace M_Quiron_Recap.Repositories
{
    public class PacientesRepository : IPacientesRepository
    {
        public List<Pacientes> Listar()
        {
            using (recapContext ctx = new recapContext())
            {

                return ctx.Pacientes.Include(x => x.IdMedicoNavigation).ToList();
            }
        }

        public void Cadastrar(Pacientes paciente)
        {
            using (recapContext ctx = new recapContext())
            {
                ctx.Pacientes.Add(paciente);
                ctx.SaveChanges();
            }
        }

    }
}
