import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';

const ContactUs = () => {
  const handleGithubClick = () => {
    // Redirect the user to the GitHub URL
    window.location.href = 'https://github.com/MohyiddineDilmi/GraphiaX';
  };

  const handleDiscordClick = () => {
    // Redirect the user to the Discord URL
    window.location.href = 'https://discord.gg/KAaHHBxM';
  };

  const buttonStyle = {
    margin: 5,
    width: 50, // Adjust the width to make the buttons wider
    height: 50,
    borderRadius: 25, // Rounded with 50px
    // padding: '10px 10px', // Add padding to make the buttons look better
    paddingLeft: 10,
    background: '#151515',
    color: '#a1a1a1',
    fontSize: '20px',
    fontWeight: 'bold',
    cursor: 'pointer',
    justifyContent: 'center', // Center the icon and text horizontally
    border: 'none'
  };

  return (
    <div>
      <div>
        <button onClick={handleGithubClick} style={buttonStyle}>
          <FontAwesomeIcon icon={faGithub} style={{ marginRight: '5px' }} />
        </button>
        <button onClick={handleDiscordClick} style={buttonStyle}>
          <FontAwesomeIcon icon={faDiscord} style={{ marginRight: '5px' }} />
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
