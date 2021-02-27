import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionType from "../../store/actions";
class Counter extends Component {
  state = {
    counter: 0,
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case "inc":
        this.setState((prevState) => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case "dec":
        this.setState((prevState) => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case "add":
        this.setState((prevState) => {
          return { counter: prevState.counter + value };
        });
        break;
      case "sub":
        this.setState((prevState) => {
          return { counter: prevState.counter - value };
        });
        break;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubtractCounter}
        />

        <hr></hr>
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
        <ul>
          {this.props.storedResults.map((result) => {
           return <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li>;
          })}
        </ul>
      </div>
    );
  }
}

//// This will connect our internal props of the class to the shared state of Redux. The state in paramater is the state of redux, it will reach out to redux state. Configuration

const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.result,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: actionType.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionType.DECREMENT }),
    onAddCounter: () => dispatch({ type: actionType.ADD, value: 10 }),
    onSubtractCounter: () => dispatch({ type: actionType.SUBTRACT, value: 5 }),
    onStoreResult: (result) => dispatch({ type: actionType.STORE_RESULT, result: result }),
    onDeleteResult: (id) =>
      dispatch({ type: actionType.DELETE_RESULT, resID: id }),
  };
};

//// When we gonna pass those two function above to our connect. First of all all the return value of those functions will connect to the state of the redux and we will be able to communicate with the central store of the redux. For example, the return value of  mapStateToProps allow us to get the data from the redux or the the return value of mapDispathToProps allows us to dispatch action to the reducer to reach central store.

///Second of all, because we use connect as a HOC to wrap the Counter component, all the return value of those function will be accessed through the props of the Counter component.

//// The connect will give our Counter component accesses to the shared store of redux. The connect function is not a wrapper function but itself return a funtion so we have call twice
export default connect(mapStateToProps, mapDispathToProps)(Counter);
