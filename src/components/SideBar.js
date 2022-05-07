import gsap from 'gsap'

export const SideBar = () => {
    let isSideBarOpen = false
    let displacement = window.innerWidth * 0.1

    const clickSideBar = () => {
        gsap.to('.sideBar', {duration: 0.25, delay: 0.1, x: 0})
        gsap.to('.sideBar', {duration: 0, css:{backgroundColor: 'rgba(78, 78, 78, 0.25)'}})
        isSideBarOpen = true
    }

    const leaveSideBar = () => {
        if (isSideBarOpen === false) {
            gsap.to('.sideBar', {duration: 0, css:{backgroundColor: 'rgba(78, 78, 78, 0.25)'}})
        }
        else {
            gsap.to('.sideBar', {duration: 0.25, delay: 0.1, x: displacement})
            isSideBarOpen = false
        }
    }

    const enterSideBar = () => {
        if (isSideBarOpen === false) {
            gsap.to('.sideBar', {duration: 0, css:{backgroundColor: 'rgba(125, 125, 125, 0.35)'}})
        }
    }

  return (
    <div className="sideBar" onClick={clickSideBar} onMouseLeave={leaveSideBar} onMouseEnter={enterSideBar}>

    </div>
  )
}

export default SideBar
