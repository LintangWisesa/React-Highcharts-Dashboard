import React, { useEffect, useState } from 'react'
import { Box, Grid, Paper, Typography } from '@material-ui/core'
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
        data.forEach(function(o){
          merge[o.day+'|'+o.month+'|'+o.year+'|'+o.animal] = (merge[o.day+'|'+o.month+'|'+o.year+'|'+o.animal] || 0) + o.meat;
        })
        data = Object.keys(merge).map(function(i){
          return { 
            day: i.split('|')[0], 
            month: i.split('|')[1],
            year: i.split('|')[2],
            animal: i.split('|')[3], 
            meat: merge[i] 
          }
        });
        setFoodConsumption(data)
      })
  }, [])

  return(
    <div>
      
      <Grid spacing={3} container>
        <Grid xs={12} item>
          <Box component={Paper} height="100%">
            <Box p={3}>
              <Typography variant="h6" gutterBottom>
                Food Consumption
              </Typography>
              
              <HighchartsReact
                highcharts={Highcharts}
                options={generateHighchartsData(foodConsumption)}
              />

            </Box>
          </Box>
        </Grid>
      </Grid>
      
      <div>
        {foodConsumption.map((dailyFood) => (
          <p key={foodConsumption.indexOf(dailyFood)}>
            <span> Day {dailyFood.day}</span>
            <span> Month {dailyFood.month}</span>
            <span> Year {dailyFood.year}</span>
            <span> {dailyFood.animal}</span>
            <span> {dailyFood.meat}</span>
          </p>
        ))}
      </div>
      
    </div>
  )
}

export default FoodConsumption
