import { Toast } from 'antd-mobile-v5';
export const checkResponse = (res: any) => {
  const code = res.code;
  if (!code) {
    return false;
  } else {
    return true;
  }
};

export const debance = (func: Function, delay: number) => {
  let timer: any = null;
  return function (this: any, ...args: Array<any>) {
    let i: Function = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      console.log('hanle');
      func.apply(this, args);
    }, delay);
  };
};
