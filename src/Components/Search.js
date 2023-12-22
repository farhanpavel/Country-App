import React, { useState, useEffect } from 'react';
import Data from './Data';
import Loader from './Loader';

export default function Search(props) {
    const [user, setUser] = useState([]);
    var [newuser,setMoja]=useState(user);

  var taker=(e)=>{
    setUser([...user,...e]);
    setMoja([...newuser,...e]);
}
const changer = (e) => {
    const x = e.target.value.toLowerCase();
    if (!x) {
      setMoja(user);
    } else {
      const filter2 = user.filter((data) => {
        const y = data.name.common.toLowerCase();
        return y.startsWith(x);
      });
      setMoja(filter2);
    }
  };
  const compare = (e) => {
    const filter = newuser.filter((data) => e !== data.name.common);
    setMoja(filter);
  };


  return (
    <div>
      <input type="text" placeholder='Search Countries here' onChange={changer} />
      <Data value={taker}/>
       <div className='one'>
        {newuser.map((e) => {
          return  (<div>
          <Loader  value2={e} value3={compare} />
          </div>)
        })}
    </div>
    </div>
  );
}
