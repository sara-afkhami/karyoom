import React, {Component} from "react";
import {Switch, Route, withRouter} from "react-router-dom";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import "./pageTransitions/slideTransition.scss";
import StepOnePage from "./pages/stepOnePage";
import StepTwoPage from "./pages/stepTwoPage";
import StepThreePage from "./pages/stepThreePage";
import StepFourPage from "./pages/stepFourPage";
import StepFivePage from "./pages/stepFivePage";
import StepSixPage from "./pages/stepSixPage";
import StepSevenPage from "./pages/stepSevenPage";
import StepEightPage from "./pages/stepEightPage";
import StepNinePage from "./pages/stepNinePage";
import StepTenPage from "./pages/stepTenPage";
import StepElevenPage from "./pages/stepElevenPage";
import "./App.css";
import PreventMobileWidget from "./widgets/preventMobileWidget";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {
        this.setState({isMobile: window.innerWidth <= 660});
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resize.bind(this));
    }


    render() {
        const {location} = this.props;

        const currentKey = location.pathname.split("/")[1] || "/";
        const timeout = {enter: 500, exit: 200};

        return this.state.isMobile ? <PreventMobileWidget/> : (
            <TransitionGroup component="div" className="App">
                <CSSTransition
                    key={currentKey}
                    timeout={timeout}
                    classNames="pageSlider"
                    mountOnEnter={false}
                    unmountOnExit={false}>
                    <Switch location={location}>
                        <Route path="/" exact component={StepOnePage}/>
                        <Route path="/step2" exact component={StepTwoPage}/>
                        <Route path="/step3" exact component={StepThreePage}/>
                        <Route path="/step4" exact component={StepFourPage}/>
                        <Route path="/step5" exact component={StepFivePage}/>
                        <Route path="/step6" exact component={StepSixPage}/>
                        <Route path="/step7" exact component={StepSevenPage}/>
                        <Route path="/step8" exact component={StepEightPage}/>
                        <Route path="/step9" exact component={StepNinePage}/>
                        <Route path="/step10" exact component={StepTenPage}/>
                        <Route path="/step11" exact component={StepElevenPage}/>
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        );
    }
}

export default withRouter(App);
