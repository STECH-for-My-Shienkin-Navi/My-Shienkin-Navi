import { FC } from 'react';
import { MainLayout } from '../components/layout/MainLayout';
import { CommonButton } from '../components/common/CommonButton';

export const TopPage: FC = () => {
  return (
    <MainLayout title="My支援金ナビ">
      <div>aaa</div>
      <CommonButton onClick={() => {}}>ラベル</CommonButton>
    </MainLayout>
  );
};
