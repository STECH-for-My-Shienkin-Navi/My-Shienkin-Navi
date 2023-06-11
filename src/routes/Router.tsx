import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TopPage } from '../components/pages/TopPage';
import { SupportSearchPage } from '../components/pages/SupportSearchPage';
import { SupportListPage } from '../components/pages/SupportListPage';
import { SupportDetailPage } from '../components/pages/SupportDetailPage';
import { DataTopPage } from '../components/pages/DataTopPage';
import { SelectGettingDataPage } from '../components/pages/SelectGettingDataPage';
import { DataSharingPage } from '../components/pages/DataSharingPage';
import { DataReceivePage } from '../components/pages/DataReceivePage';
import { ErrorPage } from '../components/pages/ErrorPage';
import { MynaReceivePage4 } from '../components/pages/MynaReceivePage4';
import { Dev } from '../components/pages/Dev';
import { PasswordEntryPage } from '../components/pages/PasswordEntryPage';
import { DataShareAgreePage } from '../components/pages/DataShareAgree';
import { ConfirmProvisionPage } from '../components/pages/ConfirmProvisionPage';
import { Loading, SampleLoading } from '../components/loading';

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<TopPage />} />
        <Route path={'/SupportSearch'} element={<SupportSearchPage />} />
        <Route path={'/SupportList'} element={<SupportListPage />} />
        <Route path={'/SupportDetail'} element={<SupportDetailPage />} />
        <Route path={'/DataTop'} element={<DataTopPage />} />

        {/* データ共有に関わる一連のページ */}
        <Route path={'/SelectGettingDataPage'} element={<SelectGettingDataPage />} />
        <Route path={'/DataShareAgree'} element={<DataShareAgreePage />} />
        <Route path={'/PasswordEntry'} element={<PasswordEntryPage />} />
        <Route path={'/ConfirmProvision'} element={<ConfirmProvisionPage />} />
        <Route path={'/DataSharing'} element={<DataSharingPage url='sample.com' />} />
        
        <Route path={'/DataReceive'} element={<DataReceivePage />} />
        <Route path={'/MynaReceivePage4'} element={<MynaReceivePage4 />} />
        <Route path={'/dev'} element={<Dev />} />
        <Route path={'/*'} element={<ErrorPage />} />
        <Route path={'/SampleLoading'} element={<SampleLoading />} />
      </Routes>
    </BrowserRouter>
  );
};
