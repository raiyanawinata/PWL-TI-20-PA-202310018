import React from 'react'
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Layout from '../layouts/Layout'
import Home from '../modules/components/Homes/Home'
import Explore from '../modules/components/Explore/Explore'
import Messages from '../modules/components/Messages/Messages'
import Feeds from '../modules/components/Explore/widgets/Feeds'
import Reels from '../modules/components/Explore/widgets/Reels'
import FYP from '../modules/components/Explore/widgets/FYP'
import Profiles from '../modules/components/Profiles/Profiles'

// export default function AppRoute() {
//     return (
//         <Routes>
//             <Route index element={<Layout><Home /></Layout>} />
//             <Route path='home' element={<Layout><Home /></Layout>} />
//             <Route path='explore' element={<Layout><Explore /></Layout>} >
//                 <Route path="feeds" element={<Feeds />} />
//                 <Route path="reels" element={<Reels />} />
//                 <Route path="fyp" element={<FYP />} />
//             </Route>
//             <Route path='messages' element={<Layout><Messages /></Layout>} />
//             <Route path='profile' element={<Layout><Profiles /></Layout>} />
//         </Routes>
//     )
// }

const routes = [
    {
        path: "",
        element: <Home/>
    },

    {
        path: "home",
        element: <Home/>
    },

    {
        path: "explore",
        element: <Explore/>,
        children:[
            {
                path: "feeds",
                element: <Feeds/>
            },

            {
                path: "reels",
                element: <Reels/>
            },

            {
                path: "fyp",
                element: <FYP/>
            },

        ],
    },

    {
        path:"message",
        element: <Messages/>
    },

    {
        path: "profile",
        element: <Profiles/>
    },
];

export default function AppRoute(){
    return(
        <Routes>
            {routes.map((route) =>(
                <Route
                key={route.path}
                path={route.path}
                element={<Layout>{route.element}</Layout>}>
                    {route.children?.map((child)=>(
                        <Route key={child.path} path={child.path} element={child.element} />
                    ))}
                </Route>
            ))}
        </Routes>
    );
}