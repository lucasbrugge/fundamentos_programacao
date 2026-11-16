# Lista E2 — Estruturas de Repetição

[PDF original](<../../.material-do-professor/Estruturas%20de%20repeti%C3%A7%C3%A3o/prog-aula-E2%20-%20Exerci%CC%81cios.pdf>)

Universidade Tecnológica Federal do Paraná — Campus Guarapuava\
Curso de Sistemas para Internet — Fundamentos de Programação\
Professor Eleandro Maschio

## Orientações gerais

Explore diferentes estruturas de repetição para resolver um mesmo exercício: while, do-while e\
for. É possível usar qualquer uma das estruturas de repetição para resolver os exercícios. A\
qualidade da solução varia com isso.

> Todos os itens desenvolvem a mesma classe `PainelContador` no [index.ts](index.ts). Implemente a base do exercício 1 e acrescente os métodos na sequência, reutilizando a mesma classe.

## Exercício 1

[Arquivo da atividade](index.ts)

Defina a classe PainelContador:\
(a) Objetos desta classe possuem, como atributos, os limites inferior e superior (inteiros), de um\
intervalo fechado de contagem;\
(b) Os atributos são obrigatoriamente fornecidos ao construtor;\
(c) Métodos acessadores e modificadores dos atributos devem ser implementados;\
(d) Qualquer modificação nesses atributos precisa passar por um método privado de validação,\
que troca os valores caso o limite superior seja menor do que o limite inferior;\
(e) A implementação dos demais métodos é descrita na sequência;\
(f) PainelContador é uma classe de interface. Portanto, imprime mensagens na tela.

## Exercício 2

[Arquivo da atividade](index.ts)

```text
contagem()
Realiza a contagem, em ordem crescente, do limite inferior até o superior. Por exemplo, caso os
limites sejam 1 e 10, a contagem será:
1
2
3
4
5
6
7
8
9
10
```

## Exercício 3

[Arquivo da atividade](index.ts)

```text
contagemDecrescente()
Idem, mas realizando a contagem decrescente, como:
10
9
8
7
6
5
4
3
2
1
```

## Exercício 4

[Arquivo da atividade](index.ts)

```text
contagemPares()
Passa apenas pelos números pares da contagem:
2
4
6
8
10
```

## Exercício 5

[Arquivo da atividade](index.ts)

```text
contagemImpares()
Idem para os ímpares:
1
3
5
7
9
```

## Exercício 6

[Arquivo da atividade](index.ts)

```text
contagemPasso()
Faz a contagem incrementando, a cada iteração, o valor referente ao passo. Trata-se de um inteiro
passado como parâmetro ao método. Supondo que o passo fosse 3, teria-se a contagem:
1
4
7
10
O próximo número, caso não ultrapassasse o limite superior, seria 13.
```

## Exercício 7

[Arquivo da atividade](index.ts)

```text
contagemOmitindo()
A contagem é realizada omitindo os múltiplos de um número inteiro passado como parâmetro ao
método. Por exemplo, se o número informado fosse o 3, teria-se a contagem:
1
2
*
4
5
*
7
8
*
10
```

## Como Citar
Todos os exercícios desta lista são autorais.
MASCHIO, Eleandro. Exercícios: Estruturas de Repetição. Guarapuava: Universidade Tecnológica
Federal do Paraná, 2023. 2 p. Material didático da disciplina de Fundamentos de Programação.
