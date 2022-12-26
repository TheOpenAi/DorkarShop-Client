import React, { createContext } from 'react';

export const UserContext = createContext({});
const AuthContext = (children:any) => {
    
  const info = {
    user:{
        name:'sakib',
    },  
  };
  return (
    <UserContext.Provider value={info}>
      {children.children}
	</UserContext.Provider>
  )
}
export default AuthContext;