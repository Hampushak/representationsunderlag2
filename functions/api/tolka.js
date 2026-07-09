export async function onRequestPost(context) {

  const apiKey = context.env.ANTHROPIC_API_KEY;

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json"
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 50,
      messages: [
        {
          role: "user",
          content: "Svara endast med ordet HEJ"
        }
      ]
    })
  });

  const data = await response.json();

  return Response.json(data);

}
