import { createContext, useContext, useState } from "react";

export interface AppState {
    name?: string;
    email?: string;
    phone?: string;
    plan?: string;
    pricing?: string;
    price?: number;
}

const initialState: AppState = {
    name: "",
    email: "",
    plan: "",
    pricing: "",
    price: 0,
};

type AppStateContextValue = [
    AppState,
    React.Dispatch<React.SetStateAction<AppState>>
];

export const AppStateContext = createContext<AppStateContextValue>([
    initialState,
    () => null,
]);

export function AppProvider({ children }: { children: React.ReactNode }) {
    const [state, setState] = useState({});
    return (
        <AppStateContext.Provider value={[state, setState]}>
            {children}
        </AppStateContext.Provider>
    );
}

export function useAppState() {
    return useContext(AppStateContext);
}
