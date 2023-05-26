import { useState, ChangeEvent } from 'react';
import { CgAsterisk } from 'react-icons/cg';
import Button from '../components/Button';
import { verifyPassword } from '../api/user';


const SigninPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault(); 

    const res = verifyPassword(email, password);

    console.log(res);
    
    setEmail('');
    setPassword('');
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