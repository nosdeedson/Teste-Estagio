# Teste-Estagio
Teste estagio front-end

Primeiramente informo que as páginas HTML não apresentam dados do banco de dados, mesmo
tendo conseguido acessar o banco "testeestagio" criado no mysql e imprimido no terminal
os dados da tabela produto, não consegui tratar os dados para manipulá-los no HTML.

O  que pode ser verificado no arquivo app.js entre as linhas 27 à 45.

Portanto os HTML são apenas demonstrarivos.

Para rodar a aplicação nowindows siga os passos abaixo:
Primeiro: caso não tenha instalado o node.js baixo no link: https://nodejs.org/en/
Segundo: no terminal navegue até a pasta Teste-Estagio-master
Terceiro: rode o comando-> npm install
Quarto: rode o comando-> npm start

OBSERVAÇÃO:
Para imprimir no terminal os dados da tabela (produto) é preciso rodar no mysql os as sqls abaixo: (caso não realize os passos abaixo a aplicação vai rodar normalmente mas não imprimirá no terminal os valores da tabela produto)


create database testeEstagio charset=utf8;
use testeEstagio;

CREATE TABLE `produto` (
  `id` bigint(20) UNSIGNED PRIMARY KEY NOT NULL,
  `nome` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `categoria` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantidade` bigint(20) UNSIGNED NOT NULL,
  `valor` double(12,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `compra` (
  `id` bigint(20) UNSIGNED PRIMARY KEY NOT NULL,
  `email_comprador` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cidade_envio` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `valor_total` double(12,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `compra_produto` (
  `id` bigint(20) UNSIGNED PRIMARY KEY NOT NULL,
  `quantidade_comprar` bigint(20) UNSIGNED NOT NULL,
  `id_produto` bigint(20) UNSIGNED NOT NULL,
  `id_compra` bigint(20) UNSIGNED NOT NULL,
  CONSTRAINT FK_PRODUTO_COMPRA_PRODUTO 
        FOREIGN KEY (id_produto) REFERENCES produto(id) ON UPDATE CASCADE,
  CONSTRAINT FK_COMPRA_COMPRA_PRODUTO 
        FOREIGN KEY (id_compra) REFERENCES compra(id) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `produto` (`id`, `nome`, `categoria`, `quantidade`, `valor`) VALUES
(1, 'Camiseta BawSaw', 'Vestuario', 122, 49.90),
(2, 'Jaqueta de Couro', 'Vestuario', 11, 159.90),
(3, 'Sapatenis Vermelho', 'Calçado', 27, 79.90),
(4, 'Bota Cano Alto Feminina', 'Calçado', 19, 127.90),
(5, 'Calça Jeans Moda 2020', 'Vestuario', 34, 59.90),
(6, 'Cinto Couro Cinza', 'Acessorio', 17, 29.90),
(7, 'Colar Pingente Verde', 'Acessorio', 42, 19.90),
(8, 'Tenis Sky Blue', 'Calçado', 29, 97.99),
(9, 'Blusa de Moletom', 'Vestuario', 53, 134.90),
(10, 'Tiara Borboleta', 'Acessorio', 45, 9.99);

Também é preciso alterar a linha 6 do arquivo connector.js
mude: password: 'surfando1234' no lugar de surfando1234 coloque a senha de acesso do seu mysql

CONTINUANDO:
No browser digite: http://localhost:3000/

Aplicação deve rodar


