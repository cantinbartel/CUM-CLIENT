import Button from '../components/Button';
import { Link, useNavigate, useParams } from 'react-router-dom'
import biUserLogo from '../components/pexels-photo-4616548.png';


const HomePage = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className='scrollable-container'>
    <div className="w-screen flex flex-col items-center mt-20">
      <p className="text-5xl">Cnam United Mobility</p>
      <p className="text-3xl mt-8">Découvrez la proximité intra-universitaire</p>
      <div className="mt-20">
        <Button 
          className="mr-12 text-xl px-6 py-3" // Ajustez les valeurs de px et py pour la taille du bouton
          onClick={() => navigate('/new-post')}
        >
          Poster une annonce
        </Button>
        <Button 
          className="text-xl px-6 py-3" // Ajustez les valeurs de px et py pour la taille du bouton
          onClick={() => navigate('/posts')}
        >
          Voir les annonces
        </Button>
      </div>
      <div className="mt-20">
        <img src={biUserLogo} alt="User Logo" className="w-50 h-50 ml-2" />
      </div>
    </div>
    </div>
  );
};

export default HomePage;

