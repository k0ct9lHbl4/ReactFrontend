import { useTranslation } from "react-i18next";

import { Button } from "shared/ui/Button/Button";

import styles from "./PageError.module.scss";

export const PageError = () => {
  const { t } = useTranslation();

  const handleReloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={styles.pageError}>
      <p>{t("Произошла непредвиденная ошибка")}</p>
      <Button onClick={handleReloadPage}>{t("Обновить страницу")}</Button>
    </div>
  );
};
