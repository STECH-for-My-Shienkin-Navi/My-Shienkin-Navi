import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TopPage } from '../pages/SupportSearchPage';
import { SupportSearchPage } from '../pages/TopPage';
import { SupportListPage } from '../pages/SupportListPage';
import { SupportDetailPage } from '../pages/SupportDetailPage';
import { DataTopPage } from '../pages/DataTopPage';
import { DataSharePage } from '../pages/DataSharePage';
import { DataReceivePage } from '../pages/DataReceivePage';
import { ErrorPage } from '../pages/ErrorPage';

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<TopPage />} />
        <Route path={'/SupportSearch'} element={<SupportSearchPage />} />
        <Route path={'/SupportList'} element={<SupportListPage />} />
        <Route path={'/SupportDetail'} element={<SupportDetailPage />} />
        <Route path={'/DataTop'} element={<DataTopPage />} />
        <Route path={'/DataShare'} element={<DataSharePage />} />
        <Route path={'/DatareceivePage'} element={<DataReceivePage />} />
        <Route path={'/*'} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
