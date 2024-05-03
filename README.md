# Gerador de QR Code

## Descrição
O Gerador de QR Code é uma aplicação web que simplifica o processo de criação de códigos QR. Este projeto permite gerar um QR Code personalizado ao acessar a URL do site e adicionar o parâmetro de query "qrcode" com o conteúdo desejado.

## Funcionalidades Principais
- **Geração Instantânea:** O QR Code é gerado automaticamente ao acessar a URL com o parâmetro de query adequado.
- **Compatibilidade com Diferentes Conteúdos:** Suporte para URLs, texto simples, informações de contato, eventos e muito mais.

## Como Utilizar
1. Acesse o site [qrcode-generator](https://qrcode-generator-five-rho.vercel.app/).
2. Adicione o parâmetro de query "qrcode" à URL, seguido do conteúdo que deseja codificar no QR Code.
   - Exemplo: `https://qrcode-generator-five-rho.vercel.app/?qrcode=conteudo_a_ser_codificado`.
3. O código QR será gerado automaticamente e exibido na tela.
4. Se desejar, faça o download do código QR clicando no botão de download.

## Tecnologias Utilizadas
- JavaScript
- NodeJS
- [express](https://github.com/expressjs/express)
- [node-qrcode](https://github.com/soldair/node-qrcode)

## Autor
[Indiorlei]
