export class Router {
    constructor(routeResolver) {
        console.log('Router constructed');
        this.routeResolver = routeResolver;
        this.routeAndParams = [];
    }

    run() {
        let params = this.getReqParams();
        console.log(params);
        console.log(document.location);
        window.addEventListener('popstate', () => {
            console.log(this.getReqParams());
        });
    }

    getReqParams() {
        const path = document.location.hash.slice(1);
        return this.routeResolver.getRouteAndParameters(path);
    }

    handleRequest() {
        
    }



}