class Book {
  constructor(id, title, category, price, author, image, description) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.price = price;
    this.author = author;
    this.image = image;
    this.description = description;
  }

  toJson() {
    return {
      id: this.id,
      title: this.title,
      category: this.category,
      price: this.price,
      author: this.author,
      image: this.image,
      description: this.description,
    };
  }
}

const books = [
  new Book(
    1,
    "O Mistério da Noite",
    "Ficção",
    14.99,
    "Carlos Mendes",
    "https://picsum.photos/300/400?random=11",
    "Uma história envolvente que prende o leitor da primeira à última página."
  ),
  new Book(
    2,
    "Viagem ao Desconhecido",
    "Aventura",
    18.5,
    "Mariana Silva",
    "https://picsum.photos/300/400?random=12",
    "Uma aventura que atravessa fronteiras e desafia a imaginação."
  ),
  new Book(
    3,
    "O Poder da Palavra",
    "Não-ficção",
    21.0,
    "João Pereira",
    "https://picsum.photos/300/400?random=13",
    "Um ensaio profundo sobre a importância da comunicação."
  ),
  new Book(
    4,
    "Segredos do Tempo",
    "Ficção Científica",
    19.9,
    "Ana Martins",
    "https://picsum.photos/300/400?random=14",
    "Um mergulho pelas possibilidades do futuro e dos paradoxos do tempo."
  ),
  new Book(
    5,
    "Receitas do Mundo",
    "Culinária",
    24.99,
    "Sofia Rocha",
    "https://picsum.photos/300/400?random=15",
    "Uma coletânea deliciosa de pratos tradicionais de vários países."
  ),
  new Book(
    6,
    "Sombras da Memória",
    "Romance",
    16.75,
    "Pedro Carvalho",
    "https://picsum.photos/300/400?random=16",
    "Uma narrativa emocionante sobre amor, perda e reencontros inesperados."
  ),
  new Book(
    7,
    "O Último Guardião",
    "Fantasia",
    22.3,
    "Helena Costa",
    "https://picsum.photos/300/400?random=17",
    "Uma saga épica num mundo repleto de magia e criaturas lendárias."
  ),
  new Book(
    8,
    "Histórias Esquecidas",
    "História",
    27.5,
    "Ricardo Lopes",
    "https://picsum.photos/300/400?random=18",
    "Relatos fascinantes de acontecimentos que mudaram o rumo da humanidade."
  ),
  new Book(
    9,
    "Código do Amanhã",
    "Tecnologia",
    29.9,
    "Luís Almeida",
    "https://picsum.photos/300/400?random=19",
    "Uma exploração das inovações tecnológicas que moldarão o futuro."
  ),
  new Book(
    10,
    "Jardins Secretos",
    "Poesia",
    12.5,
    "Beatriz Nogueira",
    "https://picsum.photos/300/400?random=20",
    "Versos delicados que exploram os segredos da alma e da natureza."
  ),
  new Book(
    11,
    "Além das Estrelas",
    "Ficção Científica",
    19.5,
    "Miguel Santos",
    "https://picsum.photos/300/400?random=21",
    "Uma viagem intergaláctica onde a humanidade descobre novos horizontes."
  ),
  new Book(
    12,
    "Arte da Guerra Moderna",
    "Estratégia",
    26.9,
    "André Costa",
    "https://picsum.photos/300/400?random=22",
    "Um estudo profundo sobre as estratégias utilizadas nos conflitos atuais."
  ),
  new Book(
    13,
    "Sabores da Infância",
    "Culinária",
    18.0,
    "Clara Fernandes",
    "https://picsum.photos/300/400?random=23",
    "Receitas tradicionais que nos transportam para memórias de infância."
  ),
  new Book(
    14,
    "A Chave Perdida",
    "Mistério",
    15.2,
    "Paulo Rodrigues",
    "https://picsum.photos/300/400?random=24",
    "Um enigma escondido durante séculos finalmente começa a ser desvendado."
  ),
  new Book(
    15,
    "O Som do Silêncio",
    "Drama",
    17.8,
    "Inês Oliveira",
    "https://picsum.photos/300/400?random=25",
    "Um romance comovente sobre resiliência, superação e esperança."
  ),
  new Book(
    16,
    "Caminhos da Liberdade",
    "História",
    22.0,
    "Diogo Faria",
    "https://picsum.photos/300/400?random=26",
    "Um olhar sobre as grandes lutas sociais que moldaram o mundo moderno."
  ),
  new Book(
    17,
    "Reino de Cinzas",
    "Fantasia",
    25.4,
    "Sara Ribeiro",
    "https://picsum.photos/300/400?random=27",
    "Dragões, reis e uma batalha épica pelo destino do reino."
  ),
  new Book(
    18,
    "Planeta Azul",
    "Ciência",
    28.0,
    "Tiago Lopes",
    "https://picsum.photos/300/400?random=28",
    "Uma análise sobre a vida na Terra e os desafios ambientais atuais."
  ),
  new Book(
    19,
    "Noite em Lisboa",
    "Romance",
    14.5,
    "Rita Gomes",
    "https://picsum.photos/300/400?random=29",
    "Um romance apaixonante ambientado nas ruas iluminadas da capital."
  ),
  new Book(
    20,
    "Gastronomia Mediterrânica",
    "Culinária",
    23.9,
    "Hugo Ferreira",
    "https://picsum.photos/300/400?random=30",
    "Sabores frescos e saudáveis da dieta mediterrânica."
  ),
  new Book(
    21,
    "Lendas de Portugal",
    "Folclore",
    19.0,
    "Manuel Vieira",
    "https://picsum.photos/300/400?random=31",
    "Histórias tradicionais portuguesas passadas de geração em geração."
  ),
  new Book(
    22,
    "O Enigma das Sombras",
    "Mistério",
    16.8,
    "Patrícia Cunha",
    "https://picsum.photos/300/400?random=32",
    "Uma investigação cheia de suspense e revelações inesperadas."
  ),
  new Book(
    23,
    "Códigos Antigos",
    "História",
    21.9,
    "José Fonseca",
    "https://picsum.photos/300/400?random=33",
    "Descobertas arqueológicas que mudaram a compreensão da humanidade."
  ),
  new Book(
    24,
    "O Guardião do Mar",
    "Aventura",
    18.75,
    "Filipa Mendes",
    "https://picsum.photos/300/400?random=34",
    "Uma viagem pelos mares em busca de um tesouro perdido."
  ),
  new Book(
    25,
    "Sombras na Cidade",
    "Thriller",
    20.5,
    "Bruno Castro",
    "https://picsum.photos/300/400?random=35",
    "Um thriller urbano cheio de mistério e ação eletrizante."
  ),
  new Book(
    26,
    "Alquimia das Palavras",
    "Poesia",
    13.9,
    "Leonor Correia",
    "https://picsum.photos/300/400?random=36",
    "Poemas que exploram o poder transformador da palavra."
  ),
  new Book(
    27,
    "Universo Desconhecido",
    "Ciência",
    26.5,
    "Fernando Dias",
    "https://picsum.photos/300/400?random=37",
    "Um mergulho fascinante nos mistérios do cosmos."
  ),
  new Book(
    28,
    "Amor em Paris",
    "Romance",
    15.75,
    "Laura Costa",
    "https://picsum.photos/300/400?random=38",
    "Uma história de amor inesquecível na cidade das luzes."
  ),
  new Book(
    29,
    "Guia Prático de Programação",
    "Tecnologia",
    32.0,
    "Daniel Moreira",
    "https://picsum.photos/300/400?random=39",
    "Um guia completo para iniciantes no mundo da programação."
  ),
  new Book(
    30,
    "O Eco do Passado",
    "Drama",
    17.3,
    "Carolina Matos",
    "https://picsum.photos/300/400?random=40",
    "Um drama emocionante sobre segredos familiares e perdão."
  ),
];
