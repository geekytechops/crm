import 'bootstrap/dist/css/bootstrap.min.css';
const Login = () =>{
    return(
        <div className='container'>
        <div className="login-form row justify-content-center">
            <div className='col-xl-4 col-lg-6 col-md-8'>
                <div className='card'>
                    <div className='card-body'>
                    <form className='form'>
                        <div className='col-md-12 mb-2'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" className="form-control" id="email" />
                        </div>
                        <div className='col-md-12 mb-2'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" className="form-control" id="password" />
                        </div>
                        <div className='col-md-12 mb-2 text-center'>
                        <input type="button" name="login" className="w-100 btn btn-success" id="login" value="SUBMIT" />
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Login;