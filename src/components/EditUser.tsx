import { useState, useEffect, useContext, ChangeEvent } from 'react';
import Button from './Button';
import { CgAsterisk } from 'react-icons/cg';
// import { addTask } from '../services/task';
import { User } from '../types/user';
// import { getUsers } from '../services/user';
import { AuthContext } from './AuthContext';


type EditUserProps = {
    refresh: number
    setRefresh: (refresh: number) => void
    close: () => void
    user: User | undefined
};

const EditUser = ({ refresh, setRefresh, close }: EditUserProps) => {
    
    const auth = useContext(AuthContext);
    const { user } = auth || {}
    const [userInfo, setUserInfo] = useState<User | undefined>(user);

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        auth?.setUser(userInfo)
        // if(!task) return;
        // updateTask({ title, description, user: task?.user, completed }, task._id)
        // .then(() => setRefresh(refresh+1));
        close();
    };

  
  return (
    <form onSubmit={handleSubmit}>
      <label
        className="capitalize text-gray-600 font-semibold flex"
        htmlFor="title">prénom<CgAsterisk className="text-xs text-red-500" /></label>
      <input
        className="w-full px-4 py-2 bg-gray-100 font-semibold mb-4  mt-2 rounded outline-none"
        id="name" 
        type="text"
        value={userInfo?.name}
        required
        onChange={(e: ChangeEvent<HTMLInputElement>) => setUserInfo({...userInfo, name: e.target.value})} />
      <label
        className="capitalize text-gray-600 font-semibold flex"
        htmlFor="title">nom<CgAsterisk className="text-xs text-red-500" /></label>
      <input
        className="w-full px-4 py-2 bg-gray-100 font-semibold mb-4  mt-2 rounded outline-none"
        id="name" 
        type="text"
        value={userInfo?.surname}
        required
        onChange={(e: ChangeEvent<HTMLInputElement>) => setUserInfo({...userInfo, surname: e.target.value})} />
      <label
        className="capitalize text-gray-600 font-semibold flex"
        htmlFor="title">email<CgAsterisk className="text-xs text-red-500" /></label>
      <input
        className="w-full px-4 py-2 bg-gray-100 font-semibold mb-4  mt-2 rounded outline-none"
        id="name" 
        type="email"
        value={userInfo?.email}
        required
        onChange={(e: ChangeEvent<HTMLInputElement>) => setUserInfo({...userInfo, email: e.target.value})} />
      <Button className="mt-4">Modifier</Button>
    </form>
  )
};

export default EditUser;
