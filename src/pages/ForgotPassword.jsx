import {Link} from "react-router-dom";
import {ReactComponent as ArrowRightIcon} from "../assets/svg/keyboardArrowRightIcon.svg";
import {getAuth,sendPasswordResetEmail} from "firebase/auth";
import {useState} from "react";
import {toast} from "react-toastify";

const ForgotPassword = () => {
    const [email, setEmail] = useState('')

    const onChange = (e) => setEmail(e.target.value)

    const onSubmit = async (e) => {
        e.preventDefault()
        try{
            const auth = getAuth()
            await sendPasswordResetEmail(auth, email)
            toast.success('Email was sent')
        }catch (e) {
            toast.error('Could not sent reset email')
        }
    }
    return (
        <div className='pageContainer'>
            <header>
                <p className='pageHeader'>Forgot Password</p>
            </header>

            <main>
                <form onSubmit={onSubmit}>
                    <input type='email' id='email' className='emailInput' placeholder='Email' value={email} onChange={onChange}/>
                    <Link className='forgotPasswordLink' to={'/sign-in'}>Sign In</Link>
                    <div className='signInBar'>
                        <div className='signInText'>Send Reset Link</div>
                            <button className='signInButton'>
                                <ArrowRightIcon fill='#ffffff' width='34px' height='34px'/>
                            </button>
                    </div>
                </form>
            </main>
        </div>
    );
};

export default ForgotPassword;
