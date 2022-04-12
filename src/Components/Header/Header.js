import './Header.css';
import logo from '../../Assets/Logo.svg';
import CustomLink from '../CustomLink/CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth)

    const UserSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('Sign-out successful');
            }).catch((error) => {

            });
    }
    return (
        <nav className='header-container'>
            <img src={logo} alt="logo" />
            <div className='navigation-bar'>
                <CustomLink to={'/'}>Home</CustomLink>
                <CustomLink to={'/shop'}>Shop</CustomLink>
                <CustomLink to={'/orders'}>Orders</CustomLink>
                <CustomLink to={'/shipping'}>Shipping</CustomLink>
                <CustomLink to={'/about'}>About</CustomLink>
                {
                    user ?
                        <CustomLink onClick={UserSignOut} to={'/login'}>Sign Out</CustomLink>
                        :
                        <CustomLink to={'/login'}>Login</CustomLink>
                }

            </div>
        </nav>
    );
};

export default Header;