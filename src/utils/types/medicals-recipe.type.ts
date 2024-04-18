import { IRecipeActivePrinciple } from "./recipe-active-principles.type";
import { IRecipeDocument } from "./recipe-document.type";

export interface IMedicalRecipe{
   id:string;
   name:string;
   published_at:string;
   company:string;
   documents:IRecipeDocument[];
   active_principles:IRecipeActivePrinciple[];
}