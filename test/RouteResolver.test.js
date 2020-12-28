import { describe, it, expect, beforeEach, xit } from '@jest/globals';
import { RouteResolver } from '../src/js/router/RouteResolver'

describe('RouteResolver class tests', () => {
    let routeSettings = {};

    beforeEach(() => {
        routeSettings = {
            routes: [
                'welcome',
                'example-1',
                'example-2'
            ],
            defaultRoute: 'welcome',
            errorRoute: 'error'
        }
    });

    it('should create class', () => {
        const routeResolver = new RouteResolver(routeSettings);
        expect(routeResolver).toBeDefined();

        expect(routeResolver.defaultRoute).toBe(routeSettings.defaultRoute);

        expect(routeResolver.errorRoute).toBe(routeSettings.errorRoute);
    });

    it('shold check if path is valid', () => {

        const routeResolver = new RouteResolver(routeSettings);
        let path = null;
        expect(routeResolver.isPathValid(path)).toBe(false);

        path = '';
        expect(routeResolver.isPathValid(path)).toBe(false);

        path = `/${routeSettings.defaultRoute}/`; //path == /welcome/
        expect(routeResolver.isPathValid(path)).toBe(true);

        path = `/${routeSettings.defaultRoute}`; //path == /welcome
        expect(routeResolver.isPathValid(path)).toBe(true);

        path = '/';
        expect(routeResolver.isPathValid(path)).toBe(true);

        path = '//';
        expect(routeResolver.isPathValid(path)).toBe(false);

    });

    it('should return expected parameters', () => {
        const routeResolver = new RouteResolver(routeSettings);
        let path = '/costam/id/5';
        let obj = routeResolver.getRouteAndParameters(path);
        expect(obj.route).toBe('costam');
        expect(obj.parameters['id']).toBe('5');

        path = '/costam';
        obj = routeResolver.getRouteAndParameters(path);
        expect(obj.route).toBe('costam');
        expect(Object.keys(obj.parameters).length).toBe(0);
        expect(routeResolver.isRouteValid(obj.route)).toBe(false);

        path = '/';
        obj = routeResolver.getRouteAndParameters(path);
        expect(obj.route).toBe(routeResolver.defaultRoute);
        expect(Object.keys(obj.parameters).length).toBe(0);

        path = '';
        obj = routeResolver.getRouteAndParameters(path);
        expect(obj.route).toBe(routeResolver.errorRoute);
        expect(Object.keys(obj.parameters).length).toBe(0);

        path = '//';
        obj = routeResolver.getRouteAndParameters(path);
        expect(obj.route).toBe(routeResolver.errorRoute);
        expect(Object.keys(obj.parameters).length).toBe(0);
    });

});