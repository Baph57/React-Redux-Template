import React from 'react';
import { MDBRow } from 'mdbreact';
// import AdminCardSection1 from './sections/AdminCardSection1';
// import AdminCardSection2 from './sections/AdminCardSection2';
// import TableSection from './sections/TableSection';
// import BreadcrumSection from './sections/BreadcrumSection';
// import ChartSection1 from './sections/ChartSection1';
// import ChartSection2 from './sections/ChartSection2';
// import MapSection from './sections/MapSection';
import ModalSection from './sections/ModalSection';
import Landing from "../Landing/Landing"

const DashboardPage =  () => {
  return (
    <React.Fragment>
      <Landing/>
      {/* <BreadcrumSection /> */}
      {/* <AdminCardSection1 />  */}
      {/* <AdminCardSection2 /> */}
      {/* <ChartSection1 /> */}
      {/* <TableSection /> */}
      {/* <ChartSection2 /> */}
      <MDBRow className="mb-4">
          {/* <MapSection /> */}
          {/* <ModalSection /> */}
      </MDBRow>
    </React.Fragment>
  )
}

export default DashboardPage;