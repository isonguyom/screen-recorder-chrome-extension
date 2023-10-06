import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Permission from './pages/Permission.jsx'
import RecordingWidget from './components/RecordingWidget.jsx'
import Register from "./pages/Register.jsx";
import ShareVideo from "./pages/ShareVideo.jsx";
import UserPage from "./pages/UserPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import FilePage from "./pages/FilePage.com.jsx";



import './App.css'

function App() {

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          <Route path="share" element={<ShareVideo />} />
          <Route path="user" element={<UserPage />} />
          </Route>
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="file/:id" element={<FilePage />} />
          <Route path="permission" element={<Permission />} />
          <Route path="recording" element={<RecordingWidget />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
