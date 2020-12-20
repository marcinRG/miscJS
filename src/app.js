import { RouteResolver } from './js/router/RouteResolver';
import {appSettings} from './js/app.settings/settings';
import './scss/app.scss';
import { Router } from './js/router/Router';

console.log('ok');
console.log(appSettings);

const routeResolver = new RouteResolver(appSettings.routerSettings);
const router = new Router(routeResolver);
router.run();
