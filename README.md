# Para rodar a aplicação

Reptilândia é uma aplicação desenvolvida em Node.js, utilizando a versão 20.12.12, criada como parte do projeto da disciplina de SASI (Sistemas Avançados em Sistemas de Informação) da Universidade Federal dos Vales do Jequitinhonha e Mucuri (UFVJM) para aprimorar os conhecimentos relacionados a segurança.


`!!!!!! ATENÇÃO !!!!!!`

Você precisará substituir os certificados que vieram com o projeto com os certificados que você gerar em sua máquina. Isso será crucial para permitir a conexão HTTPS. O tutorial de geração dos certificados está mais a frente neste documento. 


Uma vez que você tiver os certificados gerados, substitua no diretório SSL que exise tanto dentro da API, quanto do front. Lembre-se que você precisará tanto do arquivo server.crt quanto do arquivo server.key. 

Você deverá copiar seu certificado e chave pública tanto para a pasta ssl no diretório [reptiland/reptiland-api/ssl](./reptiland-api/ssl//) quanto para o diretório [reptiland/reptiland-web/ssl](./reptiland-web/ssl/). 

`!!!!!! ATENÇÃO !!!!!!`

## Clonando a aplicação

Para clonar o repositório da aplicação, utilize o comando:

```bash
git clone  
```

## Preparando a base de dados

Dentro do diretório [reptiland-api/database](./reptiland-api/database), você encontrará o arquivo [reptilanddbscript.sql](./reptiland-api/database/reptilanddbscript.sql) que contém todos os scripts necessários para criar as tabelas e campos no banco de dados. Certifique-se de executar esses scripts para preparar a base de dados.

Recomendamos o uso de `XAMPP` para a construção do seu banco de dados, uma vez que ele não necessitará de senha para estabelecer uma conexão com o banco. [Você pode acessar a página do Apache clicando aqui](https://www.apachefriends.org/pt_br/index.html).

`OBSERVAÇÃO: LEMBRE-SE DE INCLUIR OS MÓDULOS DE APACHE E MYSQL NA INSTALAÇÃO`.

Ao concluir a instalação, execute o XAMPP e coloque os módulos `Apache` e `MySQL`em execução, e abra o painel de admin `MySQL`. Copie o script de construção do banco e o execute no painel. Com isso seu banco terá sido criado.

## Pré-requisitos

### Instalando e Executando a API
Certifique-se de ter o [Node.js](https://nodejs.org/en/download/package-manager) instalado em sua máquina, esta aplicação foi desenvolvida e testada na versão 20.12.12.

Você pode verificar sua versão do Node.js executando o seguinte comando no terminal (caso necessário, verifique a documentação acima):

```bash
node --version
```

Caso não tenha a versão instalada, certifique-se de utilizar os comandos para instalar e utilizar a versão a seguir:

```bash
nvm install 20.12.12
nvm use 20.12.12
```

Em seguida, acesse o diretório da api dentro do projeto. Ele estará na pasta [reptiland/reptiland-api](./reptiland-api/).

No diretório da api dentro do projeto instale as dependências usando npm:

```bash
npm install
```

Depois de instalar as dependências, você pode executar a aplicação usando o seguinte comando:

```bash
npm start
```

### Instalando e executando o front

#### Pré-requisitos
- **React**: 18.2.14 ou superior
- **TypeScript**: 5.4.5 ou superior
- **Vite**: 4.4.0 ou superior

#### Inicializando a aplicação
Acesse o diretório do front dentro do projeto. Ele estará na pasta [reptiland/reptiland-web](./reptiland-web/).

No diretório do front, dentro do projeto, instale as dependências usando npm:

```
npm install
```

Com as dependências instaladas, você pode executar a aplicação com o comando abaixo

```
npm start
```

Por fim, acesse a aba [http://localhost:5001/](http://localhost:5001/) para interagir com a aplicação. Lembre-se de que tanto o servidor do banco quanto a api também devem estar sendo executadas para que a interação ocorra.

---

# Gerando certificados SSL confiáveis



Tutorial com base no conteúdo https://www.freecodecamp.org/portuguese/news/como-fazer-o-https-funcionar-em-seu-ambiente-local-de-desenvolvimento-em-5-minutos/

Você também pode acompanhar o tutorial no arquivo [Tutorial de Geração de Certificados](./GRUPO_A_Tutorial_OpenSSL.pdf).

## Passo 1 - Instalando o SSL

Faça a instalação do openssl na sua máquina. No windows, selecione o arquivo executável do OpenSSL (a versão completa)

```
https://slproweb.com/products/Win32OpenSSL.html
```

Execute o instalador e instale o OpenSSL na sua máquina e depois adicione o local do bin nas suas variáveis de ambiente. A localização deve ser algo parecido `C:\Program Files\OpenSSL-Win64`

Você pode seguir esse tutorial: https://www.youtube.com/watch?v=coaGBdUcKiw

## Passo 2 - Criar um certificado SSL 'Root'

Esse certificado será usado para assinar todos os outros certificados que quisermos gerar para os nossos domínios.

### Gerando uma chave RSA-2048

Execute o seguinte comando no seu terminal do windows. Esse comando irá gerar uma chave RSA-2048 no arquivo `rootCA.key`

```
openssl genrsa -des3 -out rootCA.key 2048
```

Nessa etapa será exigida uma senha. Para esse trabalho, optei por usar a senha `admin123`. Nas demais etapas, essa senha será exigida, então guarde-a bem.

### Gerando um certificado SSL root com a chave

Uma vez que a chave foi criada, a usaremos para criar um certificado SSL root. Esse arquivo será salvo em um arquivo `rootCA.pem`. Nesse caso optamos por criar um certificado com validade de 1024 dias, mas você pode alterar essa configuração.

Para isso, execute o seguinte comando no terminal:

```
openssl req -x509 -new -nodes -key rootCA.key -sha256 -days 1024 -out rootCA.pem
```

Quando o comando for executado, você receberá uma série de configurações adicionais que você precisará preencher. Você pode usar o seguinte formato para este trabalho:

```
Country Name: BR
State: Minas Gerais
Locality: Diamantina
Organization Name: UFVJM
Organization unit name:
Common Name: localhost
Email address:

```

### Confiar no certificado root

Antes de podermos usar esse certificado para emitir outros certificados, precisamos indicar para a máquina que ela deve confiar nele.

No windows, execute o comando `Win + R`, digite `mmc` e pressione `Enter`. Com o console de gerenciamento do Microsoft aberto, siga os passos:

1. No Console de Gerenciamento, clique em Arquivo > Adicionar/Remover Snap-in.

2. Na janela Adicionar ou Remover Snap-ins, selecione Certificados e clique em Adicionar.

3. Escolha Conta do Computador e clique em Avançar.

4. Selecione Computador local e clique em Concluir.

5. Clique em OK para fechar a janela Adicionar ou Remover Snap-ins.

6. No painel esquerdo, expanda Certificados (Local Computer), clique com o botão direito do mouse em Autoridades de Certificação Raiz Confiáveis, aponte para Todas as tarefas e, em seguida, clique em Importar.

7. No Assistente de Importação de Certificados, clique em Avançar.

8. Clique em Procurar para localizar e selecionar o arquivo de certificado rootCA.pem.

9. Clique em Avançar, selecione Colocar todos os certificados no repositório a seguir e verifique se Autoridades de Certificação Raiz Confiáveis está selecionado.

10. Clique em Avançar e depois em Concluir.

11. Se você receber um aviso de segurança, clique em Sim para adicionar o certificado ao repositório.

12. Clique em OK para fechar a caixa de diálogo de conclusão do assistente.

## Passo 3 - Gerar um certificado SSL do domínio

Agora que temos um certificado SSL root, podemos emitir um certificado especificamente para o nosso ambiente local de desenvolvimento `localhost`

### Arquivo de configuração

Primeiramente, crie um arquivo de configuração chamado `server.csr.cnf` e insira as configurações a seguir em seu conteúdo:

```
[req]
default_bits = 2048
prompt = no
default_md = sha256
distinguished_name = dn

[dn]
C=BR
ST=Minas Gerais
L=Diamantina
O=UFVJM
OU=UFVJM
emailAddress=ufvjm@gmail.com
CN = localhost
```

`OBSERVAÇÃO:` Lembre-se de deixar a extensão do arquivo como `.cnf`. Se você o criou num bloco de textos, ele provavelmente terá a extensão `.txt` por padrão. No windows, exiba as extensões dos arquivos, clique para renomear e apague o ".txt" que aparece no final. Uma janela de confirmação será exibida. Aceite a modificação.

### Arquivo de criação de cerficicado X509 v3

Crie um arquivo `v3.ext` com o seguinte conteúdo:

```
authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
subjectAltName = @alt_names

[alt_names]
DNS.1 = localhost
```

### Chave de certificado para `localhost`

Agora que temos o arquivo de configuração e o arquivo para certificado x509 v3, iremos criar uma chave de certificado. Para isso, execute a seguinte linha de comando no seu terminal:

```
openssl req -new -sha256 -nodes -out server.csr -newkey rsa:2048 -keyout server.key -config server.csr.cnf
```

`OBSERVAÇÃO:` Lembre-se de estar no mesmo diretório que os outros arquivos criados anteriormente

### Solitação de assinatura de certificado

Com a chave criada, iremos solicitar a assinatura de um certificado que é feita pelo certificado root que criamos. Esse processo gerará um arquivo `server.crt` que representa o nosso certificado de domínio.

Para isso, execute o seguinte comando no seu terminal:

```
openssl x509 -req -in server.csr -CA rootCA.pem -CAkey rootCA.key -CAcreateserial -out server.crt -days 500 -sha256 -extfile v3.ext
```

`OBSERVAÇÃO:` Nessa etapa a senha criada no começo será exigida.

## Passo 4 - Colocando os certificados no projeto
Agora que você possui os arquivos `server.crt` e `server.key` você deve copiá-los para o projeto para que a certificação https seja habilitada. 

#### Na API
Acesse o diretório [reptiland-api/ssl](./reptiland-api/ssl) e substitua os arquivos de certificado pelos seus. 

#### No Front
Acesse o diretório [reptiland-web/ssl](./reptiland-web/ssl) e substitua os arquivos de certificado pelos seus.


