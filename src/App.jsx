
import './App.css'
import { Provider } from 'react-redux'
import store from './compnents/Store'
import CounterPage from './compnents/CounterPage'
import DataFetchAndMui from './compnents/DataFetchAndMui'
function App() {
  return (
    <>
    <h3>Example: Pass the redux store to the react js page </h3>
      <Provider store={store}>
        <CounterPage></CounterPage>
      </Provider>
      <div>
        <h3>Example: Fetch data from the JSON placeholder API and use MUI table</h3>
        <DataFetchAndMui></DataFetchAndMui>
      </div>
    </>
  )
}

export default App
