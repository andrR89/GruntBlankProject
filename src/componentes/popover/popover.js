/**
 * Created by André on 28/09/2014.
 *
 * Fazer uma Diretiva passando o Template Header e o Template Do Conteudo do POPOVER
 *
 * http://stackoverflow.com/questions/21362712/html-file-as-content-in-bootstrap-popover-in-angularjs-directive
 * http://plnkr.co/edit/CoDdWWQz8jPPM4q1mhC5?p=preview
 * http://jsfiddle.net/mrajcok/wTz4b/
 *
 *
 */
app.controller('popoverController', function ($scope, $compile, $templateCache) {
    $scope.dynamicPopover = 'Hello, World!';
    $scope.dynamicPopoverTitle = 'Urrgh!';
    
    $scope.abrirX = function(){
        
    }
});


app.directive('advancedPopover', function ($compile, $templateCache) {
    var id = {};
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            
            var id = attrs.idPopOver;
            console.log(id);
            var title = attrs.title;
            var dataContent= attrs.dataContent;
            var headerTemplate = attrs.headerTemplate;
            var bodyTemplate = attrs.bodyTemplate;
            
            if(headerTemplate){
                title = $compile("<div id='" + id + "'>" + $templateCache.get(headerTemplate) + "</div>")(scope);
            }
            
            if(bodyTemplate){
                dataContent = $compile("<div id='" + id + "'>" + $templateCache.get(bodyTemplate) + "</div>")(scope);
            } 
            
            var options = {
                placement: "auto",
                html: true,
                trigger: 'manual',
                content: dataContent,
                title: title
            };

            scope.fechar = function () {
                $(element).popover('destroy');
            };

            scope.abrir = function () {
                var popOver = document.getElementById(id);
                
                if (popOver === null) {
                    $(element).popover(options);
                    $(element).popover('show');
                } else {
                    scope.fechar();
                }
            };
        }
    };
});

