import { describe, it, expect } from '@jest/globals';
import {RouteResolver} from '../src/js/router/RouteResolver'

describe('RouteResolver class tests', () => {
    it('should create class', () => {
        let routerSettings = {
            routes: [
                'welcome',
                'example-1',
                'example-2'
            ],
            defaultRoute: 'welcome',
            errorRoute: 'error'
        }
        let routeResolver = new RouteResolver(routerSettings);
        expect(routeResolver).toBeDefined();
        expect(routeResolver.getDefaultRoute()).toBe(routerSettings.defaultRoute);
        expect(routeResolver.getErrorRoute()).toBe(routerSettings.errorRoute);
        
    });
});