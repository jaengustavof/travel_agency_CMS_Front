import { createContext, useContext } from "react";

const Context = createContext(null);

export const useGetter = () => {
  const { user, setUser} = useContext(Context);
  return { user, setUser};
};

export default Context;