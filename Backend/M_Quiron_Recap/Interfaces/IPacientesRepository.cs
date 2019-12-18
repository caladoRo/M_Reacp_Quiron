using M_Quiron_Recap.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace M_Quiron_Recap.Interfaces
{
    interface IPacientesRepository
    {
        List<Pacientes> Listar();

        void Cadastrar(Pacientes paciente);
    }
}
