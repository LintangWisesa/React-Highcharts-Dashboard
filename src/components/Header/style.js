import { makeStyles } from '@material-ui/core/styles';

const style = makeStyles(() => ({
  appBar: {
    zIndex: 2000,
    background: 'linear-gradient(45deg, #FE6B8B 10%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
  },
}))

export default style
