GruntBlankProject
=================

Exemplo de projeto utilizando Grunt com Karma/Jasmine, jsHint, Concat, uglify e minificação de código Html/Css.

Este projeto visa uma padronização de estrutura de arquivos e pastas para o desenvolvimento de aplicações HTML5/Javascript, AngularJs e Bootstrap,
utilizando como ferramenta de construção e distribuição o GRUNT.

- NPM's utilizados no projeto:
    Ver arquivo package.json

- Pre-Requisitos:
     NodeJS,
     GRUNT
     Karma
 - Após instalar o NodeJS, digite:
    `npm install -g grunt`
 - Para instalar o Karma, digite: (Para execução em windows, é necessário ser a versão 0.10)
    `npm install -g karma@0.10` 
 
 - Distribuição do projeto:

    1) No Windows Execute o arquivo "config/grunt-install.bat" para baixar as dependencias do grunt. (dentro da pasta config)
    2) Execute a task "grunt dist" no cmd dentro da pasta config

 - Execução de Testes com Karma

    1) execute a task "grunt karma" no cmd dentro da pasta config
