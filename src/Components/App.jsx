import React from 'react';
import { connect } from 'react-redux';
// import { 
//   BrowserRouter as 
//   Router, 
//   Route, 
//   Switch, 
//   Redirect 
// } from 'react-router-dom'
import '../CSS/App.css';
import Main from './Main/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Main/>
      </header>
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
