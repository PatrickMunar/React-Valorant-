import Header from './components/Header'
import SideBar from './components/SideBar'
import MainFeatures from './components/MainFeatures'
import MenuModal from './components/MenuModal'
import MissionsModal from './components/MissionsModal'

function App() {

  return (
    <div className="App">
      <Header />
      <SideBar />
      <MainFeatures />
      <MenuModal />
      <MissionsModal />
    </div>
  );
}

export default App;