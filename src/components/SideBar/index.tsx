import React, {FC} from "react";
import CategoriesInterface from "../../Interfaces/CategoriesInterface";

interface SideBar {
    categories: CategoriesInterface[],
    changeCategory: any,
    selectedCategory: null | number
}

const Index: FC<SideBar> = ({categories, changeCategory, selectedCategory}) => {


    return (
        <div className='cats-page--sidebar'>
            {categories.map((category: { id: number, name: string }) => <div
                onClick={() => changeCategory(category.id)}
                className={`cats-page--sidebar_item ${selectedCategory === category.id && 'active-item'}`}
                key={category.id}>{category.name.toUpperCase()}</div>)}
        </div>
    )
}

export default Index