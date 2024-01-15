Licence : https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/build-a-roman-numeral-converter-project/build-a-roman-numeral-converter

# Construisez un Convertisseur de Chiffres Romains

Les chiffres romains sont basés sur sept symboles et peuvent être écrits en utilisant diverses combinaisons pour représenter les chiffres arabes. Par exemple :

| Chiffres romains | Chiffres arabes |
|------------------|-----------------|
| M                | 1000            |
| CM               | 900             |
| D                | 500             |
| CD               | 400             |
| C                | 100             |
| XC               | 90              |
| L                | 50              |
| XL               | 40              |
| X                | 10              |
| IX               | 9               |
| V                | 5               |
| IV               | 4               |
| I                | 1               |

## Objectif

Créez une application fonctionnellement similaire à [ce lien](https://roman-numeral-converter.freecodecamp.rocks).

## Histoires d'utilisateurs

- Vous devez avoir un élément d'entrée avec un identifiant de "number".
- Vous devez avoir un élément de bouton avec un identifiant de "convert-btn".
- Vous devez avoir un élément de division avec un identifiant de "output".
- Lorsque vous cliquez sur l'élément "#convert-btn" sans entrer de valeur dans l'élément "#number", l'élément "#output" doit contenir le texte "Veuillez entrer un numéro valide".
- Lorsque l'élément "#number" contient le nombre -1 et que l'élément "#convert-btn" est cliqué, l'élément "#output" doit contenir le texte "Veuillez entrer un nombre supérieur ou égal à 1".
- Lorsque l'élément "#number" contient le nombre 4000 ou plus et que l'élément "#convert-btn" est cliqué, l'élément "#output" doit contenir le texte "Veuillez entrer un nombre inférieur ou égal à 3999".
- Lorsque l'élément "#number" contient le nombre 9 et que l'élément "#convert-btn" est cliqué, l'élément "#output" doit contenir le texte "IX".
- Lorsque l'élément "#number" contient le nombre 16 et que l'élément "#convert-btn" est cliqué, l'élément "#output" doit contenir le texte "XVI".
- Lorsque l'élément "#number" contient le nombre 649 et que l'élément "#convert-btn" est cliqué, l'élément "#output" doit contenir le texte "DCXLIX".
- Lorsque l'élément "#number" contient le nombre 1023 et que l'élément "#convert-btn" est cliqué, l'élément "#output" doit contenir le texte "MXXIII".
- Lorsque l'élément "#number" contient le nombre 3999 et que l'élément "#convert-btn" est cliqué, l'élément "#output" doit contenir le texte "MMMCMXCIX".

Pour accomplir les histoires d'utilisateurs et réussir tous les tests ci-dessous, complétez ce projet. Donnez-lui votre propre style personnel. Joyeux codage !



# Build a Roman Numeral Converter

Roman numerals are based on seven symbols and can be written using various combinations to represent Arabic numerals. For example:

| Roman numerals | Arabic numerals |
|---------------|-----------------|
| M             | 1000            |
| CM            | 900             |
| D             | 500             |
| CD            | 400             |
| C             | 100             |
| XC            | 90              |
| L             | 50              |
| XL            | 40              |
| X             | 10              |
| IX            | 9               |
| V             | 5               |
| IV            | 4               |
| I             | 1               |

## Objective

Build an app that is functionally similar to [Roman Numeral Converter](https://roman-numeral-converter.freecodecamp.rocks).

## User Stories

- You should have an input element with an id of `number`.
- You should have a button element with an id of `convert-btn`.
- You should have a div element with an id of `output`.
- When you click on the `#convert-btn` element without entering a value into the `#number` element, the `#output` element should contain the text "Please enter a valid number".
- When the `#number` element contains the number -1 and the `#convert-btn` element is clicked, the `#output` element should contain the text "Please enter a number greater than or equal to 1".
- When the `#number` element contains the number 4000 or greater and the `#convert-btn` element is clicked, the `#output` element should contain the text "Please enter a number less than or equal to 3999".
- When the `#number` element contains the number 9 and the `#convert-btn` element is clicked, the `#output` element should contain the text "IX".
- When the `#number` element contains the number 16 and the `#convert-btn` element is clicked, the `#output` element should contain the text "XVI".
- When the `#number` element contains the number 649 and the `#convert-btn` element is clicked, the `#output` element should contain the text "DCXLIX".
- When the `#number` element contains the number 1023 and the `#convert-btn` element is clicked, the `#output` element should contain the text "MXXIII".
- When the `#number` element contains the number 3999 and the `#convert-btn` element is clicked, the `#output` element should contain the text "MMMCMXCIX".

Fulfill the user stories and pass all the tests below to complete this project. Give it your own personal style. Happy Coding!
