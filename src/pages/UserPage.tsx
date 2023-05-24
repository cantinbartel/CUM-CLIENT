import { traceDeprecation } from 'process';
import { useState, ChangeEvent } from 'react';
import { BiTrip } from 'react-icons/bi';
import { BiUser } from 'react-icons/bi';
import Button from '../components/Button';
import Modal from '../components/Modal';
import { Link, useNavigate, useParams } from 'react-router-dom';
import MessageForm from '../components/MessageForm';
import UsersPage from './UsersPage';

const UserPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <div className="w-screen flex flex-col items-center">
      {!open && (
        <>
          <p className="mt-12 text-5xl">Mon Compte</p>
          <BiUser className="text-5xl mt-6" />
          <div className="flex flex-col w-full md:w-1/2 items-center mt-20">
            <p className="text-3xl">Mes Données</p>
            <div className="flex flex-col mt-16 w-full">
              <div className="flex items-center mb-4">
                <label className="capitalize text-gray-600 font-semibold text-xl mr-3">Nom</label>
              </div>
              <div className="flex items-center mb-4">
                <label className="capitalize text-gray-600 font-semibold text-xl mr-3">Prénom</label>
              </div>
              <div className="flex items-center mb-4">
                <label className="capitalize text-gray-600 font-semibold text-xl mr-3">Email</label>
              </div>
              <div className="flex items-center mb-4">
                <label className="capitalize text-gray-600 font-semibold text-xl mr-3">Numéro ARA</label>
              </div>
              <div className="flex items-center mb-4">
                <label className="capitalize text-gray-600 font-semibold text-xl mr-3">Ville</label>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full md:w-1/2 items-center mt-10">
            <p className="text-3xl">Mon établissement</p>
            <div className="flex flex-col mt-16 w-full">
              <div className="flex items-center mb-4">
                <label className="capitalize text-gray-600 font-semibold text-xl mr-3">Centre</label>
              </div>
              <div className="flex items-center mb-4">
                <label className="capitalize text-gray-600 font-semibold text-xl mr-3">Filière</label>
              </div>
            </div>
          </div>
          <Button className="mt-24" onClick={() => setOpen(true)}>
            Modifier
          </Button>
        </>
      )}
    </div>
  );
};

export default UserPage;



