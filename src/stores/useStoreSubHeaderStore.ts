import { create } from "zustand";

interface IUseStoreSubHeader{
    optionSelected: string,
    setOptionSelected: (option:string) => void
}

export const useStoreSubHheader = create<IUseStoreSubHeader>((set)=> ({
    optionSelected: `Home`,
    setOptionSelected: (option) => set({optionSelected:option})
}))