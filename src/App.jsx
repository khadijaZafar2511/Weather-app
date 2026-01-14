import './App.css'
import Appinfo from './components/Appinfo.jsx';
import Countrysearch from './components/Countrysearch.jsx';

function App() {
 
  return (

    <>
      <div className="w-full h-screen bg-gray-900 flex items-center justify-center">
        <Appinfo url="//cdn.weatherapi.com/weather/64x64/night/143.png" />
        <Countrysearch  />
      </div>
    </>
  );
}

export default App
