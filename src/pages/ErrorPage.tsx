import { FC } from 'react';
import { MainLayout } from '../components/layout/MainLayout';

export const ErrorPage: FC = () => {
  return (
    <MainLayout title="ページが存在しません">
      <div>何らかのエラーが発生しました</div>
    </MainLayout>
  );
};
