import { useFormik } from "formik";
import * as Yup from 'yup';

export const Signup=()=>{
    const user=new useFormik({
        initialValues:{username:'',password:'',cpassword:'',email:'',phone:''},
        validationSchema:Yup.object({
            username:Yup.string().required('Username cannot be blank').min(6,'Username must be atleast 6 letters'),
            password:Yup.string().required('Password is invalid'),
            cpassword:Yup.string().oneOf([Yup.ref("password"),null],"Passwords does not match"),
            email:Yup.string().email("Email is invalid"),
            phone:Yup.string().required('Phone number is mandatory')
            .matches(/^[0-9]{10}$/,'Phone number must be 10 digits')
        })
    });


    return <div>
        
        <br/>
        Username: <input type="text" id="username" className={`form-control ${user.errors.username && user.touched.username && 'is-invalid'}`} onChange={user.handleChange} onBlur={user.handleBlur} />
        { user.touched.username && <div className="text-danger">{user.errors.username}    </div>}
        Password: <input type="password" id="password" className="form-control" onChange={user.handleChange} />
        Confirm Password: <input type="cpassword" id="cpassword" className="form-control" onChange={user.handleChange} />
        Email: <input type="text" id="email" className="form-control" onChange={user.handleChange} />
        Phone: <input type="number" id="phone" className="form-control" onChange={user.handleChange} />
        <br/>
{JSON.stringify(user)}
    </div>
}