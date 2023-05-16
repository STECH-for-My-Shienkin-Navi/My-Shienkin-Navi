import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TopPage } from '../components/pages/TopPage';

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<TopPage />} />
      </Routes>
    </BrowserRouter>
  );
};
