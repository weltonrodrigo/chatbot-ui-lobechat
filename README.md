# Chatbot UI

Chatbot UI 是一个为 AI 模型设计的开源聊天界面。

## 部署

**Vercel**

使用 Vercel 托管您自己的 Chatbot UI 实时版本。

[![使用 Vercel 部署](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmckaywrigley%2Fchatbot-ui)

**Docker**

```
docker run -e OPENAI_API_KEY=sk-xxx -p 3000:3000 caoyunzhou/chatbot-ui:main
```

## 本地运行

**1. 克隆仓库**

```bash
git clone https://github.com/caoyunzhou/chatbot-ui.git
```

**2. 安装依赖**

```bash
npm i
```

**3. 提供 OpenAI API 密钥**

在仓库根目录创建一个 .env.local 文件，并填入您的 OpenAI API 密钥：

```bash
OPENAI_API_KEY=sk-xxx
```

> 如果无法访问官方 OpenAI 主机，或者访问受限，请设置 `OPENAI_API_HOST`，以便用户可以根据自己的需求配置替代主机。

> 此外，如果您拥有多个 OpenAI 组织，可以设置 `OPENAI_ORGANIZATION` 来指定其中之一。

**4. 运行应用**

```bash
npm run dev
```

## 环境变量

| 环境变量                 | 默认值               | 描述                                         |
| ------------------------------- | ----------------------------- | -------------------------- |
| OPENAI_API_KEY         |               | 用于与 OpenAI 进行身份验证的默认 API 密钥               |
| OPENAI_API_HOST          | `https://api.openai.com`      | 端点URL    |
| OPENAI_ORGANIZATION             |               | 您的 OpenAI 组织 ID          |
| DEFAULT_MODEL                   | `gpt-3.5-turbo`          | 在新对话中使用的默认模型，对于 Azure，请使用 `gpt-35-turbo`        |
| NEXT_PUBLIC_DEFAULT_SYSTEM_PROMPT | [见此处](utils/app/const.ts) | 在新对话中使用的默认系统提示                  |
| NEXT_PUBLIC_DEFAULT_TEMPERATURE | 1                             | 在新对话中使用的默认温度                        |
| GOOGLE_API_KEY                  |                               | 参见 [Custom Search JSON API 文档][GCSE]                             |
| GOOGLE_CSE_ID                   |                               | 参见 [Custom Search JSON API 文档][GCSE]               |
| LOG_INCOMING_MESSAGES           | false                         | 将传入消息记录到控制台                                     |
| LOG_TRIM_MESSAGES               | true                          | 仅将最后一条消息记录到控制台                    |


如果您没有提供带有 `OPENAI_API_KEY` 的 OpenAI API 密钥，用户将需要提供自己的密钥。

如果您没有 OpenAI API 密钥，可以在[此处](https://platform.openai.com/account/api-keys)获取一个。

