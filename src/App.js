import './App.css';
import {Chat} from "./components/Chat";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Register} from "./components/Register";
import {CreateChat} from "./components/CreateChat";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Register/>} />
                <Route path="/createChat" element={<CreateChat/>} />
                <Route path="/chat" element={<Chat/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
