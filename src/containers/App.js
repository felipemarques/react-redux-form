import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendServer } from '../actions';
import InitForm from '../components/InitForm'

class App extends Component {

  onClick = (e, data) => {
    e.preventDefault();
    console.log('clicked in redux form ', data);
    this.props.createName(data);
  }
  
  onChangeName = ({target}) => {
    console.log('target input: ', target.name, target.value);
  }

  render() {
    return (
      <div className='col'>
          <div className="card">
            <div className="card-header">
              Redux Form
            </div>
            <div className="card-body">
              <div className="card-title">My first Redux Form</div>
              <InitForm 
                onClick={this.onClick} 
                onChangeName={this.onChangeName}
                />
            </div>
            <div className="card-footer">
              <p>Card Footer</p>
            </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      initialValues: state.name.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      createName: (data) => dispatch(sendServer(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
