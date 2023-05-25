import { useState, ChangeEvent } from 'react';
import { CgAsterisk } from 'react-icons/cg';
import Button from '../components/Button';


const SigninPage = () => {
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [araCode, setAraCode] = useState<string>('');

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    
    setName('');
    setEmail('');
  };

  return (
    <div>
      <p className="my-16 text-3xl text-center">Connexion</p>
      <div className="flex justify-center">
        <form className="w-9/12" onSubmit={handleSubmit}>
                <label
                    className="capitalize text-gray-600 font-semibold flex"
                    htmlFor="title">prénom<CgAsterisk className="text-xs text-red-500" /></label>
                <input
                    className="w-full px-4 py-2 bg-gray-100 font-semibold mb-4  mt-2 rounded outline-none"
                    id="name" 
                    type="text"
                    value={name}
                    required
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
                <label
                    className="capitalize text-gray-600 font-semibold flex"
                    htmlFor="title">nom<CgAsterisk className="text-xs text-red-500" /></label>
                <input
                    className="w-full px-4 py-2 bg-gray-100 font-semibold mb-4  mt-2 rounded outline-none"
                    id="name" 
                    type="text"
                    value={surname}
                    required
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setSurname(e.target.value)} />
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
                    className="capitalize text-gray-600 font-semibold flex"
                    htmlFor="title">code ara<CgAsterisk className="text-xs text-red-500" /></label>
                <input
                    className="w-full px-4 py-2 bg-gray-100 font-semibold mb-4  mt-2 rounded outline-none"
                    id="name" 
                    type="text"
                    value={araCode}
                    required
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setAraCode(e.target.value)} />
                <Button className="mt-4">Créer</Button>
            </form>
          </div>
        </div>
  )
}

export default SigninPage