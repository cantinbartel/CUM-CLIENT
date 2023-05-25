import { useState, ChangeEvent, useContext, useEffect } from 'react';
import { BiTrip } from 'react-icons/bi';
import { BiUser } from 'react-icons/bi';
import Button from '../components/Button';
import Modal from '../components/Modal';
import { Link, useNavigate, useParams } from 'react-router-dom';
import MessageForm from '../components/MessageForm';
import UsersPage from './UsersPage';
import { AuthContext } from '../components/AuthContext';

const ProfilePage = () => {
    const auth = useContext(AuthContext);
    const { user } = auth || {}
    const [open, setOpen] = useState<boolean>(false);
    const navigate = useNavigate();

    // useEffect(() => {
    //     if(auth)
    // }, [auth])

  return (
    <div className="w-screen flex flex-col items-center overflow-y-auto">
        <div className="flex flex-col">
            <p className="mt-12 text-4xl">Profile</p>
            <div className="w-20 h-12 bg-white"></div>
            <BiUser className="text-4xl mt-6 self-center" />
        </div>
        <div className="flex align-top justify-between w-9/12 mt-20 ml-60">
            <div className="flex flex-col w-full md:w-1/2 items-start">
                <p className="text-3xl text-center">Mes Données</p>
                <div className="flex flex-col mt-8 w-full">
                <div className="flex items-center mb-4">
                    <p className="capitalize text-gray-600 font-semibold text-xl mr-3">Nom</p>
                    <p className="capitalize">{user?.surname}</p>
                </div>
                <div className="flex items-center mb-4">
                    <p className="capitalize text-gray-600 font-semibold text-xl mr-3">Prénom</p>
                    <p className="capitalize">{user?.name}</p>
                </div>
                <div className="flex items-center mb-4">
                    <p className="capitalize text-gray-600 font-semibold text-xl mr-3">Email</p>
                    <p className="capitalize">{user?.email}</p>
                </div>
                <div className="flex items-center mb-4">
                    <p className="capitalize text-gray-600 font-semibold text-xl mr-3">Numéro ARA</p>
                    <p className="capitalize">{user?.araCode}</p>
                </div>
            </div>
        </div>
            <div className="flex flex-col w-full md:w-1/2 items-start">
            <p className="text-3xl">Mon établissement</p>
            <div className="flex flex-col mt-8 w-full">
              <div className="flex items-center mb-4">
                <p className="capitalize text-gray-600 font-semibold text-xl mr-3">Centre</p>
                <p className="capitalize">{user?.center}</p>
              </div>
              <div className="flex items-center mb-4">
                <p className="capitalize text-gray-600 font-semibold text-xl mr-3">Filière</p>
                <p className="capitalize">{user?.field}</p>
              </div>
            </div>
          </div>
        </div>
    
          
          <Button className="mt-12 text-xl px-6 py-3 mb-20" onClick={() => setOpen(true)}>
            Modifier
          </Button>
    </div>
  );
};

export default ProfilePage;


