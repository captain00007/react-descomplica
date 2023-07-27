import { useState, createContext, useContext } from "react";

const Context = createContext();
export const useAppContext = () => useContext(Context);

const AppContext = ({ children }) => {
  const [cartQtd, setCartQtd] = useState(0);

  return (
    <Context.Provider value={{ cartQtd, setCartQtd }}>
      {children}
    </Context.Provider>
  );
};

export default AppContext;
