## Ejercicio 3 - Strings y arrays

En el HTML, crea un formulario (utiliza la etiqueta `<form>`) que tenga los elementos que aparecen en la maqueta. Utiliza Bootstrap.

Tu código JS debe ir en el archivo `analiza-palabras.js`. El archivo `scripts.js` no lo tienes que tocar, es el que tiene la interacción con el HTML.

En el JS, crea una función que se llame `analizaPalabras`, que reciba un array de palabras y que devuelva un texto con un análisis de cada palabra. Para probar la función, escribe palabras separadas por espacios en el textarea del formulario, y dale al botón "procesar". El resultado aparecerá en la consola.

Por ejemplo, para este listado de palabras: 
  ```hola, Fotosíntesis, Fusible, yo```
debería imprimir por consola:

```
#######
Palabra 1: hola
Nº de caracteres: 4
Deletreo: h-o-l-a
La palabra es par y no empieza por mayúscula
La palabra no contiene "ble"
#######
Palabra 2: Fotosíntesis
Nº de caracteres: 12
Deletreo: f-o-t-o-s-í-n-t-e-s-i-s
La palabra es par y empieza por mayúscula
La palabra no contiene "ble"
#######
Palabra 3: Fusible
Nº de caracteres: 7
Deletreo: f-u-s-i-b-l-e
La palabra es impar y empieza por mayúscula
La palabra sí contiene "ble"
#######
Palabra 4: yo
Nº de caracteres: 2
Deletreo: y-o
La palabra es par y no empieza por mayúscula
La palabra no contiene "ble"
#######
```