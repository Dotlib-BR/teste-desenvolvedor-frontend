import { api } from "../api"
import { IMedicalRecipe } from "../utils/types/medicals-recipe.type"

export const getRecipes = async({page, name, company}:IRecipesParams):Promise<IMedicalRecipe[]> =>{
   const upperCaseName = name.toUpperCase();
   const upperCaseCompany = company.toLocaleUpperCase();

    return await api.get(`/data?_page=${page}&name=${upperCaseName}&company=${upperCaseCompany}`)

}
interface IRecipesParams {page:number, name:string, company:string}