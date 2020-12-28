import {RouteResolver} from './js/router/RouteResolver';
import {appSettings} from './js/app.settings/settings';
import './scss/app.scss';
import {Router} from './js/router/Router';

console.log('ok');
console.log(appSettings);

const routeResolver = new RouteResolver(appSettings.routerSettings);
const router = new Router(routeResolver);

router.addRouteHandler('welcome', (params) => {
    console.log('handling welcome req');
    console.log('req params');
    console.log(params);
});

router.addRouteHandler('example-1', (params) => {
    console.log('handling welcome req');
    console.log('req params');
    console.log(params);
});

router.addRouteHandler('example-2', (params) => {
    console.log('handling welcome req');
    console.log('req params');
    console.log(params);
});

router.addErrorHandler((params) =>{
    console.log('error handler');
    console.log('req params');
    console.log(params);
});



router.run();
