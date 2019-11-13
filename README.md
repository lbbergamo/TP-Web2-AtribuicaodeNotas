# Atribuição de Notas

Projeto realizado para a materia Desenvolvimento de WEB 2 (2 bimestre) com o objetivo da utilização e implantação de Bootstrap e Requirejs.
O objetivo foi facilitar a atribuição de notas para os Professores do curso de Sistema de Informação.

### Descrição

Foi utilizado o JavaScript para o desenvolvimento do sistema,para a exportação de dados em Excel foi utilizado o "ExcellentExport.js" e para a gravação/importação dos dados digitas foi utilizado o LocalStorage (uma API dos navegadores)

```
[JavaScript export to Excel](http://jordiburgos.com/post/2013/javascript-export-to-excel.html)
```

### Fotos do Projeto

![Foto 1 - Site](https://raw.githubusercontent.com/lbbergamo/TP-Web2-AtribuicaodeNotas/master/Informativos/tela-inicial.png)

## Calculo da Média

Como o curso de Sistema de Informação da Universidade Santa Cecília a media é ponderada então
```
Media do Primeiro Bimestre tem peso 1. 
Media do Segundo Bimistre tem peso 2.
```

O cálculo é :
```
MEDIA TOTAL = ((mediaPrimeiroBimestre) + (mediaSegundoBimestre * 2))/3
```

Para ser aprovado no curso é preciso ter a média no minimo de 5 pontos.

### Validações 

É necessário prencher os seguintes dados:
* Nota P1
* Nota P2 
* Nome
* RA 

Validação necessária:
* Nota da P1/P2 ser entre 0 a 10
* A Soma das Notas TP e P não pode exceder 10 pontos.

## Construido com

* [BootStrap](https://getbootstrap.com.br/docs/4.1/getting-started/introduction/) - BootStrap - Versão 4.1.3
* [ExcellentExport.js](http://jordiburgos.com/post/2013/javascript-export-to-excel.html) - Exportação dos Dados da Tabela para Excel
* [Requirejs](https://requirejs.org/docs/start.html) - Extensão necessária do ExcellentExport

## Autores

* **Leandro Bento Bergamo** - *Trabalho de Faculdade* - [lbbergamo](https://github.com/lbbergamo/)
* **Gabriel Gonçalves da Silva Tavares** - *Trabalho de Faculdade* 
* **Marcus Antonio Lamarão Gomes** - *Trabalho de Faculdade* 
* **Maycon Robson Silva Lima** - *Trabalho de Faculdade* 

## Agradecimentos

* Professor Alexandre Sobrino
* Aperfeiçoamento/Aprendizado da Linguagem JavaScript
* Aperfeiçoamento/Aprendizado do Framework BootStrap
* Aoerfeiçoamento/Aprendizado do GitHub
* Utilização de Codigos Externos
* etc
