import { IThemes } from "../../styles/types";

export interface IFooterData {
  id: number;
  content: number;
}

export interface IStyledSectionProps extends ISectionProps {
  theme: IThemes;
}

interface ISectionProps {
  isSelected: boolean;
}
