import { ErrorInfo, ReactNode, Component, Suspense } from "react";
// import { withTranslation } from "react-i18next";

import { PageError } from "widgets/PageError";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App

    // eslint-disable-next-line no-console
    console.error(error, info.componentStack);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      // You can render any custom fallback UI
      return (
        <Suspense fallback="">
          <PageError />
        </Suspense>
      );
    }

    return children;
  }
}

// Обертка над классовыми компонентами для интернационализации
// export default withTranslation()(ErrorBoundary);
