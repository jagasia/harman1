import { useEffect, useState } from "react";

export const Register = () => {
    const [user, setUser] = useState({ username: '', password: '', cpassword: '', email: '', dateOfBirth: '', phone: '' });
    const [errors, setErrors] = useState({ username: '', password: '', cpassword: '', email: '', dateOfBirth: '', phone: '' });
    const [touched, setTouched] = useState({ username:false, password:false, cpassword:false, email:false, dateOfBirth:false, phone:false});

    function fnValidateUsername(username) {
        if (username.length < 6) {
            setErrors(prev => ({ ...prev, username: 'Username must be at least 6 characters' }));
        } else {
            setErrors(prev => ({ ...prev, username: '' }));
        }
    }

    function fnValidatePassword(password) {
        if (
            password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/)
        ) {
            setErrors(prev => ({ ...prev, password: '' }));
        } else {
            setErrors(prev => ({ ...prev, password: 'Password is invalid' }));
        }
    }

    function fnConfirmPassword(password, cpassword) {
        if (password === cpassword) {
            setErrors(prev => ({ ...prev, cpassword: '' }));
        } else {
            setErrors(prev => ({ ...prev, cpassword: 'Passwords do not match' }));
        }
    }

    function fnValidateEmail(email){
        if(email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
            setErrors(prev=>({...prev, email:''}));
        }else{
            setErrors(prev=>({...prev, email:'Invalid Email address'}));
        }
    }

    // 👇 Watch for password or cpassword changes
    useEffect(() => {
        fnValidatePassword(user.password);
        fnConfirmPassword(user.password, user.cpassword);
    }, [user.password, user.cpassword]);

    useEffect(()=>{
        fnValidateEmail(user.email);
    },[user.email]);

    return (
        <div>
            <form className="container">
                <br />
                Username: <input type="text" className={`form-control ${errors.username && 'is-invalid'}`} onChange={(e) => {
                    setUser({ ...user, username: e.target.value });
                    fnValidateUsername(e.target.value);
                    setTouched({...touched, username:true})
                }} />
                <div className="text-danger">{errors.username}</div>

                Password: <input type="password" className={`form-control ${errors.password && touched.password && 'is-invalid'}`} onChange={(e) => {
                    setUser({ ...user, password: e.target.value });
                    setTouched({...touched, password:true})
                }} />
                {  touched.password && <div className="text-danger">{errors.password}</div> }

                Confirm Password: <input type="password" className={`form-control ${errors.cpassword && touched.cpassword && 'is-invalid'}`} onChange={(e) => {
                    setUser({ ...user, cpassword: e.target.value });
                    setTouched({...touched, cpassword:true})
                }} />
                {   touched.cpassword && <div className="text-danger">{errors.cpassword}</div>}

                Email: <input type="email" className={`form-control ${errors.email && touched.email && 'is-invalid'}`} onChange={(e) => {setUser({ ...user, email: e.target.value }); setTouched({...touched, email:true})}} />
                {   touched.email && <div className="text-danger">{errors.email}</div>}
                Date of Birth: <input type="date" className="form-control" onChange={(e) => setUser({ ...user, dateOfBirth: e.target.value })} />
                Phone number: <input type="number" className="form-control" onChange={(e) => setUser({ ...user, phone: e.target.value })} />
                <br />
                {JSON.stringify(errors)}
            </form>
        </div>
    );
};
