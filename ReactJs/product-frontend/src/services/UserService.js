import axios from "axios";

class UserService{
    URL='http://localhost:8080/api/v1';

    fnSignup(user){
        return axios.post(this.URL+"/signup",user);
    }

    fnLogin(user){
        return axios.post(this.URL+"/login",user);
    }

}
export default new UserService();