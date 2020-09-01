var options = new JsonSerializerOptions
{
	PropertyNamingPolicy = JsonNamingPolicy.CamelCase,  1
	WriteIndented = true    2
};

var jsonString = File.ReadAllText(@CUsersalansourcereposConsoleApp1ConsoleApp1data.json); 3
var jsonModel = JsonSerializer.DeserializeDatosModel(jsonString, options);    4
var modelJson = JsonSerializer.Serialize(jsonModel, options);   5
foreach (var emp in jsonModel.empleados)
{
	Console.WriteLine(emp.nombre);
}

//0. usa System.Text.Json que ya viene incluido en .net-core 3
//1. matchea (c#)Empleado.Nombre con (json)empleado.nombre si llegaran a ser diferentes
//2. lee archivo
//3. convierte json a objeto C#
//4. convierte objeto C# a json

//Mapear archivo datos.json a clases c#
//1. crear-clase/DatosModel.cs
//2. copiar todo el objeto json de datos.json
//3. ir a DatosModel.cs y borrar todo lo que esta dentro del namespace
//4. despues ir a "edit/paste-special/paste-json-as-classes/click
//5. se genera una clase papa "Rootobject", cambiarle el nombre al nombre que teniamos "DatosModel"
//6. con esto ya tenemos mapeado el objeto-json con clases-c#