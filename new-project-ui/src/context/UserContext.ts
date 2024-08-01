import { createContext } from "react";

export const UserContext = createContext({
    user: {},
    setUser: (_str: string) => {}
});
