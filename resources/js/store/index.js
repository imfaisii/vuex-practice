const { createStore } = require("vuex");

export default createStore({
    state: {
        products: [
            {
                id: 1,
                name: "Product 1",
                price: 100,
            },
            {
                id: 2,
                name: "Product 2",
                price: 200,
            },
            {
                id: 3,
                name: "Product 3",
                price: 300,
            },
        ],
        counter: 0,
    },
    mutations: {
        increment(state, number) {
            state.counter += number;
        },
        decrement(state, number) {
            state.counter -= number;
        },
    },
    actions: {
        increment({ commit }) {
            axios(
                "https://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=1"
            ).then((response) => {
                commit("increment", response.data[0]);
            });
        },
        decrement({ commit }) {
            axios(
                "https://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=1"
            ).then((response) => {
                commit("decrement", response.data[0]);
            });
        },
    },
    getters: {},
    modules: {},
});
