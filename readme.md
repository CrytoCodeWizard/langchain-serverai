# TopDown Server development project

We are proceeding with the ServerAI development project as an environment development for managing AI.
(LLM: Large Language Model)
Overview:

- Python web development using LangChain, ChatGPT API.

According to the prompt set on the prompt input screen, use LangChain to generate ChatGPT API using a predetermined prompt (provided by our company) and RAG (text data (only MD in TD can be used)) Development of setting screen for this and development of API issuing function for calling from outside.

Environment
 - Make it a web app
 - Mobile-first design

Language
 - HTML/CSS/JavaScript
 - Python/FLASK/LangChain

Development environment
 - Get started with Google Firebase
 - Google Cloud Firestore (DB)
 - Google Firebase Authentication (user management)
 - GPT3.5 Turbo, GPT4
 *Please encrypt the API key as it will be registered by the user.

![Production screen wire (tentative)](https://storage.googleapis.com/topdowncom/content/1tUnkuMDlkhMCCthuaHACDnSC603/3b99a097-c157-4da2-9f50-f6e271d53ce4/severAI_point.png)

# Screen function explanation
①: Prompt model list
Displays a list of prompt settings.
Create a new model with create, and delete the currently selected prompt model with delete.

②: Model settings
When creating a prompt, set the base GPT version and the list to be displayed in the prompt list.
Memory stores conversation information.
Conversation information is held on the server side.

③: Prompt settings
Set prompts such as what kind of answer to give and the characteristics of the answer.
Based on the information registered here, chat conversation trends and data will be created.
*{} is a LangChain command.

④: Knowledge setting
Register the knowledge file.
In this Server AI, the knowledge file created using the TopDown file is registered as a knowledge file.
*TopDopwn is a website creation tool that can be created using markdown.
Top Down
I will be exporting an HTML file, so please be able to register it.

⑤：Comment settings
This will explain what this prompt is.
At this time, it is only used for illustrative purposes.

⑥: Screen transition
Back: Link back to TopDown
play ground: A link that takes you to the screen where the chat actually moves.
Make sure that both can be operated using buttons.


# Feature Description
 - The AI prompt created on the prompt setting screen can be used by calling it on the client side.
   Read the OpenAI API key from the environment variable.
 - If the user has set an API key, call GPT4.
 - If it is not set, call GPT3.5 using the TopDown API key.
   In LangChain, set the argument passed in promptTemplateVariable to the prompt definition passed from the settings screen
 - Execute OpenAI API with LLMChain
 - If Knowledge file is specified, execute Chain on Retrieve


# Sample

```
servai = new();

return =  servai.topDownServerAI("Standard", prompt)

return = servai.topDownServerAI("
ServerAI Name"
, promptTemplateVariable, ...)
```

It's here

```
servai.topDownServerAI("Standard", prompt)
```

This will call the AI set for each Standard part.
*If you leave it as Standard, GPT3.5 set in TopDown will be called by default.

```
servai.topDownServerAI("
ServerAI Name"
, promptTemplateVariable, ...)
```

This is where you can pass more detailed information.
I would like to be able to pass an argument that sets the level of abstraction in this.


After performing the above processing, on the client side

![Client Side](https://storage.googleapis.com/topdowncom/content/1tUnkuMDlkhMCCthuaHACDnSC603/3b99a097-c157-4da2-9f50-f6e271d53ce4/chatUI.png)

It will be displayed on this side of the screen.
*This screen will be created separately and a chat function will be created based on the data received from this system.

That's it.