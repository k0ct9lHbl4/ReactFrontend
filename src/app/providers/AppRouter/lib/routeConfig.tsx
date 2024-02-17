import { RouteProps } from "react-router-dom";

import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";
import { NotFoundPage } from "pages/NotFoundPage";

import { AppRoutes, RoutePaths } from "shared/config/routePaths/routePaths";

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: { path: RoutePaths[AppRoutes.MAIN], element: <MainPage /> },
  [AppRoutes.ABOUT]: { path: RoutePaths[AppRoutes.ABOUT], element: <AboutPage /> },
  [AppRoutes.NOT_FOUND]: { path: RoutePaths[AppRoutes.NOT_FOUND], element: <NotFoundPage /> },
};
