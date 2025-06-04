import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import SignIn from "./pages/signIn/SignIn";
import Billing from "./pages/billing/Billing";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sign" element={<SignIn/>}/>
        <Route path="/billing" element={<Billing/>}/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
