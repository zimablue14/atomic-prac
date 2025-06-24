import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import UserFormPage from './page/UserformPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <UserFormPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
