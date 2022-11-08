import { defineStore } from "pinia";
import productApi from '@/api/productApi'; 

export const productStore = defineStore('products store',{
    state : () =>({
        products:[],
        cart:[], // {id , quantity }
        saved:[],
    }),
    getters:{
        getProducts(state){
            return state.products
        }
    },
    actions:{
        async fetchProducts(){
            this.products = await productApi.products
        },
        saveItem(id){
            const item = this.cart.find(el => el.id == id)
            // this.cart.push(id)
            // console.log(item)
            if(!item){ 
                this.cart.push({
                    id:id,
                    quantity:1
                }
            )
            }else{
                this.cart.filter(el => {
                    if(el.id == id) el.quantity++ 
                })
            }
        }
    }
})
 