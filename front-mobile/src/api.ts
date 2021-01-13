import axios from "axios";

const API_URL = 'https://aline-sds2-nelio.herokuapp.com';

export function fetchOrders(){
    return axios(`${API_URL}/orders`)
}