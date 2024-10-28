# Use Python como imagem base
FROM python:3.9-alpine

# Copie o script Python para o container
COPY script.py /app/script.py

# Defina o diretório de trabalho
WORKDIR /app

# Comando para rodar o script Python
CMD ["python3", "script.py"]