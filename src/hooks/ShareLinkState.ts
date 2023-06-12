import { atom } from 'recoil';

export const ShareLinkState = atom<string>({
  key: 'SelectShareLinkState',
  default: 'error',
});
