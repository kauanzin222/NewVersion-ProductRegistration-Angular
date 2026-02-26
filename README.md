# 📦 Cadastro de Produtos (Evolução & Refatoração) - Projeto Fullstack

![Status](https://img.shields.io/badge/Status-Andamento-yellow)

Este repositório representa um marco importante na minha jornada como desenvolvedor: a evolução e refatoração completa da minha primeira aplicação full-stack construída de forma independente. O objetivo principal desta versão foi aplicar padrões de mercado para transformar um projeto funcional em um sistema robusto, limpo e profissional.

## 🚀 Evolução Técnica e Aprendizados

Nesta etapa de refatoramento, adquiri e refinei competências essenciais para um desenvolvedor **Full-Stack**:

- 🏗️ **Arquitetura e DTOs**: Implementei o padrão **DTO (Data Transfer Object)** para desacoplar as entidades do banco de dados da camada de apresentação, garantindo mais segurança e flexibilidade no tráfego de informações.
- 🛡️ **Tratamento de Exceções**: Desenvolvi uma estrutura personalizada para captura e tratamento de erros, proporcionando feedbacks claros e profissionais para o usuário e facilitando o debug.
- 🧹 **Refatoramento & Clean Code**: Apliquei princípios de código limpo para reorganizar a lógica de negócio, garantindo que a **Service Layer** e os **Controllers** fossem mais legíveis e fáceis de manter.
- 🔌 **Integração Refinada**: Melhorei a comunicação entre o front-end em **Angular** e a API em **Java/Spring Boot**, otimizando o fluxo de dados e o tratamento de respostas HTTP.

## 🎨 Foco no Front-end: Excelência na Estrutura

Mantive e refinei a arquitetura do Front-end, focando na separação total de responsabilidades:

- **Services**: Serviços dedicados (como `CategoryService` e `ProductService`) cuidam exclusivamente da lógica de comunicação HTTP e manipulação de dados.
- **Pattern Repository**: A camada de acesso a dados abstrai a fonte de informações, tornando os componentes focados puramente na interface e interação com o usuário.
- **Validação de Dados**: Implementei validações robustas para garantir que apenas dados íntegros sejam enviados ao servidor.

## 🛠️ Tecnologias Utilizadas

- **Front-end**: Angular
- **Back-end**: Java (Spring Boot)
- **Banco de Dados**: H2 Database

## 🖥️ Repositório do Back-End
[**Cadastro de Produtos - Java Spring**](https://github.com/kauanzin222/NewVersion-ProductRegistration-JavaSpring)

---
*Projeto desenvolvido para fins de estudo, refatoração e aperfeiçoamento técnico. 📚*
