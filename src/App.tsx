import { Provider } from "react-redux";

import { store } from "store";

export default function App() {
  return (
    <Provider store={store}>
      <h1>REACT APP</h1>
    </Provider>
  );
}
