import { useEffect, useState } from "react";

export const Register = () => {
    const [user, setUser] = useState({ username: '', password: '', cpassword: '', email: '', dateOfBirth: '', phone: '' });
    const [errors, setErrors] = useState({ username: '', password: '', cpassword: '', email: '', dateOfBirth: '', phone: '' });
    const [touched, setTouched] = useState({ username: false, password: false, cpassword: false, email: false, dateOfBirth: false, phone: false });
    const [valid, setValid] = useState(false);

    function fnValidateUsername(username) {
        if (touched.username && username.length < 6) {
            setErrors(prev => ({ ...prev, username: 'Username must be at least 6 characters' }));
        } else {
            setErrors(prev => ({ ...prev, username: '' }));
        }
    }

    function fnValidatePassword(password) {
        if (password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/)) {
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

    function fnValidateEmail(email) {
        if (email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
            setErrors(prev => ({ ...prev, email: '' }));
        } else {
            setErrors(prev => ({ ...prev, email: 'Invalid Email address' }));
        }
    }

    function fnValidatePhone(phone) {
        if (phone.match(/^[0-9]{10}$/)) {
            setErrors(prev => ({ ...prev, phone: '' }));
        } else {
            setErrors(prev => ({ ...prev, phone: 'Phone number must be exactly 10 digits' }));
        }
    }

    useEffect(() => {
        fnValidatePassword(user.password);
        fnConfirmPassword(user.password, user.cpassword);
    }, [user.password, user.cpassword]);

    useEffect(() => {
        fnValidateUsername(user.username);
    }, [user.username]);

    useEffect(() => {
        fnValidateEmail(user.email);
    }, [user.email]);

    useEffect(() => {
        fnValidatePhone(user.phone);
    }, [user.phone]);

    useEffect(() => {
        const allTouched = Object.values(touched).every(val => val);
        const noErrors = Object.values(errors).every(msg => msg === '');
        setValid(allTouched && noErrors);
    }, [errors, touched]);

    return (
        <div>
            <form className="container">
                <br />
                Username: <input type="text" className={`form-control ${errors.username && 'is-invalid'}`} onChange={(e) => {
                    setUser({ ...user, username: e.target.value });
                    setTouched({ ...touched, username: true });
                }} />
                <div className="text-danger">{errors.username}</div>

                Password: <input type="password" className={`form-control ${errors.password && touched.password && 'is-invalid'}`} onChange={(e) => {
                    setUser({ ...user, password: e.target.value });
                    setTouched({ ...touched, password: true });
                }} />
                {touched.password && <div className="text-danger">{errors.password}</div>}

                Confirm Password: <input type="password" className={`form-control ${errors.cpassword && touched.cpassword && 'is-invalid'}`} onChange={(e) => {
                    setUser({ ...user, cpassword: e.target.value });
                    setTouched({ ...touched, cpassword: true });
                }} />
                {touched.cpassword && <div className="text-danger">{errors.cpassword}</div>}

                Email: <input type="email" className={`form-control ${errors.email && touched.email && 'is-invalid'}`} onChange={(e) => {
                    setUser({ ...user, email: e.target.value });
                    setTouched({ ...touched, email: true });
                }} />
                {touched.email && <div className="text-danger">{errors.email}</div>}

                Date of Birth: <input type="date" max={new Date().toISOString().split("T")[0]} className="form-control" onChange={(e) => {
                    setUser({ ...user, dateOfBirth: e.target.value });
                    setTouched({ ...touched, dateOfBirth: true });
                }} />

                Phone number: <input type="number" className={`form-control ${errors.phone && touched.phone && 'is-invalid'}`} onChange={(e) => {
                    setUser({ ...user, phone: e.target.value });
                    setTouched({ ...touched, phone: true });
                }} />
                {touched.phone && <div className="text-danger">{errors.phone}</div>}

                <br />
                <input type="button" value="Register" className="btn btn-info" disabled={!valid} />
            </form>

            <br />
            <strong>Errors:</strong> {JSON.stringify(errors)}
            <br />
            <strong>Touched:</strong> {JSON.stringify(touched)}
            <br />
            <strong>Valid:</strong> {JSON.stringify(valid)}
        </div>
    );
};
