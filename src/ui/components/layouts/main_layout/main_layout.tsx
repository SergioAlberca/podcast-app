import { ReactNode } from "react";
import "./main_layout.css";
import Header from "../../header/header_component";

interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <div className="main-layout">
      <Header />
      {children}
    </div>
  );
}
