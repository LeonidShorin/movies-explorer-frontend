import './AboutProject.css';
import MainSubtitle from '../MainSubtitle/MainSubtitle.js';

function AboutProject() {
  return(
    <section id={'about-project'} className={'about-project'}>
      <MainSubtitle subtitleText={'О проекте'}/>
      <div className={'about-project__info'}>
        <div className={'about-project__description-block'}>
          <h3 className={'about-project__description-title'}>Дипломный проект включал 5 этапов</h3>
          <p className={'about-project__description-text'}>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className={'about-project__description-block'}>
          <h3 className={'about-project__description-title'}>На выполнение диплома ушло 5 недель</h3>
          <p className={'about-project__description-text'}>У каждого этапа был мягкий и жесткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className={'about-project__scale'}>
        <p className={'about-project__scale-item about-project__scale-item_short'}>1 неделя</p>
        <p className={'about-project__scale-item about-project__scale-item_long'}>4 недели</p>
      </div>
      <div className={'about-project__scale'}>
        <p className={'about-project__scale-item about-project__scale-item_short about-project__scale-item_short_signature'}>Back-end</p>
        <p className={'about-project__scale-item about-project__scale-item_long about-project__scale-item_long_signature'}>Front-end</p>
      </div>
    </section>
  )
}

export default AboutProject;