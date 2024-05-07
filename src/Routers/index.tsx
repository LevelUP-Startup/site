import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'
import { SignIn } from '../pages/SignIn'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  )
}
