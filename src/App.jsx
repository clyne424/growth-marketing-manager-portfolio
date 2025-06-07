import './App.css'
import About from './components/about/About'
import KeyAchievement from './components/key-achievement/KeyAchievement';
import CaseStudies from './components/case-studies/CaseStudies';
import Coreskills from './components/core-skills/CoreSkills';
import GrowthFrameworks from './components/growthframeworks/GrowthFrameworks';
import Connect from './components/connect/Connect';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className='body'>
      <main>
        <About />
        <Coreskills/>
        <CaseStudies/>
        <GrowthFrameworks/>
        <KeyAchievement />
        <Connect/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
