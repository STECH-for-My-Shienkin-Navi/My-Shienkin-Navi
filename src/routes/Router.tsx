import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TopPage } from '../components/pages/TopPage';
import { SupportSearchPage } from '../components/pages/SupportSearchPage';
import { SupportListPage } from '../components/pages/SupportListPage';
import { SupportDetailPage } from '../components/pages/SupportDetailPage';
import { DataTopPage } from '../components/pages/DataTopPage';
import { DataResultPage } from '../components/pages/DataResultPage';
import { DataSharePage } from '../components/pages/DataSharePage';
import { DataReceivePage } from '../components/pages/DataReceivePage';
import { ErrorPage } from '../components/pages/ErrorPage';
import { Dev } from '../components/pages/Dev';

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<TopPage />} />
        <Route path={'/SupportSearch'} element={<SupportSearchPage />} />
        <Route path={'/SupportList'} element={<SupportListPage />} />
        <Route path={'/SupportDetail'} element={<SupportDetailPage />} />
        <Route path={'/DataTop'} element={<DataTopPage />} />
        <Route path={'/DataResult'} element={<DataResultPage />} />
        <Route path={'/DataShare'} element={<DataSharePage />} />
        <Route path={'/DataReceive'} element={<DataReceivePage />} />
        <Route path={'/dev'} element={<Dev />} />
        <Route path={'/*'} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
