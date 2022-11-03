import React, { useEffect, useState, useCallback } from 'react';
import { ConfigProvider } from 'zarm';
import zhCN from 'zarm/lib/config-provider/locale/zh_CN';
import 'zarm/dist/zarm.css';
import routes from './router';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <BrowserRouter>
        <Switch>
          {routes.map((route) => (
            <Route key={route.path} path={route.path}>
              <route.component />
            </Route>
          ))}
        </Switch>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
