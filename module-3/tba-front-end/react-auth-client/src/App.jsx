import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectListPage from "./pages/ProjectListPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import EditProjectPage from "./pages/EditProjectPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/isPrivate";
import IsAnon from "./components/isAnon";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>      
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/projects" element={<IsPrivate><ProjectListPage /></IsPrivate>} />
        <Route exact path="/projects/:projectId" element={<ProjectDetailsPage />} />
        <Route exact path="/projects/edit/:projectId" element={<EditProjectPage />} />

        <Route path="/signup" element={ <IsAnon><SignupPage /></IsAnon> } />
        <Route path="/login" element={ <IsAnon><LoginPage /></IsAnon> } />
      </Routes>
    </div>
  );
}

export default App;
