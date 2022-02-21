import { Toast } from 'antd-mobile-v5';
export const checkResponse = (res: any) => {
  const code = res.success;
  const msg = res.data;
  if (!code) {
    return false;
  } else {
    return true;
  }
};
