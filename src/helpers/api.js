import axios from "axios";
import {GET_CATS_BY_CATEGORY, GET_CATS_CATEGORIES} from './url_helpers'

export async function getCategories() {
    try {
        const response = await axios.get(GET_CATS_CATEGORIES);
        return response
    } catch (error) {
        console.error(error);
    }
}


export async function getCatsByCategory(categoryId,page=1) {
    try {
        const response = await axios.get(GET_CATS_BY_CATEGORY.replace('{categoryId}', categoryId).replace('{pageCount}',page));
        console.log('res',response)
        return response
    } catch (error) {
        console.error(error);
    }
}

