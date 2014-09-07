echo "Criando instancia do grunt no projeto"
call npm install grunt
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
echo "Grunt e tasks instalados com sucesso!"
pause
exit