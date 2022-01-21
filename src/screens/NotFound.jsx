import { useNavigate } from "react-router-dom";
import error from "./error.png"




const NotFound = () => {
  const Nav = useNavigate()
  return (
    <div className="container d-flex align-items-center justify-content-center">
      <img  src={error} className="img-fluid err" alt="404 Page Not Found"/>
      
      <button className="px-3 py-4 btn co shadow-lg " onClick= {()=>{Nav(-1)}}> <i class="arrow left"></i> Go back</button>
    </div>
    
  );
};
export default NotFound;
