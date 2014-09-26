/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

app.directive("copyboard", function () {
    return {
        templateUrl: "shared/directives/copyboard/copyboard.html",
        restrict: "E",
        replace: true,
        scope: {
            copiarDe: '@',
            id: '@'
        },
        link: function (scope, element, attrs) {
            /**
             * Inicia o zeroCopyCode para determinada situação.
             * 
             * @param {type} idCopy (Id, Class, target) local onde será realizada a copia do texto.
             * @returns {undefined}
             */
            function loadCopyCode(id, idCopy) {

                idDiv = "div[id='" + id + "']";
                var client = new ZeroClipboard($(idDiv).find("span"));

                client.on('ready', function (event) {
                    client.on('copy', function (event) {
                        event.clipboardData.setData('text/plain', document.getElementById(idCopy).innerText);
                    });

                    client.on('aftercopy', function (event) {
                        console.log('Copiado: ' + event.data['text/plain']);
                    });
                });

                client.on('error', function (event) {
                    // console.log( 'ZeroClipboard error of type "' + event.name + '": ' + event.message );
                    ZeroClipboard.destroy();
                });
            }
            loadCopyCode(scope.id, scope.copiarDe);
            loadTooltip();
        },
        transclude: true
    };
});

