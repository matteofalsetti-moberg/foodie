import "./Welcome.scss"
import {  useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";

function Welcome() {
    const user = useSelector((state: RootState) => state.user.state);
  return (<div className='welcome'>
    <h1 className="welcome__title">Welcome {user.firstName}!</h1>
    <p>Select a category and start adding dishes to your cart!</p>
    </div>
  )
}

export default Welcome;