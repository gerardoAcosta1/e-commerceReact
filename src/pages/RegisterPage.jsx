import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth"
import { useNavigate } from "react-router-dom"
import '../componentes/styles/RegisterPage/RegisterPage.css'

const RegisterPage = () => {

  const { register, reset, handleSubmit } = useForm()

  const { createUser } = useAuth()
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

    <div className="container__main">



      <div className="container__register1">
        <form onSubmit={handleSubmit(submit)}>

          <div className="container__register">

            <label className="title__register" htmlFor="firstname">First Name</label>

            <input {...register('firstName')} type="text" id="firstname" />

          </div>

          <div>

            <label className="title__register"  htmlFor="lastname">Last Name</label>

            <input {...register('lastName')} type="text" id="lastname" />

          </div>

          <div>

            <label className="title__register"  htmlFor="email">Email</label>

            <input {...register('email')} type="email" id="email" />

          </div>

          <div>

            <label className="title__register"  htmlFor="password">Password</label>

            <input {...register('password')} type="password" id="password" />

          </div>

          <div>

            <label className="title__register"  htmlFor="phone">Phone</label>

            <input {...register('phone')} type="text" id="phone" />

          </div>

          <button>Create User</button>

        </form>
      </div>
    </div>
  )
}

export default RegisterPage