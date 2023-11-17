import Login from './Login';
import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Partner from './components/Partner';

function App() {
  return (
<>
<Navbar/>
<Hero/>
<About/>
<h1 className='text-4xl text-white flex items-center justify-center my-4 font-bold'>Our Partner's</h1>
<Partner/>
<Login/>
<Footer/>
</>


  );
}

export default App;
