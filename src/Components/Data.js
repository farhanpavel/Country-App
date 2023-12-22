import React, { useEffect, useState } from 'react'

export default function Data(props) {
  var [user,setUser]=useState([]);
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then((e)=>{
            return e.json();
        })
        .then((e)=>{
          props.value(e);
        });
  },[]);


  return null;
}
