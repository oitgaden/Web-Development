using System.Collections.Generic;

public interface IProductService
{
    List<ProductModel> GetAllProducts();

    Product GetProductById(long productId);

    void AddProduct(Product product);

    void UpdateProduct(Product product);

    void DeleteProduct(long productId);
}