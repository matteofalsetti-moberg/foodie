import "./Welcome.scss"
import {  useParams } from "react-router-dom";

function Welcome() {
    const { name } = useParams();
  return (<div className='welcome'>
    <h1 className="welcome__title">Welcome {name}!</h1>
    <p>Select a category and start adding dishes to your cart!</p>
    </div>
  )
}

export default Welcome;