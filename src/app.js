import {RouteResolver} from './js/router/RouteResolver';
import {appSettings} from './js/app.settings/settings';
import './js/svg-example/svg-example';
import './js/svg-letters/svg-letters';
import './scss/app.scss';
import {Router} from './js/router/Router';

const routeResolver = new RouteResolver(appSettings.routerSettings);
const router = new Router(routeResolver);
const pageSelectors = {
    'welcome': {selector: '.content div.welcome.page'},
    'example-1': {selector: '.content div.example-1.page'},
    'example-2': {selector: '.content div.example-2.page'},
    'example-3': {selector: '.content div.example-3.page'},
    'error': {selector: '.content div.error.page'}
};
const hideClass = 'hide';

function hideAllPages() {
    Object.values(pageSelectors).forEach(pageSelector => {
        document.querySelector(pageSelector.selector).classList.add(hideClass);
    });
}

function showPage(pageKey) {
    hideAllPages();
    document.querySelector(pageSelectors[pageKey].selector).classList.remove(hideClass);
}


router.addRouteHandler('welcome', (params) => {
    console.log('handling welcome req');
    console.log('req params');
    console.log(params);
    showPage(params.route);
});

router.addRouteHandler('example-1', (params) => {
    console.log(params);
    showPage(params.route);
});

router.addRouteHandler('example-2', (params) => {
    console.log(params);
    showPage(params.route);
});

router.addRouteHandler('example-3', (params) => {
    console.log(params);
    showPage(params.route);
});

router.addErrorHandler((params) => {
    console.log(params);
    showPage(params.route);
});


hideAllPages();
router.run();
