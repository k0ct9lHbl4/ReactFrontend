/* eslint-disable i18next/no-literal-string */
import { useEffect, useState } from "react";

import { Button } from "shared/ui/Button/Button";

// Компонент для тестирования ErrorBoundary
export const BugButton = () => {
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (isError) {
      throw new Error("Bug button error");
    }
  }, [isError]);

  const handleThrowError = () => setIsError(true);

  return <Button onClick={handleThrowError}>Throw Error</Button>;
};
