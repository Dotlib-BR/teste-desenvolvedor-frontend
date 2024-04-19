import {
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { IMedicalRecipe } from "../../utils/types/medicals-recipe.type";
import { Row } from "../Row";
import { IFilterConfig } from "../../utils/types/flter-config.type";

interface ITable {
  recipes: IMedicalRecipe[];
  filterConfig: IFilterConfig;
  pagination: (page:number)=> void;
}
export const CollapsableTable = ({ recipes, filterConfig, pagination }: ITable) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>#</TableCell>
              <TableCell align="right">nome do medicamento</TableCell>
              <TableCell align="right">Nome do laboratório</TableCell>
              <TableCell align="right">Data de publicação</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {recipes.map((recipe) => (
              <Row key={recipe.id} recipe={recipe} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination count={filterConfig.last} variant="outlined" page={filterConfig.page} onChange={(event, page)=> pagination(page)}/>
    </>
  );
};
