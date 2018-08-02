import Vuex from 'vuex'

const state = {
  title: 'Hello my first Nuxt App',
  title2: 'This is the second one',
};

const mutations = {
  CHANGETITLE(state) {
    state.title = state.title2;
  },
  CHANGEINPUTTITLE(state, data) {
    state.title = data;
  },
};

const actions = {
  changeTitle: (store) => {
    store.commit('CHANGETITLE');
  },
  changeInputTitle: (store, data) => {
    store.commit('CHANGEINPUTTITLE', data);
  }
};

const getters = {
  title: state => state.title,
};


const store = () => {
  return new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
}

export default store;
