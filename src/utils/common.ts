
import {Toast} from 'antd-mobile-v5'
export const checkResponse = (res:any, show_msg = false) => {
    const code = res.code;
    const msg = res.message;
    if (code !== 0) {
        if (show_msg) {
            Toast.show(msg);
        }
        return false
    } else {
        return true
    }
};