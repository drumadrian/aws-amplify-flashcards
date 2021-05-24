import './App.css';
import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listServiceMetadatas } from './graphql/queries';
import { withAuthenticator } from '@aws-amplify/ui-react';

import clsx from 'clsx';

import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Copyright from './copyright';
import TopAndSideNavigation from './navigation';
import useStyles from './material-styles';

const initialState = { name: '', description: '' }

function App() {

  const [formState, setFormState] = useState(initialState);
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
                Blah Blah Blah
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

export default withAuthenticator(App);
