import {useLocation,useNavigate} from "react-router-dom";
import { ReactComponent as PersonOutlineIcon} from "../assets/svg/personIcon.svg";
import { ReactComponent as ExploreIcon} from "../assets/svg/exploreIcon.svg";
import { ReactComponent as OfferIcon} from "../assets/svg/localOfferIcon.svg";

const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const pathName = (route) => {
        if(route === location.pathname){
            return true;
        }
    }

    return (
        <footer className='navbar'>
            <nav className='navbarNav'>
                <ul className='navbarListItems'>
                    <li className='navbarListItem' onClick={() => navigate('/')}>
                        <ExploreIcon fill={pathName('/') ? '#2c2c2c' : '#8f8f8f'} width='36px' height='36px'/>
                        <p className={pathName('/') ? 'navbarListItemNameActive' : 'navbarListItemName'}>Explore</p>
                    </li>
                    <li className='navbarListItem' onClick={() => navigate('/offers')}>
                        <OfferIcon fill={pathName('/offers') ? '#2c2c2c' : '#8f8f8f'} width='36px' height='36px'/>
                        <p className={pathName('/') ? 'navbarListItemNameActive' : 'navbarListItemName'}>Offers</p>
                    </li>
                    <li className='navbarListItem' onClick={() => navigate('/profile')}>
                        <PersonOutlineIcon fill={pathName('/profile') ? '#2c2c2c' : '#8f8f8f'} width='36px' height='36px'/>
                        <p className={pathName('/') ? 'navbarListItemNameActive' : 'navbarListItemName'}>Profile</p>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export default NavBar;
