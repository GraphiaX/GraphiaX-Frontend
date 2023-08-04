import React from 'react';
import Lottie from 'react-lottie';
import network from './network_black.json';

const HeaderAnimation = () => {
  const defaultOptions1 = {
    loop: false,
    autoplay: true,
    animationData: network,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div style={{paddingTop: 80, paddingBottom: 40}}>
      <Lottie options={defaultOptions1} width={200}/>
    </div>
  );
};

export default HeaderAnimation;
