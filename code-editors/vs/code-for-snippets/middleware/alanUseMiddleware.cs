app.Use(async (context, next) =>
{
		//code dealing with the request
		logger.LogInformation("Work with request");

	await context.Response.WriteAsync("Hey");

	await next();

		//code dealing with the response
		logger.LogInformation("Work with response");
});