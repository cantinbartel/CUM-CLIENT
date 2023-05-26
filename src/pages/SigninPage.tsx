import { useState, ChangeEvent, useContext } from 'react';
import { CgAsterisk } from 'react-icons/cg';
import Button from '../components/Button';
import { verifyPassword } from '../api/user';
import { AuthContext } from '../components/AuthContext';
import { useNavigate } from 'react-router-dom'


const SigninPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const auth = useContext(AuthContext);

  const navigate = useNavigate()

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault(); 


    const res = await verifyPassword(email, password);

    console.log(res);

    // Stocker le token JWT dans le local storage
    console.log('JSON.stringify(res)', JSON.stringify(res))
    localStorage.setItem('user', JSON.stringify(res));
    auth?.setUser(res.user)
    auth?.setIsAuthInitialized(true)
    setEmail('');
    setPassword('');
    navigate('/')
  };

  return (
    <div>
      <p className="my-16 text-3xl text-center">Connexion</p>
      <div className="flex justify-center">
        <form className="w-9/12" onSubmit={handleSubmit}>
                <label
                    className="capitalize text-gray-600 font-semibold flex"
                    htmlFor="title">email<CgAsterisk className="text-xs text-red-500" /></label>
                <input
                    className="w-full px-4 py-2 bg-gray-100 font-semibold mb-4  mt-2 rounded outline-none"
                    id="name" 
                    type="email"
                    value={email}
                    required
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                <label
                    className="text-gray-600 font-semibold flex"
                    htmlFor="title">Mot de passe<CgAsterisk className="text-xs text-red-500" /></label>
                <input
                    className="w-full px-4 py-2 bg-gray-100 font-semibold mb-4  mt-2 rounded outline-none"
                    id="name" 
                    type="password"
                    value={password}
                    required
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
                <Button className="mt-4">OK</Button>
            </form>
          </div>
        </div>
  )
}

export default SigninPage