using backend.Models;
using backend.Models.Domain;
using backend.Models.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PagesController : ControllerBase
    {
        private readonly CMSDbContext _context;
        public PagesController(CMSDbContext context)
        {
            _context = context;
        }
        [HttpPost]
        public async Task<IActionResult> PostPages([FromBody] PagesDTO pagesDto)
        {
            if (pagesDto == null)
            {
                return BadRequest(); 
            }

            var pagesDomain = new PagesDomain
            {
                Page_Id = Guid.NewGuid(),
                Title = pagesDto.Title,
                Category = pagesDto.Category,
                SubTitle = pagesDto.SubTitle,
                Content = pagesDto.Content
            };

            try
            {
                await _context.Pages.AddAsync(pagesDomain);
                await _context.SaveChangesAsync();
                return StatusCode(200);
            }
            catch(Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpDelete("{Page_Id}")]
        public async Task<IActionResult> DeletePages([FromRoute] Guid Page_Id)
        {
            var Page = await _context.Pages.FirstOrDefaultAsync(x => x.Page_Id == Page_Id);
            if (Page == null)
            {
                return StatusCode(400, "Not Found");
            }

            try
            {
                _context.Pages.Remove(Page);
                await _context.SaveChangesAsync();
            }
            catch(Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
            return StatusCode(200);
        }

        [HttpGet]
        public async Task<IActionResult> getAllPage()
        {
            var Page = _context.Pages.ToList();

            if(Page == null)
            {
                return StatusCode(404, "No Object Found");
            }

            var pageDto = new List<AllPage>();
            foreach (var page in Page)
            {
                pageDto.Add(new AllPage()
                {
                    Page_Id = page.Page_Id,
                    Title = page.Title,
                    SubTitle = page.SubTitle,
                    Category = page.Category,
                    Content = page.Content,
                }); ;
            }
            return new JsonResult(pageDto);
        }

        [HttpGet("{Page_Id}")]
        public async Task<IActionResult> getById([FromRoute] Guid Page_Id)
        {
            var page = await _context.Pages.FirstOrDefaultAsync(x => x.Page_Id == Page_Id);

            if(page == null)
            {
                return StatusCode(404, "Object Not Found");
            }

            var allPage = new AllPage
            {
                Page_Id = page.Page_Id,
                Title = page.Title,
                SubTitle = page.SubTitle,
                Category = page.Category,
                Content = page.Content
            };
            return new JsonResult(allPage);
        }
        
        [HttpPut("{Page_Id}")]
        public async Task<IActionResult> UpdatePages([FromRoute] Guid Page_Id, [FromBody]PagesDTO pageDTO)
        {
            var Page = await _context.Pages.FindAsync(Page_Id);

            if(Page == null)
            {
                return StatusCode(404, "Object Not Found");
            }

            Page.Title = pageDTO.Title;
            Page.SubTitle = pageDTO.SubTitle;
            Page.Category = pageDTO.Category;
            Page.Content = pageDTO.Content;

            try
            {
                await _context.SaveChangesAsync();
                return StatusCode(500);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message); // Internal server error
            }
        }
    }
}
