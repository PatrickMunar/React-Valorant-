import gsap from 'gsap'

const MissionsModal = () => {
    const enterMissionsModal = () => {
        console.log('im on there')
        gsap.to('.missionsModal', {ease: 'Power1.easeOut',duration: 0, opacity: 1, zIndex: 50})
    }

    const leaveMissionsModal = () => {
        console.log('im on there')
        gsap.to('.missionsModal', {ease: 'Power1.easeOut',duration: 0, opacity: 0, zIndex: -50})
    }

  return (
    <div className="missionsModal" onMouseEnter={enterMissionsModal} onMouseLeave={leaveMissionsModal}> 
        <div className="headerMissions">
        
        </div>
        <div className="dailyMissions">
        
        </div>
        <div className="weeklyMissions">
        
        </div>
    </div>
  )
}

export default MissionsModal