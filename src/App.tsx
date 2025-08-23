import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Sakura from "./components/Sakura";


function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white overflow-hidden">
      <Navbar />
      <Hero />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full ">
        <Footer />
      </div>

      <Sakura />
    </div>
  );
}



export default App;
