import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../layouts/Layout'
import Home from '../modules/components/Homes/Home'
import Explore from '../modules/components/Explore/Explore'
import Messages from '../modules/components/Messages/Messages'
import Feeds from '../modules/components/Explore/widgets/Feeds'
import Reels from '../modules/components/Explore/widgets/Reels'
import FYP from '../modules/components/Explore/widgets/FYP'
import Profiles from '../modules/components/Profiles/Profiles'

export default function AppRoute() {
    return (
        <Routes>
            <Route index element={<Layout><Home /></Layout>} />
            <Route path='home' element={<Layout><Home /></Layout>} />
            <Route path='explore' element={<Layout><Explore /></Layout>} >
                <Route path="feeds" element={<Feeds />} />
                <Route path="reels" element={<Reels />} />
                <Route path="fyp" element={<FYP />} />
            </Route>
            <Route path='messages' element={<Layout><Messages /></Layout>} />
            <Route path='profile' element={<Layout><Profiles /></Layout>} />
        </Routes>
    )
}