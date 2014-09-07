app.directive("accordion", function () {
    return {
        templateUrl: "shared/directives/accordion.html",
        restrict:"E",
        replace:true,
        scope: {
            title:"@"
        },
        transclude: true
    };
});

app.directive("paginator", function () {
    return {
        templateUrl: "shared/directives/paginator.html",
        restrict:"E",
        replace:true,
        scope: {
            data:"=",
            call:"&"
        },
    };
});