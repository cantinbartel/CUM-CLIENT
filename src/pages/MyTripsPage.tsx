import { traceDeprecation } from 'process';
import { useState, ChangeEvent } from 'react';
import { BiTrip } from 'react-icons/bi';
import Button from '../components/Button';
import Modal from '../components/Modal';
import { Link, useNavigate, useParams } from 'react-router-dom';
import MessageForm from '../components/MessageForm';


const MyTripsPage = () => {
    const [open, setOpen] = useState<boolean>(false)
    const navigate = useNavigate()
    return (
        <div className="w-screen flex flex-col items-center">
            {!open && (
                <>
                     <p className="mt-12 text-3xl">My Trips</p>
                    <BiTrip className="text-3xl mt-6" />
                    <div className="flex mt-16 w-1/2 justify-between">
                        <div className="flex flex-col w-1/2 items-center">
                            <p className="text-xl">Départ</p>
                            <div className="flex justify-between w-1/2 mt-8">
                                <div className="flex items-center">
                                    <label
                                        className="capitalize text-gray-600 font-semibold flex mr-3"
                                        htmlFor="title">Centre</label>
                                </div>
                                <div className="flex items-center">
                                    <label
                                        className="capitalize text-gray-600 font-semibold flex mr-3"
                                        htmlFor="title">Ville</label>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-1/2 items-center">
                            <p className="text-xl">Arrivée</p>
                            <div className="flex justify-between w-1/2 mt-8">
                                <div className="flex items-center">
                                    <label
                                        className="capitalize text-gray-600 font-semibold flex mr-3"
                                        htmlFor="title">Centre</label>
                                </div>
                                <div className="flex items-center">
                                    <label
                                        className="capitalize text-gray-600 font-semibold flex mr-3"
                                        htmlFor="title">Ville</label>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-1/2 items-center">
                            <p className="text-xl">Date</p>
                            <div className="flex justify-between w-1/2 mt-8">
                            </div>
                        </div>
                    </div>  
                </>
            )}
            
        </div>
    )
}

export default MyTripsPage