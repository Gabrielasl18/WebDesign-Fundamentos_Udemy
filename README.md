# aprendendo a usar arquivo markdown (.md)

[vídeo sobre markdown](https://www.youtube.com/watch?v=ZUmeH3NmgX8)

___

# WebDesign-Udemy
*HTML5 + CSS3,+ JS*

___

# SEÇÃO 3 - Curso Web Design Fundamentos/Udemy

## Listas aninhadas 
> Uma lista dentro da outra

```html
<ul>
  <li></li>
   <li>
      <ul> 
         <li></li>
         <li></li>
      </ul>
   </li>
   <li></li>
</div>
```

## Listas de definição
> Um dicionário, por exemplo, onde temos 1 termo 1 definição.

```html
<dl>
  <dt></dt>
  <dd></dd>
  <dt></dt>
  <dd></dd>
</dl>
```
> Um dicionário, por exemplo, onde temos um 1 e uma várias definições.

```html
<dl>
  <dt></dt>
  <dd></dd>
  <dd></dd>
  <dd></dd>
</dl>
```
> Um dicionário, por exemplo, onde temos um vários e uma 1 definição.

```html
<dl>
  <dt></dt>
  <dt></dt>
  <dt></dt>
  <dd></dd>
</dl>
```
## Overflow
> Trata o conteúdo que excede determinado elemento.
Valores possíveis:
* visible
* hdden
* srool
* auto

## Tabelas
> Todas as linhas devem possuir o mesmo número de colunas na tag table. (Do exemplo cada linha tem 2 colunasa).

```html
<table>
  <tr>
    <td>1A</td> <td>3B</td>
  </tr>
  <tr>
    <td>2A</td> <td>2B</td>
  </tr>  
  <tr>
    <td>3A</td> <td>3B</td>
  </tr>
</table>
```
> Para fazer com que a tag table possa ter uma linha com apenas umas coluna é necessário usar colspan, para mesclar duas colunas.

```html
<table>
  <tr>
    <td colspan="2">1A</td>
  </tr>
  <tr>
    <td>2A</td> <td>2B</td>
  </tr>  
  <tr>
    <td>3A</td> <td>3B</td>
  </tr>
</table>
```
> Para fazer 1 célula valer por 2 linhas, é necessário usar rowspan.

<table>
  <tr>
    <td rowspan="2">1A</td>
    <td>1B</td>
  </tr>
  <tr>
    <td>2A</td> 
  </tr>  
  <tr>
    <td>3A</td> <td>3B</td>
  </tr>
</table>
```
