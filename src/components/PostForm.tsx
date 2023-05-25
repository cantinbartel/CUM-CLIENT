import { useState, ChangeEvent } from 'react';
import Button from './Button';
import { CgAsterisk } from 'react-icons/cg';


const PostForm = () => {
  const [name, setName] = useState<string>('');
  const [trajet, setEmail] = useState<string>('');

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    setName('');
    setEmail('');
  };

  return (
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
        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
      <label
        className="capitalize text-gray-600 font-semibold flex"
        htmlFor="email">trajet<CgAsterisk className="text-xs text-red-500" /></label>
      <input
        className="w-full px-4 py-2 bg-gray-100 font-semibold mb-4 mt-2 rounded outline-none"
        id="email" 
        type="email"
        placeholder="Enter email"
        value={trajet}
        required
        onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
        <label
        className="capitalize text-gray-600 font-semibold flex"
        htmlFor="email">code CNAM<CgAsterisk className="text-xs text-red-500" /></label>
      <input
        className="w-full px-4 py-2 bg-gray-100 font-semibold mb-4 mt-2 rounded outline-none"
        id="codeCNAM" 
        type="codeCNAM"
        placeholder="Enter code CNAM"
        value={trajet}
        required
        onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
      <Button className="mt-4">Create</Button>
    </form>
  )
};

export default PostForm;
