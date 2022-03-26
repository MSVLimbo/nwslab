const BASE_URL = 'https://api.thecatapi.com/v1'

export const GET_CATS_CATEGORIES = `${BASE_URL}/categories`
export const GET_CATS_BY_CATEGORY = `${BASE_URL}/images/search?limit=10&page={pageCount}&category_ids={categoryId}`