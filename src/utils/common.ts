
import {Toast} from 'antd-mobile-v5'
export const checkResponse = (res:any, show_msg = false) => {
    const code = res.success;
    const msg = res.msg;
    if (!code) {
        if (show_msg) {
            Toast.show(msg);
        }
        return false
    } else {
        return true
    }
};