import { useState,useEffect } from 'react';
import axios from 'axios';

const useAxios = ( defaultSearch )=>{
    const [response,setResponse] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('');

    axios.defaults.baseURL = 'https://api.unsplash.com/';

    const fetchData = async (endpoint)=>{
        try {
            setLoading(true);
            const res = await axios(endpoint);
            // console.log(res)
            setResponse(res.data.results);
        } catch(err) {
            setError(err);
        }
        finally {
            setLoading(false);
        }
    };


    useEffect(()=>{
      fetchData(defaultSearch);
    },[defaultSearch]);

    // console.log(response);
    return {
        response,
        loading,
        error,
        fetchFunc: fetchData
    };
};

export default useAxios;