import { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext';

function SetUser() {

  const [value, setValue] = useState("");
  const userContext = useContext(UserContext);

  function change() {
    console.log('we did something....')
    userContext?.setUser(value);
  }

  return (
    <div>
        <input value={value} onChange={(e) => setValue(e.target.value)} type='text' />
        <button onClick={change}>Change Name!</button>
    </div>

  )
}

export default SetUser
