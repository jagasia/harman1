import axios from "axios";

class ProductService{
    // URL="https://dummyjson.com/products";
    URL="http://localhost:3000/products";

    fnRetrieveAllProducts(){
        return axios.get(this.URL);
    }

    fnFindProductById(id){
        return axios.get(this.URL+`/${id}`);
    }

    fnAddProduct(product){
        return axios.post(this.URL, product);
    }

    fnUpdateProduct(product){
        return axios.put(this.URL+`/${product.id}`, product);
    }

    fnDeleteProduct(id){
        return axios.delete(this.URL+`/${id}`);
    }
}
export default new ProductService();