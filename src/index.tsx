import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider as TribeProvider} from '@tribeplatform/react-sdk';
import { Provider } from 'react-redux';
import {store} from './store/store'

ReactDOM.render(
    <React.StrictMode>
        <TribeProvider config={{
              baseUrl: 'https://app.tribe.so/graphql',
              networkDomain: 'lawmingo.tribeplatform.com',
              accessToken: localStorage.getItem('apiKey') as string
             //accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IndDSXVlMnY0R2QiLCJuZXR3b3JrSWQiOiJsU2t6QnlYbFNnIiwibmV0d29ya0RvbWFpbiI6Imxhd21pbmdvLnRyaWJlcGxhdGZvcm0uY29tIiwidG9rZW5UeXBlIjoiVVNFUiIsImVudGl0eUlkIjpudWxsLCJwZXJtaXNzaW9uQ29udGV4dCI6bnVsbCwicGVybWlzc2lvbnMiOm51bGwsInNlc3Npb25JZCI6IjFnZ3pqak15bVhYdjNTc24xa01GMGJBMWJjVVZ4YU9LQjZ3UWMySDRJTlJPSVlQMWhiIiwiaWF0IjoxNjQ5ODUwODcxLCJleHAiOjE2NTI0NDI4NzF9.ShnTCMxriMGXlS9YBrUS-TOum_3AA1JNbTUL6NH6Dvs"
        }}>
             <BrowserRouter basename="/">
                <Provider store={store}>
                    <App />
                </Provider>,
            </BrowserRouter>
        </TribeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
