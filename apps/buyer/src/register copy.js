import React from 'react';
import LogoDark from './images/logo-dark.png';
import { useForm } from 'react-hook-form';
function Register(props) {
  props.headerFooterHandler(); 

  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  return (
   
    <div className='container pt-3 pb-3'>
      <div className='text-center'>
        <img src={LogoDark} alt="Logo" width='12%'/>
      </div>
        <div className='login-wrap'>
          <h5 className='mb-4'>Create New Account</h5>
            <form onSubmit={handleSubmit((data) => console.log(data))}>
              <div className="mb-3">
                <label for="fullName">Name</label>
                <input
                  id="fullName"
                  {...register("name", {
                    required: "This field is required",
                    pattern: {
                      value: /^[A-Za-z]+$/i,
                      message: "Incorrect name format"
                    }
                  })}
                  type="text" className="form-control" placeholder="Enter your full name"
                />
                {/* <input type="text" className="form-control" id="fullName" placeholder="Enter your full name"/> */}
                {errors.name && <span role="alert" className='errormsg text-danger'>{errors.name.message}</span>}
              </div>
              <div className="mb-3">
                <label for="email">Email</label>
                <input
                  id="email"
                  {...register("email", {
                    required: "This field is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format"
                    }
                  })}
                  type="email" className="form-control" placeholder="Enter your email"
                />
                {errors.email && <span role="alert" className='errormsg text-danger'>{errors.email.message}</span>}
                {/* <input type="email" className="form-control" id="email" placeholder="Enter your email"/> */}
                
              </div>
              <div className="mb-3">
                <label for="phoneNo">Phone Number</label>
                <input
                  id="phoneNo"
                  {...register("phone", {
                    required: "This field is required",
                    maxLength: {
                      value: 12,
                      message: "Phone number should have max 12 digit"
                    },
                    pattern: {
                      value: /\d+/,
                      message: "Invalid phone number"
                    }
                  })}
                  type="text" className="form-control" placeholder="Enter phone number"
                />
                {errors.phone && <span role="alert" className='errormsg text-danger'>{errors.phone.message}</span>}
                {/* <input type="text" className="form-control" id="phoneNo" placeholder="Enter phone number"/>                 */}
              </div>
              <div className="mb-3">
                <label for="createPsw">Create Password</label>
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
            <div className="">
                <label for="confirmPsw">Confirm Password</label>
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
            <button className='btn btn-theme mt-4 w-100' type='submit'>Register</button>
            </form>
        </div>
    </div>
  );
}

export default Register;
