import './App.css';
import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listServiceMetadatas } from './graphql/queries';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { S3Image } from 'aws-amplify-react';

import clsx from 'clsx';

import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Copyright from './copyright';
import TopAndSideNavigation from './navigation';
import useStyles from './material-styles';


function App() {

  const [metadata, setMetadata] = useState([]);

  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  useEffect(() => {
    fetchMetadatas()
  }, []);

  async function fetchMetadatas() {
    try {
      const metadataData = await API.graphql(graphqlOperation(listServiceMetadatas))
      const metadata = metadataData.data.listServiceMetadatas.items;
      setMetadata(metadata)
      //console.log('Metadata: \n', metadata);
    } catch (err) { console.log('error fetching metadata:\n', err) }
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopAndSideNavigation/>
      
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12}>
              <Paper className={fixedHeightPaper}>
                {
                  metadata.map((card, index) => (
                    <div key={card.id ? card.id : index }>
                    <Flashcard card={card}/><br/>
                    </div>
                  ))
                }
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}

function Flashcard({card}) {

  // // Not needed, as <S3Image> takes care of this for us
  // const [iconUrl, setIconUrl] = useState();

  // useEffect(() => {
  //   fetchIconUrl()
  // }, []);

  // async function fetchIconUrl() {
  //   try {
  //     const url = await Storage.get(card.image, {
  //       level: 'public',
  //       download: false, // defaults to false
  //       contentType: 'image/svg+xml'
  //     });

  //     setIconUrl(url);
  //   } catch (err) { console.log('error fetching icon URL:\n', err) }
  // }

  return (
    <Grid container alignContent='center'>
      <Grid item xs={6} md={6} lg={6} >
        <Card>
          <CardHeader
            title={card.service}
          />
          <S3Image 
            imgKey={card.image}
            theme={{ photoImg: { width: '60px', height: '60px' }}}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {card.description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>

  );
}

export default withAuthenticator(App);
