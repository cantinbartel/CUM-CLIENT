import { useState, ChangeEvent } from 'react';
import { CgAsterisk } from 'react-icons/cg';
import Button from '../components/Button';


const LoginPage = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    // addUser({name, email})
    setName('');
    setEmail('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label
          className="capitalize text-gray-600 font-semibold flex"
          htmlFor="email">Email<CgAsterisk className="text-xs text-red-500" /></label>
        <input
          className="w-full px-4 py-2 bg-gray-100 font-semibold mb-4  mt-2 rounded outline-none"
          id="name" 
          type="text"
          placeholder="Enter email"
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
        <label
          className="capitalize text-gray-600 font-semibold"
          htmlFor="name">Password</label>
        <input
          className="w-full px-4 py-2 bg-gray-100 font-semibold mb-4  mt-2 rounded outline-none"
          id="name" 
          type="text"
          placeholder="Enter Password"
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
          {/* onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} /> */}
          <Button className="mr-12 text-xl px-6 py-3">
            Se Connecter</Button>
    </form>

    </div>
  )
}

export default LoginPage