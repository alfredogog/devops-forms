# Etapa 1: Construção do binário
FROM golang:1.19 AS builder

# Defina o diretório de trabalho
WORKDIR /app

# Copie o código fonte para o container
COPY main.go .

# Compile o código Go
RUN go build -o app main.go

# Etapa 2: Imagem final, leve
FROM alpine:latest

# Copie o binário da etapa de construção para a imagem final
COPY --from=builder /app/app /app/app

# Defina o diretório de trabalho na imagem final
WORKDIR /app

# Defina o comando de execução padrão
CMD ["./app"]