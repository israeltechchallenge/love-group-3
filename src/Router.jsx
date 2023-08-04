import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AboutTheTeam from './Component/AboutTheTeam';
import FindLove from './Component/FindLove';
import SuccessStory from './Component/SuccessStory';
import Login from './Component/Login';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigate to='/findlosve' />} />
                <Route path='/findlove' element={<FindLove />} />
                <Route path='/about' element={<AboutTheTeam />} />
                <Route path='/story' element={<SuccessStory />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}