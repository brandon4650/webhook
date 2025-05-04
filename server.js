// const express = require('express');
// const { Client, GatewayIntentBits } = require('discord.js');
// const cors = require('cors');
// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.static('public'));

// // Discord client setup
// const client = new Client({
//     intents: [
//         GatewayIntentBits.Guilds,
//         GatewayIntentBits.GuildEmojisAndStickers
//     ]
// });

// // Routes
// app.post('/send-message', async (req, res) => {
//     const { webhookUrl, content } = req.body;
    
//     try {
//         const response = await fetch(webhookUrl, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ content })
//         });

//         if (!response.ok) throw new Error('Failed to send message');
        
//         res.json({ success: true });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// app.post('/fetch-emojis', async (req, res) => {
//     const { botToken } = req.body;
    
//     try {
//         await client.login(botToken);
//         const guilds = client.guilds.cache;
//         const emojis = [];

//         for (const guild of guilds.values()) {
//             const guildEmojis = guild.emojis.cache.map(emoji => ({
//                 id: emoji.id,
//                 name: emoji.name,
//                 url: emoji.url
//             }));
//             emojis.push(...guildEmojis);
//         }

//         client.destroy();
//         res.json({ emojis });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });