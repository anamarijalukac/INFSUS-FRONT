import axios from "axios";

const url='http://localhost:8080';


export const fetchOrchestras=()=> axios.get(`${url}/orchestra`);
export const fetchOrchestrasById=(id)=> axios.get(`${url}/orchestra/${id}`);
export const createOrchestra=(orchestra)=> axios.post(`${url}/orchestra`,orchestra);
export const deleteOrchestra=(id)=> axios.delete(`${url}/orchestra/${id}`);


export const fetchUsers=()=> axios.get(`${url}/user`);
export const fetchUserById=(id)=> axios.get(`${url}/user/${id}`);

