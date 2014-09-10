module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            options: { force: true },
            start: {
                src: ['<%= pkg.garbageDir %>', '<%= pkg.distDir %>']
            },
            finish: {
                src: ['<%= pkg.garbageDir %>', '<%= pkg.distDir %><%= pkg.concatJsFile %>', '<%= pkg.distDir %><%= pkg.concatCssFile %>']
            }
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true
                }
            },
            dist: ['<%= pkg.sourcesDir %>*/*.js', '<%= pkg.sourcesDir %><%= pkg.sharedDir %>*/*.js', '<%= pkg.sourcesDir %>*.js', '!<%= pkg.libDir %>*.js']
        },
        concat: {
            js: {
                src: ['<%= pkg.sourcesDir %>*/*.js', '<%= pkg.sourcesDir %><%= pkg.sharedDir %>*/*.js', '!<%= pkg.sourcesDir %>*.js', '!<%= pkg.libDir %>*.js', '!<%= pkg.sourcesDir %><%= pkg.distDir %>*'],
                dest: '<%= pkg.garbageDir %><%= pkg.concatJsFile %>'
            },
            css: {
                src: ['<%= pkg.sourcesDir %>*/*.css', '<%= pkg.sourcesDir %><%= pkg.sharedDir %>*/*.css', '!<%= pkg.sourcesDir %>*.css', '!<%= pkg.libDir %>*.css'],
                dest: '<%= pkg.garbageDir %><%= pkg.concatCssFile %>'
            }
        },
        uglify: {
            dist: {
                src: ['<%= pkg.garbageDir %><%= pkg.concatJsFile %>'],
                dest: '<%= pkg.garbageDir %><%= pkg.minJsFile %>'
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [
                    {
                        expand: true,
                        src: ['<%= pkg.sourcesDir %>*/*.html'],
                        dest: '<%= pkg.garbageDir %>'
                    },
                    {
                        expand: true,
                        src: ['<%= pkg.sourcesDir %>*.html', '!<%= pkg.sourcesDir %>index.html', '!<%= pkg.sourcesDir %>index_prod.html'],
                        dest: '<%= pkg.garbageDir %>'
                    },
                    {
                        expand: true,
                        src: ['<%= pkg.sourcesDir %><%= pkg.sharedDir %>*/*.html'],
                        dest: '<%= pkg.garbageDir %>'
                    },
                    {
                        '<%= pkg.garbageDir %>index.html': '<%= pkg.sourcesDir %><%= pkg.indexFile %>'
                    }
                ]
            }
        },
        cssmin: {
            dist: {
                files: {
                    '<%= pkg.garbageDir %><%= pkg.minCssFile %>': ['<%= pkg.garbageDir %><%= pkg.concatCssFile %>']
                }
            }
        },
        karma: {
            dist: {
                configFile: 'karma.conf.js'
            },
            dev: {
                configFile: 'karma.conf.dev.js'
            }
        },
        copy: {
            create: {
                files: [
                    // outros ressources
                    {
                        src: ['<%= pkg.sourcesDir %>*/*', '<%= pkg.sourcesDir %><%= pkg.sharedDir %>*/*', '!<%= pkg.sourcesDir %>*/*.html', '!<%= pkg.sourcesDir %><%= pkg.sharedDir %>*/*.html', '!<%= pkg.sourcesDir %><%= pkg.sharedDir %>*/*.css', '!<%= pkg.sourcesDir %><%= pkg.sharedDir %>*/*.js', '!<%= pkg.sourcesDir %>*/*.js', '!<%= pkg.sourcesDir %><%= pkg.distDir %>*', '!<%= pkg.sourcesDir %>node_modules/*', '!<%= pkg.sourcesDir %>app/*', '!<%= pkg.libDir %>*'],
                        dest: '<%= pkg.garbageDir %>'
                    },
                    // libs
                    {
                        expand: true,
                        flatten: true,
                        src: ['<%= pkg.libDir %>*/*.min.js*', '<%= pkg.libDir %>*.min.js*', '<%= pkg.libDir %>**/*.min.*', '!<%= pkg.libDir %>**/*.min*.map', '!<%= pkg.libDir %>**/*.min*.gzip', '<%= pkg.libDir %><%= pkg.angularI18NFolder %>*<%= pkg.angularLocale %>*'],
                        dest: '<%= pkg.garbageDir %>/lib'
                    },
                    // libs
                    {
                        expand: true,
                        flatten: true,
                        src: ['<%= pkg.libDir %>**/*.ttf'],
                        dest: '<%= pkg.garbageDir %>/fonts'
                    },
                    // Copia todo o build para o diretorio /dist
                    {
                        expand: true, cwd: '<%= pkg.garbageDir %>', src: ['**'], dest: '<%= pkg.distDir %>'
                    }
                ]
            },
            dist: {
                files: [
                    // Copia todo o build para o diretorio /dist
                    {
                        expand: true, cwd: '<%= pkg.garbageDir %>', src: ['**', '!*.js'], dest: '<%= pkg.distDir %>'
                    }
                ]
            }
        },
        connect: {
            dist: {
                options: {
                    port: 9988,
                    hostname: 'localhost',
                    base: '<%= pkg.distDir %>'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('qa', ['karma:dev', 'jshint']);
    grunt.registerTask('dist', ['clean:start', 'concat', 'uglify', 'copy:create', 'htmlmin', 'cssmin', 'copy:dist', 'clean:finish']);
    grunt.registerTask('execute-dist', ['dist', 'connect:dist:keepalive']);
}           