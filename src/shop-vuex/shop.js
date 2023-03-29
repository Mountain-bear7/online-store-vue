import {createStore} from 'vuex'

let shop = createStore({
    state:{
        cart: []
    },
    mutations:{
        setCart: (state, product) =>{
            state.cart.push(product)
        },
        removeFromCart:(state, index) =>{
            state.cart.splice(index,1)
        }
    },
    actions:{
        add_basket({commit}, product){
            commit('setCart', product)
        },
        removeCart({commit}, index){
            commit('removeFromCart', index)
        }
    },
    getters:{
      basket(state){
          return state.cart
      }
    },
});

export default shop;