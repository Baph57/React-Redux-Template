import React from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch
  // Redirect
} from "react-router-dom";
import DashboardPage from "./pages/DashboardPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import TablesPage from "./pages/TablesPage.jsx";
import MapsPage from "./pages/MapsPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import TopNavigation from "./topNavigation";
import SideNavigation from "./sideNavigation";
import Footer from "./Footer";
import "../CSS/App.css";
import { MDBCol, MDBRow } from "mdbreact";
import Landing from "./Landing.jsx";

function App() {
  return (
    <>
      <Router>
        <TopNavigation />
        <MDBRow>
          <MDBCol size="3">
            <SideNavigation />
          </MDBCol>
          <MDBCol size="9">
            <Switch>
              <Route path="/" exact component={Landing} />
              <Route path="/dashboard" component={DashboardPage} />
              <Route path="/profile" component={ProfilePage} />
              <Route path="/tables" component={TablesPage} />
              <Route path="/maps" component={MapsPage} />
              <Route path="/404" component={NotFoundPage} />
            </Switch>
          </MDBCol>
        </MDBRow>
        <Footer />
      </Router>
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
  mapDispatchToProps
)(App);
