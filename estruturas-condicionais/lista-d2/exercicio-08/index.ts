// Lista D2 — Expressões Booleanas e Estrutura Condicional if-else
// Exercício 8
// Fonte: prog-aula-D2 - Exercícios.pdf
// Enunciado geral: ../atividade.md
//
// Orientações gerais:
// Enfoque a modelagem e consequente interação com a interface dos objetos. Nenhuma instrução de
// saída deve ser utilizada nas classes de modelagem. Os exercícios 1 e 6 são teóricos.
//
// IMPOSTO DE RENDA – As regras do IRPF do Brasil estão em constante debate e alteração. Sempre
// existem detalhes que adicionam complexidade ao cálculo do imposto devido. Uma forma para
// começar a entender (e implementar!) sobre o assunto pode ser modelar o imposto de países com
// regras mais simples. A Inglaterra, por exemplo, utiliza quatro faixas de alíquotas, que variam
// conforme o rendimento anual do contribuinte (CORTÊS, 2025), sendo:
// Faixa Rendimentos Tributáveis Taxa de Imposto
// Personal Allowance Até £12.570 0%
// Basic rate De £12.571 a £50.270 20%
// Higher rate De £50.271 a £125.140 40%
// Additional rate Acima de £125.140 45%
// Conforme a tabela, uma pessoa com ganho anual de £100 mil pagará 40% de imposto de renda.
// Entretanto, os primeiros £12.570 de qualquer pessoa são isentos de imposto. Assim, o cálculo para
// uma pessoa solteira que tenha renda anual bruta de £18,2 mil e não recebe subsídios especiais será
// feito desta forma:
// Rendimento tributável anual total £18.200
// Personal Allowance (-) £12.570
// Valor da renda tributável £5.630
// Cálculo da obrigação fiscal £5.630 x 20%
// Imposto devido £1.124,20
// Com base nessas regras, implemente uma classe para a qual seja informada a base de cálculo
// (anual) de um contribuinte. A classe deve prover métodos para retornar a alíquota e o valor do
// imposto devido. Revise a resolução diante do princípio da responsabilidade única.
