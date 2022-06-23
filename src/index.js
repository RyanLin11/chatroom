import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App';
import ChatListView from './views/ChatListView';
import ChatView from './views/ChatView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';

import RequireAuth from './auth/RequireAuth';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/channels" element={<RequireAuth><ChatListView /></RequireAuth>} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/register" element={<RegisterView />} />
          {/*<Route path="/:channelId" element={<RequireAuth><ChatView /></RequireAuth>} />*/}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
