import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        user: {},
        resetEditPrice: false
    },
    getters: {
        user: function (state) {
            return state.user;
        }
    },
    mutations: {
        setUser: function (state, user) {
            state.user = user;
        },
    }
});
