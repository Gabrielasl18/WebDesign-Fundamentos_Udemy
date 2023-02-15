##  Atrelando funções à eventos disparados por elementos HTML

```html
<button onclick="mostrarTabuada()">...</button>
```

```javascript
function mostrarTabuada() {
}
```
___

## Função void: Reaproveitamento de códigos
> Funções que não retornam nenhum valor.São úteis quando queremos reaproveitar código.

___

## Funções que recebem parâmetros
> Funções que recebem valores (argumentos ou parâmetros) são úteis para reaproveitar ainda mais seus códigos, em javaScript não precisa especificar o tipo.

___

## Recuperando números que estão no html com o textContent
> Recupera-se o número que estava na div utilizando a propriedade textContent. Uma observação importante é que toda a informação que vem da interface do usuário (quando usamos javascript no browser) é do tipo texto, ou melhor, string.
> Como vamos fazer um calculo matemático, uma boa prática é convertermos esse texto para número:

 ```javascript
var n1 = document.querySelector('#output').textContent;
n1 = parseFloat(n1); 
```