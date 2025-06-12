import axios from "axios";

class ProductService{
    URL="https://dummyjson.com/products";

    fnRetrieveAllProducts(){
        return axios.get(this.URL);
    }
}
export default new ProductService();