### Elección de marco de pruebas

Existen numerosos marcos de pruebas pensados para el desarrollo en JavaScript, que cuentan con funcionalidades pensadas tanto para front-end como para back-end.

Los dos más populares [[browserstack]](https://www.browserstack.com/guide/top-javascript-testing-frameworks) son **Mocha** y **Jest**, por lo que serán los que analizaremos a continuación, viendo las características de cada uno y las diferencias que existen entre ellos.

En general, podemos ver como Jest es especialmente recomendable para aplicaciones en React.js, ya que en tal caso no requiere instalar dependencias (puesto que ambos están desarrollados por Facebook), mientras que Mocha es conocido por su gran flexibilidad y robustez, está pensado para grandes proyectos en Node.js.

Además, Mocha permite utilizar la biblioteca de aserciones que se prefiera, siendo la más popular **Chai**. Por el contrario, Jest incluye de por sí una biblioteca de aserciones, haciendo que no sea necesario instalarla aparte.

En cuanto a la velocidad, no existen muchas comparativas al respecto, pero Mocha debería ser más rápido según las opiniones recogidas de diversos sitios web. [[Comparativa]](https://freddixx.medium.com/nodejs-testing-with-jest-vs-mocha-on-typescript-in-2021-7bffc28a4379)

Si nos fijamos en las descargas, podemos ver [[descargas]](https://www.npmtrends.com/jest-vs-mocha) como Jest lleva desde 2019 siendo considerablemente más popular que Mocha, debiéndose esto probablemente al creciente número de aplicaciones desarrolladas en React.js.

En definitiva, considero que ambas serían válidas para mi proyecto, siendo la ventaja de Jest su fácil configuración y uso mientras que la ventaja de Chai es su gran flexibilidad. 

Dado que Mocha es más indicado para proyectos grandes y resulta más flexible y rápido, optaré por él pese a la necesidad de mayor configuración, aunque sin duda tendré en cuenta Jest como herramienta para testear el front-end en proyectos futuros.

Al instalar Mocha, es muy recomendable también instalar **Sinon.JS**, que se trata de un framework que sirve como mecanismo para crear *spies*, *stubs* y *mocks*. 
- **Spies**: Funciones *fake* que nos permiten realizar un seguimiento de las ejecuciones, pudiendo saber cuantas veces se ha llamado a una función o se ha ejecutado esta, entre otras cosas.
- **Stubs**: Nos permite reemplazar funciones, dándonos más control sobre como queremos que funcionen estas de cara a ajustarnos a múltiples escenarios.
- **Mocks**: Son métodos que tienen un comportamiento y expectativas preprogramadas. 

### Bibliografía

- https://www.browserstack.com/guide/top-javascript-testing-frameworks
- https://freddixx.medium.com/nodejs-testing-with-jest-vs-mocha-on-typescript-in-2021-7bffc28a4379
- https://www.npmtrends.com/jest-vs-mocha
- https://scotch.io/tutorials/how-to-test-nodejs-apps-using-mocha-chai-and-sinonjs