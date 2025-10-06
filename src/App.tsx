import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Import page components
import Home from './pages/Home';
import About from './pages/About';
import Committee from './pages/Committee';
import Speakers from './pages/Speakers';
import Tracks from './pages/Tracks';
import Submission from './pages/Submission';
import Publication from './pages/Publication';
import Logistics from './pages/Logistics';
import Contact from './pages/Contact';
import Sponsorship from './pages/Sponsorship';
import SessionChair from './pages/SessionChair';
import Registration from './pages/Registration';
import ToBeUpdated from './pages/ToBeUpdated';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-300">
          <Navigation />
          <main className="pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/committee" element={<Committee />} />
              <Route path="/sponsorship" element={<Sponsorship />} />
              <Route path="/session-chair" element={<SessionChair />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/to-be-updated" element={<ToBeUpdated />} />
              <Route path="/speakers" element={<Speakers />} />
              <Route path="/tracks" element={<Tracks />} />
              <Route path="/submission" element={<Submission />} />
              <Route path="/publication" element={<Publication />} />
              <Route path="/logistics" element={<Logistics />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;