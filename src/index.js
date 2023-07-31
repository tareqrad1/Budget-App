import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TransactionContext from './context/TransactionContext';
import CategoryContext from './context/CategoryContext';
import AddDataContext from './context/AddDataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TransactionContext>
      <CategoryContext>
        <AddDataContext>
          <App />
        </AddDataContext>
      </CategoryContext>
    </TransactionContext>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
