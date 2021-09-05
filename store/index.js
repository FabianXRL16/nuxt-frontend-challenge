import axios from "axios";

export const state = () => ({
  up: false,
  _characters: []
});

export const getters = {
  getUp(state) {
    return state.up;
  },
  getCharacters(state) {
    return state._characters;
  }
};

export const actions = {
  showForm({ commit }) {
    commit("changeUp");
  },
  async loadCharacters({commit}) {
    try {
      const api = "https://rickandmortyapi.com/api/character";
      const data = await (await axios.get(api)).data.results;
      commit("SET_CHATRACTERS", data);
    } catch (error) {
      const err = new Error(error);
      console.error(err);
    }
    // axios
    //   .get("https://rickandmortyapi.com/api/character")
    //   .then(res => {
    //     state.commit("SET_CHATRACTERS",res.data.results)
    //   })
    //   .catch(e => console.error(e));
  },
};

export const mutations = {
  changeUp(state) {
    state.up = !state.up;
  },
  SET_CHATRACTERS(state, characters) {
    state._characters = characters;
  }
};
