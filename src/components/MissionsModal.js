import gsap from 'gsap'

const MissionsModal = () => {
    const enterMissionsModal = () => {
        gsap.to('.sideLine', {ease: 'Power1.easeOut',duration: 0, opacity: 0.5})
        gsap.to('.missionsModal', {ease: 'Power1.easeOut',duration: 0, opacity: 1, zIndex: 50})
    }

    const leaveMissionsModal = () => {
        gsap.to('.sideLine', {ease: 'Power1.easeIn',duration: 0, opacity: 0})
        gsap.to('.missionsModal', {ease: 'Power1.easeOut',duration: 0, opacity: 0, zIndex: -50})
    }

  return (
    <div className="missionsModal" onMouseEnter={enterMissionsModal} onMouseLeave={leaveMissionsModal}> 
        <div className="headerMissions">
          <div className="topHeaderMissions">
            <div className="accountLevelText">ACCOUNT LEVEL</div>
            <div className="resetTimerText">Resets in 02:50:14</div>
          </div>
          <div className="bottomHeaderMissions">
            <div className="leftTask">
              <div className="checkBoxDiv">

              </div>
              <div className="taskTextDiv">
                <div className="topTaskTextDiv">
                  <h1 className="bottomAlignText">First Win of the Day</h1>
                </div>
                <div className="bottomTaskTextDiv">
                  <h1 className='topAlignText'>Completed</h1>
                </div>
              </div>
            </div>
            <div className="APText">+ 1,000AP</div>    
          </div>
        </div>
        <div className="dailyMissions">
          <div className='topDailyMissionsText'>
            <div className="accountLevelText">DAILY MISSIONS</div>
            <div className="resetTimerText">Expires in 02:50:14</div>
          </div>
          <div className='bottomDailyMissionsText'>
            <div className='dailyMissionsDivs'>
              <div className='missionsLabelWholeDiv'>
                <div className='dailyMissionsLabels'>
                  <div className='missionsLabelsText'><span className="material-symbols-outlined smallerIcons">schedule</span>&nbsp;Deal Damage</div>0/1000
                </div>
                <div className='missionsProgressDiv'>
                  <div className='progressBarBlank'>  </div>
                </div>
              </div> 
              <div className='APText greenText'>+2,000XP</div>
            </div>
            <div className='dailyMissionsDivs'>
              <div className='missionsLabelWholeDiv'>
                <div className='dailyMissionsLabels'>
                  <div className='missionsLabelsText'><span className="material-symbols-outlined smallerIcons">schedule</span>&nbsp;Deal Damage</div>0/1000
                </div>
                <div className='missionsProgressDiv'>
                  <div className='progressBarBlank'>  </div>
                </div>
              </div> 
              <div className='APText greenText'>+2,000XP</div>
            </div>
          </div>
        </div>
        <div className="weeklyMissions">
          <div className='topDailyMissionsText'>
            <div className="accountLevelText">WEEKLY MISSIONS</div>
            <div className="resetTimerText">Refills in 02:50:14</div>
          </div>
          <div className='bottomDailyMissionsText'>
            <div className='dailyMissionsDivs thirds'>
              <div className='missionsLabelWholeDiv'>
                <div className='dailyMissionsLabels'>
                  <div className='missionsLabelsText'><span className="material-symbols-outlined smallerIcons">stars</span>&nbsp;Deal Damage</div>0/1000
                </div>
                <div className='missionsProgressDiv'>
                  <div className='progressBarBlank'>  </div>
                </div>
              </div> 
              <div className='APText greenText'>+2,000XP</div>
            </div>
            <div className='dailyMissionsDivs thirds'>
              <div className='missionsLabelWholeDiv'>
                <div className='dailyMissionsLabels'>
                  <div className='missionsLabelsText'><span className="material-symbols-outlined smallerIcons">stars</span>&nbsp;Deal Damage</div>0/1000
                </div>
                <div className='missionsProgressDiv'>
                  <div className='progressBarBlank'>  </div>
                </div>
              </div> 
              <div className='APText greenText'>+2,000XP</div>
            </div>
            <div className='dailyMissionsDivs thirds'>
              <div className='missionsLabelWholeDiv'>
                <div className='dailyMissionsLabels'>
                  <div className='missionsLabelsText'><span className="material-symbols-outlined smallerIcons">stars</span>&nbsp;Deal Damage</div>0/1000
                </div>
                <div className='missionsProgressDiv'>
                  <div className='progressBarBlank'>  </div>
                </div>
              </div> 
              <div className='APText greenText'>+2,000XP</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default MissionsModal