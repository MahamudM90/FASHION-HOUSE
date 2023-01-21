import { RouterProvider } from 'react-router-dom';
import router from './Router/Routes/Routes';
import './App.css';

function App() {
  return (
       <div data-theme="lofi">
      <RouterProvider router={router}/>
      </div>
  );
}

export default App;
