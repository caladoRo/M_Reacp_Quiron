using M_Quiron_Recap.Domains;
using M_Quiron_Recap.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace M_Quiron_Recap.Repositories
{
    public class MedicosRepository : IMedicosRepository
    {
        public List<Medicos> Listar()
        {
            using (recapContext ctx = new recapContext())
            {
                return ctx.Medicos.ToList();
            }
        }

        public void Cadastrar(Medicos medico)
        {
            using (recapContext ctx = new recapContext())
            {
                ctx.Medicos.Add(medico);
                ctx.SaveChanges();
            }
        }

    }
}
