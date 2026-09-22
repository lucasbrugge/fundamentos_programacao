### Exercício-1
PARADIGMA – O que é um paradigma em programação de computadores? Quais são os paradigmas mais conhecidos? 
  - Paradigmas de programação são uma forma ou estilo de construção de código, que define como o programador, estrutura e organiza a resolução.
  - Os mais conhecidos são Orientação a Objetos(POO): Organiza o software em torno de objetos que contém dados, estados próprios e métodos que alteram ou recuperam os dados/estados.
  - Programação Funcional: Avaliação de funções matemáticas, priorizando a imutabilidade de dados e o uso de funções puras (sem efeitos colaterais). sem alteração de estados e dados.
Estruturado(Procedural): Organiza o código em blocos reutilizáveis, procedimentos, funções ou rotinas.

---

### Exercício-2
OBJETO – O que é objeto? 
  - É uma entidade que possui estado, comportamento e identidade, um objeto pode ser uma variável, função ou estrutura de dados, cada objeto(instância de classe) é um molde onde ficam encapsulados, dados e comportamentos.

---

### Exercício-3
CLASSE – O que é classe? ?
  - É um modelo que define os atributos e os métodos que os objetos criados a partir dela vão possuir, uma classe tem atributos, métodos e instância (objeto criado a partir desse molde)

---

### Exercício-4
ATRIBUTO – O que é atributo? 
  - são variáveis dentro de uma classe ou instância que representa as propriedades do objeto, definindo os estados que um objeto pode ter.

---

### Exercício-5
MÉTODO – O que é método? 
  - funções criadas dentro de uma classe, tarefas, rotinas e comportamentos, modificam ou usam os dados do objeto.
---

#### Exemplo em Typescript

```typescript
// O Molde (Classe)
class Cachorro {
  nome: string = "Bob"; // Atributo

  latir() {
    console.log("Au Au!"); // Método
  }
}

// O Objeto (Instância)
const meuPet = new Cachorro();

// Usando o objeto
console.log(meuPet.nome); // Saída: Bob
meuPet.latir();           // Saída: Au Au!

```
---

### Exercício-6
INSTÂNCIA E ESTADO – O que é instância e o que é estado?
  - É o objeto criado a partir de uma classe, é a instância que ocupa espaço na memória RAM durante a execução, estado é a condição atual do objeto, definida pelos valores correntes das suas variáveis ou atributos.

---

### Exercício-7
ENCAPSULAMENTO – O que é encapsulamento?
  - O encapsulamento torna os dados internos inacessíveis de fora e permite que sejam alterados somente pelos métodos da própria entidade, que aplicam as regras. Assim, fica mais fácil garantir a integridade e a validade das propriedades do objeto.

---

### Exercício-8
DIFERENÇA – Qual é a diferença entre modelar um problema em Programação Imperativa (ou Imperativista) e em Programação Orientada a Objetos? 
  - resposta

---

### Exercício-9
EXEMPLOS – Por meio de três problemas, exemplifique os conceitos de objeto, classe, atributo, método e instância
 - Resposta

---

### Exercício-10
IMPLEMENTAÇÃO – Modele e implemente os três exemplos (do exercício anterior) em Typescript, considerando o Paradigma Orientado a Objetos.
  - Respostas


