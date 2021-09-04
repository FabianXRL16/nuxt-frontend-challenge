export const state = () => ({
  up: false,
  _characters: []
});

export const getters = {
  getUp(state) {
    return state.up;
  },
  getCharacters(state) {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then(res => {
        state._characters = res.data;
      })
      .catch(e => console.error(e));
    return state._characters;
  }
};

export const actions = {
  showForm({ commit }) {
    commit("changeUp");
  }
};

export const mutations = {
  changeUp(state) {
    state.up = !state.up;
  }
};
