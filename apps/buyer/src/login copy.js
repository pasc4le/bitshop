import React from 'react';
import LogoDark from './images/logo-dark.png';
import { useForm } from 'react-hook-form';

function Login(props) {
  props.headerFooterHandler();

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  return (
    
   
    <div className='container pt-0 pb-3'>
      <div className='text-center'>
        <img src={LogoDark} alt="Logo" width='12%'/>
      </div>
        <div className='login-wrap'>
          <h5 className='mb-4'>Sign in</h5>
            <form onSubmit={handleSubmit((data) => console.log(data))}>
              <div className='mb-3'>
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  {...register("email", {
                    required: "This field is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format"
                    }
                  })}
                  type="email" className="form-control" placeholder="name@example.com"
                />
                {errors.email && <span role="alert" className='errormsg text-danger'>{errors.email.message}</span>}
              </div>

              <div className='mb-3'>
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  {...register("password", {
                    required: "This field is required",
                    minLength: {
                      value: 6,
                      message: "min length is 6"
                    },
                    pattern: {
                      value: /(?=.*[!@#$%^&*])/i,
                      message: "Password must have a special character"
                    }
                  })}
                  type="password" className="form-control" placeholder="Password"
                />
                {errors.password && <span role="alert" className='errormsg text-danger'>{errors.password.message}</span>}
              </div>

              <button className='btn btn-theme mt-4 w-100' type='submit'>Login</button>
              <p className='mt-2'>By continuing, you agree to <a href="#">terms & conditions</a> of use and <a href="#">privacy policy</a>.</p>

              <p className='text-center mt-3'>New User?</p>
              <a href="/register" className='btn btn-light w-100'>Create New Account</a>
            </form>
        </div>
    </div>
  );
}

export default Login;
