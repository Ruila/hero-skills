import { useRoutes, Navigate } from "react-router-dom"
import React, { ReactElement, Suspense } from "react"

const Home = React.lazy(() => import("../pages/Home"))
const Heroes = React.lazy(() => import("../pages/Heroes"))
const HeroProfile = React.lazy(() => import("../pages/HeroProfile"))

export const RouterMap = (): ReactElement | null =>
  useRoutes([
    {
      path: "/",
      element: (
        <Suspense>
          <Home />
        </Suspense>
      ),
    },
    {
      path: "heroes",
      element: (
        <Suspense>
          <Heroes />
        </Suspense>
      ),
      children: [
        {
          path: ":heroId",
          element: (
            <Suspense>
              <HeroProfile />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ])
