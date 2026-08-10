# Setup — Workflow n8n BCOMM Contato

## Fluxo
1. **Webhook** recebe POST do formulário do site
2. **Google Sheets** salva os dados na planilha
3. **Email** envia confirmação para o preenchedor

## Passo a passo

### 1. Importar o workflow no n8n
1. Abra seu n8n
2. Vá em **Workflows → Import from File**
3. Selecione o arquivo `bcomm-contato.json`

### 2. Configurar Google Sheets
1. Crie uma planilha no Google Sheets com aba chamada "Contato"
2. Na primeira linha, adicione os cabeçalhos: `Data | Nome | Email | Telefone | Mensagem`
3. No n8n, clique no node **Google Sheets**
4. Conecte sua conta Google (OAuth2)
5. Selecione a planilha e a aba "Contato"

### 3. Configurar Email (SMTP)
1. No n8n, clique no node **Enviar Email**
2. Configure as credenciais SMTP:
   - **Host**: smtp.gmail.com (se usar Gmail)
   - **Port**: 587
   - **User**: seu-email@gmail.com
   - **Password**: senha de app do Google
3. Ou use outro provider SMTP (Brevo, Resend, etc)

### 4. Ativar o webhook
1. Clique em **Active** no workflow
2. Copie a URL do webhook (ex: `https://seu-n8n.com/webhook/bcomm-contato`)

### 5. Atualizar o código do site
1. Em `src/components/Contact.tsx`, substitua a URL:
```ts
const N8N_WEBHOOK_URL = "https://SEU-N8N.COM/webhook/bcomm-contato";
```

### 6. Testar
1. Preencha o formulário no site
2. Verifique se os dados aparecem na Google Sheet
3. Verifique se o email de confirmação foi enviado

## JSON recebido pelo webhook
```json
{
  "nome": "João Silva",
  "email": "joao@empresa.com",
  "telefone": "+55 41 99999-0000",
  "mensagem": "Gostaria de saber mais sobre automação com IA",
  "data": "2026-08-10T21:36:00.000Z"
}
```
