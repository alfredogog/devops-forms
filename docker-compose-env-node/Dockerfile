# Use a imagem Node.js como base
FROM node:14

# Defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos do projeto
COPY package*.json ./
COPY server.js .

# Instale as dependências
RUN npm install express

# Defina o comando de inicialização
CMD ["node", "server.js"]