import Button from '../components/Button';
import { Link, useNavigate, useParams } from 'react-router-dom'
import homeImage from '../assets/images/homeImage.png';
import cumBackground from '../assets/images/cumLogo2.png';

const  HomePage = (): JSX.Element => {
  const navigate = useNavigate()
  return (
    // <div className="w-screen flex flex-col items-center mt-20">
    <div style={{
        backgroundImage: `url(${cumBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '25%',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        flexDirection: 'column',
        // filter: 'brightness(80%)',
      }}>
      {/* className="text-white"> */}
      <p className="text-5xl mt-20">Cnam United Mobility</p>
      <p className="text-3xl mt-8">Découvrez la proximité intra-universitaire</p>
      <div className="mt-20">
        <Button 
          className="mr-12"
          onClick={() => navigate('/new-post')}>Poster une annonce</Button>
        <Button onClick={() => navigate('/posts')}>Voir les annonces</Button>
      </div>
      {/* <div className="mt-20">
        <img src={cumBackground} alt="User Logo" className="w-50 h-50 ml-2" />
      </div> */}
    </div>
  )
};

export default  HomePage;
