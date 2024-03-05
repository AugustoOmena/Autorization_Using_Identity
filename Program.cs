using Microsoft.EntityFrameworkCore;
using WebAppTestePS.Services;
using Microsoft.AspNetCore.Identity;
using WebAppTestePS.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
//guardando vareavel de conexão: Data Source=servpreciseichamei.database.windows.net;Initial Catalog=DbPreciseiChamei;Persist Security Info=True;User ID=AugustoOmena;Password=A@cPL1!po;Trust Server Certificate=True
builder.Services.AddRazorPages();

builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    string connectionString = builder.Configuration.GetConnectionString("DefaultConnection")!;
    options.UseSqlServer(connectionString);
});

builder.Services.AddDefaultIdentity<ApplicationUser>(options => options.SignIn.RequireConfirmedAccount = false)
    .AddEntityFrameworkStores<ApplicationDbContext>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapRazorPages();

app.Run();
