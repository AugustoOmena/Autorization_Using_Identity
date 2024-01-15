using Microsoft.AspNetCore.Mvc;

namespace WebAppTestePS.Controllers
{
    public class UserController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
