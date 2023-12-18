import { useState,createContext,useEffect } from 'react'
import './App.css'
//  Components
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import Images from './components/Images';
import ChangePage from './components/ChangePage';
import Footer from './components/Footer';
// Hooks Setting
import useAxios from './hook/useAxios';
export const GlobalState = createContext();

function App() {
  const [index,setIndex] = useState(1);
  const [whatsearch,setWhatSearch] = useState('japan');
  const [num,setNum] = useState(1);
  // ทำให้ num หยุดนื่งไม่ไปโดน useEffect ที่ดักเอาไว้ใน hook/useAxios.js
  useEffect(()=>{
    if(whatsearch == 'japan'){
      setNum(index);
    }else {
      setNum(num);
    }
  },[index])
  const { response,loading,error,fetchFunc } = useAxios(`search/photos?page=${num}&query=japan&client_id=${import.meta.env.VITE_API_KEY}`);
  // Global States
  const value = {
    response,
    loading,
    error,
    fetchFunc,
    index
  }

  console.log(error);
  console.log('render')

  const bgUrl = 'https://c4.wallpaperflare.com/wallpaper/430/4/13/5bd0e9ce6bc10-wallpaper-preview.jpg';
  return (
    <GlobalState.Provider value={value}>
    <img className="background-main" style={{zIndex: '-1'}} src={bgUrl}></img>
    <Header>
      <SearchForm whatsearch={setWhatSearch}/>
    </Header>
    <Images searchthe={whatsearch}/>
    <ChangePage setIndex={setIndex}/>
    <Footer/>
    </GlobalState.Provider>
  )
}

export default App
