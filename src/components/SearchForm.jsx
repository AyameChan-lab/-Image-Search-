import React,{ useContext,useState,useEffect } from 'react';
import { GlobalState } from '../App';
// React Icons 
import { BiSearchAlt } from 'react-icons/bi';

function SearchForm({whatsearch}) {
  // Check to make it not null.
  const [checkInput,setCheckInput] = useState('');
  // Check current page 
  const [checkSearchPage,setCheckSearchPage] = useState(''); 
  const { fetchFunc,index } = useContext(GlobalState);


  const handelSearch = (e)=>{
    e.preventDefault();
    const inputvalue = e.target.searchvalue.value;
    whatsearch(inputvalue);
    setCheckSearchPage(inputvalue);
    fetchFunc(`search/photos?page=1&query=${inputvalue}&client_id=${import.meta.env.VITE_API_KEY}`);
  }

  const enterSearch = (e)=>{
    if(e.key == 'Enter' && inputvalue){
      const inputvalue = e.target.searchvalue.value;
      whatsearch(inputvalue);
      setCheckSearchPage(inputvalue);
      fetchFunc(`search/photos?page=1&query=${inputvalue}&client_id=${import.meta.env.VITE_API_KEY}`);
    }
  }
  const changePage = (page)=>{
     {checkSearchPage ?  fetchFunc(`search/photos?page=${page}&query=${checkSearchPage}&client_id=${import.meta.env.VITE_API_KEY}`):null}
  }

  useEffect(()=>{
    changePage(index);
  },[index]);


  return (
    <form onSubmit={handelSearch} className="form-group">
        <input onKeyDown={enterSearch} onChange={e => setCheckInput(e.target.value)} name="searchvalue" className="input-style" placeholder="อยากค้นหารูปอะไร ? (ภาษาอังกฤษ)"></input>
        <button type="submit" disabled={!checkInput} className="search-btn">{<BiSearchAlt/>}</button>
    </form>
  )
}

export default SearchForm;