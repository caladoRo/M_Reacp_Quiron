using System;
using System.Collections.Generic;

namespace M_Quiron_Recap.Domains
{
    public partial class Medicos
    {
        public Medicos()
        {
            Pacientes = new HashSet<Pacientes>();
        }

        public int IdMedico { get; set; }
        public string Nome { get; set; }
        public string Crm { get; set; }
        public string CrmUf { get; set; }

        public ICollection<Pacientes> Pacientes { get; set; }
    }
}
