app.Run(async (context) =>
{
		//code dealing with the request
		logger.LogInformation("Work with request");

	await context.Response.WriteAsync("Hey");
});