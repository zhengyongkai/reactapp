export default {
  namespace: 'mask', // 默认与文件名相同
  state: {
    maskHomeVisable: false,
    current: 0,
  },
  subscriptions: {
    setup({ dispatch, history }) {},
  },
  reducers: {
    setMaskHomeVisable(state, { payload }) {
      state.maskHomeVisable = payload;
      return state;
    },
  },
  effects: {
    *SET_HOME_VISABLE({ type, payload }, { put, call, select }) {
      console.log(payload);
      yield put({ type: 'setMaskHomeVisable', payload: payload.value });
    },
  },
};
