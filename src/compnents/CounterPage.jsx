
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "./CounterSlice";
const CounterPage = () => {
    const count = useSelector(state => state.counter.count)
    const disPatch = useDispatch()
    return (
        <div>
            <h2>Count: {count}</h2>
            <div>
            <button style={{border:"1px solid", margin:"5px"}} onClick={() => disPatch(increment())}>Increase</button>
            <button style={{border:"1px solid", margin:"5px"}} onClick={() => disPatch(decrement())}>Decrement</button>
            <button style={{border:"1px solid", margin:"5px"}} onClick={() => disPatch(reset())}>Reset</button>
            </div>
        </div>
    );
};

export default CounterPage;