import type { ReactNode } from "react";
import styles from "./main_layout.module.css";
import Header from "../../header/header_component";

interface Props {
  children?: ReactNode;
  isLoadingRoute?: boolean;
}

export default function MainLayout({ children, isLoadingRoute }: Props) {
  return (
    <div className={styles["main-layout"]}>
      <Header isLoadingRoute={isLoadingRoute} />
      {children}
    </div>
  );
}
