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
meuPet.latir(); // Saída: Au Au!
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

- A principal diferença está em como você organiza e modela a lógica: na Programação Imperativa, você define uma sequência detalhada de passos e comandos que alteram o estado do sistema, enquanto na Programação Orientada a Objetos (POO) você representa o problema simulando entidades do mundo real que reúnem dados e comportamentos próprios

---

### Exercício-9

EXEMPLOS – Por meio de três problemas, exemplifique os conceitos de objeto, classe, atributo, método e instância

1. Um banco precisa representar seus clientes e suas contas. Cada conta possui um número, titular e saldo. O cliente pode depositar e sacar dinheiro.

- Classe: ContaBancaria → define como uma conta deve ser.
- Objeto: contaLucas → representa uma conta bancária específica.
- Atributos: numero, titular e saldo → características da conta.
- Métodos: depositar() e sacar() → comportamentos da conta.
- Instância: new ContaBancaria(101, "Lucas", 500) → cria uma instância da classe ContaBancaria.

2. Uma empresa precisa controlar seus veículos. Cada veículo possui marca, modelo e ano. Um veículo pode ser ligado e desligado.

- Classe: Veiculo
- Objetos: carro e moto
- Atributos: marca, modelo, ano e ligado
- Métodos: ligar() e desligar()
- Instâncias: new Veiculo(...) utilizadas para criar carro e moto.

3. Uma instituição de ensino precisa representar seus alunos. Cada aluno possui nome, matrícula e nota. O sistema deve permitir verificar se o aluno foi aprovado.

- Classe: Aluno
- Objetos: aluno1 e aluno2
- Atributos: nome, matricula e nota
- Método: verificarAprovacao()

---

### Exercício-10

IMPLEMENTAÇÃO – Modele e implemente os três exemplos (do exercício anterior) em Typescript, considerando o Paradigma Orientado a Objetos.

1. Sistema de conta bancária.

```typescript
class ContaBancaria {
  numero: number;
  titular: string;
  saldo: number;

  constructor(numero: number, titular: string, saldo: number) {
    this.numero = numero;
    this.titular = titular;
    this.saldo = saldo;
  }

  depositar(valor: number): void {
    this.saldo += valor;
  }

  sacar(valor: number): void {
    if (valor <= this.saldo) {
      this.saldo -= valor;
    }
  }
}

const contaLucas = new ContaBancaria(101, "Lucas", 500);
```

2. Sistema de veículos

```typescript
class Veiculo {
  marca: string;
  modelo: string;
  ano: number;
  ligado: boolean;

  constructor(marca: string, modelo: string, ano: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.ligado = false;
  }

  ligar(): void {
    this.ligado = true;
  }

  desligar(): void {
    this.ligado = false;
  }
}

const carro = new Veiculo("Toyota", "Corolla", 2025);
const moto = new Veiculo("Honda", "CB 500", 2024);
```

3. Sistema de aluno

```typescript
class Aluno {
  nome: string;
  matricula: number;
  nota: number;

  constructor(nome: string, matricula: number, nota: number) {
    this.nome = nome;
    this.matricula = matricula;
    this.nota = nota;
  }

  verificarAprovacao(): boolean {
    return this.nota >= 6;
  }
}

const aluno1 = new Aluno("Lucas", 12345, 8);
const aluno2 = new Aluno("João", 12346, 5);
```