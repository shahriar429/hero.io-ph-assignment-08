import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPages/ErrorPage";
import AllApps from "../Pages/AllApps/AllApps";
import AppDetails from "../Pages/AppDetails/AppDetails";
import InstalledApps from "../Pages/Installed Apps/InstalledApps";

 export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            index: true,
            path: '/',
            loader: ()=> fetch('trendingAppData.json'),
            Component: Home
        },
        {
          path: '/allApps',
          loader: () => fetch('allAppData.json'),
          Component: AllApps
        },
        {
          path: '/appDetails/:id',
          loader: () => fetch('allAppData.json'),
          Component: AppDetails
        },
        {
          path: '/installedApps',
          loader: () => fetch('allAppData.json'),
          Component: InstalledApps
        },
        {
          path: '*',
          Component: ErrorPage
        }
    ]
  },
]);