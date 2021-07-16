import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
export default function App() {
  const [value, ] = useState({
    name: ''
  })

  const [data, setData] = useState([])

  async function fetchData(value) {
    const url = "http://localhost:8000/search/Codigo_postal/"+value;
    const response = await fetch(url);
    const res = await response.json();
    setData(res)
  }

  function handleChange(e) {
    fetchData(e.target.value)
  }

  const classes = useStyles();
  return (

    <div className="" style={{ backgroundColor: "rgb(125,125,125)", height: "100vh" }}>
      <input type="text" value={value.search} onChange={handleChange} name="name" />
      <div>
      <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Nombre</TableCell>
            <TableCell align="left">Personal ocupado estrato</TableCell>
            <TableCell align="left">Razon social</TableCell>
            <TableCell align="left">Tipo de vialidad</TableCell>
            <TableCell align="left">Código de clase</TableCell>
            <TableCell align="left">Nombre de la vialidad</TableCell>
            <TableCell align="left">Numero exterior o km</TableCell>
            <TableCell align="left">Edificio piso o nivel</TableCell>
            <TableCell align="left">Numero interior</TableCell>
            <TableCell align="left">Tipo de asentamiento</TableCell>
            <TableCell align="left">Corredor industrial</TableCell>
            <TableCell align="left">Municipio</TableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="left">{row.Nombre_de_la_unidad_economica}</TableCell>
              <TableCell align="left">{row.Personal_ocupado_estrato}</TableCell>
              <TableCell align="left">{row.Razon_social}</TableCell>
              <TableCell align="left">{row.Tipo_de_vialidad}</TableCell>
              <TableCell align="left">{row.Codigo_de_la_clase_de_actividad}</TableCell>
              <TableCell align="left">{row.Nombre_de_la_vialidad}</TableCell>
              <TableCell align="left">{row.Numero_exterior_o_km}</TableCell>
              <TableCell align="left">{row.Edificio_piso_o_nivel}</TableCell>
              <TableCell align="left">{row.Numero_o_letra_interior}</TableCell>
              <TableCell align="left">{row.Tipo_y_nombre_del_asentamiento_humano}</TableCell>
              <TableCell align="left">{row.Corredor_industrial_centro_comercial_o_mercado_publico}</TableCell>
              <TableCell align="left">{row.Municipio}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
    </div>
  )
}