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
import { LastLocationProvider, withLastLocation,
    WithLastLocationProps
  } from "react-router-last-location";
import { getNumberFromEndStrings } from "./utils/functionsStrings";

// const styleRoute = {
//     '1-to-2' : 'bg-red-100',
//     '2-to-3' : 'bg-red-100',
//     left : 'bg-red-100',
//     right : 'bg-red-100',
// }
window.onpopstate = function (e) { window.history.forward(1); }

class App extends Component  {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {window.onhashchange = function() {
        console.log('is change is change')
    }
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
        const timeout = {enter: 600, exit: 600};
        
        let stepCurrent = getNumberFromEndStrings(location.pathname)
        console.log(stepCurrent)
        // let stepPrv = lastLocation.pathname.match(/\d+$/)[0];
        // console.log(stepCurrent,stepPrv+ "here")

        return this.state.isMobile ? <PreventMobileWidget/> : (
            <TransitionGroup component="div" className="App">
                <CSSTransition
                    key={currentKey}
                    timeout={timeout}
                    classNames={`pageSlider${stepCurrent}`}
                    mountOnEnter={false}
                    unmountOnExit={false}>
                            {/* <LastLocationProvider> */}

                    <Switch location={location}>
                        <LastLocationProvider>
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
                        </LastLocationProvider>
                    </Switch>
                    {/* </LastLocationProvider> */}

                </CSSTransition>
            </TransitionGroup>
        );
    }
}

export default withRouter(App);
