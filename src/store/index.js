import { createStore } from 'vuex'
import ConnectAPI from '../service/ConnectAPI'

export default createStore({
  state: {
    controller: new ConnectAPI(),
    donneesVelib : {},
    donneesEnCours : {},
    stationChoisi : {},
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
