import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default () => {
    let store = new Vuex({
        state: {
            info: ''
        },
        getters: {
            info (state) {
                return state.info
            }
        },
        actions: {
            getInfo ({ commit }) {
                return axios.get("http://127.0.0.1:3000/api/getInfo").then((res) => {
                    commit('setInfo', res.data)
                })
            }
        },
        mutations: {
            setInfo (state, data) {
                state.info = data
            }
        }
    })
    return store
}