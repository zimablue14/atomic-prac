import React from 'react';

import logo from './logo.svg';

type LogoImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

const LogoImage: React.FC<LogoImageProps> = (props) => <img alt="Logo" src={logo} {...props} />;

export default LogoImage;
