import React, { useState } from 'react';
import GraphView from './graph';
import LoadingAnimation from './LoadingAnimation '
// import coverImage from './cover.png'
import infoImage from './info.svg'
import HeaderAnimation from './HeaderAnimation'
import ContactUs from './ContactUs'

const Home = () => {
  const [repoUrl, setRepoUrl] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    try {
      setLoading(true); // Set loading state to true
      const url = 'https://graphia-x-server.vercel.app/react_api/info/'; // Replace with your Django server URL and API endpoint
      // const url = 'http://localhost:8000/react_api/info/';
      const requestBody = {
        repoUrl: repoUrl.trim(),
      };

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const jsonData = await response.json();
      const parsedData = JSON.parse(jsonData); // Parse the JSON string
      console.log(jsonData);
      setResponse(parsedData);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  return (
    <div>
        {/* {!response && !loading && <img src={coverImage}  style={{width: 500, paddingTop: 80, paddingBottom: 40}} alt="Logo" />} */}
        {!response && !loading &&  <HeaderAnimation/>}
       
        {loading ? ( // Render the loader when loading state is true
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                <LoadingAnimation/>
            </div>
      ) : (
        
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', margin: 20}}>      
            <input
                style={{width: 300, height: 50, background: '#151515', borderRadius: 25, border: '0.50px #00FFFF solid', color: 'white', fontSize: 16, fontFamily: 'Roboto', paddingLeft: 20, paddingRight: 20}}
                type="text"
                value={repoUrl}
                onChange={(e) => setRepoUrl(e.target.value)}
                placeholder="Enter GitHub repo URL"
            />
            <button 
                style={{width: 130, height: 50, background: '#00FFFF', borderRadius: 25, border: '1.50px solid', color: '#299BAA', fontSize: 22, fontFamily: 'Roboto', fontWeight: 700, marginLeft: 20, cursor: 'pointer'}}
                onClick={handleClick}>Graph it
            </button>
        </div>
      )}
      {response && !loading && <GraphView graph={response} />}
      {!response && !loading && <img src={infoImage}  style={{width: 480, paddingTop: 20, paddingBottom: 20, paddingRight: 100}} alt="Logo" />}
      {!response && !loading && <ContactUs/>}
      {/* {!response && !loading && <p>No response yet.</p>} */}
    </div>
  );
};

export default Home;
