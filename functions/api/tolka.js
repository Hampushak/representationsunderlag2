export async function onRequestPost(context) {

    return Response.json({
        success: true,
        message: "Backend fungerar!",
        time: new Date().toISOString()
    });

}
