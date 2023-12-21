import { Suspense } from 'react'

import { Outlet } from "react-router-dom";

const MainNav = () => {
  return (
    <Suspense>
      <Outlet/>
    </Suspense>
  )
}

export default MainNav