import { BrowserRouter, Routes, Route } from "react-router-dom";

// component imports
import TopNav from "./components/common/TopNav";
import HomePage from "./components/pages/home/HomePage";
import PersonalRegistration from "./components/pages/registration/PersonalRegistration";
import OrganizationRegistration from "./components/pages/registration/OrganizationRegistration";

// stylesheet import
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      {/*  */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/registration" element={<Registration />} /> */}
        <Route
          path="/personal-registration"
          element={<PersonalRegistration />}
        />
        <Route
          path="/organization-registration"
          element={<OrganizationRegistration />}
        />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
