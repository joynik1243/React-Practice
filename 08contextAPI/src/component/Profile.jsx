import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

function Profile() {

    const {user} = useContext(UserContext);


    return (
        <div>
            <h3>Profile: {user.username} </h3>
        </div>
    )
}

export default Profile
