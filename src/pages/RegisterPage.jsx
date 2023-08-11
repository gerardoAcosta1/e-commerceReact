import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth"
import { useNavigate } from "react-router-dom"
import '../componentes/styles/RegisterPage/RegisterPage.css'

const RegisterPage = () => {

  const { register, reset, handleSubmit } = useForm()

  const {createUser} = useAuth()
  const navigate = useNavigate()
  const submit = data => {
    createUser(data, navigate)
    reset({
      firrstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: ''
    })
  }
  return (
    <form onSubmit={handleSubmit(submit)}>

      <div className="container__register">

        <label htmlFor="firstname">First Name</label>

        <input {...register('firstName')} type="text" id="firstname" />

      </div>

      <div>

        <label htmlFor="lastname">Last Name</label>

        <input {...register('lastName')} type="text" id="lastname" />

      </div>

      <div>

        <label htmlFor="email">Email</label>

        <input {...register('email')}type="email" id="email" />

      </div>

      <div>

        <label htmlFor="password">Password</label>

        <input {...register('password')}type="password" id="password" />

      </div>

      <div>

        <label htmlFor="phone">Phone</label>

        <input {...register('phone')} type="text" id="phone" />

      </div>

      <button>Create User</button>

    </form>
  )
}

export default RegisterPage