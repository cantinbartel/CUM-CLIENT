import { useState, ChangeEvent, useContext, useEffect } from 'react';
import { BiTrip } from 'react-icons/bi';
import { BiUser } from 'react-icons/bi';
import Button from '../components/Button';
import Modal from '../components/Modal';
import { Link, useNavigate, useParams } from 'react-router-dom';
import MessageForm from '../components/MessageForm';
import EditUser from '../components/EditUser';
import UsersPage from './UsersPage';
import { AuthContext } from '../components/AuthContext';


const ProfilePage = () => {
    const auth = useContext(AuthContext);
    const { user, isAuthInitialized } = auth || {}
    const [open, setOpen] = useState<boolean>(false);
    const navigate = useNavigate();
    const [initials, setInitials] = useState('')
    const [refresh, setRefresh] = useState<number>(0);

    console.log('AUTH object', auth)

    useEffect(() => {
        if(isAuthInitialized && !user) {
            navigate('/')
        }
        if (user?.name && user?.surname) {
            setInitials(`${user.name.charAt(0)}${user.surname.charAt(0)}`);
          }
    }, [auth, isAuthInitialized, navigate])

  return (
    
    <div className="w-screen flex flex-col items-center overflow-y-auto">
        {!open && (
        <>
          {user && (
            <>
              <div className="flex flex-col">
                <p className="mt-12 text-4xl">Profile</p>
                <div className="w-20 h-20 bg-white uppercase self-center flex justify-center items-center mt-6 border-2 border-red-500 rounded-full text-3xl">{initials}</div>
              </div>
              <div className="flex align-top justify-between w-9/12 mt-12 ml-60">
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
            </>
          )}
          {!user && (
            <div className="flex flex-col">
              <p className="mt-40 text-4xl">Vous n'êtes pas connecté</p>
            </div>
          )}
        </>
    )}
        
        { open && 
            <Modal
                isOpen={open}
                onClose={() => setOpen(false)}
                title="Modifier profile">
            
                <EditUser close={() => setOpen(false)} refresh={refresh} setRefresh={setRefresh} user={auth?.user || {}} />
                {/* <TaskForm refresh={refresh} setRefresh={setRefresh} close={() => setAddTaskModalOpen(false)} /> */}
            </Modal>}
          {user && (
            <Button className="mt-12 text-xl px-6 py-3 mb-20" onClick={() => setOpen(true)}>
               Modifier
             </Button>
          )}
    </div>
  );
};

export default ProfilePage;


