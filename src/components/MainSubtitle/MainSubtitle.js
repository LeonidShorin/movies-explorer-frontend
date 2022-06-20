import './MainSubtitle.css';

function MainSubtitle({subtitleText}) {
  return (
    <div className={'main-subtitle'}>
      <h2 className={'main-subtitle__text'}>{subtitleText}</h2>
    </div>
  )
}

export default MainSubtitle; 