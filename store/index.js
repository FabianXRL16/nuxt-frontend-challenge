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
    commit("CHANGE_UP");
  },
  async loadCharacters({commit}) {
    try {
      const api = "https://rickandmortyapi.com/api/character";
      const response = await axios.get(api);
      commit("SET_CHATRACTERS", response.data.results);
    } catch (error) {
      const err = new Error(error);
      console.error(err);
    }
  },
  registerCharacter({commit}, character){
    commit("ADD_CHARACTER",character);
  }
};

export const mutations = {
  CHANGE_UP(state) {
    state.up = !state.up;
  },
  SET_CHATRACTERS(state, characters) {
    state._characters = characters;
  },
  ADD_CHARACTER(state, newCharacter){
    state._characters.unshift(newCharacter)
  }
};
