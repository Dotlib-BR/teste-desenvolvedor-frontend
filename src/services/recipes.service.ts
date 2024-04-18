import { api } from "../api"
import { IMedicalRecipe } from "../utils/types/medicals-recipe.type"

export const getRecipes = async():Promise<IMedicalRecipe[]> =>{
    return await api.get("/data")
}