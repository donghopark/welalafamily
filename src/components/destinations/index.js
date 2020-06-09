import React, { Fragment } from 'react';

import { Grid, Button } from '@material-ui/core';
import { Route, Switch, useRouteMatch, useParams } from 'react-router-dom';
import ParallaxBox from '../parallaxBox';
import StyledLink from '../styledLink';
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

const DestinationsPage = (props) => {
  const { path, url } = useRouteMatch();
  let { topicId } = useParams();

  return (

    <Grid container>
      <Grid item xs={12} align="center">
        <Switch>
          <Route exact path={path}>
            <Fragment>
              <ParallaxBox
                imageUrl='https://boatingnz.co.nz/wp-content/uploads/2019/11/boating-nz-image-1075-underway.jpg'
                heading='Destinations'
                description='The most spectacular experiences around the world'
                buttonText='Join'
                fullScreen='true'
              />
              {destinations.map(destination =>
                
                  <StyledLink key={destination.destination} to={'/destinations/' + destination.destination}>
                    <Button>{destination.destination}</Button>
                  </StyledLink>

                

              )}
            </Fragment>
          </Route>
          <Route path={`${path}/:destination`}>
            <Destination />
          </Route>
        </Switch>
      </Grid>
    </Grid>
  )
}



const Destination = () => {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { destination } = useParams();

  let info = destinations.filter(item => item.destination === destination).pop();
  if (!info) return <h1>Opps</h1>
  return (
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


  );
}


export default DestinationsPage;