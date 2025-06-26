import IconLink from '../../molecules/IconLink';
import PrimaryNavigation from '../../molecules/PrimaryNavigation';

const Header = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="bg-white/80 text-black backdrop-blur-sm" {...props}>
      <div className="mx-auto flex w-full max-w-screen-xl items-center px-4 py-4 sm:py-2">
        <IconLink to="/" icon="arc" height={100} />
        <div className="ml-4">
          <PrimaryNavigation reverse />
        </div>
      </div>
    </div>
  );
};

export default Header;
