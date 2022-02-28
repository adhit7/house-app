import {useLocation, useNavigate} from "react-router-dom";
import googleIcon from "../assets/svg/googleIcon.svg"
import {getAuth} from "firebase/auth";
import {GoogleAuthProvider,signInWithPopup} from "firebase/auth"
import {db} from "../firebase.config"
import {doc, getDoc, serverTimestamp, setDoc} from 'firebase/firestore';
import {toast} from "react-toastify";


const OAuth = () => {

    const location = useLocation()
    const navigate = useNavigate()


    const onGoogleClick = async () => {
        try{
            const auth = getAuth()
            const provider = new GoogleAuthProvider()
            const result = await signInWithPopup(auth, provider)
            const user = result.user

            const docRef = doc(db, 'users', user.uid)
            const docSnap = await getDoc(docRef)

            if(!docSnap.exists()){
                await setDoc(doc(db, 'users', user.uid), {
                    name: user.displayName,
                    email: user.email,
                    timestamp: serverTimestamp()
                })
            }
            navigate('/')
        }catch (e) {
            console.log(e)
            toast.error("Could not authorize with Google")

        }
    }

    return (
        <div className='socialLogin'>
            <p>Sign {location.pathname === '/sign-up' ? 'up' : 'in'} with </p>
            <button className='socialIconDiv' onClick={onGoogleClick}>
                <img className='socialIconImg' src={googleIcon} alt='google' />
            </button>
        </div>
    );
};

export default OAuth;
