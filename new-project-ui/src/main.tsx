import React, { ReactNode, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import SetUser from './components/SetUser.tsx'
import { UserContext } from './context/UserContext.ts';

interface Props {
  children?: ReactNode
  name?: string
  // any props that come into the component
}

function Component({ children, name }: Props) {
  const [user, setUser] = useState("John Doe!");

  const setAndLogUser = (somethingElse: string) => {
    console.log(name);
    setUser(somethingElse);
  }

  return (
    <UserContext.Provider value={{
      user,
      setUser: setAndLogUser,
    }}>
        <SetUser />
      { children }
    </UserContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Component name="hello world!">
      <App />
    </Component>
  </React.StrictMode>,
)

