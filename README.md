# Cadastro de carro

**RF**
Deve ser possível cadastrar um carro.
Deve ser possível listar todas as categorias.

**RN** => Regras de Negócio
Não deve ser possível cadastrar um carro com uma placa já cadastrada.
Não deve ser possível alterar a placa de um carro já cadastrado.
O Carro deve ser cadastrado por padrão com disponibiladade.
Um carro só pode ser cadastrado por um usuário ADM.


# Listagem de carros

**RF**
Deve ser possível listar todos os carros disponíveis.
Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
Deve ser possível listar todos os carros disponíveis pelo nome da marca.
Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**RN** => Regras de Negócio
O usuário não precisa estar logado no sistema.


# Cadastro de especificação no carro

**RF**
Deve ser possível cadastrar especificações de um carro.
Deve ser possível listar todas as especificações.
Deve ser possível listar todos os carros.

**RN** => Regras de Negócio
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
Não deve ser possível cadastrar uma especificação já existente no mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário ADM. 


# Cadastro de imagem do carro

**RF**
Deve ser possível cadastrar a imagem do carro.

**RNF**
Utilizar o Multer para upload dos arquivos.

**RN**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário ADM.


# Aluguel de carro

**RF**
Deve ser possível cadastrar um alugel.

**RN**
O aluguel deve ter duração mínima de um dia.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.