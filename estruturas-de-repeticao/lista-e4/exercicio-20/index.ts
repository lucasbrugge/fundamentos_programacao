// Lista E4 — Estruturas de Repetição (2)
// Exercício 20
// Fonte: prog-aula-E4 - Exercícios.pdf
// Enunciado geral: ../atividade.md
//
// Orientações gerais:
// Utilize soluções iterativas e a estrutura de repetição mais apropriada à resolução de cada aspecto do
// problema (while, do-while e for).
// Participe das aulas com os exercícios progressivamente desenvolvidos, com dúvidas demarcadas e
// pontuais.
//
// Esta atividade continua a classe definida no exercício 01 desta lista.
//
// isPerfeito()
// Retorne se n é um número perfeito, reduzido ou abundante.
// Dado n, inteiro e positivo, diz-se que n é perfeito se for igual à soma de seus divisores positivos
// diferentes dele mesmo. Assim, 6 é um número perfeito, pois 1 + 2 + 3 = 6. Contudo, números
// perfeitos são bastante raros: o quinto número perfeito é 33.550.336.
// No século I d.C., havia, além da divisão dos números perfeitos, os números abundantes e os
// reduzidos:
// – abundantes: se o número é inferior à soma dos seus divisores exceto ele próprio;
// Por exemplo, 12: 1 + 2 + 3 + 4 + 6 = 16.
// – reduzidos: se o número é superior à soma dos seus divisores exceto ele próprio;
// Por exemplo, 9: 1 + 3 = 4.
// Isto posto, os retornos possíveis são -1, 0 e 1, classificando n como, respectivamente, reduzido,
// perfeito ou abundante.
