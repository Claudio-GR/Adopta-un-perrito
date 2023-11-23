import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import MyCard from './components/MyCard';
import Footer from './components/Footer';
import Corgi_img from '../src/assets/img/Corgie.jpg';
import German_img from '../src/assets/img/German-Shepperd.jpg';
import Maltes_img from '../src/assets/img/Maltes.jpg';
import Yorkie_img from '../src/assets/img/Yorkie.jpg';

function App() {
  

  return (
    <>
      <Header title="Adopta un perrito con estilo"/>
      <div className='gallery'>
        <MyCard img_url={Yorkie_img} 
                dog_name="Fede" 
                dog_description="Fede es un perrito animado que le encanta pasear en auto con sus lentes de sol e inigualable estilo" 
                dog_breed="Yorkie" 
                breed_color="primary" 
                />
        <MyCard img_url={Corgi_img} 
                dog_name="Snoop" 
                dog_description="Snoop es un perrito que adora la playa, sobre todo los atardeceres en la playa" 
                dog_breed="Corgie" 
                breed_color="success" 
                />
        <MyCard img_url={German_img} 
                dog_name="Firulais" 
                dog_description="Firulais es un perrito muy activo y le encanta salir de paseo a la plaza o el campo con su mejor amigo (tú)" 
                dog_breed="German Shepherd" 
                breed_color="danger" 
                />
        <MyCard img_url={Maltes_img} 
                dog_name="Lucy" 
                dog_description="Lucy es una perrita adorable. Lo mejor para ella es ir al lago con su familia" 
                dog_breed="Maltes" 
                breed_color="warning" 
                />
      </div>
      <Footer/>
    </>
  )
}

export default App
