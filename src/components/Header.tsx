import DrawerButton from './DrawerButton';
import { Link } from 'react-router-dom';
import { DrawerButtonProps } from '../types/props';
import { BiLogIn } from 'react-icons/bi';
import Button from '../components/Button';

type HeaderProps = {
  loggedIn: Boolean
  menuOpen: boolean
  setMenuOpen: (menuOpen: boolean) => void
};

const Header = ({ loggedIn, menuOpen, setMenuOpen }: HeaderProps) => (
  <div className="bg-sky-600 text-white text-4xl py-8 flex justify-between items-center pl-12 text-center">
    {loggedIn && <DrawerButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
      <Link to='/'>
        <p className='text-center font-semibold hover:text-slate-300 cursor-pointer'>CUM APP</p>
      </Link>
    {!loggedIn && (
      <div className="w-1/3">
       <Link to='/signin' className="mr-4">Sign in</Link>
       <Button variant="test">Sign up</Button>
       </div>
    )}
    {loggedIn && <div className="mr-12">Cantin</div>}
    {/* <Link to='/tasks'><BiLogIn className='mr-20 hover:text-slate-300 cursor-pointer'/></Link> */}
  </div>
);

export default Header;
