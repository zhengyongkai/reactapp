import { Toast } from 'antd-mobile-v5';
export const checkResponse = (res: any) => {
  const result = res;
  if (!result || !result.code || result.code != 200) {
    return false;
  } else {
    return true;
  }
};
export const getParamsNotNull = (obj: any) => {
  for (var key in obj) {
    if (obj[key] === '' || obj[key] === null || obj[key] === undefined) {
      delete obj[key];
    }
  }
  return obj;
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
