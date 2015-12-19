(function(){
     'use strict';

        module.exports = function(grunt){

            require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

            grunt.initConfig({
                jshint: {
                    options: {
                        jshintrc: true
                    },
                    app:['js/**/*.js','views/**/*.js']
                },

                copy:{
                    app:{
                        files: [
                                {
                                expand: true,
                                src: ['js/**','views/**','*.html'],
                                dest: 'build/'
                            }
                        ]
                    }
                },

                concat:{
                    options:{
                        nonull: true
                    },
                    appJs:{
                        src: [
                            'build/js/**/*.js',
                            'build/views/**/*.js',
                            '!build/js/**/*-Controller.js',
                            '!views/js/**/*-controller.js'
                        ],
                        dest: 'build/app.js'
                    },
                    appCss:{
                        src: [
                            'build/css/**/*.css',
                            'build/views/**/*.css'
                        ],
                        dest: 'build/app.css'
                    }
                },

                //Limpa a pasta de destino
                clean:{
                    app: {
                        src: 'build'
                    }
                },

                ngAnnotate:{
                    options: {
                        singleQuotes: true
                    },
                    app: {
                        files: [{
                            expand: true,
                            src: ['build/**/*.js']
                        }]
                    }
                }
            });

            grunt.registerTask('build',[
                'clean',
                'copy',
                'ngAnnotate',
                'concat',
            ]);

        };

    }
)();