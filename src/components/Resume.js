import { useState } from "react";
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Portfolio from "./components/Portfolio"
import Resume from "./components/Resume"

function App() {
  const pages = ['About', 'Portfolio', 'Contact', 'Resume']

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div className="page-wrapper">
      <Header 
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <main>
        {currentPage === 'About' && <About />}
        {currentPage === 'Portfolio' && <Portfolio />}
        {currentPage === 'Contact' && <Contact />}
        {currentPage === 'Resume' && <Resume />}
      </main>
      <Footer />
    </div>
  );
}

export default App;