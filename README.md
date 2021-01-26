# DS Delivery 
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/alinepazz/dsdeliver-sds2/blob/main/LICENSE) 

# Sobre o projeto

https://alinesdeliver.netlify.app/

DS Delivery é uma aplicação full stack web e mobile construída durante a 2ª edição da **Semana DevSuperior** (#sds2), evento organizado pela [DevSuperior](https://devsuperior.com "Site da DevSuperior").

A aplicação consiste em um sistema de registro e entrega de pedidos. Os dados da solicitação do pedido são coletados via web e posteriormente os pedidos são entregues e confirmados no app mobile.

## Layout mobile
![Mobile 1](https://github.com/alinepazz/dsdeliver-sds2/blob/main/assets/mobile1.png) ![Mobile 2](https://github.com/alinepazz/dsdeliver-sds2/blob/main/assets/mobile2.png) 
![Mobile 3](https://github.com/alinepazz/dsdeliver-sds2/blob/main/assets/mobile3.png)

## Layout web
![Web 1](https://github.com/alinepazz/dsdeliver-sds2/blob/main/assets/tela-principa.png)

![Web 2](https://github.com/alinepazz/dsdeliver-sds2/blob/main/assets/tela-pedido.png)

![Web 3](https://github.com/alinepazz/dsdeliver-sds2/blob/main/assets/mapa1.png)

## Modelo conceitual
![Modelo Conceitual](https://github.com/alinepazz/dsdeliver-sds2/blob/main/assets/conceitual_1.png)

# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- JPA / Hibernate
- Maven
## Front end
- HTML / CSS / JS / TypeScript
- ReactJS
- React Native
- Apex Charts
- Expo
## API
- Mapbox
## Implantação em produção
- Back end: Heroku
- Front end web: Netlify
- Banco de dados: Postgresql

# Como executar o projeto

## Back end
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone https://github.com/alinepazz/dsdeliver-sds2.git

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/alinepazz/dsdeliver-sds2.git

# entrar na pasta do projeto front end web
cd front-web

# instalar dependências
npm install

# executar o projeto
npm start
```

## Front end mobile
Pré-requisitos: npm / expo

```bash
# clonar repositório
git clone https://github.com/alinepazz/dsdeliver-sds2.git

# entrar na pasta do projeto front end web
cd front-mobile

# instalar dependências
expo install @react-navigation/stack @react-native-community/masked-view react-native-screens react-native-gesture-handler @react-navigation/native expo-app-loading @expo-google-fonts/open-sans expo-font

# executar o projeto
npm start
```

# Autor

[Aline Paz](https://www.linkedin.com/in/alinepazz/ "Perfil Linkedin Aline Paz")
