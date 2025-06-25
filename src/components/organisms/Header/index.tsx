import clsx from 'clsx';

import Block from '../../atoms/Block';
import IconLink from '../../molecules/IconLink';
import PrimaryNavigation from '../../molecules/PrimaryNavigation';

type HeaderProps = React.ComponentProps<typeof Block>;

const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <Block
      opaque
      reverse
      className={clsx('flex justify-center px-4 py-4 sm:py-2', className)}
      {...props}
    >
      <div className="flex w-full max-w-screen-xl items-center gap-4">
        <IconLink to="/" icon="arc" height={100} />
        <PrimaryNavigation reverse />
      </div>
    </Block>
  );
};

export default Header;
