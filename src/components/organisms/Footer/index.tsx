import type { HTMLAttributes } from 'react';

import Icon from '../../atoms/Icon';
import Link from '../../atoms/Link';
import Paragraph from '../../atoms/Paragraph';

const Footer = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="bg-grayscale-100 p-8" {...props}>
      <Paragraph className="m-0 inline-flex items-center gap-1 text-center">
        Made with <Icon icon="heart" /> by <Link to="https://github.com/diegohaz">Haz</Link>
      </Paragraph>
    </div>
  );
};

export default Footer;
