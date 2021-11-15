export default {
  namespace: 'count', // 默认与文件名相同
  state: {
    record: 0,
    current: 0,
  },
  subscriptions: {
    setup({ dispatch, history }) {

    },
  },
  reducers: {
    update(state) {
      return `${state}_count`;
    },
    add(state, { payload }) {

      state.record += payload
      
      return state;
    }
  },
  effects: {
    *fetch({ type, payload }, { put, call, select }) {
       yield put({ type: 'add', payload: payload.count });
    },
  },
}