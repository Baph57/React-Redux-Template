import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// TODO: implement -> import PropTypes from 'prop-types';

class Main extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Main will mount');
  }

  componentDidMount = () => {
    console.log('Main mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Main will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Main will update', nextProps, nextState);
  }


  componentDidUpdate = () => {
    console.log('Main did update');
  }

  componentWillUnmount = () => {
    console.log('Main will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="MainWrapper">
        Test content
      </div>
    );
  }
}

Main.propTypes = {
  // bla: PropTypes.string,
};

Main.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
