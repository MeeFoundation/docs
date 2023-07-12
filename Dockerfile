ARG OCR=iad.ocir.io/idizyqpyms9z
FROM ${OCR}/file-server:latest
RUN echo hello
COPY docs/dist /assets
