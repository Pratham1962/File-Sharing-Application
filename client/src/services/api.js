import axios from 'axios';

const API_URL= 'http://localhost:8080';

export const uploadFile = async (data)=> {
    try{
        
        let response= await axios.post(`${API_URL}/upload`, data);
        return response.data;
    } catch(error){
        console.log('Error while calling the error', error.message);
        // The error object sends alot of information from which we want only the message 
    }
}

