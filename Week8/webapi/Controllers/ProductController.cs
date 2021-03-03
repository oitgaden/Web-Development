using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;
        private readonly ILogger _logger;

        public ProductController(IProductService productService, ILoggerFactory loggerFactory)
        {
            _productService = productService;
            _logger = loggerFactory.CreateLogger("Controllers.ProductController");
        }

        [HttpGet]
        public ActionResult<List<Product>> GetAllProducts()
        {
            _logger.LogDebug("Getting all products");

            return Ok(_productService.GetAllProducts());
        }

        [HttpGet("{productId}")]
        public ActionResult<Product> GetProduct(int productId)
        {
            var product = _productService.GetProductById(productId);

            if (product != null) {
                return Ok(product);
            } else {
                return NotFound();
            }
        }

        [HttpPost]
        public ActionResult<Product> AddProduct([FromBody] Product product)
        {
            _productService.AddProduct(product);

            return StatusCode(StatusCodes.Status201Created);

            // return CreatedAtAction(nameof(GetProduct), new { id = product.ProductId }, product);
        }

        [HttpPut("{productId}")]
        public ActionResult UpdateProduct(int productId, [FromBody] Product productUpdate)
        {
            productUpdate.ProductId = productId;
            _productService.UpdateProduct(productUpdate);

            return NoContent();
        }

        [HttpDelete("{productId}")]
        public ActionResult DeleteProduct(int productId)
        {
            _productService.DeleteProduct(productId);

            return Ok();
        }
    }
}