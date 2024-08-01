import { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext';

function PrintName() {

  const userContext = useContext(UserContext);

  return (
    <div>
        <p>{userContext.user.toString()}</p>
    </div>

  )
}

export default PrintName
