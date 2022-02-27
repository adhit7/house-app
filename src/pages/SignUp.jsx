import visibilityIcon from "../assets/svg/visibilityIcon.svg";
import {ReactComponent as ArrowRightIcon} from "../assets/svg/keyboardArrowRightIcon.svg";
import {toast} from "react-toastify";
import {getAuth, createUserWithEmailAndPassword,updateProfile} from "firebase/auth";
import { serverTimestamp, doc, setDoc } from 'firebase/firestore';
import { db } from "../firebase.config";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

const SignUp = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:''
    })

    const navigate = useNavigate()

    const {name,email,password} = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id] : e.target.value,
        }))
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try{
            const auth = getAuth()

            const userCredential = await createUserWithEmailAndPassword( auth,email,password )

            const user = userCredential.user

            updateProfile(auth.currentUser, {
                displayName: name
            })

            const formDataCopy = { ...formData }
            delete formDataCopy.password
            formDataCopy.timestamp = serverTimestamp()

            await setDoc(doc(db, 'users', user.uid) , formDataCopy)

            navigate('/')

        }catch (e){
            console.log(e)
            toast.error("Something went wrong with your sign up details")
        }
    }

    return (
        <>
            <div className='pageContainer'>
                <header>
                    <p className='pageHeader'>Welcome Back!</p>
                </header>
                <form onSubmit={onSubmit}>
                    <input type='name' className='nameInput' placeholder='Name' id='name' value={name} onChange={onChange} />
                    <input type='email' className='emailInput' placeholder='Email' id='email' value={email} onChange={onChange} />
                    <div>
                        <input type={showPassword ? 'text' : 'password'} className='passwordInput' placeholder='Password' id='password' value={password} onChange={onChange} />

                        <img src={visibilityIcon} alt='show password' className='showPassword' onClick={(prevState) => setShowPassword(!prevState)} />

                    </div>

                    <Link to='/forgot-password' className='forgotPasswordLink'>Forgot Password</Link>

                    <div className='signUpBar'>
                        <p className='signUpText'>Sign Up</p>
                        <button className='signUpButton'>
                            <ArrowRightIcon fill='#ffffff' width='34px' height='34px'/>
                        </button>
                    </div>

                </form>

                <Link to='/sign-in' className='registerLink'>Sign In Instead</Link>
            </div>
        </>
    );
};

export default SignUp;
