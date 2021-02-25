using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Database;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly ECommerceContext _dbContext;

        public ProductController(ECommerceContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public ActionResult<List<Product>> GetAllProducts()
        {
            var result = _dbContext.Product.ToList();
            return Ok(result);
        }

        [HttpGet("{productId}")]
        public ActionResult<Product> GetProduct(int productId)
        {
            var product = _dbContext.Product
                .SingleOrDefault(p => p.ProductId == productId);

            if (product != null) {
                return product;
            } else {
                return NotFound();
            }
        }

        [HttpPost]
        public ActionResult<Product> AddProduct(Product product)
        {
            _dbContext.Product.Add(product);
            _dbContext.SaveChanges();

            // return CreatedAtAction(nameof(GetProduct), new { id = product.ProductId }, product);

            return StatusCode(Microsoft.AspNetCore.Http.StatusCodes.Status201Created);
        }

        [HttpDelete("{productId}")]
        public ActionResult DeleteProduct(int productId)
        {
            var product = new Product { ProductId = productId };

            _dbContext.Product.Attach(product);
            _dbContext.Product.Remove(product);
            _dbContext.SaveChanges();

            return Ok();
        }

        [HttpPut("{productId}")]
        public ActionResult UpdateProduct(int productId, Product productUpdate)
        {
            var product = _dbContext.Product
                .SingleOrDefault(p => p.ProductId == productId);

            if (product != null)
            {
                product.Name = productUpdate.Name;
                product.Price = productUpdate.Price;
                product.Count = productUpdate.Count;

                _dbContext.Update(product);

                _dbContext.SaveChanges();
            }

            return NoContent();
        }
    }
}