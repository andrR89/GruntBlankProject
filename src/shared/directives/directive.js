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

app.filter('numberFixedLen', function () {
    return function (n, len) {
        var num = parseInt(n, 10);
        len = parseInt(len, 10);
        if (isNaN(num) || isNaN(len)) {
            return n;
        }
        num = '' + num;
        while (num.length < len) {
            num = '0' + num;
        }
        return num;
    };
});