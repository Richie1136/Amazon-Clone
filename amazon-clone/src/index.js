import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { StateProvider } from './store/state-context';
import cartReducer, { initialState } from './reducer';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StateProvider initialState={initialState} reducer={cartReducer}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StateProvider>
);
