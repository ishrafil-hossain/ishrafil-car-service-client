import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/routes/routes';


function App() {
  return (
    <div data-theme="light" className="App max-w-6xl mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
