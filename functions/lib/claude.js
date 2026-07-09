export async function frågaClaude(apiKey, prompt) {

    const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "x-api-key": apiKey,
            "anthropic-version": "2023-06-01"
        },
        body: JSON.stringify({
            model: "claude-sonnet-4-6",
            max_tokens: 4000,
            messages: [
                {
                    role: "user",
                    content: prompt
                }
            ]
        })
    });

    return await response.json();

}
