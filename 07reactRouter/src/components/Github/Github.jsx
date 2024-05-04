import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    let data = useLoaderData();
    // let [data, setData] = React.useState({});
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/joynik1243")
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // })

    return (
        <div className='bg-gray-800 text-white'>
        <div className='text-center m-3 p-3 text-3xl'>Github</div>
        <div className='text=center m-3 p-5 text-xl flex flex-wrap justify-around'>
            <img src={data.avatar_url} width="300" alt="" />
            <div>
                <div>
                    Username: {data.login}
                </div>
                <div>
                    Name: {data.name}
                </div>
                <div>
                    Bio: {data.bio}
                </div>
            </div>

        </div>

        </div>

    )
}

export default Github


export const githubInfoLoader = async ()=>{
    let res = await fetch("https://api.github.com/users/joynik1243");
    return res.json();
}