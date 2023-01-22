import { Outlet } from "react-router-dom";
import { Fragment } from "react";

import MainNavigation from "../MainNavigation";

const RootLayout = () => {
  return (
    <Fragment>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
};

export default RootLayout;
