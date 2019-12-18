using M_Quiron_Recap.Domains;
using M_Quiron_Recap.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace M_Quiron_Recap.Interfaces
{
    interface IMedicosRepository 
    {
        List<Medicos> Listar();

        void Cadastrar(Medicos medico);
    }
}
