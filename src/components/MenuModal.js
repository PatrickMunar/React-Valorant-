import gsap from 'gsap'

const MenuModal = () => {
    const enterCloser = () => {
        gsap.to('.menuCloser', {duration: 0.5, css:{scale: 2.35}})
    }

    const leaveCloser = () => {
        gsap.to('.menuCloser', {duration: 0.5, css:{scale: 2}})
    }
    
    const modalDown = ()=> {
        gsap.to('.menuModal', {duration: 0, zIndex: -100, opacity: 0})
        gsap.to('.menuBox', {duration: 0, zIndex: -200, opacity: 0})
    }

  return (
    <div className="menuModal">
        <div className="menuBox">
            <span className="material-symbols-outlined menuCloser" onMouseEnter={enterCloser} onMouseLeave={leaveCloser} onClick={modalDown}>
                close
            </span>
            <div className='menuButtons'>
                <h1 className='menuText'>SETTINGS</h1>
            </div>
            <div className='menuButtons'>
                <h1 className='menuText'>SUPPORT</h1>
            </div>
            <div className='menuButtons'>
                <h1 className='menuText'>ABOUT</h1>
            </div>
            <div className='menuButtons flare'>
                <span className="material-symbols-outlined flareIcon">
                    expand_more
                </span>
            </div>
            <div className='menuButtons exit'>
                <h1 className='menuText exitText'>EXIT TO DESKTOP</h1> 
            </div>
        </div>
    </div>
  )
}

export default MenuModal