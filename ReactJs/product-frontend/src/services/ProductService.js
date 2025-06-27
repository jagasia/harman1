import axios from "axios";

class ProductService
{
    URL='http://localhost:8080/api/v2/product'

    getToken(){
        var token=localStorage.getItem('token');
        if(!token){
            throw new Error("You have not logged in");
        }else{
            return JSON.parse(token);
        }
    }

    fnAllProducts(){
        var token=this.getToken().jwt;
        return axios.get(this.URL,{headers:{Authorization:`Bearer ${token}`}});        
    }
}
export default new ProductService();