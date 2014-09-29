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
app.controller('popoverController', function ($scope, $compile,$templateCache) {
    $scope.dynamicPopover = 'Hello, World!';
    $scope.dynamicPopoverTitle = 'Urrgh!';

    template = $templateCache.get("templateId.html");

    popOverContent = $compile("<div id='a-popover'>" + template+"</div>")($scope);

    outroTemplate = $compile("<div id='a-popover'>" + $templateCache.get("templateUrrgh.html")+"</div>")($scope);


    $('#a-popover').popover({
        trigger: 'manual',
        html: true,
        title: outroTemplate,
        content: popOverContent // Adiciona o conteúdo da div oculta para dentro do popover.
    });

    fechar = function() {
        $('#a-popover').popover('hide');
    }
});