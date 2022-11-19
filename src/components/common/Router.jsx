import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import QuizStart from '../../pages/QuizStart';
import QuizIng from '../../pages/QuizIng';
import QuizEnd from '../../pages/QuizEnd';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizstart" element={<QuizStart />} />
        <Route path="/quizIng" element={<QuizIng />} />
        <Route path="/quizEnd" element={<QuizEnd />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
