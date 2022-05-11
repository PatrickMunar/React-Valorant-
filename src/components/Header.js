import MenuButton from './MenuButton'
import MiddleNavDiv from './MiddleNavDiv'
import gsap from 'gsap'

const Header = () => {
  const enterMissionsNav = () => {
    gsap.to('.sideLine', {ease: 'Power1.easeOut',duration: 0, opacity: 0.5})
    gsap.to('.missionsModal', {ease: 'Power1.easeOut',duration: 0, opacity: 1, zIndex: 50})
  }

  const leaveMissionsNav = () => {
    gsap.to('.sideLine', {ease: 'Power1.easeIn',duration: 0, opacity: 0})
      gsap.to('.missionsModal', {ease: 'Power1.easeOut',duration: 0, opacity: 0, zIndex: -50})
  }

  return (
    <div className="headerContainer">
      <div className='mainNavBar'>
        <div className='sideNavDiv' onMouseEnter={enterMissionsNav} onMouseLeave={leaveMissionsNav}>
          <div className='sideLine'></div>
          <div className='sideNavHalf'>
            <span className="material-symbols-outlined smallerIcons">schedule</span>&nbsp;0 / 2
          </div>
          <div className='sideNavHalf'>
            <span className="material-symbols-outlined smallerIcons">stars</span>&nbsp;1 / 3
          </div>
        </div>
        <div className='commonNavDiv'>
          HOME
        </div>
        <div className='commonNavDiv'>
          BATTLEPASS
        </div>
        <div className='commonNavDiv'>
          AGENTS
        </div>
        <MiddleNavDiv />
        <div className='commonNavDiv'>
          CAREER
        </div>
        <div className='commonNavDiv'>
          COLLECTION
        </div>
        <div className='commonNavDiv'>
          STORE
        </div>
        <div className='sideNavDiv'>
          <div className='sideNavHalf'>
            <span className="material-symbols-outlined smallerIcons">adjust</span>&nbsp;400
          </div>
          <div className='sideNavHalf'>
            <span className="material-symbols-outlined smallerIcons">nest_secure_alarm</span>&nbsp;230
          </div>
        </div>
      </div>
      <MenuButton />
    </div>
  )
}

Header.defaultProps = {
  title: "<Header />",
}

export default Header