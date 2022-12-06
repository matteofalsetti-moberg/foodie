import Button from '../../components/Button/Button'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../../Redux/Store'
import loginIcon from "../../assets/loginIcon.png"
import "./DisplayUser.scss"

function DisplayUser() {
    const currentUser = useSelector((state: RootState) => state.user.state)
  return (
    !currentUser.firstName ? <Link className="header__buttons" to="/login">
                <Button icon={loginIcon} />
            </Link>: <div className='displayuser'><Link className="header__buttons" to="/login">
                <Button text={currentUser.firstName +" "+ currentUser.lastName} />
            </Link></div>
  )
}

export default DisplayUser