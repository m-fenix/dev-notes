function saludoAsync() {
    return new Promise((resolve, reject) => {
      //codigo sincrono que quiero hacer asincrono
      var result = 6;

      //valida que el request sincrono haya sido exitoso o fallido
      if (result > 5) {
        resolve(
          "aqui puede ir el resultado del codigo asincrono en forma de objeto"
        );
      } else {
        reject("Fue fallido");
      }
    });
  }

  //uso la fn saludoAsync que ya es asincrona y agrego el codigo que necesite
  async function empleadoAsync() {
    let resultado = await saludoAsync();
    return resultado;
  }

  (async () => {
    console.log(await empleadoAsync());
  })();