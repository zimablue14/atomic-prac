import Link from '../../atoms/Link';
import Feature from '../../molecules/Feature';

const FeatureList = ({ ...props }) => {
  return (
    <div {...props}>
      <h2 className="text-center text-2xl font-semibold">Basic stack</h2>
      <p className="mx-4 my-8 text-center text-base">
        It includes everything necessary to build a typical web app with focus on productivity and
        developer experience.
        <br />
        <Link to="https://github.com/diegohaz/arc/wiki/Workflow">
          Learn more about the recommended workflow
        </Link>
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Feature
          icon="react"
          link="https://facebook.github.io/react"
          title="React"
          code="<MyComponent attr='value' />"
          className="m-4 w-[calc(50%-2rem)] max-sm:m-0 max-sm:w-full"
        >
          The Facebook&apos;s JavaScript library for building user interfaces using components.
        </Feature>
        <Feature
          icon="react-router"
          link="https://github.com/ReactTraining/react-router"
          title="React Router"
          code="<Route path='/sample-page' />"
          className="m-4 w-[calc(50%-2rem)] max-sm:m-0 max-sm:w-full"
        >
          The most popular declarative routing library for React and React Native.
        </Feature>
        <Feature
          icon="webpack"
          link="https://webpack.github.io/"
          title="Webpack"
          code="npm run build"
          className="m-4 w-[calc(50%-2rem)] max-sm:m-0 max-sm:w-full"
        >
          The awesome module bundler with{' '}
          <Link to="https://webpack.github.io/docs/hot-module-replacement.html">
            Hot Module Replacement
          </Link>{' '}
          enabled.
        </Feature>
        <Feature
          icon="jest"
          link="https://facebook.github.io/jest"
          title="Jest"
          code="npm run test"
          className="m-4 w-[calc(50%-2rem)] max-sm:m-0 max-sm:w-full"
        >
          The great testing framework used by Facebook to test all their Javascript code.
        </Feature>
      </div>

      <h2 className="mt-16 text-center text-2xl font-semibold">Optional features</h2>
      <p className="mx-4 my-8 text-center text-base">
        Features separated into another branches so you can use them only if you need to.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Feature
          icon="redux"
          link="https://github.com/diegohaz/arc/tree/redux"
          title="Redux"
          code="git clone -b redux https://github.com/diegohaz/arc my-app"
          className="m-4 w-[calc(50%-2rem)] max-sm:m-0 max-sm:w-full"
        >
          The predictable state container for JavaScript apps.
        </Feature>
        <Feature
          icon="dist"
          link="https://github.com/diegohaz/arc/tree/redux-ssr"
          title="Server Side Rendering"
          code="git clone -b redux-ssr https://github.com/diegohaz/arc my-app"
          className="m-4 w-[calc(50%-2rem)] max-sm:m-0 max-sm:w-full"
        >
          Write once and run on both server and client.
        </Feature>
      </div>
    </div>
  );
};

export default FeatureList;
