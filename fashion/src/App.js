import { RouterProvider } from 'react-router-dom';
import router from './Router/Routes/Routes';
import './App.css';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
       <div data-theme="lofi">
      <RouterProvider router={router}/>
      <Toaster></Toaster>
      </div>
  );
}

export default App;
