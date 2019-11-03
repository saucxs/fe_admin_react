import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';
import RendererWrapper0 from '/Users/chengxinsong/Desktop/coding/fe_admin_react/src/pages/.umi/LocaleWrapper.jsx';
import { routerRedux, dynamic as _dvaDynamic } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () =>
            import(/* webpackChunkName: "layouts__index" */ '../../layouts/index'),
        })
      : require('../../layouts/index').default,
    routes: [
      {
        path: '/',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__index" */ '../index'),
            })
          : require('../index').default,
        exact: true,
        _title: 'umi+react hook+dva+typescript',
        _title_default: 'umi+react hook+dva+typescript',
      },
      {
        path: '/list',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__list__index" */ '../list/index'),
            })
          : require('../list/index').default,
        exact: true,
        _title: 'umi+react hook+dva+typescript',
        _title_default: 'umi+react hook+dva+typescript',
      },
      {
        path: '/count',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__count__index" */ '../count/index'),
            })
          : require('../count/index').default,
        exact: true,
        _title: 'umi+react hook+dva+typescript',
        _title_default: 'umi+react hook+dva+typescript',
      },
      {
        component: () =>
          React.createElement(
            require('/Users/chengxinsong/Desktop/coding/fe_admin_react/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
        _title: 'umi+react hook+dva+typescript',
        _title_default: 'umi+react hook+dva+typescript',
      },
    ],
    _title: 'umi+react hook+dva+typescript',
    _title_default: 'umi+react hook+dva+typescript',
  },
  {
    component: () =>
      React.createElement(
        require('/Users/chengxinsong/Desktop/coding/fe_admin_react/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: true },
      ),
    _title: 'umi+react hook+dva+typescript',
    _title_default: 'umi+react hook+dva+typescript',
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    routeChangeHandler(history.location);
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return (
      <RendererWrapper0>
        <Router history={history}>{renderRoutes(routes, props)}</Router>
      </RendererWrapper0>
    );
  }
}
