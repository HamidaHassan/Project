import { Route, Routes } from "react-router-dom";
import MainPage from "./Components/MainPage";
import Login from "./Components/Login";
import Second from "./Components/Second";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Second />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mainpage" element={<MainPage />} />
      </Routes>
    </div>
  );
};

export default App;