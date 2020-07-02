import React, { useEffect, useState } from 'react'
import { Box, Grid, Paper, Table, TableCell, TableHead, TableRow, TableBody, Typography } from '@material-ui/core'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import { generateHighchartsData } from './helper'

const Home = () => {
  const [sickAnimalsData, setSickAnimalsData] = useState([])

  useEffect(() => {
    fetch('/api/home.json')
      .then((res) => res.json())
      .then((res) => {
        setSickAnimalsData(res.data.summary.sickAnimals)
      })
  }, [])

  return (
    <Grid spacing={3} container>
      <Grid xs={8} item>
        <Box component={Paper} height="100%">
          <Box p={3}>
            <Typography variant="h6" gutterBottom>
              <i class="fas fa-procedures"></i> Sick Animals
            </Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Nama Binatang</TableCell>
                  <TableCell>Jumlah</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sickAnimalsData.map((sickAnimal) => (
                  <TableRow key={sickAnimal.id}>
                    <TableCell>
                      {sickAnimal.name === 'BERUANG' ? <span role="img" aria-label="emopet"> 🐻 </span> : 
                      (sickAnimal.name === 'BUAYA' ? <span role="img" aria-label="emopet"> 🐊 </span> : 
                      (sickAnimal.name === 'MACAN' ? <span role="img" aria-label="emopet"> 🐯 </span> : 
                      (sickAnimal.name === 'SERIGALA' ? <span role="img" aria-label="emopet"> 🐺 </span> : 
                      (sickAnimal.name === 'SINGA' ? <span role="img" aria-label="emopet"> 🦁 </span> : 
                      (sickAnimal.name === 'ULAR' ? <span role="img" aria-label="emopet"> 🐍 </span> : ''
                      )))))}
                      {sickAnimal.name}
                    </TableCell>
                    <TableCell>{sickAnimal.count}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Box>
      </Grid>
      <Grid xs={4} item>
        <Box component={Paper} height="100%">
          <Box p={3}>
            <HighchartsReact
              highcharts={Highcharts}
              options={generateHighchartsData(sickAnimalsData)}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Home
