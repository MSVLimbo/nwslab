import React, {FC, useCallback, useState} from "react";

import './index.scss'
import {useDispatch, useSelector} from "react-redux";
import {addCats, selectCats, setCategories, setCats} from "../../store";
import SideBar from '../../components/SideBar'
import CatCard from "../../components/CatCard/CatCard";
import {getCatsByCategory} from "../../helpers/api";

interface CatsPage {
}

const Index: FC<CatsPage> = () => {
    const mainData = useSelector(selectCats || [])
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null)
    const [pageCount, setPageCount] = useState<number>(1)
    const dispatch = useDispatch()

    const changeCategory = useCallback((categoryID: number) => {
        if (categoryID === selectedCategory) {
            // @ts-ignore
            getCatsByCategory(categoryID, pageCount).then(res => dispatch(addCats(res.data)))
            setPageCount(pageCount + 1)
        } else {
            // @ts-ignore
            getCatsByCategory(categoryID, pageCount).then(res => dispatch(setCats(res.data)))
            setPageCount(1)
        }
        setSelectedCategory(categoryID)
    }, [pageCount, selectedCategory])

    return (
        <div className='cats-page'>
            <SideBar categories={mainData.categories} changeCategory={changeCategory}
                     selectedCategory={selectedCategory}/>
            <div className='cats-page--list'>
                {mainData.cats.map(cat => <CatCard key={cat.id} breeds={cat.breeds} categories={cat.categories}
                                                   id={cat.id}
                                                   url={cat.url} width={cat.width} height={cat.width}/>
                )}
                {selectedCategory &&
                <button onClick={() => changeCategory(selectedCategory as number)} className={'load-more--button'}>LOAD
                    MORE
                </button>}
            </div>
        </div>
    )
}

export default Index