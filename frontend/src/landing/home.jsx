import { useNavigate } from "react-router-dom";
import hero from "../assets/hero.png"

const HomePage = () => {
    const navigate = useNavigate();
  
    const handleNavigateToLogin = () => {
      navigate('/login');
    };
  
    return (
      <div className="flex flex-col w-full mt-24">
          <div className="flex flex-col md:flex-row items-center md:justify-between">
            <div className="flex-grow text-center md:px-12 md:text-left sm:mr-0 mb-8 sm:mb-0">
              <h1 className="text-6xl font-bold mb-4">
                Next - Gen <br />
                <span className="whitespace-no-wrap">Teaching Assistant</span>
              </h1>
              <p className="text-lg mb-4">
                Meet your round-the-clock study partner!
              </p>
              <p className="text-lg mb-4">
              Kaabil is here to teach you in your unique style, offer quick, bite-sized lessons, assist with last-minute preparations and track your progress all year. Earn points as you unlock your potential.
              </p>
              <div className="flex justify-center md:justify-start">
                <button onClick={handleNavigateToLogin} className="py-8 px-12 rounded-full flex mt-16 text-center md:items-center items-center">
                  Login
                </button>
              </div>
            </div>
            <div className="flex-grow mt-40 flex justify-center sm:justify-end">
              <img src={hero} className="w-full h-auto" alt="hero" />
            </div>
          </div>
      </div>
    );
  };
  
  export default HomePage;