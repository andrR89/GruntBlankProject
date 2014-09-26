angular.module("ngScrollTo", [])
        .directive("scrollTo", ["$window", function ($window) {
                return {
                    restrict: "AC",
                    compile: function () {
                        var document = $window.document;
                        function scrollInto(idOrName) {
                            if (!idOrName)
                                $window.scrollTo(0, 0);
                            var el = document.getElementById(idOrName);
                            if (!el) {
                                el = document.getElementsByName(idOrName);

                                if (el && el.length)
                                    el = el[0];
                                else
                                    el = null;
                            }
                            if (el)
                                el.scrollIntoView();
                        }

                        return function (scope, element, attr) {
                            element.bind("click", function (event) {
                                scrollInto(attr.scrollTo);
                            });
                        };
                    }
                };
            }]);