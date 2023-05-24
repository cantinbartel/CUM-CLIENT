import React, { useContext } from 'react';
import DrawerButton from './DrawerButton';
import { Link } from 'react-router-dom';
import { DrawerButtonProps } from '../types/props';
import { BiLogIn } from 'react-icons/bi';
import Button from '../components/Button';
import { AuthContext } from '../components/AuthContext'

// type HeaderProps = {
//   loggedIn: Boolean
//   menuOpen: boolean
//   setMenuOpen: (menuOpen: boolean) => void
// };

const Header = () => {
  const auth = useContext(AuthContext);
  console.log('AUTH in HEADER', auth)
  return (
    <div className="bg-sky-600 text-white text-4xl py-8 flex justify-between items-center pl-12 text-center">
      {auth && <DrawerButton />}
        <Link to='/'>
          <p className='text-center font-semibold hover:text-slate-300 cursor-pointer'>CUM APP</p>
        </Link>
      {!auth && (
        <div className="w-1/3">
        <Link to='/signin' className="mr-4">Sign in</Link>
        <Button variant="test">Sign up</Button>
        </div>
      )}
      {auth && <div className="mr-12">{auth.user?.name}</div>}
      {/* <Link to='/tasks'><BiLogIn className='mr-20 hover:text-slate-300 cursor-pointer'/></Link> */}
    </div>
  )
};

export default Header;
