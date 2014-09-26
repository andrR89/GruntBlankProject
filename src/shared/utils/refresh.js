/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Carrega o Prettify no codigo para visualização após renderização do html.s
 * @param {type} idCode id da Tag Code para atualização.
 * @returns {undefined} .
 */
function loadPrettify() {
    setTimeout(function () {
        prettyPrint();
    }, 250);
}

/**
 * Carrega o tooltip do bootstrap.
 * @returns {undefined}
 */
function loadTooltip() {
    $("[rel='tooltip']").tooltip();
}
