import { useState, useEffect } from 'react';
import { User } from '../components/User';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';
import Modal from '../components/Modal';
import Button from '../components/Button';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';


const PostPage = () => {
  const [users, setUsers] = useState<[]>([]);
  const [addUserModal, setAddUserModal] = useState(false);

  /* GET USERS WHEN COMPONENT IS MOUNTING */
  // useEffect(() => {
  //   getUsers()
  //     .then(setUsers)
  //     .catch(console.log)
  // }, []);

  return (
    <div className='scrollable-container'>
    <div className="mt-16 w-full flex flex-col items-center relative">
      { !addUserModal && (
        <>
          <div className='w-11/12 md:w-3/4 lg:w-8/12 xl:w-7/12'>
            <p className='text-3xl capitalize text-center md:text-start'>Posts</p>
            <PostList users={users} />
          </div>
        </>
      )}
      { addUserModal && (
        <Modal
        isOpen={addUserModal}
        onClose={() => setAddUserModal(false)}
        title='Add a new user'><PostForm /></Modal>
      )}
    </div>
    </div>
  )
};

export default PostPage;