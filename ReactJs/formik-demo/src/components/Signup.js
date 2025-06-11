import { useFormik } from "formik";
import * as Yup from 'yup';

export const Signup=()=>{
    const user=new useFormik({
        initialValues:{username:'',password:'',cpassword:'',email:'',phone:''},
        validationSchema:Yup.object({
            username:Yup.string().required('Username cannot be blank').min(6,'Username must be atleast 6 letters'),
            password:Yup.string().required('Password is invalid').min(8, "Password must be of atleaset 8 chars.")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*])(?=.*[^\s]).{8,}$/,"Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and no spaces"
        ),
            cpassword:Yup.string().oneOf([Yup.ref("password"),null],"Passwords does not match"),
            email:Yup.string().required('Email is mandatory').email("Email is invalid"),
            phone:Yup.string().required('Phone number is mandatory')
            .matches(/^[0-9]{10}$/,'Phone number must be 10 digits')
        })
    });


    return <div>
        
        <br/>
        Username: <input type="text" id="username" className={`form-control ${user.errors.username && user.touched.username && 'is-invalid'}`} onChange={user.handleChange} onBlur={user.handleBlur} />
        { user.touched.username && <div className="text-danger">{user.errors.username}    </div>}
        Password: <input type="password" id="password" className={`form-control ${user.errors.password && user.touched.password && 'is-invalid'}`} onChange={user.handleChange} onBlur={user.handleBlur} />
        {   user.touched.password && <div className="text-danger">{user.errors.password}</div>}
        Confirm Password: <input type="cpassword" id="cpassword" className={`form-control ${user.errors.cpassword && user.touched.cpassword && 'is-invalid'}`} onChange={user.handleChange} onBlur={user.handleBlur} />
        { user.touched.cpassword && <div className="text-danger">{user.errors.cpassword}</div> }
        Email: <input type="text" id="email" className={`form-control ${user.errors.email && user.touched.email && 'is-invalid'}`} onChange={user.handleChange} onBlur={user.handleBlur} />
        { user.touched.email && <div className="text-danger">{user.errors.email}</div>}
        Phone: <input type="number" id="phone" className={`form-control ${user.errors.phone && user.touched.phone && 'is-invalid'}`} onChange={user.handleChange} onBlur={user.handleBlur} />
        {   user.touched.phone && <div className="text-danger">{user.errors.phone}</div> }
        <br/>
{JSON.stringify(user)}
    </div>
}