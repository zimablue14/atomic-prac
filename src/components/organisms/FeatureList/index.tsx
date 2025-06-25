import clsx from 'clsx';

import Heading from '../../atoms/Heading';
import Link from '../../atoms/Link';
import Paragraph from '../../atoms/Paragraph';
import Feature from '../../molecules/Feature';

const FeatureList = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={clsx(className)} {...props}>
    <Heading className="text-center">Basic stack</Heading>

    <Paragraph className="m-8 text-center sm:m-4">
      It includes everything necessary to build a typical web app with focus on productivity and
      developer experience.
      <br />
      <Link href="https://github.com/diegohaz/arc/wiki/Workflow">
        Learn more about the recommended workflow
      </Link>
    </Paragraph>

    <div className="flex flex-wrap">
      <Feature
        icon="react"
        link="https://facebook.github.io/react"
        title="React"
        code="<MyComponent attr='value' />"
        className="m-4 w-[calc(50%-2rem)] sm:m-0 sm:w-full"
      >
        The Facebook&apos;s JavaScript library for building user interfaces using components.
      </Feature>
      <Feature
        icon="react-router"
        link="https://github.com/ReactTraining/react-router"
        title="React Router"
        code="<Route path='/sample-page' />"
        className="m-4 w-[calc(50%-2rem)] sm:m-0 sm:w-full"
      >
        The most popular declarative routing library for React and React Native.
      </Feature>
      <Feature
        icon="webpack"
        link="https://webpack.github.io/"
        title="Webpack"
        code="npm run build"
        className="m-4 w-[calc(50%-2rem)] sm:m-0 sm:w-full"
      >
        The awesome module bundler with{' '}
        <Link href="https://webpack.github.io/docs/hot-module-replacement.html">
          Hot Module Replacement
        </Link>{' '}
        enabled.
      </Feature>
      <Feature
        icon="jest"
        link="https://facebook.github.io/jest"
        title="Jest"
        code="npm run test"
        className="m-4 w-[calc(50%-2rem)] sm:m-0 sm:w-full"
      >
        The great testing framework used by Facebook to test all their Javascript code.
      </Feature>
    </div>

    <Heading className="text-center">Optional features</Heading>

    <Paragraph className="m-8 text-center sm:m-4">
      Features separated into another branches so you can use them only if you need to.
    </Paragraph>

    <div className="flex flex-wrap">
      <Feature
        icon="redux"
        link="https://github.com/diegohaz/arc/tree/redux"
        title="Redux"
        code="git clone -b redux https://github.com/diegohaz/arc my-app"
        className="m-4 w-[calc(50%-2rem)] sm:m-0 sm:w-full"
      >
        The predictable state container for JavaScript apps.
      </Feature>
      <Feature
        icon="dist"
        link="https://github.com/diegohaz/arc/tree/redux-ssr"
        title="Server Side Rendering"
        code="git clone -b redux-ssr https://github.com/diegohaz/arc my-app"
        className="m-4 w-[calc(50%-2rem)] sm:m-0 sm:w-full"
      >
        Write once and run on both server and client.
      </Feature>
    </div>
  </div>
);

export default FeatureList;
