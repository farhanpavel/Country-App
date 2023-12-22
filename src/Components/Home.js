import React, { useState ,useEffect} from 'react'
import Data from './Data'
import Loader from './Loader';

import Search from './Search';

export default function Home() {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);

  };
   
  return (
    <div className='three'>
      <h1>Country App</h1>
      <Search  />
     
      
    </div>
  )
}
