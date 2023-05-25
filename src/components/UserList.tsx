import { User } from '../types/user';
import { useNavigate } from 'react-router-dom';

type UserListPropsType = {
  users: User[]
};

const UserList = ({ users }: UserListPropsType ) => {
  const navigate = useNavigate();

  return (
    <table className="w-full mt-10">
      <thead className="w-full border border-gray-200">
          <tr className='py-4'>
              <th className="px-2 py-3 text-left">NAME</th>
              <th className="px-2 text-left">EMAIL</th>
          </tr>
      </thead>
      <tbody>
          {users?.map((user: User) => (
              <tr 
                key={user.araCode} 
                onClick={() => navigate(`/users/${user.araCode}`)}
                className="bg-gray-100 hover:bg-gray-50 border border-gray-200 cursor-pointer">
                  <td className="px-2 text-left py-2 w-1/2">{user?.name || `User - ${user.araCode}`}</td>
                  <td className="px-2 text-left text-sky-600">{user.email}</td>
              </tr>
          ))}
      </tbody>
    </table>
  )
};

export default UserList;
