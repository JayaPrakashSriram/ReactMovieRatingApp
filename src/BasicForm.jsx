import{useFormik} from "formik";
import * as yup from "yup"

const formValidationSchema = yup.object({
  email: yup.string().required("Why not fill this email").min(12, "Need a bigger email"),
  password: yup.string().required("Why not fill this password").min(8, "Need a bigger password").max(12, "Too much password"),
});

export function BasicForm() {
  const {handleSubmit, handleChange, handleBlur, values, touched, errors} = useFormik({
    initialValues: {email: "", password: ""},
    validationSchema: formValidationSchema,
    onSubmit:(val) => console.log("Form Values", val)
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <input 
        name = "email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        type="email" 
        placeholder="email" 
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? formik.errors.email : null}
      <br/>
      <input 
        name = "password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        type="password"
        placeholder="password" 
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? formik.errors.password : null}
      <br/>
      <button type="submit">submit</button>
      <br/>
      Values 
      <pre> {JSON.stringify(formik.values)} </pre>
      Error 
      <pre> {JSON.stringify(formik.errors)} </pre>
      Touched
      <pre> {JSON.stringify(formik.touched)} </pre>
    </form>
  );
}