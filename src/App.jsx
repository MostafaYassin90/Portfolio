import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import DarkMode from './components/DarkMode';
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import ScrollToTop from './components/ScrollToTop';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className=' bg-white dark:bg-[#070606] overflow-hidden'>
      <Toaster />
      <DarkMode />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/project/:id' element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App