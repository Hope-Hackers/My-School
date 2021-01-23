import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  me: {},
  room: "",
  history: [],
};

const mutations = {
  setMe(state, { me }) {
    state.me = me;
  },
  addHistory(state, { history }) {
    history.forEach((element) => {
      state.history.push(element);
    });
  },
  setroom(state, num) {
    state.room = num;
  },
};

const getters = {
  getMyUuid: (state) => state.me.uuid,
  getHistoryMsgs: (state) => state.history,
  getroom: (state) => state.room,
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
});
