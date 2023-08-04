import React from 'react';
import Lottie from 'react-lottie';
import network from './network.json';
import code from './code.json';

const LoadingAnimation = () => {
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: network,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: code,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions1} width={120}/>
      <Lottie options={defaultOptions2} width={120}/>
    </div>
  );
};

export default LoadingAnimation;
