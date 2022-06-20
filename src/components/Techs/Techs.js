import './Techs.css';

function Techs() {
  return (
    <section id={'techs'} className={'techs'}>
      <div className={'techs__subtitle'}>
        <h2 className={'techs__subtitle-text'}>Технологии</h2>
      </div>
      <div className={'techs__text-block'}>
        <h3 className={'techs__text-heading'}>7 технологий</h3>
        <p className={'techs__description'}>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      </div>
      <div className={'techs__tech-block'}>
        <p className={'techs__tech-item'}>HTML</p>
        <p className={'techs__tech-item'}>CSS</p>
        <p className={'techs__tech-item'}>JS</p>
        <p className={'techs__tech-item'}>React</p>
        <p className={'techs__tech-item'}>Git</p>
        <p className={'techs__tech-item'}>Express.js</p>
        <p className={'techs__tech-item'}>mongoDB</p>
      </div>
    </section>
  )
}

export default Techs;