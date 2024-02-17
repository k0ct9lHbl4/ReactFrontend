import { Suspense } from "react";

import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/AppRouter";

import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

import { classNames } from "shared/lib/class-names/classNames";

import "./styles/index.scss";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", theme)}>
      {/* Где используем i18n, должны обернуть в Suspense */}
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
