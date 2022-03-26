import {configureStore, createSlice, PayloadAction} from '@reduxjs/toolkit'
import CatInterface from './Interfaces/CatInterface'
import CategoriesInterface from "./Interfaces/CategoriesInterface";

interface CatsSliceState {
    cats: CatInterface[],
    categories: CategoriesInterface[]
}

const initialState: CatsSliceState = {
    cats: [],
    categories: [],
}

export const catsSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setCats: (state, action: PayloadAction<CatInterface[]>) => {
            state.cats = action.payload
        },
        addCats: (state, action: PayloadAction<CatInterface[]>) => {
            state.cats = [
                ...state.cats,
                ...action.payload
            ]
        },
        setCategories: (state, action: PayloadAction<CategoriesInterface[]>) => {
            state.categories = action.payload
        },
    },
})

export const {setCategories, setCats, addCats} = catsSlice.actions

const store = configureStore({
    reducer: {
        cats: catsSlice.reducer,
        categories: catsSlice.reducer
    },
})

type RootState = ReturnType<typeof store.getState>

export const selectCats = (state: RootState) => state.cats

export default store;