import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

export const Register = () => {
  const initialValues = {
    username: "",
    password: "",
    cpassword: "",
    email: "",
    dateOfBirth: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .min(6, "Username must be at least 6 characters")
      .required("Username is required"),

    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
        "Password must be at least 8 characters, include uppercase, lowercase, number, and special character"
      )
      .required("Password is required"),

    cpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),

    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),

    dateOfBirth: Yup.date()
      .max(new Date(), "Date of birth cannot be in the future")
      .required("Date of birth is required"),

    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Form submitted:", values);
    setSubmitting(false);
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, isValid, touched }) => (
          <Form>
            <label>Username:</label>
            <Field
              type="text"
              name="username"
              className={`form-control `}
            />
            <ErrorMessage name="username" component="div" className="text-danger" />

            <label>Password:</label>
            <Field
              type="password"
              name="password"
              className="form-control"
            />
            <ErrorMessage name="password" component="div" className="text-danger" />

            <label>Confirm Password:</label>
            <Field
              type="password"
              name="cpassword"
              className="form-control"
            />
            <ErrorMessage name="cpassword" component="div" className="text-danger" />

            <label>Email:</label>
            <Field
              type="email"
              name="email"
              className="form-control"
            />
            <ErrorMessage name="email" component="div" className="text-danger" />

            <label>Date of Birth:</label>
            <Field
              type="date"
              name="dateOfBirth"
              max={new Date().toISOString().split("T")[0]}
              className="form-control"
            />
            <ErrorMessage name="dateOfBirth" component="div" className="text-danger" />

            <label>Phone:</label>
            <Field
              type="text"
              name="phone"
              className="form-control"
            />
            <ErrorMessage name="phone" component="div" className="text-danger" />

            <br />
            <button
              type="submit"
              className="btn btn-info"
              disabled={isSubmitting || !isValid || Object.keys(touched).length === 0}
            >
              Register
            </button>

            {JSON.stringify(Formik.values)}
          </Form>
        )}
        
      </Formik>
    </div>
  );
};
