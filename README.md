# Projeto: Calculadora MENU - CLIENTES #

## INTRODUÇÃO ##

Esse projeto é um mock para uma empresa ficticia, **GRP DYNAMICS**. Ele é uma **adaptação de um projeto real que fiz para um cliente**, mas troquei logomarcas, 
valores e o contexto em geral de modo a não divulgar informações. Foram preservadas apenas as mecânicas principais dos códigos.

## OBJETIVO ##

A empresa tem um cardápio de produtos que os **clientes tinham dificuldade de compreender e calcular o preço final**. Como é uma venda complexa feita por meio de um relacionamento,
não sendo um produto varejo que o cliente compra diretamente do site, essa calculadora foi pedida como um instrumento para ser enviado para **clientes simularem orçamentos com mais
autonômia e facilidade**.


## TELAS E FUNCIONAMENTO ##

#### Tela de autenticação ####
![alt text](hhttps://github.com/tiagosestari/menu-clientes/blob/master/telas/autenticacao.png?raw=true)

Como o aplicativo é enviado diretamente aos clientes e não salva nenhum dado em banco de dados, 
não foi necessário criar um sistema de autenticação muito complexo.
A empresa só queria que o site não ficasse disponível para qualquer um que encontrasse na internet.
Desse modo, com um único login e senha salvos nas variáveis ambiente, que a empresa passa diretamente 
para seus clients, a autenticação é feita na rota do backend.




