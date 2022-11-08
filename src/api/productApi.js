import axios from "axios";

const searchUrl = 'https://fakestoreapi.com/products?limit=16'
const res = () => {
    const res = axios.get(searchUrl)
    .then(res=> res.data)
    .catch(err =>  err )
    // console.log(res)
    return res;
}

export default {
    products: res()
}