import { Route, Routes } from "react-router-dom";
import './App.css';
import HomePage from "./pages/homePage";
import SignInPage from "./pages/signInPage";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React App!</h1>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="signin" element={<SignInPage />} />
      </Routes>
    </div>
  );
}

export default App;
