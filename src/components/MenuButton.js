import gsap from 'gsap'

const MenuButton = (props) => {
    const enterMenuButton = () => {
        gsap.to('.MenuButton', {duration: 0.5, backgroundColor: 'rgba(255, 255, 255, 0.1)'})
    }

    const leaveMenuButton = () => {
        gsap.to('.MenuButton', {duration: 0.5, backgroundColor: 'transparent'})
    }

    const modalUp = ()=> {
        gsap.to('.menuModal', {duration: 0, zIndex: 100, opacity: 1})
        gsap.to('.menuBox', {duration: 0, zIndex: 200, opacity: 1})
    }

  return (
    <div className="MenuButton" onMouseEnter={enterMenuButton} onMouseLeave={leaveMenuButton} onClick={modalUp}>
        <div className="circleOutline">
            <span className="material-symbols-outlined">
                {props.title}
            </span>
        </div>
    </div>
  )
}

MenuButton.defaultProps = {
    title: 'settings'
}

export default MenuButton
