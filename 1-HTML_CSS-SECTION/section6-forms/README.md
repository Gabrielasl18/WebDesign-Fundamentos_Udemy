# SEÇÃO 6 - Curso Web Design Fundamentos/Udemy

## Formulário de busca no google

```html
<form action="pagina.php" method="get">
    <input type="escolhe o tipo" name="q">
    <input type="submit" value="o que vai estar escrito no botao de enviar">
    <></>
</form>
```
<dl>
<dt>name="o valor de "</dt>
<dd>O jeito que o serviço do servidor está esperando os dados, valor que representa o usuário.</dd>

<dt>pagina.php</dt>
<dd>Qualquer código de servidor que está esperando os dados.</dd>

<dt>method="get"</dt>
<dd>Como vou enviar os dados para o servidor, sem precisar esconder, passo na própria URL da página, consigo visualizar (poucos dados e sem problema com segurança).</dd>

<dt>method="post"</dt>
<dd>Esconde os dados que estou enviando, envio junto com a requisição (muitos dados e problema com segurança).</dd>
</dl>
