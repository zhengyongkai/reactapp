import { setStore , getStore} from '@/utils/storage'
export default {
    namespace: 'user', // 默认与文件名相同
    state: {
        status: false,
        userInfo: JSON.parse(getStore('userInfo') || [])
    },
    subscriptions: {
        setup({ dispatch, history }) {

        },
    },
    reducers: {
        setLogin(state, { payload }) {
            state.userInfo = payload
            // return `${state}_count`;
            return state
        },
        setLogged(state) {
            state.status = true;
            return state;
        }
    },
    effects: {
        *fetch({ type, payload }, { put, call, select }) {
            yield put({ type: 'add', payload: payload.count });
        },
        *SET_LOGGED({ type, payload }, { put, call, select }) {
            setStore('tokenList', payload.tokenList);
            setStore('logged', true);
            yield put({ type: 'setLogged', payload })
        },
        *SET_USER({ type, payload }, { put, call, select }) {
            setStore('userInfo', payload);
            yield put({ type: 'setLogin', payload })
        }
    },
}