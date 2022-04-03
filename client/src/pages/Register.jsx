import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaUser } from 'react-icons/fa';
import InputField from '../components/ui/Input';
import { register, reset } from '../features/auth/authSlice';
import Spinner from '../components/Spinner'

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { name, email, password, password2 } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()
  
    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    )

    useEffect(() => {
        if (isError) {
          toast.error(message)
        }
    
        if (isSuccess || user) {
          navigate('/')
        }
    
        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (password !== password2) {
            toast.error('Passwords do not match')
        } else {
        const userData = {
            name,
            email,
            password,
        }

        dispatch(register(userData))
        }
    }

    if(isLoading) {
        return <Spinner />
    }

    return (
      <>
        <section className="heading">
          <h1>
            <FaUser />
            Register
          </h1>
          <p>Please create an account</p>
        </section>

        <section className="form">
            <form onSubmit={onSubmit}>
                <InputField
                    type='text'
                    value={name}
                    placeholder='Enter Your Name'
                    label="Name"
                    id='name'
                    name='name'
                    onChange={onChange}
                />
                <InputField
                    type='email'
                    value={email}
                    placeholder='Enter Your Email'
                    label="Email"
                    id='email'
                    name='email'
                    onChange={onChange}
                />
                
                <InputField
                    type='password'
                    value={password}
                    placeholder='Enter password'
                    label="Password"
                    id='password'
                    name='password'
                    onChange={onChange}
                />

                <InputField
                    type='password'
                    value={password2}
                    placeholder='Confirm Password'
                    label="Confirm Password"
                    id='password2'
                    name='password2'
                    onChange={onChange}
                />
                <div className="form-group">
                    <button type="submit" className='btn btn-block' >Submit</button>
                </div>
            </form>
        </section>
      </>
    );
}

export default Register