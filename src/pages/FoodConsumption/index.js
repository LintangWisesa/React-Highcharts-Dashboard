import React, { useEffect, useState } from 'react'
import { Box, Grid, Paper, Typography, Table, TableCell, TableHead, TableRow, TableBody } from '@material-ui/core'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { generateHighchartsData } from './helper'
    
const FoodConsumption = () => {

  const [foodConsumption, setFoodConsumption] = useState(() => [])
  
  useEffect(() => {
    fetch('/api/food-consumption.json')
      .then((res) => res.json())
      .then((res) => {
        let data = res.data.foodConsumption.daily
        data.sort((x,y) => (x.day > y.day) ? 1 : (x.day === y.day) ? ((x.animal > y.animal) ? 1 : -1) : -1 )
        var merge = {};
        data.forEach((i) => {
          merge[i.day+'|'+i.month+'|'+i.year+'|'+i.animal] = (merge[i.day+'|'+i.month+'|'+i.year+'|'+i.animal] || 0) + i.meat;
        })
        data = Object.keys(merge).map((i) => {
          return { 
            day: i.split('|')[0], 
            month: i.split('|')[1],
            year: i.split('|')[2],
            // animal: i.split('|')[3], 
            // meat: merge[i].toFixed(2),
            [i.split('|')[3]]: merge[i].toFixed(2)
          }
        });
        
        var properData = {};
        for (var i = 0; i < data.length; i++) {
            var cur = data[i];
            if (cur.day in properData) {
                var pro_cur = properData[cur.day];
                // console.log(Object.keys(cur))
                for (var j=0; j < Object.keys(cur).length; j++){
                    pro_cur[Object.keys(cur)[j]] = cur[Object.keys(cur)[j]]
                }
            } else {
                properData[cur.day] = cur;
            }
        }

        let finData = [];
        for (var k in properData) {
            finData.push(properData[k]);
        }
        setFoodConsumption(finData)
        console.log(finData)
      })
  }, [])

  return(
    <div>
      
      <Grid spacing={3} container>
        <Grid xs={12} item>
          <Box component={Paper} height="100%">
            <Box p={3}>
              <Typography variant="h6" gutterBottom>
                <i class="far fa-chart-bar"></i> Food Consumption - Chart
              </Typography>
              
              <HighchartsReact
                highcharts={Highcharts}
                options={generateHighchartsData(foodConsumption)}
              />

            </Box>
          </Box>
        </Grid>
      </Grid>
      
      <Grid spacing={3} container>
        <Grid xs={12} item>
          <Box component={Paper} height="100%">
            <Box p={3}>
              <Typography variant="h6" gutterBottom>
                <i class="fas fa-table"></i> Food Consumption - Table
              </Typography>
              
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell><span role="img" aria-label="emopet">🐻</span> Beruang</TableCell>
                    <TableCell><span role="img" aria-label="emopet">🐊</span> Buaya</TableCell>
                    <TableCell><span role="img" aria-label="emopet">🐯</span> Macan</TableCell>
                    <TableCell><span role="img" aria-label="emopet">🐺</span> Serigala</TableCell>
                    <TableCell><span role="img" aria-label="emopet">🦁</span> Singa</TableCell>
                    <TableCell><span role="img" aria-label="emopet">🐍</span> Ular</TableCell>
                    <TableCell>Lainnya</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {foodConsumption.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.day}/{item.month}/{item.year}</TableCell> 
                      <TableCell>{item.BERUANG ? item.BERUANG : '0.00'}</TableCell>
                      <TableCell>{item.BUAYA ? item.BUAYA : '0.00'}</TableCell>
                      <TableCell>{item.MACAN ? item.MACAN : '0.00'}</TableCell>
                      <TableCell>{item.SERIGALA ? item.SERIGALA : '0.00'}</TableCell>
                      <TableCell>{item.SINGA ? item.SINGA : '0.00'}</TableCell>
                      <TableCell>{item.ULAR ? item.ULAR : '0.00'}</TableCell>
                      <TableCell>{item.LAINNYA ? item.LAINNYA : '0.00'}</TableCell> 
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

            </Box>
          </Box>
        </Grid>
      </Grid>
      
    </div>
  )
}

export default FoodConsumption
