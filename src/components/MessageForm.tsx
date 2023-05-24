import { ChangeEvent, useState } from 'react'
import Button from './Button';
import { CgAsterisk } from 'react-icons/cg';


type MessageFormProps = {
    newTopic?: boolean
    close: () => void
    redirect: () => void
}

const MessageForm = ({ newTopic = false, close, redirect }: MessageFormProps) => {

    const [title, setTitle] = useState<string | undefined>()
    const [message, setMessage] = useState<string | undefined>()

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        // addTask({ title, description, user: usr ? usr._id : userId })
        //   .then(() => setRefresh(refresh+1));
        
        // close();
        redirect();
    };

    return (
        <form onSubmit={handleSubmit}>
            {newTopic && (
                <>
                    <label
                        className="capitalize text-gray-600 font-semibold flex"
                        htmlFor="title">title<CgAsterisk className="text-xs text-red-500" /></label>
                    <input
                        className="w-full px-4 py-2 bg-gray-100 font-semibold mb-4  mt-2 rounded outline-none"
                        id="name" 
                        type="text"
                        placeholder="Enter name"
                        value={title}
                        required
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} />
                        </>
            )}
            {!newTopic && <p className="text-3xl">Titre fictif</p>}
            <label
                className="capitalize text-gray-600 font-semibold"
                htmlFor="description">Message</label>
            <textarea
                className="w-full h-40 px-4 py-2 bg-gray-100 font-semibold mb-4 mt-2 rounded outline-none"
                id="description" 
                placeholder="Enter description"
                value={message}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)} />
            <Button className="">{newTopic ? 'Publier' : 'Envoyer'}</Button>
        </form>
    )
}

export default MessageForm