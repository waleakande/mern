import { useState, useEffect } from 'react';
import { FaPray, FaUser } from 'react-icons/fa';
import InputField from '../components/ui/Input';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { name, email, password, password2 } = formData

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
            <FaUser />
            Register
          </h1>
          <p>Please create an account</p>
        </section>

        <section className="form">
            <form onSubmit={handleSubmit}>
                <InputField
                    type='text'
                    value={name}
                    placeholder='Enter Your Name'
                    label="Name"
                    id='name'
                    name='name'
                    onChange={handleChange}
                />
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

                <InputField
                    type='password2'
                    value={password2}
                    placeholder='Confirm Password'
                    label="Confirm Password"
                    id='password2'
                    name='password2'
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

export default Register