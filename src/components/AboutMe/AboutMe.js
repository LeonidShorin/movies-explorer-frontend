import './AboutMe.css';
import MainSubtitle from '../MainSubtitle/MainSubtitle.js';
import photo from '../../images/photo.jpg'
import Portfolio from '../Portfolio/Portfolio.js';

function AboutMe() {
  return(
    <section id={'about-me'} className={'about-me'}>
      <MainSubtitle subtitleText={'Студент'}/>
      <div className={'about-me__info-block'}>
        <div className={'about-me__information'}>
          <h3 className={'about-me__name'}>Леонид</h3>
          <p className={'about-me__job'}>Фронтенд-разработчик, 24 года</p>
          <p className={'about-me__description'}>Я родился и живу в Уфе, закончил энергетический факультет БГАУ. 
            Раньше работал в самых разных областях (от сметчика до торгового представителя). Давний интерес к программированию подтолкнул меня пройти курс Яндекс.Практикума. 
            После прохождения курса собираюсь искать работу в области веб-разработки.
          </p>
          <nav className={'about-me__links'}>
            <a className={'about-me__link'} href={'https://facebook.com'}>Facebook</a>
            <a className={'about-me__link'} href={'https://github.com/LeonidShorin'}>Github</a>
          </nav>
        </div>
        <img className={'about-me__photo'} alt={'Фото студента'} src={photo}/>
      </div>
      <Portfolio />
    </section>
  )
}

export default AboutMe;