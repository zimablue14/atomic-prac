import React from 'react';

import logo from './logo.svg';

type LogoImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

const LogoImage: React.FC<LogoImageProps> = (props) => {
  return <img src={logo} alt="Logo" className="h-auto w-24 object-contain" {...props} />;
};

export default LogoImage;
