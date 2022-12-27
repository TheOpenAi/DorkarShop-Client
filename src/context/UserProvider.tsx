import React, { createContext, useEffect, useState } from 'react';

export type AuthUser = {
    name: string
    email: string
    role: string
}

type UserContextType = {
    user: AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

type UserContextProviderProps = {
    children: React.ReactNode
}

export const UserContext = createContext<UserContextType | null>(null)

const UserProvider = ({ children }: UserContextProviderProps) => {
    const [user, setUser] = useState<AuthUser | null>(null)


    const loggedUser = localStorage.getItem('loggedUser');
    const currentUser = JSON.parse(String(loggedUser));
    console.log(currentUser);
    useEffect(() => {
        setUser({
            name: currentUser?.name,
            email: currentUser?.email,
            role: currentUser?.role
        })
    }, [currentUser?.name, currentUser?.email, currentUser?.role])



    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;


