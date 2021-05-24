import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { listServiceMetadatas } from './graphql/queries';
import { withAuthenticator } from '@aws-amplify/ui-react';

const initialState = { name: '', description: '' }

function App() {

  const [formState, setFormState] = useState(initialState);
  const [metadata, setMetadata] = useState([]);

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
    <div className="App">
      {
        metadata.map((metaItem, index) => (
          <div key={metaItem.id ? metaItem.id : index}>
            <p>{metaItem.service}</p>
            <p>{metaItem.description}</p>
          </div>
        ))
      }
    </div>
  );
}

export default withAuthenticator(App);
