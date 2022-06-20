import './Promo.css';

function Promo() {
  return (
    <section className={'promo'}>
      <div className={'promo_block'}>
        <h1 className={'promo__heading'}>Учебный проект студента факультета Веб-разработки.</h1>
      </div>
      <nav className={'promo__navigation'}>
        <a className={'promo__navlink'} href={'#about-project'}>О проекте</a>
        <a className={'promo__navlink'} href={'#techs'}>Технологии</a>
        <a className={'promo__navlink'} href={'#about-me'}>Студент</a>
      </nav>
  </section>
  )
}

export default Promo;