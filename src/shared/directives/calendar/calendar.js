app.directive("calendar", function () {
    return {
        templateUrl: "shared/directives/calendar/calendar.html",
        restrict: "E",
        replace: true,
        scope: {
            model: "=",
            label: "@",
            format: "@",
            placeholder: "@",
            min: "@"
        },
        link: function (scope) {
            scope.open = function ($event) {
                $event.preventDefault();
                $event.stopPropagation();
                scope.opened = true;
            };

            scope.clear = function () {
                scope.date = null;
            };

            scope.toggleMin = function() {
                if(scope.min){
                    scope.minDate = new Date();
                } else {
                    scope.minDate = scope.min;
                }
            };
            scope.toggleMin();
        }
    };
});