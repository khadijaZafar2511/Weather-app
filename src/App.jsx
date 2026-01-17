import './App.css'
import Appinfo from './components/Appinfo.jsx';
import Countrysearch from './components/Countrysearch.jsx';

function App() {
 
  return (

    <>
      <div className="w-full  min-h-screen overflow-x-hidden bg-gray-900 flex items-center justify-center flex-col lg:flex-row">
        <Appinfo url="//cdn.weatherapi.com/weather/64x64/night/143.png" />
        <Countrysearch  />
      </div>
    </>
  );
}

export default App
