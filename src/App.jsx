import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProfilePage from './pages/ProfilePage';

function HomePage() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <TechStack />
      <Services />
      <Portfolio />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile/akshay" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}
