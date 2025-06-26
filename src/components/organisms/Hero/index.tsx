import Heading from '../../atoms/Heading';
import LogoImage from '../../atoms/LogoImage';
import Paragraph from '../../atoms/Paragraph';
import PreformattedText from '../../atoms/PreformattedText';
import Tooltip from '../../atoms/Tooltip';
import IconButton from '../../molecules/IconButton';
import IconLink from '../../molecules/IconLink';

const Hero = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="flex justify-center px-8 py-8 sm:px-1.5" {...props}>
      <div className="flex w-full max-w-screen-xl flex-wrap sm:flex-nowrap">
        {/* 좌측 섹션 */}
        <section className="flex flex-col items-center p-8 sm:w-auto sm:p-1">
          <LogoImage height={265} />
          <div className="mt-8 flex">
            <Tooltip reverse data-title="Just a fancy tooltip 😄">
              <IconButton icon="github" href="https://github.com/diegohaz/arc">
                GitHub
              </IconButton>
            </Tooltip>
            <Tooltip
              reverse
              data-title="Another tooltip aligned differently"
              align="end"
              position="bottom"
            >
              <IconButton icon="docs" href="https://github.com/diegohaz/arc/wiki">
                Docs
              </IconButton>
            </Tooltip>
          </div>
        </section>

        {/* 우측 섹션 */}
        <section className="flex flex-col items-center p-8 sm:w-full sm:p-1">
          <Paragraph className="w-full text-[1.35rem] leading-[1.35em] font-light tracking-wide text-gray-500 sm:text-center sm:text-base">
            <strong>ARc</strong> is a{' '}
            <IconLink reverse icon="react" href="https://facebook.github.io/react/">
              React
            </IconLink>{' '}
            starter kit based on the{' '}
            <IconLink
              reverse
              icon="atomic-design"
              href="http://bradfrost.com/blog/post/atomic-web-design/"
            >
              Atomic Design
            </IconLink>{' '}
            methodology. It&apos;s <strong>progressive</strong>, which means that you can start with
            the basic boilerplate and try the other features when you are comfortable.
          </Paragraph>

          <div className="mt-8 w-full sm:mt-4">
            <Heading level={2} reverse>
              Install
            </Heading>
            <PreformattedText block reverse wrapped>
              git clone -b master https://github.com/diegohaz/arc my-app
            </PreformattedText>
            <IconLink icon="docs" right reverse href="https://github.com/diegohaz/arc/wiki/Setup">
              Learn more
            </IconLink>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
