import { createBrowserRouter, RouterProvider } from "react-router"
import PortfolioRoute from "./routes/app/portfolio"
import LoginRoute from "./routes/auth/login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <PortfolioRoute />
    },
    {
        path: '/login',
        element: <LoginRoute />
    }
], {
    basename: '/portfolio'
})

export const AppRouter = () => {
    return <RouterProvider router={router} />;
};