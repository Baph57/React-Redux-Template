import React from 'react';
import { connect } from 'react-redux';
import Routes from './Routes/Routes';
import TopNavigation from './topNavigation';
import SideNavigation from './sideNavigation';
import Footer from './Footer';
import '../CSS/App.css';
import { MDBCol, MDBRow } from 'mdbreact';
// import Main from './Routes/Main';

function App() {
  return (
    <>
      <TopNavigation />
      <MDBRow>
        <MDBCol size="3">
          <SideNavigation />
        </MDBCol>
        <MDBCol size="9">
          <Routes />
        </MDBCol>
      </MDBRow>
      <Footer />
    </>
  );
}
const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
