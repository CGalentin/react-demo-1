import { Components } from "react";

let renderCount = 0;

export default class LifecycleDemo extends Component {
    constructor(props) {
        super(props)

        this.state = {clicks: 0}
        this.handleClick = this.handleClick.bind(this);

        console.log("%cLifcycleDemo - Constructor", "font-weight:bold")
        console.log("LifcycleDemo - Initial Props", props)
        console.log("LifcycleDemo - Initial state;", this.state);

    }

    handleClick() {
        console.log("LifecycleDemo - handleClick > SetState(+1)")
        this.setState((s) => ({clicks: s.clicks + 1}));
    }

        static getDerivedStateFromProps(nextProp, prevState) {
            console.log("LifecycleDemo - getDerivedStateFromProps with Hook")
            return null
        }
            componentDidMount(){

        console.log("LifeCycleDemo - The component did Mount")

        console.log("LifeCycleDemo - DOM is ready, good place to fetch/timers/subscriptions")

    }

    
    shouldComponentsUpdate(nextProps, nextState) {
        const should = true;
        console.log("LifecycleDemo - Should Component Update", { nextProps, nextState, should})
        return should;
    }
}