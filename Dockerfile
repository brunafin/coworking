# Usa a imagem oficial do Node.js 22
FROM node:22

# Cria e define o diretório de trabalho
WORKDIR /usr/src/app

# Abre o shell interativo como entrada padrão
CMD ["node"]

