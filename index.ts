import { ChatOpenAI } from "@langchain/openai";
// import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { ChatPromptTemplate } from "@langchain/core/prompts";

const model = new ChatOpenAI({
  apiKey: "YOUR_OPENAI_API_KEY",
  model: "gpt-4o",
});

// const messages = [
//   new SystemMessage("Translate the following from English into Hindi."),
//   new HumanMessage("Hi!"),
// ];

// const result = await model.invoke(messages);

const parser = new StringOutputParser();

// const output = await parser.invoke(result);

// console.log({ output });

// const chain = model.pipe(parser);

// const output = await chain.invoke(messages);

// console.log({ output });

// templates

const systemTemplate = "Translate the following into {language}.";

const promptTemplate = ChatPromptTemplate.fromMessages([
  ["system", systemTemplate],
  ["user", "{text}"],
]);

// const result = await promptTemplate.invoke({
//   language: "Hindi",
//   text: "How are you?",
// });

// console.log({ result });

// console.log(result.toChatMessages());

const chain = promptTemplate.pipe(model).pipe(parser);

const result = await chain.invoke({ language: "Hindi", text: "How are you?" });

console.log({ result });
