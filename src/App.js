import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Explore from "./pages/Explore";
import Offers from "./pages/Offers";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import SignUp from "./pages/SignUp";
import NavBar from "./components/NavBar";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import Category from "./pages/Category";

function App() {
  return (
    <>
      <Router>
          <Routes>
              <Route path='/' element={<Explore />}/>
              <Route path='/offers' element={<Offers />}/>
              <Route path='/category/:categoryName' element={<Category />}/>
              <Route path='/profile' element={<PrivateRoute />} >
                  <Route path='/profile' element={<Profile />}/>
              </Route>
              <Route path='/sign-in' element={<SignIn />}/>
              <Route path='/sign-up' element={<SignUp />}/>
              <Route path='/forgot-password' element={<ForgotPassword />}/>
          </Routes>
          <NavBar />
          <ToastContainer />
      </Router>
    </>
  );
}

export default App;
