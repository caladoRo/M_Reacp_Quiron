using System;
using System.Collections.Generic;

namespace M_Quiron_Recap.Domains
{
    public partial class Pacientes
    {
        public int IdPaciente { get; set; }
        public string Nome { get; set; }
        public DateTime DataNascimento { get; set; }
        public string Cpf { get; set; }
        public int? IdMedico { get; set; }

        public Medicos IdMedicoNavigation { get; set; }
    }
}
