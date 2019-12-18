using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace M_Quiron_Recap.Domains
{
    public partial class recapContext : DbContext
    {
        public recapContext()
        {
        }

        public recapContext(DbContextOptions<recapContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Medicos> Medicos { get; set; }
        public virtual DbSet<Pacientes> Pacientes { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=Localhost; Initial Catalog=m_recap;User Id=sa;Pwd=132");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Medicos>(entity =>
            {
                entity.HasKey(e => e.IdMedico);

                entity.HasIndex(e => e.Crm)
                    .HasName("UQ__Medicos__C1FF83F778EF7808")
                    .IsUnique();

                entity.Property(e => e.Crm)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.CrmUf)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Pacientes>(entity =>
            {
                entity.HasKey(e => e.IdPaciente);

                entity.HasIndex(e => e.Cpf)
                    .HasName("UQ__Paciente__C1FF9309798C0E19")
                    .IsUnique();

                entity.Property(e => e.Cpf)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.DataNascimento).HasColumnType("datetime");

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdMedicoNavigation)
                    .WithMany(p => p.Pacientes)
                    .HasForeignKey(d => d.IdMedico)
                    .HasConstraintName("FK__Pacientes__IdMed__4D94879B");
            });
        }
    }
}
