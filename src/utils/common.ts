import { Toast } from 'antd-mobile-v5';
export const checkResponse = (res: any) => {
  const code = res.code;
  if (!code) {
    return false;
  } else {
    return true;
  }
};
