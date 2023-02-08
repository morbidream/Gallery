
import { Grid, Box, Avatar, Typography } from '@mui/material';

import imgCard from '../../assets/img/card.jpg';
import avatar from '../../assets/img/avatar.png';

export const CardItem = ({ name, tag, url }) => {
  return (
    <Grid item sx={{ m: 2, backgroundColor:'secondary.light', borderRadius: '10px' }} >
        <Box
            component="img"
            sx={{ width: { xs: 300, md: 350 }, borderRadius: '10px 10px 0px 0px' }}
            alt="TAZOURIgallery"
            src={ url }
        />
        <Grid 
            container
            alignItems="center"
            spacing={2}
            padding={1}
        >
            <Grid item>
                <Avatar alt="avatar" src={ avatar } />
            </Grid>
            <Grid item>
                <Typography>{name}</Typography>
                <Typography color="inherit">#{ tag }</Typography>
            </Grid>
        </Grid>
        
    </Grid>
  )
}
