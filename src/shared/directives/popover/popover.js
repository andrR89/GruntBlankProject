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
app.directive('advancedPopover', ['$compile', '$templateCache', function ($compile, $templateCache) {
    var id = {};
    return {
        restrict: "A",
        scope: true,
        link: function (scope, element, attrs) {

            // Identifacador do componente que chama o popOver
            var id = attrs.idPopOver;
            // Conteudo do popOver Simples
            var dataContent = attrs.content;
            // Header do template
            var headerTemplate = attrs.headerTemplate;
            // Corpo do popOver Advanced
            var bodyTemplate = attrs.bodyTemplate;
            // Titulo do modal (Simples ou Advanced)
            var title = attrs.title;
            // Como Disparar o popOver [auto(default), click, hover, focus, manual]
            var trigger = attrs.trigger === undefined &&
                'auto' || attrs.trigger;
            // disposição do popouver [top | bottom | left | right | auto(default)]
            var posicao = attrs.posicao === undefined &&
                'auto' || attrs.posicao;

            // Se tem Template Advanced
            if (headerTemplate) {
                title = $compile("<div id='" + id + "'>" + $templateCache.get(headerTemplate) + "</div>")(scope);
            }
            // Se tem Body Advanced
            if (bodyTemplate) {
                dataContent = $compile("<div id='" + id + "'>" + $templateCache.get(bodyTemplate) + "</div>")(scope);
            }
            else {
                dataContent = $compile("<div id='" + id + "'>" + dataContent + "</div>")(scope);
            }

            /**
             * Opções do popOver
             * @type {{placement: string, html: boolean, trigger: (boolean|string|*), content: *, title: *}}
             */
            var options = {
                placement: posicao,
                html: true,
                trigger: trigger,
                content: dataContent,
                title: title,
                animation: true
            };

            /**
             * Abre o popOver
             */
            scope.fecharPopOver = function () {
                $(element).popover('destroy');
                if (trigger === 'hover') {
                    $(element).popover(options);
                }
            };

            /**
             * Fecha o pooOver
             */
            scope.abrirPopOver = function () {
                var popOver = document.getElementById(id);
                if (popOver === null) {
                    $(element).popover(options);
                    $(element).popover('show');
                } else if (trigger != 'focus') {
                    scope.fecharPopOver();
                }
            };
        }
    };
}]);

