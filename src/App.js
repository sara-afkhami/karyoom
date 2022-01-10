import React, { Component } from "react";
import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";

import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./pageTransitions/slideTransition.scss";
import StepOnePage from "./pages/stepOnePage";
import StepTwoPage from "./pages/stepTwoPage";
import StepThreePage from "./pages/stepThreePage";
import StepFourPage from "./pages/stepFourPage";

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    prevDepth: this.getPathDepth(this.props.location)
  };
}

componentWillReceiveProps() {
  this.setState({ prevDepth: this.getPathDepth(this.props.location) });
}

getPathDepth(location) {
  let pathArr = location.pathname.split("/");
  pathArr = pathArr.filter(n => n !== "");
  return pathArr.length;
}

  render() {
    const { location } = this.props;

    const currentKey = location.pathname.split("/")[1] || "/";
    const timeout = { enter: 1000, exit: 1000 };

    return (
      <TransitionGroup component="div" className="App">
        <CSSTransition
          key={currentKey}
          timeout={timeout}
          classNames="pageSlider"
          mountOnEnter={false}
          unmountOnExit={true}
        >
<div
  className={
    this.getPathDepth(location) - this.state.prevDepth >= 0
      ? "left"
      : "right"
  }
>
  <Switch location={location}>
    <Route path="/" exact component={StepOnePage} />
    <Route path="/step2" exact component={StepTwoPage} />
    <Route path="/step3" exact component={StepThreePage}/>
    <Route path="/step4" exact component={StepFourPage}/>
  </Switch>
</div>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default withRouter(App);
