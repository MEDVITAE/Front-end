import React, { createContext, useCallback } from "react";

interface IUsuarioLogado {
    children: React.ReactNode;
}

interface IUsuarioLogadoContextData {
    nomeUsuario: string;
    logout: () => void;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC<IUsuarioLogado> = ({ children }) => {

    const handleLogout = useCallback(() => {
        console.log("LOGOUT")
    }, []);

    return (
        <UsuarioLogadoContext.Provider value={{ nomeUsuario: 'Diego', logout: handleLogout }}>
            {children}
        </UsuarioLogadoContext.Provider>
    );
}