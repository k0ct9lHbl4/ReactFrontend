export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  NOT_FOUND = "not-found",
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.NOT_FOUND]: "*",
};
