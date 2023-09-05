import { Link } from 'react-router-dom';

const Header = () =>{
    return(
        <header className='container'>
            <Link to="/">
                <h1>Workout Buddy</h1>
            </Link>
            <nav>
                <div>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">SignUp</Link>
                </div>
            </nav>
        </header>
   );
};

export default Header;