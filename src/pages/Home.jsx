import AboutMe from '../components/AboutMe';
import ContactUs from '../components/ContactUs';
import Hero from '../components/Hero';
import LatestWorks from '../components/LatestWorks';
import SkillsSection from '../components/SkillsSection';

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <SkillsSection />
      <LatestWorks />
      <ContactUs />
    </div>
  )
}

export default Home