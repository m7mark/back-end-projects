import TelegramApi from 'node-telegram-bot-api'
import { gameOptions, againOptions, startGameOptions } from './options.js'
import 'dotenv/config'

const token = process.env.BOT_TOKEN
// http://t.me/node_api_m_bot
const bot = new TelegramApi(token, { polling: true })
const chats = {}

const startGame = async (chatId) => {
  await bot.sendMessage(chatId, `Gues number from 0 to 9`)
  const randomNum = Math.floor(Math.random() * 10)
  chats[chatId] = randomNum
  await bot.sendMessage(chatId, `Your turn`, gameOptions)
}

const startBot = () => {
  bot.setMyCommands([
    { command: '/start', description: 'Hello in game' },
  ])

  bot.on('message', async msg => {
    const text = msg.text
    const chatId = msg.chat.id
    switch (text) {
      case '/start':
        await bot.sendMessage(chatId, `Hi! ${msg.chat.first_name}`)
        await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/422/93d/42293d5f-7cd5-49f6-a8fd-939f71b06a83/192/13.webp', startGameOptions)
        break;
      case '/game':
        startGame(chatId)
        break;
      default:
        await bot.sendMessage(chatId, `I don't understand you`)
    }
  })

  bot.on('callback_query', async msg => {
    const text = msg.data
    // const messageId = msg.message.message_id
    const chatId = msg.message.chat.id
    if (text === '/again') {
      return await startGame(chatId)
    }
    if (text === '/game') {
      return await startGame(chatId)
    }
    if (+text === chats[chatId]) {
      return await bot.sendMessage(chatId, `You choose right number ${chats[chatId]} ✅`, againOptions)
    } else {
      return await bot.sendMessage(chatId, `You choose wrong number ${chats[chatId]} 🛑`, againOptions)
    }
  })
}

startBot()
