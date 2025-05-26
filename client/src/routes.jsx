import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quizzes from './pages/Quizzes/index.jsx';
import Quiz from './pages/Quiz/index.jsx';
import Timeline from './pages/Timeline';
import Biographies from './pages/Biographies/index.jsx';
import Galery from './pages/Galery/index.jsx';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quizzes' element={<Quizzes />} />
        <Route path='/quiz/:id' element={<Quiz />} />
        <Route path='timeline' element={<Timeline />} />
        <Route path='biographies' element={<Biographies />} />
        <Route path='galery' element={<Galery />} />
      </Routes>
    </Router>
  );
}
