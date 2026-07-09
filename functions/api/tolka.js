export async function onRequestPost(context) {

  const apiKey = context.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: "ANTHROPIC_API_KEY saknas." },
      { status: 500 }
    );
  }

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01"
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      max_tokens: 100,
      messages: [
        {
          role: "user",
          content: "Svara endast med ordet HEJ"
        }
      ]
    })
  });

  const data = await response.json();

  return Response.json(data, {
    status: response.status
  });

}

export async function onRequest(context) {

  if (context.request.method !== "POST") {
    return Response.json(
      { error: "Endast POST tillåts." },
      { status: 405 }
    );
  }

  return onRequestPost(context);

}
