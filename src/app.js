import {RouteResolver} from './js/router/RouteResolver';
import {appSettings} from './js/app.settings/settings';
import './js/svg-example/svg-example';
import './scss/app.scss';
import {Router} from './js/router/Router';

const routeResolver = new RouteResolver(appSettings.routerSettings);
const router = new Router(routeResolver);

router.addRouteHandler('welcome', (params) => {
    // console.log('handling welcome req');
    // console.log('req params');
    // console.log(params);
});

router.addRouteHandler('example-1', (params) => {
});

router.addRouteHandler('example-2', (params) => {
});

router.addErrorHandler((params) =>{
});



router.run();
