import { FC } from 'react';
import { MainLayout } from '../layout/MainLayout';

export const ErrorPage: FC = () => {
  return (
    <MainLayout title="ページが存在しません">
      <div>何らかのエラーが発生しました</div>
    </MainLayout>
  );
};
