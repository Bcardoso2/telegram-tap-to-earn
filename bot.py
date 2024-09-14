from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Application, CommandHandler, CallbackQueryHandler, CallbackContext

# Dicionário para armazenar os pontos dos usuários
user_points = {}

async def start(update: Update, context: CallbackContext) -> None:
    keyboard = [[InlineKeyboardButton("Ganhar Pontos", callback_data='earn_points')]]
    reply_markup = InlineKeyboardMarkup(keyboard)
    await update.message.reply_text('Clique no botão abaixo para ganhar pontos!', reply_markup=reply_markup)

async def button(update: Update, context: CallbackContext) -> None:
    query = update.callback_query
    await query.answer()

    user_id = query.from_user.id
    if user_id not in user_points:
        user_points[user_id] = 0
    user_points[user_id] += 10  # Pontos ganhos por clique

    await query.edit_message_text(text=f'Você ganhou 10 pontos! Total de pontos: {user_points[user_id]}')

def main() -> None:
    # Substitua 'YOUR_BOT_TOKEN' pelo token fornecido
    application = Application.builder().token("7390968345:AAGr6N-E7vzDK9i1rvHgo-QYzmlaBie6W7M").build()

    application.add_handler(CommandHandler("start", start))
    application.add_handler(CallbackQueryHandler(button))

    application.run_polling()

if __name__ == '__main__':
    main()
