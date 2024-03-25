using backend.Models.Domain;
using Microsoft.EntityFrameworkCore;

namespace backend.Models;
public class CMSDbContext : DbContext
{
    public CMSDbContext()
    {
    }

    public CMSDbContext(DbContextOptions<CMSDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<PagesDomain> Carts { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Data Source=CEI3127\\SQL2022;Database=CMS;User Id=monica;Password=Panda@12;TrustServerCertificate=True;Integrated Security=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder) {
        modelBuilder.Entity<PagesDomain>(entity =>
        {
            entity.HasKey(e => e.Page_Id).HasName("PK__Page__3214EC27F57AFA38");

            entity.ToTable("Pages");

            entity.Property(e => e.Page_Id).HasColumnName("Page_Id");
            entity.Property(e => e.Title).HasColumnName("Title");
            entity.Property(e => e.SubTitle).HasColumnName("SubTitle");
            entity.Property(e => e.Category).HasColumnName("Category");
            entity.Property(e => e.Content).HasColumnName("Content");
        });
    }
}
