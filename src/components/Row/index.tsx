import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import {
  Box,
  Collapse,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { IMedicalRecipe } from "../../utils/types/medicals-recipe.type";

interface IRow {
  recipe: IMedicalRecipe;
}
export const Row = ({ recipe }: IRow) => {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {recipe.id}
        </TableCell>
        <TableCell align="right">{recipe.name}</TableCell>
        <TableCell align="right">{recipe.company}</TableCell>
        <TableCell align="right">{recipe.published_at}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Grid container spacing={2}>
                <Grid sm={12} md={6}>
                  <Typography variant="subtitle1" gutterBottom component="div">
                    Documentos
                  </Typography>
                  <Table size="small" aria-label="purchases">
                    <TableHead>
                      <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Expedient</TableCell>
                        <TableCell align="right">Type</TableCell>
                        <TableCell align="right">URL</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {recipe.documents.map((document) => (
                        <TableRow key={document.id}>
                          <TableCell component="th" scope="row">
                            {document.id}
                          </TableCell>
                          <TableCell>{document.expedient}</TableCell>
                          <TableCell align="right">
                            {document.type}
                          </TableCell>
                          <TableCell align="right">
                          {document.url}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Grid>
                <Grid sm={12} md={6}>
                  <Typography variant="subtitle1" gutterBottom component="div">
                    Principio Ativo
                  </Typography>
                  <Table size="small" aria-label="purchases">
                    <TableHead>
                      <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Name</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {recipe.active_principles.map((active_principle) => (
                        <TableRow key={active_principle.id}>
                          <TableCell component="th" scope="row">
                            {active_principle.id}
                          </TableCell>
                          <TableCell>{active_principle.name}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};
