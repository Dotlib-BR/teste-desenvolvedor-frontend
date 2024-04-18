import { DocumentoTypeEnum } from "./enums/document-type.enum";

export interface IRecipeDocument {
  id: string;
  expedient: string;
  type: DocumentoTypeEnum;
  url: string;
}
