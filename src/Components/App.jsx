import React from 'react';
import { connect } from 'react-redux';
import Routes from './Routes/Routes';
import TopNavigation from './topNavigation';
import SideNavigation from './sideNavigation';
import Footer from './Footer';
import '../CSS/App.css';
// import Main from './Routes/Main';

function App() {
  return (
    <div className="flexible-content">
      <TopNavigation />
      <SideNavigation />
      <main id="content" className="p-5">
        <Routes />
      </main>
      <Footer />
    </div>
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
