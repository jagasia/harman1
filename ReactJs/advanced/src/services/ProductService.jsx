import axios from "axios";

class ProductService{
    URL="http://localhost:3000/products";

    fnAllProducts(){
        return axios.get(this.URL);
    }

    fnFindProductById(id){
        return axios.get(this.URL+`/${id}`);
    }

    fnAddProduct(product){
        return axios.post(this.URL,product);
    }

    fnUpdateProduct(product){
        console.log(product);
        
        return axios.put(this.URL+`/${product.id}`,product);
    }

    fnDeleteProduct(id){
        return axios.delete(this.URL+`/${id}`);
    }
}
export default new ProductService();