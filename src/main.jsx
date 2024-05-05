import React from 'react'
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import './index.css'
import RootLayout from './components/RootLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import EpisodeListPage from './pages/EpisodeListPage.jsx'
import PodcastPage from './pages/PodcastPage.jsx'

import PodcastView from './components/PodcastView.jsx'
import EpisodeList from './components/EpisodeList.jsx'
import SideBar from './components/SideBar.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { 
          path: "/podcasts", 
          element: <SideBar /> ,
          children: [
            {
              path: ":podcastId",
              element: <EpisodeList />
            },
            {
              path: ":podcastId/episode/:episodeId",
              element: <PodcastView />
            }
          ]
        },

      ]
    }
 ])

 const queryClient = new QueryClient()




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
