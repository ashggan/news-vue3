import axios from "axios";

const searchUrl = ''
const res = () => {
    const res = axios.get(searchUrl)
    .then(res=> res.data)
    .catch(err => console.error(err))

    return res;
}

export default {
    products: res()
}