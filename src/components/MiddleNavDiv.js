const MiddleNavDiv = () => {

    const enterPlay = () => {
        const playTrapezoid = document.querySelector('.playTrapezoid')
        const playText = document.querySelector('.playText')
        playTrapezoid.style.opacity = 0.5
        playText.style.color = 'white'
    }

    const leavePlay = () => {
        const playTrapezoid = document.querySelector('.playTrapezoid')
        const playText = document.querySelector('.playText')
        playTrapezoid.style.opacity = 1
        playText.style.color = 'black'
    }

  return (
    <div className='middleNavDiv' onMouseEnter={enterPlay} onMouseLeave={leavePlay}>
        <div className='playText'><b>PLAY</b></div>
        <div className="playTrapezoid"></div>
    </div>
  )
}

export default MiddleNavDiv