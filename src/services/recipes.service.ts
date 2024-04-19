import { api } from "../api"
import { IMedicalRecipe } from "../utils/types/medicals-recipe.type"

export const getRecipes = async({page}:IRecipesParams):Promise<IMedicalRecipe[]> =>{
    return await api.get(`/data?_page=${page}`)

}
interface IRecipesParams {page:number}