import './Main.css';
import Promo from '../Promo/Promo.js';
import AboutProject from '../AboutProject/AboutProject.js';
import Techs from '../Techs/Techs.js';
import AboutMe from '../AboutMe/AboutMe.js';

function Main({isLoggedIn}) {
  if (isLoggedIn || !isLoggedIn) {
    return (
    <main>
      <Promo/>
      <AboutProject/>
      <Techs/>
      <AboutMe/>
    </main>)
  }
  return null
}

export default Main;