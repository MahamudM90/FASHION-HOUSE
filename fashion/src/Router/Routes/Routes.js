import { createBrowserRouter } from "react-router-dom";
import Main from '.././../layouts//Main'
import Home from '../../../src///Pages///Home/////Home////////Home'
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path:'/home',
                element: <Home></Home>

            }
        ]
    }
])

export default router;