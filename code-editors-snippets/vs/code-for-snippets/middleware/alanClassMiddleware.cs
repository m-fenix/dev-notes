public class SaludoMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger<SaludoMiddleware> _logger;

    public SaludoMiddleware(RequestDelegate next, ILogger<SaludoMiddleware> _logger)
    {
        this._next = next;
        this._logger = _logger;
    }

    public async Task Invoke(HttpContext context)
    {
        //code dealing with the request
        this._logger.LogInformation("Work with request");
        await context.Response.WriteAsync("Hey");

        await this._next(context);

        //code dealing with the response
        this._logger.LogInformation("Work with response");
    }
}

public static class SaludoMiddlewareExtension
{
    public static IApplicationBuilder UseSaludo(this IApplicationBuilder app)
    {
        return app.UseMiddleware<SaludoMiddleware>();
    }
}
//In Startup.cs/Configure call it:   app.UseSaludo();