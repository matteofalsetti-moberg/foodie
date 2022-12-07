import "./Welcome.scss"
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import { useTranslation } from "react-i18next";

function Welcome() {
  const {t} = useTranslation()
    const user = useSelector((state: RootState) => state.user.state);
  return (<div className='welcome'>
    <h1 className="welcome__title">{t("Welcome")} {user.firstName}!</h1>
    <p>{t("selectCategory")}</p>
    </div>
  )
}

export default Welcome;