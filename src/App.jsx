import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./pages/LoginPage";

import SignupPage from "./pages/SignupPage";

import PollPage from "./pages/PollPage";

function App() {
  const token = !!localStorage.getItem("token");
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route path="/signup" element={<SignupPage />} />

      <Route
        path="/"
        element={token ? <PollPage /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}

export default App;
