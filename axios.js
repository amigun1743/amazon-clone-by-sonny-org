import axios from "axios";

const instance = axios.create({
    baseURL:"http://us-central1-challenge-e20ce.cloudfunctions.net/api" 
    
    // "http://localhost:5001/challenge-e20ce/us-central1/api"
});

export default instance;
