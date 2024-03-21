import { createContext, useContext } from "react";

const username = createContext([])
const useUserName = ()=> useContext(username)


export {username, useUserName};