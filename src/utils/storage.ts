export const PREFIX:String = 'ILUManageCloudtest_';


/**
 * 存储localStorage
 * @param name
 * @param content
 * @param duration Storage有效时间，单位：小时
 * @param set_time 是否设置时间
 * @returns {boolean}
 */
export const setStore = (name: string, content: any, set_time = false, duration = 0) => {
    if (!name) return false;
    name = PREFIX.concat(name);
    if (typeof content !== 'string') {
        content = JSON.stringify(content)
    }
    if (set_time) {
        let date = new Date;
        if (duration > 0) {
            content += '&' + (date.getTime() + duration * 3600 * 1e3)
        } else {
            content += '&0'
        }
        content += '&' + (date.getTime())
    }
    window.localStorage.setItem(name, content)
};
export const getStore = (name: string) => {
    if (!name) return false;
    name = PREFIX.concat(name);
    
    return window.localStorage.getItem(name)   || '{}'
};