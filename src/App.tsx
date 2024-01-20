import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { RootState } from "./redux/store";

function App() {
  const count = useAppSelector((state: RootState) => state.count.value);
  const dispatch = useAppDispatch();
  return (
    <div className="flex items-center justify-center h-screen my-auto">
      <div className="w-2/4 flex flex-col bg-white rounded-3xl">
        <div className="flex px-6 pb-8 sm:px-8">
          <button
            onClick={() => dispatch(increment())}
            className="flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-300 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
          >
            Increment
          </button>
          <div className="mx-10 my-auto font-bold text-2xl">{count}</div>
          <button
            onClick={() => dispatch(decrement())}
            className="flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-300 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
          >
            Decrement
          </button>
        </div>
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-300 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
        >
          IncrementByAmount
        </button>
      </div>
    </div>
  );
}

export default App;
