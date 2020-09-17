# Projeto: Calculadora MENU - CLIENTES #
#### Desenvolvido por Tiago Sestari ####

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

#### Tela principal ####
![alt text](hhttps://github.com/tiagosestari/menu-clientes/blob/master/telas/tela-a.png?raw=true)
![alt text](hhttps://github.com/tiagosestari/menu-clientes/blob/master/telas/tela-b.png?raw=true)
![alt text](hhttps://github.com/tiagosestari/menu-clientes/blob/master/telas/tela-c.png?raw=true)

* Na tela principal o cliente tem a fórmula utilizada colocada de forma clara e pode colocar o número
  de participantes de cada grupo. 
  [Validações
   Quando um grupo não tem gente pode deixar com zero
   Se todos os grupos tiverem zero o usuário recebe um alerta.]

* Depois disso o usuário pode escolher se quer incluir avaliadores em alguma dinâmica. 
  Novamente a fórmula é explicitada com clareza, e o usuário usa um check para decidir se
  irá incluir avaliadores (S/N) e depois quantos avaliadores em grupos de 2 sendo no máximo 16.
  Essas especificaçãoes foram passadas pela empresa.

* Por fim podemos ver o valor total anual, e o valor anual por candidato em cada grupo.

* O aplicativo inclui mais duas features interessantes:
    * Um slider para incluir o número de parcelas atualizado em tempo real com o valor de cada parcela
    * Um histórico de simulações para que o cliente tenha facilmente em uma tabela e possa analisar.
      ![alt text](hhttps://github.com/tiagosestari/menu-clientes/blob/master/telas/tela-d.png?raw=true)

* Vale apontar também que o aplicativo é responsivo 
![alt text](hhttps://github.com/tiagosestari/menu-clientes/blob/master/telas/tela-e.png?raw=true)

