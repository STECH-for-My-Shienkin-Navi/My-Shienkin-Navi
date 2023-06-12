import { atom } from 'recoil';

export type SelectGettingDataType = {
  id: number;
  label: string;
  isCheck: boolean;
};

const initialData: SelectGettingDataType[] = [
  {
    id: 1,
    label: '所得・個人住民税情報',
    isCheck: false,
  },
  {
    id: 2,
    label: '国民年金・被用者年金の給付・保険料徴収の情報',
    isCheck: false,
  },
  {
    id: 3,
    label: '銀行名、支店名、口座番号、および口座名義カナなどの公金受取口座の情報',
    isCheck: false,
  },
  {
    id: 4,
    label: '住民票関係情報',
    isCheck: false,
  },
  {
    id: 5,
    label: '特定健診情報',
    isCheck: false,
  },
];

export const SelectGettingDataState = atom<SelectGettingDataType[]>({
  key: 'SelectGettingDataState',
  default: initialData,
});
