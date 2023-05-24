import DrawerButton from './DrawerButton';
import { Link } from 'react-router-dom';
import { DrawerButtonProps } from '../types/props';
import { BiLogIn } from 'react-icons/bi';
import { BiUser } from 'react-icons/bi';
import Button from '../components/Button';
import biUserLogo from '../components/CUM_1.png';

type HeaderProps = {
  loggedIn: boolean;
  menuOpen: boolean;
  setMenuOpen: (menuOpen: boolean) => void;
};

const Header = ({ loggedIn, menuOpen, setMenuOpen }: HeaderProps) => (
  <div className="bg-red-600 text-white text-4xl py-8 flex justify-between items-center pl-12 text-center">
    {loggedIn && <DrawerButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
    <div className="logo-container">
      <Link to="/" className="flex items-center">
        <img src={biUserLogo} alt="User Logo" className="logo" />
      </Link>
    </div>
    {loggedIn && (
      <div className="w-1/3 flex items-center justify-end">
        <Link to="/login" className="mr-2 text-white">Log in</Link>
        <span className="text-white mx-2">|</span>
        <Link to="/sign_up" className="mr-4 text-white">Sign up</Link>
      </div>
    )}
  </div>
);

export default Header;