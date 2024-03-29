import Home from 'pages/Home'
import FoodConsumption from 'pages/FoodConsumption'

export default [
  {
    id: 'home',
    path: '/',
    label: '😷 Sick Animals',
    component: Home,
    exact: true,
  },
  {
    id: 'food-consumption',
    path: '/food-consumption',
    label: '🍔 Food Consumption',
    component: FoodConsumption,
    exact: true,
  }
]