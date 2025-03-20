import {create} from 'zustand'

type CountStoreType ={

    initValue: number,
    dec: ()=>void,
    inc:()=>void
}

export const useCountStore = create<CountStoreType>((set)=>({

    initValue: 1,
    inc: ()=> set((state:{initValue: number}) => ({initValue: state.initValue +1})), 
    dec: () => set((state: { initValue: number }) => ({ initValue: state.initValue - 1 })) 


}))