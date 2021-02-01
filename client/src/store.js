import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  me: {},
  room: "",
  history: [],
  chatMembers:[]
};
//save the connected user ID to Vuex store
const mutations = {
  setMe(state, { me }) {
    state.me = me;
  },
//save requested messages to vuex store
  addHistory(state, { history }) {
    history.forEach((element) => {
      state.history.push(element);
    });
  },
  //clear requested messages to vuex store
  clearHistory(state){
    state.history=[]
  },
  //save discus between two user
  setroom(state, num) {
    state.room = num;
  },
  setChatMembers(state, members) {
    state.chatMembers = members;
  },
};

//Get Data from vuex store
const getters = {
  getMyUuid: (state) => state.me.uuid,
  getHistoryMsgs: (state) => state.history,
  getroom: (state) => state.room,
  getChatMembers: (state) => state.chatMembers,
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
});