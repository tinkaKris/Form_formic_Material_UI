import {  Form, Formik } from "formik"
import * as Yup from "yup"
import { Container, Button, Paper} from "@mui/material"
import Textfield from "./Textfield.tsx"

const LoginForm = () => {
  const validationSchema = Yup.object({
    username: Yup.string()
      .required("Login is required")
      .min(3, "Login must be at least 3 characters")
      .max(15, "Login must be not more than 15 characters"),
    email: Yup.string()
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        "Invalid email format"
      )
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(5, "Password must be at least 6 characters")
      .max(20, "Password must be not more than 20 characters"),
  })

  const handleFormSubmit = (values: {
    username: string
    email: string
    password: string
  }) => {
    console.log(values)
  }

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      onSubmit={handleFormSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <Container sx={{ mt: 25, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
        <h1>Login form (Material UI with Formik) </h1>
        <Paper sx={{width: 450, p: 4}} elevation={3}>
          <Textfield id="standard-basic" label="Username" variant="outlined" type="text" name="username" sx={{width: 450}}></Textfield>
          <br />
          <br />
          <Textfield id="standard-basic" label="Email" variant="outlined" type="email" name="email" sx={{width: 450}}></Textfield>
          <br />
          <br />
          <Textfield  id="standard-basic" label="Password" variant="outlined" type="password" name="password" sx={{width: 450}}></Textfield>
          <br />
          <br />
          <Button  size="large" variant="contained" type="submit">Login</Button>
        </Paper>
        </Container>
      </Form>
    </Formik>
  )
}

export default LoginForm