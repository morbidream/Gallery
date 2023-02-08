import { Grid } from '@mui/material';

import { CardItem } from './';
import {data} from '../../data/cards'

export const CardGrid = () => {
  return (
    <Grid container justifyContent="center" >
        { 
          data.map( card => (
            <CardItem 
              key={card.id} 
              {...card} 
            />
            
          ))
        }
    </Grid>
  )
}
