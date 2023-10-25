import React from 'react'
import HorizontalCard from '../Elements/horizontalCard'
import Nav from '../section/nav'
import axios from 'axios'
import { useState, useEffect } from "react";

export default function Institutes() {
  const [institutes, setInstitutes] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/univ')
    .then((res)=>{
        setData([...res.data])
        console.log(res)
    })
    .catch((e)=> console.log(e.message))
},[])
  return (
    <>  
        <Nav/>
        <div className='flex mx-10 pt-20 gap-5 flex-wrap justify-around'>
            <HorizontalCard link="https://images.unsplash.com/photo-1581362072978-14998d01fdaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVuaXZlcnNpdHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
            <HorizontalCard link="https://images.unsplash.com/photo-1581362072978-14998d01fdaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVuaXZlcnNpdHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
            <HorizontalCard link="https://images.unsplash.com/photo-1581362072978-14998d01fdaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVuaXZlcnNpdHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
            <HorizontalCard link="https://images.unsplash.com/photo-1581362072978-14998d01fdaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVuaXZlcnNpdHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
            
        </div>
    </>
  )
}
