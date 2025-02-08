import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Verse = () => {
    const [verse, setVerse] = useState('');
    const [reference, setReference] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
  
    const apiKey = '346406db1f35fed41d9b36e128eaeb97'; // Replace with your actual API key
  
    useEffect(() => {
      // Fetch the daily verse when the component mounts
      axios
        .get('https://api.bible/v1/verses/daily', {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        })
        .then((response) => {
          // Adjust according to the API response structure
          const dailyVerse = response.data.data[0].content;
          const verseReference = response.data.data[0].reference;
  
          setVerse(dailyVerse);
          setReference(verseReference);
          setLoading(false);
        })
        .catch((err) => {
          setError('Error fetching verse');
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>{error}</div>;
    }
  
    return (
      <div className="votd">
        <h2>Daily Bible Verse</h2>
        <p>{verse}</p>
        <p><strong>{reference}</strong></p>
      </div>
    );
  };
  
  export default Verse;