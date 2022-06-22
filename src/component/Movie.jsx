import React,{useState} from 'react';
import {FaHeart,FaRegHeart} from 'react-icons/fa'
import { UserAuth } from './context/Authcontex';
import { db } from '../firebase';
import { arrayUnion,doc,updateDoc } from 'firebase/firestore';
import { async } from '@firebase/util';

const Movie=({e,i})=>{
    const [like,setLike]=useState(false)
    const {saved,setSaved}=useState(false)
    const {user}=UserAuth();

    const movieId=doc(db,'users',`${user?.email}`)

    const saveShow =async()=>{
      if(user?.email){
        setLike(!like)
        setSaved(true)
        await updateDoc(movieId,{
          savedShow: arrayUnion({
            id: e.id,
            title:e.title,
            img:e.backdrop_path
          })
        })
      }else{
        alert('please log in to save a movie')
      }
    }

    return(
        <>
              <div key={i} className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] h-[200px] inline-block cursor-pointer relative p-2">
              <img
                className="w-full h-full object-cover block"
                src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`}
                alt={e.title}
              />
              <div className="absolute top-0 left-0 h-full w-full opacity-0 hover:bg-black/80 hover:opacity-100 text-white">
                <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">{e?.title}</p>
                <p onClick={saveShow}>
                    {like?<FaHeart className="absolute top-4 left-4 text-gray-300"/>:<FaRegHeart className="absolute top-4 left-4 text-gray-300"/>}
                </p>
              </div>
              </div>
        </>
    )
}
export default Movie