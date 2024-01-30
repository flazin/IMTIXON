import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import JobDetails from "./pages/JobDetails";

function App() {
  return (
    <div className="App light">
      <Header></Header>
      <Routes>
        <Route path="/devjobs-web-app" element={<Home />}></Route>
        <Route
          path="/devjobs-web-app/jobs/:id"
          element={<JobDetails />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
