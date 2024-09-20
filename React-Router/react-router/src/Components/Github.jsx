import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([]);
    useEffect(() => {//when the component will load useEffect will work
    fetch('https://api.github.com/users/hiteshchoudhary')
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        setData(data);
    })
    }, [])


  return (
    <div>
      <div className='text-center bg-gray-700 text-white p-4 text-3xl'>Github followers : {data.followers}</div>
    </div>
  )
}

export default Github
