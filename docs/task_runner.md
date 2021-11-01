### Elección de gestor de tareas

Existen numerosas opciones para automatizar flujos de trabajo repetitivos mediante la programación de tareas.

Los dos más populares [[uplers]](https://www.uplers.com/blog/5-best-task-runner-module-bundler-front-end-development-tools/) son **Grunt** y **Gulp**, por lo que serán los que analizaremos a continuación, viendo las características de cada uno y las diferencias que existen entre ellos.

Las dos herramientas se tratan de task runners de línea de comandos de código abierto basados en el entorno en tiempo de ejecución **Node.js** de JavaScript [[ionos]](https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/gulp-vs-grunt-que-diferencia-a-estos-task-runners/).
Ambos también recurren al mismo gestor de paquetes, **npm**. La diferencia reside en el hecho de que Gulp recurre al módulo *stream* de Node.js mientras que Grump emplea el módulo *fs*, siendo esta la mayor diferencia entre ambos. De esta manera, Gulp lleva a cabo los procesos en la memoria principal mientras que Grunt crea archivos temporales en disco con el resultado de las tareas ejecutadas, haciendo que Gulp resulte considerablemente más rápido.

En cuanto a las funcionalidades que ofrece cada uno, Gulp cuenta con cerca de 4200 plugins [[gulpjs plugins]](https://gulpjs.com/plugins/) mientras que Grunt cuenta con alrededor de 6200 [[gruntjs plugins](https://gruntjs.com/plugins/)]. 

Por otro lado, si analizamos la sintaxis de ambos podemos ver como Grunt requiere muy poca configuración y es sencillo de usar, sin embargo las tareas no son excesivamente expresivas. Por otro lado, Gulp tiene una curva de aprendizaje más empinada, aunque resulta mucho más expresivo y permite agrupar las cosas de manera más lógica. [(Aquí podemos ver ejemplos de ambos)](https://deliciousbrains.com/grunt-vs-gulp-battle-build-tools/)

Si nos fijamos en las descargas de los últimos años [[descargas]](https://www.npmtrends.com/grunt-vs-gulp), podemos ver que Gulp es el más descargado de los dos desde 2016.

Como conclusión, según el análisis realizado, pese a la empinada curva de aprendizaje de Gulp, este es el más recomendado para proyectos grandes dada su mayor velocidad, por lo que optaré por él pese a la escasa complejidad de FoodSaver para adquirir experiencia. 

### Bibliografía

https://www.uplers.com/blog/5-best-task-runner-module-bundler-front-end-development-tools/
https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/gulp-vs-grunt-que-diferencia-a-estos-task-runners/
https://gulpjs.com/plugins/
https://gruntjs.com/plugins/
https://deliciousbrains.com/grunt-vs-gulp-battle-build-tools/
https://www.npmtrends.com/grunt-vs-gulp