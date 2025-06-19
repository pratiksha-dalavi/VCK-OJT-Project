import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import HomePage from "./pages2/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ContactPage from "./pages2/ContactPage";
import "./styles/pages.css";
import "./App.css";
import AboutPage from "./pages2/AboutPage";
import CoursesPage from "./pages2/CoursesPage";
import AdmissionsPage from "./pages2/AdmissionsPage";
import NotFoundPage from "./pages2/NotFoundPage";
import ChatbotComponent from "./components/Chatbot/ChatbotComponents";
import { useState } from "react";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";

function App () {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
     <>
            <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Pratiksha Parashuram Dalavi"
          studentPhotoUrl="/Images/pratiksha.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
          <Router>
            <div className="main-layout">
              <Header/>
              <div className="content">
                <Routes>
                  <Route path="/" element={<HomePage/>} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/courses" element={<CoursesPage />} />
                  <Route path="/admissions" element={<AdmissionsPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </div>
              <ChatbotComponent/>
            <Footer/>
            </div>
          </Router>
        </>
  )
}
export default App;