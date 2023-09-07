import { Link } from 'react-router-dom';
import useLogout from '../Hooks/useLogout';
import { useAuthContext } from '../Hooks/useAuthContext';

const Header = () => {
    const logout = useLogout();
    const { user }  = useAuthContext();


    const logoutHandler = () => {
        logout();
    }

    return (
        <header className='container'>
            <Link to="/">
                <h1>Workout Buddy</h1>
            </Link>
            <nav>
                {user && (
                    <div>
                        <span>{user.email}</span>
                        <button onClick={logoutHandler}>Log Out</button>
                    </div>
                )}
                {!user && (
                    <div>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">SignUp</Link>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;