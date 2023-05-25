import React, { useContext } from 'react';
import DrawerButton from './DrawerButton';
import { Link } from 'react-router-dom';
import { DrawerButtonProps } from '../types/props';
import { BiLogIn } from 'react-icons/bi';
import Button from '../components/Button';
import { AuthContext } from '../components/AuthContext';
import cumLogo from '../assets/images/cumLogo.png';

// type HeaderProps = {
//   loggedIn: Boolean
//   menuOpen: boolean
//   setMenuOpen: (menuOpen: boolean) => void
// };

const Header = () => {
  const auth = useContext(AuthContext);
  const { user } = auth || {}
  console.log('AUTH in HEADER', auth)
  return (
    <div className="bg-red-600 text-white text-4xl py-2 flex justify-between items-center px-12 text-center">
      <div className="w-1/3">
        {user && <DrawerButton />}
      </div>

        <Link to='/'>
          <img src={cumLogo} alt="User Logo" className="w-1/6 h-auto mx-auto" />
        </Link>
      <div className="w-1/3 text-right">
        {!auth && (
          <div className="w-1/3">
          <Link to='/signin' className="mr-4">Sign in</Link>
          <Button variant="test">Sign up</Button>
          </div>
        )}
        {auth && <div className="mr-12">{auth.user?.name}</div>}
        {!auth?.user && (
          <>
            <div>
              <Link to="/login" className="mr-2 text-white text-sm hover:text-gray-50 hover:cursor-pointer">Log in</Link>
                <span className="text-white mx-2 text-sm">|</span>
              <Link to="/sign-up" className="mr-4 text-white text-sm hover:text-gray-50 hover:cursor-pointer">Sign up</Link>
            </div>
          </>
        )}
      </div>
      {/* <Link to='/tasks'><BiLogIn className='mr-20 hover:text-slate-300 cursor-pointer'/></Link> */}
    </div>
  )
};

export default Header;
