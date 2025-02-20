'use client'

import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";

const CustomTable = ({ headers, rows, uniqueKey }) => {
  const theme = useTheme(); // Usamos el tema para obtener breakpoints

  return (
    <div
      style={{
        maxWidth: "100%", // Asegura que la tabla no se desborde
        margin: "0 auto",
        marginTop: "3rem",
        overflowX: "hidden", // Elimina el desplazamiento horizontal
      }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ width: "100%" }} aria-label="reusable table">
          <TableHead>
            <TableRow>
              {headers.map((header, index) => (
                <TableCell
                  key={index}
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    wordWrap: "break-word", // Asegura que los textos largos no se desborden
                    padding: "8px",
                    fontSize: "16px", // Ajusta el tamaño de la fuente
                    [theme.breakpoints.down("sm")]: {
                      fontSize: "14px", // Reduce el tamaño en pantallas pequeñas
                    },
                  }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row[uniqueKey]}>
                {headers.map((header, index) => (
                  <TableCell
                    key={index}
                    align="center"
                    sx={{
                      wordWrap: "break-word",
                      padding: "8px",
                      fontSize: "14px", // Ajusta el tamaño de la fuente
                      [theme.breakpoints.down("sm")]: {
                        fontSize: "12px", // Reduce el tamaño en pantallas pequeñas
                      },
                    }}
                  >
                    {row[header.toLowerCase()]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CustomTable;
