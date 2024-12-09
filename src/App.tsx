import './App.css'
import { Routes, Route, Outlet } from "react-router-dom";
import NavBar from './components/NavBar';
import ChatBot from './components/pages/ChatBot';
import LandingPage from './components/pages/LandingPage';
import Footer from './components/Footer';
import DungeonCrawler from './components/pages/DungeonCrawler';
import DecaChat from 'deca-chat';


function App() {
  const DecaChat = require('deca-chat');

  const chat = new DecaChat({
    apiKey: 'your-api-key', // If required
    user: { id: '1234', name: 'Bob'},
  });

  chat.on('message', (msg) => {
    console.log(`New message: ${msg.text}`);
  });

  // Send a message
  chat.sendMessage('Hello World!'); 

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='' element={<Outlet />}>
          <Route index element={<LandingPage />} />
          <Route path='/chat' element={<ChatBot />} />
          <Route path='/game' element={<DungeonCrawler />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
