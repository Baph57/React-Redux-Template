import React from 'react';
import { MDBRow } from 'mdbreact';
import AdminCardShard1 from './shards/AdminCardShard0.jsx';
import AdminCardShard2 from './shards/AdminCardShard1.jsx';
import TableShard from './shards/TableShard.jsx';
import BreadcrumShard from './shards/BreadcrumShard.jsx';
import ChartShard1 from './shards/ChartShard0.jsx';
import ChartShard2 from './shards/ChartShard1.jsx';
import MapShard from './shards/MapShard.jsx';
import ModalShard from './shards/ModalShard.jsx';

const DashboardPage =  () => {
  return (
    <React.Fragment>
      <BreadcrumShard />
      <AdminCardShard1 /> 
      <AdminCardShard2 />
      <ChartShard1 />
      <TableShard />
      <ChartShard2 />
      <MDBRow className="mb-4">
          <MapShard />
          <ModalShard />
      </MDBRow>
    </React.Fragment>
  )
}

export default DashboardPage;