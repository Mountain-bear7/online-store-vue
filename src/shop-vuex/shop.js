import {createStore} from 'vuex'


//shop это глобальная база знаний магазина
let shop = createStore({
    state:{
        cart: []
    },
    //состояния, тут хранятся всякие обьекты, массивы и вся такая история
    mutations:{
        setCart: (state, product) =>{
            state.cart.push(product)
        },
        removeFromCart:(state, index) =>{
            state.cart.splice(index,1)
        }
    },
    //мутации, с помощью них меняются данные в state, они синхронные, то есть
    //если вызывать несколько выполнится одна и только потом другая
    actions:{
        add_basket({commit}, product){
            commit('setCart', product)
        },
        removeCart({commit}, index){
            commit('removeFromCart', index)
        }
    },
    //это тоже что и мутация, но асинхронная, можно несколько сразу
    getters:{
      basket(state){
          return state.cart
      }
    },
    //дает возможность получить инфу данных в state
});

export default shop;