import { useState, useEffect } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import InputField from '../components/ui/Input';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefualt();
    }

    return (
      <>
        <section className="heading">
          <h1>
            <FaSignInAlt />
            Login
          </h1>
          <p>Login and start setting goals</p>
        </section>

        <section className="form">
            <form onSubmit={handleSubmit}>
                <InputField
                    type='email'
                    value={email}
                    placeholder='Enter Your Email'
                    label="Email"
                    id='email'
                    name='email'
                    onChange={handleChange}
                />
                
                <InputField
                    type='password'
                    value={password}
                    placeholder='Enter password'
                    label="Password"
                    id='password'
                    name='password'
                    onChange={handleChange}
                />
            </form>
            <div className="form-group">
                <button type="submit" className='btn btn-block'>Submit</button>
            </div>
        </section>
      </>
    );
}

export default Login