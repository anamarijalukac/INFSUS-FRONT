import axios from "axios";

const url='http://localhost:5000/';


export const fetchOrchestras=()=> axios.get(`${url}/orchestra`);
export const fetchOrchestrasById=(id)=> axios.get(`${url}/${id}/orchestra`);

