import { traceDeprecation } from 'process';
import { useState, ChangeEvent } from 'react';
import { BiTrip } from 'react-icons/bi';
import Button from '../components/Button';
import Modal from '../components/Modal';
import { Link, useNavigate, useParams } from 'react-router-dom';
import MessageForm from '../components/MessageForm';

const centers = [
    'Saint-Etienne',
    'Lyon',
    'Montpellier'
];

const cities = [
    'Paris',
    'Lyon',
    'Marseille',
    'Saint-Etienne'
]


const NewPostPage = () => {
    const [departureOption, setDepartureOption] = useState("center")
    const [arrivalOption, setArrivalOption] = useState("center")
    const [departure, setDeparture] = useState(departureOption === 'center' ? centers[0] : cities[0])
    const [arrival, setArrival] = useState(arrivalOption === 'center' ? centers[centers.length - 1] : cities[cities.length - 1])
    const [open, setOpen] = useState<boolean>(false)
    const navigate = useNavigate()
    const handleDepartureOption = (e: ChangeEvent<HTMLInputElement>) => {
        setDepartureOption(e.target.value)
    }
    const handleArrivalOption = (e: ChangeEvent<HTMLInputElement>) => {
        setArrivalOption(e.target.value)
    }
    const handleDeparture = (e: ChangeEvent<HTMLSelectElement>) => {
        setDeparture(e.target.value)
    }
    const handleArrival = (e: ChangeEvent<HTMLSelectElement>) => {
        setArrival(e.target.value)
    }
    return (
        <div className="w-screen flex flex-col items-center">
            {!open && (
                <>
                     <p className="mt-12 text-3xl">Nouvau voyage</p>
                    <BiTrip className="text-3xl mt-6" />
                    <div className="flex mt-16 w-1/2 justify-between">
                        <div className="flex flex-col w-1/2 items-center">
                            <p className="text-xl">Départ</p>
                            <div className="flex justify-between w-1/2 mt-8">
                                <div className="flex items-center">
                                    <label
                                        className="capitalize text-gray-600 font-semibold flex mr-3"
                                        htmlFor="title">Centre</label>
                                    <input
                                        type="radio"
                                        name="departure"
                                        value="center"
                                        id="center"
                                        checked={departureOption=== "center"}
                                        onChange={handleDepartureOption}
                                    />
                                </div>
                                <div className="flex items-center">
                                    <label
                                        className="capitalize text-gray-600 font-semibold flex mr-3"
                                        htmlFor="title">Ville</label>
                                    <input
                                        type="radio"
                                        name="departure"
                                        value="city"
                                        id="city"
                                        checked={departureOption === "city"}
                                        onChange={handleDepartureOption}
                                    />
                                </div>
                            </div>
                            <select
                                className="rounded bg-gray-100 w-12 h-8 mr-6 mt-6 w-9/12"
                                value={departure}
                                onChange={handleDeparture}>
                                {
                                    departureOption === 'center' ? 
                                    centers.map((center, i) => <option key={i}>{center}</option>) :
                                    cities.map((city, i) => <option key={i}>{city}</option>)
                                }
                            </select>
                        </div>
                        <div className="flex flex-col w-1/2 items-center">
                            <p className="text-xl">Arrivée</p>
                            <div className="flex justify-between w-1/2 mt-8">
                                <div className="flex items-center">
                                    <label
                                        className="capitalize text-gray-600 font-semibold flex mr-3"
                                        htmlFor="title">Centre</label>
                                    <input
                                        type="radio"
                                        name="arrival"
                                        value="center"
                                        id="center"
                                        checked={arrivalOption === "center"}
                                        onChange={handleArrivalOption}
                                    />
                                </div>
                                <div className="flex items-center">
                                    <label
                                        className="capitalize text-gray-600 font-semibold flex mr-3"
                                        htmlFor="title">Ville</label>
                                    <input
                                        type="radio"
                                        name="arrival"
                                        value="city"
                                        id="city"
                                        checked={arrivalOption === "city"}
                                        onChange={handleArrivalOption}
                                    />
                                </div>
                            </div>
                            <select
                                className="rounded bg-gray-100 w-12 h-8 mr-6 mt-6 w-9/12"
                                value={arrival}
                                onChange={handleArrival}>
                                {
                                    arrivalOption === 'center' ? 
                                    centers.map((center, i) => <option key={i}>{center}</option>) :
                                    cities.map((city, i) => <option key={i}>{city}</option>)
                                }
                            </select>
                        </div>
                    </div>  
                    <Button className="mt-24" onClick={() => setOpen(true)}>Suivant</Button>
                </>
            )}
           
            {
                open && <Modal
                isOpen={open}
                onClose={() => setOpen(false)}
                title="Créer l'annonce">
                <MessageForm newTopic={true} close={() => setOpen(false)} redirect={() => navigate('/users/:id/posts')} />
                {/* <TaskForm refresh={refresh} setRefresh={setRefresh} close={() => setAddTaskModalOpen(false)} /> */}
            </Modal>
            }
            
        </div>
    )
}

export default NewPostPage