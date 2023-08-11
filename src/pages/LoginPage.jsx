import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth"
import '../componentes/styles/LoginPage/LoginPage.css'
import { useNavigate } from "react-router-dom"
const LoginPage = () => {

  const { register, reset, handleSubmit } = useForm()

  const { loginUser } = useAuth()
  const navigate = useNavigate()
  const submit = data => {
    loginUser(data, navigate)
    reset({
      email: '',
      password: ''
    })
  }
  return (
    <form onSubmit={(handleSubmit(submit))}>

      <div className="container__login">

        <label htmlFor="email">Email</label>

        <input {...register('email')} type="email" id="email" />



        <div>

          <label htmlFor="password">Password</label>

          <input {...register('password')} type="password" id="password" />

        </div>
     

      <button>Login</button>
      </div>
    </form>
  )
}

export default LoginPage