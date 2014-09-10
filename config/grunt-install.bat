echo "Criando instancia do grunt no projeto"
call npm install grunt
echo "Criando instancia do bower"
npm install -g bower
echo "Instalando tasks do grunt na pasta do projeto"
call npm install grunt-contrib-clean --save-dev
call npm install grunt-contrib-jshint --save-dev
call npm install grunt-contrib-concat --save-dev
call npm install grunt-contrib-uglify --save-dev
call npm install grunt-karma --save-dev
call npm install grunt-contrib-connect --save-dev
call npm install grunt-contrib-copy --save-dev
call npm install grunt-contrib-htmlmin --save-dev
call npm install grunt-contrib-cssmin --save-dev
call npm install karma-chrome-launcher --save-dev
call npm install karma-jasmine --save-dev
echo "Grunt e tasks instalados com sucesso!"
echo "Baixando Libs necessarias para o projeto"
call bower install
pause
exit