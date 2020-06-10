import React, { Fragment } from 'react';

import { Grid } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import ParallaxBox from '../parallaxBox';
const destinations = [
  {
    destination: 'japan',
    period: '2019-2020',
    description: 'it was good',
    accomodations: 'cozy?',
    activities: 'fun!'

  },
  {
    destination: 'japan2',
    period: '2019-2020',
    description: 'it was good',
    accomodations: 'cozy?',
    activities: 'fun!'

  }, {
    destination: 'japan3',
    period: '2019-2020',
    description: 'it was good',
    accomodations: 'cozy?',
    activities: 'fun!'

  }, {
    destination: 'japan4',
    period: '2019-2020',
    description: 'it was good',
    accomodations: 'cozy?',
    activities: 'fun!'

  }, {
    destination: 'japan5',
    period: '2019-2020',
    description: 'it was good',
    accomodations: 'cozy?',
    activities: 'fun!'

  },
]

const DestinationPage = (props) => {
  let { destination } = useParams();

  let info = destinations.filter(item => item.destination === destination).pop();
  if (!info) return <h1>Opps</h1>

  return (

    <Grid container>
      <Grid item xs={12} align="center">
        <Fragment>
          <ParallaxBox
            imageUrl='https://boatingnz.co.nz/wp-content/uploads/2019/11/boating-nz-image-1075-underway.jpg'
            heading={destination}
            fullScreen='true'
          />
          <h1>Peropd</h1>
          <h2>{info.period}</h2>
          <h1>Accomodation</h1>
          <h2>{info.accomodations}</h2>
          <h1>Activitys</h1>
          <h2>{info.activities}</h2>
        </Fragment>

      </Grid>
    </Grid>
  )
}

export default DestinationPage;