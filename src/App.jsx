import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ContactPage from "./Pages/ContactPage";
import "./styles/pages.css";
import "./App.css";
import AboutPage from "./Pages/AboutPage";
import CoursesPage from "./Pages/CoursesPage";
import AdmissionsPage from "./Pages/AdmissionsPage";
import NotFoundPage from "./Pages/NotFoundPage";

function App () {
  return (
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
      <Footer/>
      </div>
    </Router>
  )
}
export default App;