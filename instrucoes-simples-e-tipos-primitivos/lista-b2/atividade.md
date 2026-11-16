# Lista B2 — Introdução aos Aplicativos TypeScript Entrada, Saída e Atribuição

[PDF original](<../../.material-do-professor/Instru%C3%A7%C3%B5es%20simples%20e%20tipos%20primitivos%20de%20dados/prog-aula-B2%20-%20Exerci%CC%81cios.pdf>)

Universidade Tecnológica Federal do Paraná — Campus Guarapuava\
Curso de Sistemas para Internet — Fundamentos de Programação\
Professor Eleandro Maschio

## Orientações gerais

Cada exercício corresponde a um código TypeScript distinto.

## Exercício 1

[Arquivo da atividade](exercicio-01/index.ts)

GOTAS – Leia a quantidade de uma solução em mililitros. Converta e exiba essa mesma quantidade\
em gotas. Para essa solução, assuma que uma gota equivale a 0,05ml (ou seja, 1ml corresponde a\
20 gotas).

## Exercício 2

[Arquivo da atividade](exercicio-02/index.ts)

MÉDIA PONDERADA – Leia as notas de quatro avaliações e calcule a média ponderada, sabendo-se\
que os pesos são respectivamente: 1, 2, 3 e 4.

## Exercício 3

[Arquivo da atividade](exercicio-03/index.ts)

CARGA-HORÁRIA – Leia a carga-horária de um curso, informada em horas-aulas (50 minutos).\
Calcule e exiba a carga-horária em horas-relógio (60 minutos).

## Exercício 4

[Arquivo da atividade](exercicio-04/index.ts)

PERCENTUAL DE LEITURA – Leia a página atual e a quantidade de páginas de um livro. Calcule e\
exiba o percentual de leitura concluído.

## Exercício 5

[Arquivo da atividade](exercicio-05/index.ts)

DESCONTO – Leia o preço de um produto, calcule e exiba o valor final, considerando desconto de\
35%.

## Exercício 6

[Arquivo da atividade](exercicio-06/index.ts)

AUMENTO – Leia o valor de um salário, calcule e exiba-o reajustado, considerando um aumento de\
12,5%.

## Exercício 7

[Arquivo da atividade](exercicio-07/index.ts)

TROCA DE VALORES – Leia dois números inteiros, a e b, e faça com que eles troquem os valores\
entre si. Exiba os valores de a e b. Não se deve apenas alterar a ordem de exibição.

## Exercício 8

[Arquivo da atividade](exercicio-08/index.ts)

QUADRADO – Leia um número inteiro, calcule e exiba o seu quadrado.

## Exercício 9

[Arquivo da atividade](exercicio-09/index.ts)

MCDU – Leia um número inteiro positivo de até quatro dígitos. Mostre, separadamente (uma por\
linha): unidades de milhar, centenas, dezenas e unidades desse número. Assuma que nenhum\
número maior, ou negativo, será digitado.

## Exercício 10

[Arquivo da atividade](exercicio-10/index.ts)

```text
DÍGITO VERIFICADOR – Leia o número de uma conta corrente, que tem até seis dígitos
(desnecessária a validação). Calcule o dígito verificador dessa conta corrente, de acordo com o
seguinte algoritmo:
– Multiplique cada dígito pela respectiva posição, da esquerda para a direita;
– Some os resultados das multiplicações;
– Calcule o resto da divisão dessa soma por 10;
– Subtraia esse valor de 10.
– Assuma o resultado como dígito verificador da conta.
Exemplo para a conta 789123:
7 8 9 1 2 3 = número da conta
| | | | | |
x1 x2 x3 x4 x5 x6
| | | | | |
=7 =16 =27 =4 =10 =18 -> soma = 82
resto da divis˜ão de 82 por 10 = 2
dígito verificador = (10 – 2) = 8
A conta, com o dígito verificador, será: 789123-8.
```

## Referência
LOPES, Anita; GARCIA, GUTO. Variável, Expressões, Funções, Atribuição, Entrada e Saída. In:
______. Introdução à Programação: 500 algoritmos resolvidos. Rio de Janeiro: Elsevier, 2002. Cap.
2. p. 6-59.
## Como Citar
Todos os exercícios desta lista são autorais.
MASCHIO, Eleandro. Exercícios: Introdução aos Aplicativos TypeScript – Entrada, Saída e
Atribuição. Guarapuava: Universidade Tecnológica Federal do Paraná, 2023. 2 p. Material didático
da disciplina de Fundamentos de Programação.
