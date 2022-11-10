import { defineStore ,acceptHMRUpdate } from "pinia";
import productApi from '@/api/productApi'; 

export const productStore = defineStore('products store',{
    state : () =>({
        products:[],
        cart:[], // {id , quantity }
        saved:[],
        total:0,
    }),
    getters:{
        getProducts(state){
            return state.products
        },
        getCartItems : state => state.cart,
        // getTotal : state => state.total += state.cart.item.id*state.quantity
        getTotal(state){
            if(this.cart.length !=0 ) {
                state.cart.forEach(el=> state.total += el.item.price*el.quantity ) 
            }
        }
    },
    actions:{
        async fetchProducts(){
            this.products = await productApi.products
        },
        addItemToCart(pro){
            const item = this.cart.find(el => el.item.id == pro.id)
            if(!item){ 
                this.cart.push({
                    item:pro,
                    quantity:1
                })
            }else{
                this.cart.filter(el => {
                    if(el.item.id == pro.id) el.quantity++ 
                }) 
            } 
        },
        removeItem(item){ 
            this.cart = this.cart.filter(el => el.item.id != item.id)
        },
        calTotal(p,q){
            this.total += p*q
        }
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(productStore, import.meta.hot))
  }
 