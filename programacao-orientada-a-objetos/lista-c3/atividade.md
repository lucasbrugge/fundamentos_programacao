# Lista C3 — Programação Orientada a Objetos

[PDF original](<../../.material-do-professor/Programa%C3%A7%C3%A3o%20Orientada%20a%20Objetos/prog-aula-C3%20-%20Exerci%CC%81cios.pdf>)

Universidade Tecnológica Federal do Paraná — Campus Guarapuava\
Curso de Sistemas para Internet — Fundamentos de Programação\
Professor Eleandro Maschio

## Orientações gerais

Enfoque a modelagem e consequente interação com a interface dos objetos. Nenhuma instrução de\
saída deve ser utilizada nas classes de modelagem.

## Exercício 1

[Arquivo da atividade](exercicio-01/index.ts)

```text
Modele e implemente um objeto que retorne uma cadeia de caracteres com a etiqueta eletrônica de
um produto, contendo o valor do quilo, para ser fixada em prateleiras de um supermercado. Essa
informação é útil a fim de que o consumidor possa comparar preços, quando as embalagens dos
produtos possuem pesos diferentes. São atributos do produto: descrição, peso em quilos e preço.
Exemplos de etiquetas geradas:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Barra de Chocolate Diamante Negro
Peso: 0,090 kg
Preço: R$ 5,99
Preço do quilo: R$ 66,56
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Ovo de Páscoa Diamante Negro
Peso: 0,176 kg
Preço: R$ 29,90
Preço do quilo: R$ 169,89
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Lembre-se que a quebra de linha em uma cadeia de caracteres é feita por meio da sequência de
escape "\n" no texto, assim:
texto: string = "Pula uma linha\n";
outroTexto: string = texto + "Pula mais duas linhas\n\n\";
Com essa abordagem, de retornar uma cadeia de caracteres ao invés de utilizar uma instrução de
saída, reforçam-se os princípios da Programação Orientada a Objetos. Dessa forma, ocorre a divisão
de responsabilidades, onde a classe em questão se concentra apenas em modelar o objeto.
```

## Exercício 2

[Arquivo da atividade](exercicio-02/index.ts)

Modele um objeto que implemente um automóvel, com abstração focada nas informações básicas de\
abastecimento. Cada automóvel tem um tanque de combustível com determinada capacidade em\
litros. Essa capacidade não sofre alterações ao longo da existência do modelo.\
O tanque de combustível inicia vazio e há duas formas de abastecer o veículo. Na primeira forma, o\
tanque é completado até o máximo da capacidade. Na outra, deve-se informar quantos litros de\
combustível serão colocados (obviamente, não excedendo a capacidade do tanque).\
A representação textual do objeto fornece uma cadeia de caracteres que contém: a quantidade de\
combustível, a capacidade do tanque e, percentualmente, quanto o tanque está cheio.

## Exercício 3

[Arquivo da atividade](exercicio-03/index.ts)

Modele a interação de pessoas cumprimentando-se. Cada pessoa é representada unicamente pelo\
primeiro nome. Em termos de modelagem e implementação, uma pessoa pode cumprimentar outra\
de três maneiras: sem saber o nome; sabendo apenas nome (passado como parâmetro); ou\
conhecendo a outra pessoa (tendo outro objeto passado como parâmetro). No primeiro caso, o\
cumprimento será apenas “Olá!”, enquanto os outros dois incluem o nome da outra pessoa no\
cumprimento: “Olá, Tony Stark!”.

## Exercício 4

[Arquivo da atividade](exercicio-04/index.ts)

Considere um relógio que marca horas e minutos. Coube-lhe a tarefa de fornecer informações para\
uma interface gráfica de um relógio analógico. Disponha de métodos que retornem a posição de cada\
ponteiro do relógio, em graus. Considere doze horas como a posição inicial, ou seja, 0º. Não julgue a\
resolução como correta sem comparar o resultado com um relógio real.

## Exercício 5

[Arquivo da atividade](exercicio-05/index.ts)

Modele e implemente a rolagem de um dado com n faces. O número de faces deve ser informado na\
criação do objeto e não pode ser alterado. Ofereça métodos para rolar o dado e para observar o\
número da última rolagem. Para isso, pesquise como fazer a geração de números aleatórios na\
linguagem.

## Exercício 6

[Arquivo da atividade](exercicio-06/index.ts)

Modele computacionalmente o problema de calcular a densidade populacional de uma cidade.\
Abstraia atributos e métodos para essa modelagem e implemente-a.

## Exercício 7

[Arquivo da atividade](exercicio-07/index.ts)

Resolva o problema de estipular o preço de venda de um produto. Considere que o vendedor sabe o\
quanto ele quer pelo produto, mas que o veículo de divulgação cobra uma taxa percentual sobre o\
valor anunciado. Com isso, determine quanto deve ser pedido pelo produto para que, mesmo com o\
desconto dessa taxa, ainda reste o valor inicialmente pretendido pelo vendedor.

## Como Citar
Todos os exercícios desta lista são autorais.
MASCHIO, Eleandro. Exercícios: Programação Orientada a Objetos. Guarapuava: Universidade
Tecnológica Federal do Paraná, 2023. 2 p. Material didático da disciplina de Fundamentos de
Programação.
