# Extrair links de arquivo Markdown

**Esta biblioteca se destina à extrair links de um arquivo Markdown e retornar o link e o nome do link.**
Na versão atual é possivel extrair os links e ordená-los de acordo com a ordem que aparecem dentro de um array que contém um objeto.

## Os métodos utilizados na biblioteca são:

**getLinksFromMd (mdString);**

Exemplo de uso:

```javascript
$node
	let lib = require("links-extract-karina")
	lib.getLinksFromMd("Amanhã é 23 [Laboratória](laboratoria.la), são 8 dias para o fim do mês.[Google](www.google.com)");
=> [ { href: '(laboratoria.la)', text: '[Laboratória]' },
  { href: '(www.google.com)', text: '[Google]' } ]
```

## Instalação

+ Certifique-se de já possuir o node e o npm instalados. Para mais informações, visite o site oficial do [npm](http://https://www.npmjs.com/get-npm "npm").
+ Proceda com a instalação com:

```javascript
$npm install links-extract-karina
```

### RoadMap do Projeto
----

#### Versão 1.0.0 (publicada)
+ Extração de links dentro de um Markdown
+ Garante entrada apenas de strings
+ README.md