import { defineStore } from "pinia";
import productApi from '@/api/productApi'; 

export const productStore = defineStore('products store',{
    state : () =>({
        products:[],
        // pruduct.id , quantity 
        cart:[],
    }),
    getters:{
        getProducts(state){
            return state.products
        }
    },
    actions:{
        async fetchProducts(){
            this.products = await productApi.products
        }
    }
})
 