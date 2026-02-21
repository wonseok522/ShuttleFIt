import { Outlet } from "react-router";
import { QuickNav } from "./QuickNav";

export default function Root() {
  return (
    <>
      <QuickNav />
      <Outlet />
    </>
  );
}