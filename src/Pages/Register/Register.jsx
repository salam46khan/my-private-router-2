
import { useContext } from 'react';
import './Register.css'
import { AuthContext } from '../../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const navigate = useNavigate()
    
const handleSignUp = e =>{
    e.preventDefault()
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    createUser(email, password)
    .then(result =>{
        console.log(result.user);
        e.target.reset()
        navigate('/')
    })
    .catch(error =>{
        console.log(error);
    })
}
    return (
        <div className="hero py-6 bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Registration now!</h1>
                </div>
                <div className="card  w-full  shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;