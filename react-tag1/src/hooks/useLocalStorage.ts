import { useState } from "react";
import { UserType } from "../types/userTypes";


export function useLocalStorage(key: string) {


    const [value, setValue] = useState(() => {

        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : null;

    })


    const setLocalStorage = (newValue: string | UserType | boolean) => {

        setValue(newValue)
        localStorage.setItem(key, JSON.stringify(newValue))

    }

    const removeLocalStorage = () => {

        setValue(null)
        localStorage.removeItem(key)
    }

    return { value, setLocalStorage, removeLocalStorage }

}