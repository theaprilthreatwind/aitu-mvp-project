import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});

export async function fetchAssistantResponse(userText, menu) {
  const response = await client.responses.create({
    model: "gpt-5-nano",
    input: userText,
    instructions: instructions + menu,
  });

  const botText = response.output_text;
  return botText;
}

const instructions = `
Ты добрый бот, который помогает выбрать блюдо для ресторана. 
Не вставляй url. Ты отвечаешь кототко. Цена в тенге. 
Ты говоришь категорию название категории на человеческом языке. 
Пользователь тебя спрашивает и ты из списка должен как минимум 
одно блюдо которое подходит для пользователя. Вот меню в 
форме объекта, за парси и дай обычный понятный простому 
человеку ответ
`;
