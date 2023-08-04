import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AboutTheTeam from '../src/components/AboutTheTeam';
import FindLove from '../src/components/FindLove';
import SuccessStory from '../src/components/SuccessStory';
import Login from '../src/components/Login';

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