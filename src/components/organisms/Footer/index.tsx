import clsx from 'clsx';

import Icon from '../../atoms/Icon';
import Link from '../../atoms/Link';
import Paragraph from '../../atoms/Paragraph';

type FooterProps = React.HTMLAttributes<HTMLDivElement>;

const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <div className={clsx('bg-gray-200 p-8', className)} {...props}>
      <Paragraph className="m-0 text-center align-middle">
        Made with <Icon icon="heart" /> by <Link href="https://github.com/diegohaz">Haz</Link>
      </Paragraph>
    </div>
  );
};

export default Footer;
