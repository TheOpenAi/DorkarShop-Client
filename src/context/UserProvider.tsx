import React, { createContext, useEffect, useState } from 'react';

export type AuthUser = {
    name: string
    email: string
    role: string
}

type UserContextType = {
    user: AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
    loading: any
    setLoading: React.Dispatch<any>
}

type UserContextProviderProps = {
    children: React.ReactNode
}

export const UserContext = createContext<UserContextType | null>(null)

const UserProvider = ({ children }: UserContextProviderProps) => {
    const [user, setUser] = useState<AuthUser | null>(null)
    const [loading, setLoading] = useState<any>(true);


    const loggedUser = localStorage.getItem('loggedUser');
    const currentUser = JSON.parse(String(loggedUser));

    useEffect(() => {
        setUser({
            name: currentUser?.name,
            email: currentUser?.email,
            role: currentUser?.role
        })
        setLoading(false)
    }, [currentUser?.name, currentUser?.email, currentUser?.role])

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading
    }


    return (
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;


