import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import { store } from './app/store';
import { fetchUsers } from './features/users/userSlice';

store.dispatch(fetchUsers());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <Router>
        <Routes>
          <Route path='/*' element={<App/>} />
        </Routes>
      </Router>
      <App />
    </Provider>
  </React.StrictMode>
);


