import { Link } from 'react-router-dom';
import './Narbar.css';
import Searchbar from './Searchbar';

const Navbar = () => {
  return (
    <div className='navbar'>
      <nav>
        <Link to='/' className='brand'>
          <h1>Cooking</h1>
        </Link>
        <Searchbar />
        <Link to='create'>Create Recipe</Link>
      </nav>
    </div>
  );
};

export default Navbar;
