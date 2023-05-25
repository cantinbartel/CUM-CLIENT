import { useState, ChangeEvent } from 'react';
import { CgAsterisk } from 'react-icons/cg';

const SignupPage = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [numeroARA, setNumeroARA] = useState<string>('');


  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    // addUser({name, email})
    setName('');
    setEmail('');
    setPassword('');
    setNumeroARA('');

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label
          className="capitalize text-gray-600 font-semibold"
          htmlFor="name">name</label>
        <input
          className="w-full px-4 py-2 bg-gray-100 font-semibold mb-4  mt-2 rounded outline-none"
          id="name" 
          type="text"
          placeholder="Enter name"
          value={name}
          required
          onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
        <label
          className="capitalize text-gray-600 font-semibold flex"
          htmlFor="email">Email<CgAsterisk className="text-xs text-red-500" /></label>
        <input
          className="w-full px-4 py-2 bg-gray-100 font-semibold mb-4  mt-2 rounded outline-none"
          id="email" 
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
          <label
          className="capitalize text-gray-600 font-semibold"
          htmlFor="password">Password</label>
        <input
          className="w-full px-4 py-2 bg-gray-100 font-semibold mb-4  mt-2 rounded outline-none"
          id="password" 
          type="text"
          placeholder="Enter Password"
          value={password}
          required
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
        <label
          className="capitalize text-gray-600 font-semibold flex"
          htmlFor="numeroARA">Code CNAM<CgAsterisk className="text-xs text-red-500" /></label>
        <input
          className="w-full px-4 py-2 bg-gray-100 font-semibold mb-4 mt-2 rounded outline-none"
          id="numeroARA" 
          type="text"
          placeholder="Enter code CNAM"
          value={numeroARA}
          required
          onChange={(e: ChangeEvent<HTMLInputElement>) => setNumeroARA(e.target.value)}/>
          <button className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            Create</button>
    </form>

    </div>
  )
}

export default SignupPage