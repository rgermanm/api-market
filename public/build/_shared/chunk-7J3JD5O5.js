// app/components/AsideMenu/apis.json
var apis_default = [
  {
    section: "PAGOS",
    apis: [
      {
        name: "API Transferencia",
        mark: "# Integraciones Launchpad.\r\n\r\nEl ecosistema de launchpad expone diferentes endpoint para lograr una integraci\xF3n completa con nuestra aplicaci\xF3n. Desde una perspectiva sencilla la integraci\xF3n siempre recorrer\xE1 los siguientes pasos al menos de momento.\r\n\r\n1-Cliente/Organizaci\xF3n externa invoca al servicio de contexto.\r\n\r\n2-Servicio de Contexto: Seg\xFAn que endpoint se use este servicio retornar una url o un id.\r\n\r\n3-Cliente/Organizaci\xF3n debe decidir qu\xE9 acci\xF3n tomar en base a que endpoint de **service context** uso.\r\n\r\n### Gr\xE1fico para simplificar la idea \r\n\r\n[![img-envio-retorno](/envio-retorno.jpg)]()\r\n\r\nLa flecha en relacionada al \u201CEnvio\u201D  indica que quien se integre deber\xE1 enviarnos un set de datos el cual se reciben en el MundoGS el nombre por el cual se lo conoce es \u201CContexto o Context\u201D.\r\nEste set de datos son un conjunto de datos m\xEDnimos requeridos para poder hacer funcionar los sistemas de GS en este caso se armara un objeto que puede llegar a contener datos como por ejemplo.\r\n\r\n\r\n1-**Datos de la organizaci\xF3n** (Necesarios para que MundoGS sepa qui\xE9n es el que llama y usa el sistema).\r\n\r\n2-**Datos de empleados de la organizaci\xF3n**(en el caso de que la implementaci\xF3n sea en un canal que sea manejado por empleados de la organizaci\xF3n).\r\n\r\n3-**Datos personales del cliente**(Referentes a la persona a la cual se le quiere vender el producto) estos pueden contener m\xE1s o menos informaci\xF3n pero siempre existe un m\xEDnimo.\r\n\r\n\r\nB\xE1sicamente el contexto consta de 3 partes principales.\r\n\r\n1-Bloque **customer** = Contiene informaci\xF3n base del cliente.\r\n\r\n2-Bloque **channel** = Contiene informaci\xF3n de la organizaci\xF3n que env\xEDa el contexto para ubicarla en nuestro sistema.\r\n\r\n3-Bloque  **transaction** = Contiene informaci\xF3n que se usa en las integraciones contra el CRM engage interno de Galicia Seguros.\r\n\r\nDepende de a que endpoint del Servicio de contexto **(Context-Service)** se invoque la repuesta puede cambiar para dar la posibilidad al invocador (Organizaci\xF3n integradora) de elegir que hacer en cada caso.\r\n\r\nPor ejemplo dentro de **context-service** existe el endpoint \r\n[![img-envio-retorno](/post-launchpad.jpg)]()\r\n \r\nEste endpoint crea un contexto y retorna su ID.\r\n\r\n### Ejemplo response caso 1\r\n\r\n\r\n[![img-envio-retorno](/objeto-endpoint.jpg)]()\r\n\r\n\r\n\r\nQuedara por cuenta del cliente el armar la url de launchpad con el id de contexto\r\n\r\n### [Hace click para ver un ejemplo](https://dev.integradordeseguros.com/launchpad/?idContext=1bbd7777-83b8-4933-6698-08db2ad53557)\r\n\r\n\r\nEl par\xE1metro **\u201CidContext\u201D**  es el identificador creado en la llamada del post anterior.\r\n\r\nInvocando a la url de launchpad se renderizara el front con todos los producto configurados para dicha organizaci\xF3n.\r\n\r\nExisten otros endpoint de car\xE1cter similar es decir tambi\xE9n reciben un contexto pero en algunos casos lo que permiten es enviar el contexto en vez de en un formato JSON en un formato TXT o encriptado bajo alg\xFAn est\xE1ndar definido con la organizaci\xF3n.\r\nPero estos actualmente est\xE1n en de desarrollo o son espec\xEDficos para algunas de nuestras organizaci\xF3n las cuales ya est\xE1n integradas a nosotros.",
        info: "Galicia ofrece una plataforma de API's empresariales para la gesti\xF3n \xE1gil de tesorer\xEDa en sitios web, aplicaciones m\xF3viles, sistemas del cliente y para beneficio del usuario final, permitiendo la gesti\xF3n de pagos y mensajes, consulta de informaci\xF3n y notificaciones en l\xEDnea.",
        method: "POST",
        baseUrl: {
          info: "Esta API es para las transferencias monetarias de cuenta Galicia a cuentas interbancarias o Tarjeta de D\xE9bito",
          test: "https://galicia.test.ar/apisemppr/internalTransfers/V03/createEnterpriseInterna",
          prod: "https://galicia.com.ar/apisemppr/internalTransfers/V03/createEnterpriseInterna"
        },
        auth: [{
          info: "",
          subtitle: "",
          table: ""
        }],
        headers: [{
          info: "",
          subtitle: "",
          table: ""
        }],
        errors: [{
          info: "",
          subtitle: "",
          table: ""
        }],
        response: [
          {
            subtitle: "Success",
            info: "A continuaci\xF3n, un ejemplo de la solicitud y una respuesta exitosa, cuando se ejecuta correctamente el API regresa en el campo tsec del encabezado o header la llave de sesi\xF3n.",
            table: "",
            json: {
              operationDate: "2021-01-21T00:00:00.0-0600",
              id: "0007172005",
              finalBalanceReceiver: {
                availableBalance: {
                  currency: {
                    id: "MXN",
                    code: "MXN",
                    name: "MXN"
                  },
                  amount: 1.04
                }
              },
              entityId: {
                applicationId: "0034961763",
                trackingId: "APIC01002101220034961763"
              },
              sequenceReference: "0000077793"
            }
          },
          {
            subtitle: "Missing Value",
            info: "A continuaci\xF3n, un ejemplo de la solicitud y una respuesta campo faltante.",
            table: "",
            json: {
              operationDate: "2021-01-21T00:00:00.0-0600",
              id: "0007172005",
              finalBalanceReceiver: {
                availableBalance: {
                  currency: {
                    id: "MXN",
                    code: "MXN",
                    name: "MXN"
                  },
                  amount: 1.04
                }
              },
              entityId: {
                applicationId: "0034961763",
                trackingId: "APIC01002101220034961763"
              },
              sequenceReference: "0000077793"
            }
          }
        ],
        request: [
          {
            info: "",
            subtitle: "Request Ejemplo",
            json: {
              operationDate: "2021-01-21",
              concept: [
                "prueba 01 del 02"
              ],
              numericReference: "1234567",
              reference: "pruebaAPIS",
              sender: {
                contract: {
                  product: {
                    checkAccount: {
                      accountNumber: "00743607001102625431"
                    }
                  }
                }
              }
            },
            table: [
              {
                name: "Fecha de operacion",
                key: "operationDate",
                type: "date",
                mandatory: "True",
                desc: "Fecha de operaci\xF2n en formato AAAA-MM-DD"
              },
              {
                name: "Concepto Pago",
                key: "concept",
                type: "string array",
                mandatory: "True",
                desc: "Motivo de pago"
              },
              {
                name: "Referencia num\xE9rica",
                key: "numericReference",
                type: "string",
                mandatory: "True",
                desc: "Referencia numerica formato string sin caracteres alfab\xE9ticos"
              }
            ]
          }
        ]
      },
      {
        name: "API Historial Pagos",
        mark: "# Integraciones Launchpad.\r\n\r\nEl ecosistema de launchpad expone diferentes endpoint para lograr una integraci\xF3n completa con nuestra aplicaci\xF3n. Desde una perspectiva sencilla la integraci\xF3n siempre recorrer\xE1 los siguientes pasos al menos de momento.\r\n\r\n1-Cliente/Organizaci\xF3n externa invoca al servicio de contexto.\r\n\r\n2-Servicio de Contexto: Seg\xFAn que endpoint se use este servicio retornar una url o un id.\r\n\r\n3-Cliente/Organizaci\xF3n debe decidir qu\xE9 acci\xF3n tomar en base a que endpoint de **service context** uso.\r\n\r\n### Gr\xE1fico para simplificar la idea \r\n\r\n[![img-envio-retorno](/envio-retorno.jpg)]()\r\n\r\nLa flecha en relacionada al \u201CEnvio\u201D  indica que quien se integre deber\xE1 enviarnos un set de datos el cual se reciben en el MundoGS el nombre por el cual se lo conoce es \u201CContexto o Context\u201D.\r\nEste set de datos son un conjunto de datos m\xEDnimos requeridos para poder hacer funcionar los sistemas de GS en este caso se armara un objeto que puede llegar a contener datos como por ejemplo.\r\n\r\n\r\n1-**Datos de la organizaci\xF3n** (Necesarios para que MundoGS sepa qui\xE9n es el que llama y usa el sistema).\r\n\r\n2-**Datos de empleados de la organizaci\xF3n**(en el caso de que la implementaci\xF3n sea en un canal que sea manejado por empleados de la organizaci\xF3n).\r\n\r\n3-**Datos personales del cliente**(Referentes a la persona a la cual se le quiere vender el producto) estos pueden contener m\xE1s o menos informaci\xF3n pero siempre existe un m\xEDnimo.\r\n\r\n\r\nB\xE1sicamente el contexto consta de 3 partes principales.\r\n\r\n1-Bloque **customer** = Contiene informaci\xF3n base del cliente.\r\n\r\n2-Bloque **channel** = Contiene informaci\xF3n de la organizaci\xF3n que env\xEDa el contexto para ubicarla en nuestro sistema.\r\n\r\n3-Bloque  **transaction** = Contiene informaci\xF3n que se usa en las integraciones contra el CRM engage interno de Galicia Seguros.\r\n\r\nDepende de a que endpoint del Servicio de contexto **(Context-Service)** se invoque la repuesta puede cambiar para dar la posibilidad al invocador (Organizaci\xF3n integradora) de elegir que hacer en cada caso.\r\n\r\nPor ejemplo dentro de **context-service** existe el endpoint \r\n[![img-envio-retorno](/post-launchpad.jpg)]()\r\n \r\nEste endpoint crea un contexto y retorna su ID.\r\n\r\n### Ejemplo response caso 1\r\n\r\n\r\n[![img-envio-retorno](/objeto-endpoint.jpg)]()\r\n\r\n\r\n\r\nQuedara por cuenta del cliente el armar la url de launchpad con el id de contexto\r\n\r\n### [Hace click para ver un ejemplo](https://dev.integradordeseguros.com/launchpad/?idContext=1bbd7777-83b8-4933-6698-08db2ad53557)\r\n\r\n\r\nEl par\xE1metro **\u201CidContext\u201D**  es el identificador creado en la llamada del post anterior.\r\n\r\nInvocando a la url de launchpad se renderizara el front con todos los producto configurados para dicha organizaci\xF3n.\r\n\r\nExisten otros endpoint de car\xE1cter similar es decir tambi\xE9n reciben un contexto pero en algunos casos lo que permiten es enviar el contexto en vez de en un formato JSON en un formato TXT o encriptado bajo alg\xFAn est\xE1ndar definido con la organizaci\xF3n.\r\nPero estos actualmente est\xE1n en de desarrollo o son espec\xEDficos para algunas de nuestras organizaci\xF3n las cuales ya est\xE1n integradas a nosotros.",
        info: "Galicia ofrece una plataforma de API's empresariales para la gesti\xF3n \xE1gil de tesorer\xEDa en sitios web, aplicaciones m\xF3viles, sistemas del cliente y para beneficio del usuario final, permitiendo la gesti\xF3n de pagos y mensajes, consulta de informaci\xF3n y notificaciones en l\xEDnea.",
        method: "GET",
        baseUrl: {
          info: "Esta API es para las transferencias monetarias de cuenta Galicia a cuentas interbancarias o Tarjeta de D\xE9bito",
          test: "https://galicia.test.ar/apisemppr/internalTransfers/V03/createEnterpriseInterna",
          prod: "https://galicia.com.ar/apisemppr/internalTransfers/V03/createEnterpriseInterna"
        },
        auth: [{
          info: "",
          subtitle: "",
          table: ""
        }],
        headers: [{
          info: "",
          subtitle: "",
          table: ""
        }],
        errors: [{
          info: "",
          subtitle: "",
          table: ""
        }],
        response: [
          {
            subtitle: "Success",
            info: "A continuaci\xF3n, un ejemplo de la solicitud y una respuesta exitosa, cuando se ejecuta correctamente el API regresa en el campo tsec del encabezado o header la llave de sesi\xF3n.",
            table: "",
            json: {
              operationDate: "2021-01-21T00:00:00.0-0600",
              id: "0007172005",
              finalBalanceReceiver: {
                availableBalance: {
                  currency: {
                    id: "MXN",
                    code: "MXN",
                    name: "MXN"
                  },
                  amount: 1.04
                }
              },
              entityId: {
                applicationId: "0034961763",
                trackingId: "APIC01002101220034961763"
              },
              sequenceReference: "0000077793"
            }
          },
          {
            subtitle: "Missing Value",
            info: "A continuaci\xF3n, un ejemplo de la solicitud y una respuesta campo faltante.",
            table: "",
            json: {
              operationDate: "2021-01-21T00:00:00.0-0600",
              id: "0007172005",
              finalBalanceReceiver: {
                availableBalance: {
                  currency: {
                    id: "MXN",
                    code: "MXN",
                    name: "MXN"
                  },
                  amount: 1.04
                }
              },
              entityId: {
                applicationId: "0034961763",
                trackingId: "APIC01002101220034961763"
              },
              sequenceReference: "0000077793"
            }
          }
        ],
        request: [
          {
            info: "",
            subtitle: "Request Ejemplo",
            json: {
              operationDate: "2021-01-21",
              concept: [
                "prueba 01 del 02"
              ],
              numericReference: "1234567",
              reference: "pruebaAPIS",
              sender: {
                contract: {
                  product: {
                    checkAccount: {
                      accountNumber: "00743607001102625431"
                    }
                  }
                }
              }
            },
            table: [
              {
                name: "Fecha de operacion",
                key: "operationDate",
                type: "date",
                mandatory: "True",
                desc: "Fecha de operaci\xF2n en formato AAAA-MM-DD"
              },
              {
                name: "Concepto Pago",
                key: "concept",
                type: "string array",
                mandatory: "True",
                desc: "Motivo de pago"
              },
              {
                name: "Referencia num\xE9rica",
                key: "numericReference",
                type: "string",
                mandatory: "True",
                desc: "Referencia numerica formato string sin caracteres alfab\xE9ticos"
              }
            ]
          }
        ]
      },
      {
        name: "API Eliminar Pago",
        mark: "# Integraciones Launchpad.\r\n\r\nEl ecosistema de launchpad expone diferentes endpoint para lograr una integraci\xF3n completa con nuestra aplicaci\xF3n. Desde una perspectiva sencilla la integraci\xF3n siempre recorrer\xE1 los siguientes pasos al menos de momento.\r\n\r\n1-Cliente/Organizaci\xF3n externa invoca al servicio de contexto.\r\n\r\n2-Servicio de Contexto: Seg\xFAn que endpoint se use este servicio retornar una url o un id.\r\n\r\n3-Cliente/Organizaci\xF3n debe decidir qu\xE9 acci\xF3n tomar en base a que endpoint de **service context** uso.\r\n\r\n### Gr\xE1fico para simplificar la idea \r\n\r\n[![img-envio-retorno](/envio-retorno.jpg)]()\r\n\r\nLa flecha en relacionada al \u201CEnvio\u201D  indica que quien se integre deber\xE1 enviarnos un set de datos el cual se reciben en el MundoGS el nombre por el cual se lo conoce es \u201CContexto o Context\u201D.\r\nEste set de datos son un conjunto de datos m\xEDnimos requeridos para poder hacer funcionar los sistemas de GS en este caso se armara un objeto que puede llegar a contener datos como por ejemplo.\r\n\r\n\r\n1-**Datos de la organizaci\xF3n** (Necesarios para que MundoGS sepa qui\xE9n es el que llama y usa el sistema).\r\n\r\n2-**Datos de empleados de la organizaci\xF3n**(en el caso de que la implementaci\xF3n sea en un canal que sea manejado por empleados de la organizaci\xF3n).\r\n\r\n3-**Datos personales del cliente**(Referentes a la persona a la cual se le quiere vender el producto) estos pueden contener m\xE1s o menos informaci\xF3n pero siempre existe un m\xEDnimo.\r\n\r\n\r\nB\xE1sicamente el contexto consta de 3 partes principales.\r\n\r\n1-Bloque **customer** = Contiene informaci\xF3n base del cliente.\r\n\r\n2-Bloque **channel** = Contiene informaci\xF3n de la organizaci\xF3n que env\xEDa el contexto para ubicarla en nuestro sistema.\r\n\r\n3-Bloque  **transaction** = Contiene informaci\xF3n que se usa en las integraciones contra el CRM engage interno de Galicia Seguros.\r\n\r\nDepende de a que endpoint del Servicio de contexto **(Context-Service)** se invoque la repuesta puede cambiar para dar la posibilidad al invocador (Organizaci\xF3n integradora) de elegir que hacer en cada caso.\r\n\r\nPor ejemplo dentro de **context-service** existe el endpoint \r\n[![img-envio-retorno](/post-launchpad.jpg)]()\r\n \r\nEste endpoint crea un contexto y retorna su ID.\r\n\r\n### Ejemplo response caso 1\r\n\r\n\r\n[![img-envio-retorno](/objeto-endpoint.jpg)]()\r\n\r\n\r\n\r\nQuedara por cuenta del cliente el armar la url de launchpad con el id de contexto\r\n\r\n### [Hace click para ver un ejemplo](https://dev.integradordeseguros.com/launchpad/?idContext=1bbd7777-83b8-4933-6698-08db2ad53557)\r\n\r\n\r\nEl par\xE1metro **\u201CidContext\u201D**  es el identificador creado en la llamada del post anterior.\r\n\r\nInvocando a la url de launchpad se renderizara el front con todos los producto configurados para dicha organizaci\xF3n.\r\n\r\nExisten otros endpoint de car\xE1cter similar es decir tambi\xE9n reciben un contexto pero en algunos casos lo que permiten es enviar el contexto en vez de en un formato JSON en un formato TXT o encriptado bajo alg\xFAn est\xE1ndar definido con la organizaci\xF3n.\r\nPero estos actualmente est\xE1n en de desarrollo o son espec\xEDficos para algunas de nuestras organizaci\xF3n las cuales ya est\xE1n integradas a nosotros.",
        info: "Galicia ofrece una plataforma de API's empresariales para la gesti\xF3n \xE1gil de tesorer\xEDa en sitios web, aplicaciones m\xF3viles, sistemas del cliente y para beneficio del usuario final, permitiendo la gesti\xF3n de pagos y mensajes, consulta de informaci\xF3n y notificaciones en l\xEDnea.",
        method: "DELETE",
        baseUrl: {
          info: "Esta API es para las transferencias monetarias de cuenta Galicia a cuentas interbancarias o Tarjeta de D\xE9bito",
          test: "https://galicia.test.ar/apisemppr/internalTransfers/V03/createEnterpriseInterna",
          prod: "https://galicia.com.ar/apisemppr/internalTransfers/V03/createEnterpriseInterna"
        },
        auth: [{
          info: "",
          subtitle: "",
          table: ""
        }],
        headers: [{
          info: "",
          subtitle: "",
          table: ""
        }],
        errors: [{
          info: "",
          subtitle: "",
          table: ""
        }],
        response: [
          {
            subtitle: "Success",
            info: "A continuaci\xF3n, un ejemplo de la solicitud y una respuesta exitosa, cuando se ejecuta correctamente el API regresa en el campo tsec del encabezado o header la llave de sesi\xF3n.",
            table: "",
            json: {
              operationDate: "2021-01-21T00:00:00.0-0600",
              id: "0007172005",
              finalBalanceReceiver: {
                availableBalance: {
                  currency: {
                    id: "MXN",
                    code: "MXN",
                    name: "MXN"
                  },
                  amount: 1.04
                }
              },
              entityId: {
                applicationId: "0034961763",
                trackingId: "APIC01002101220034961763"
              },
              sequenceReference: "0000077793"
            }
          },
          {
            subtitle: "Missing Value",
            info: "A continuaci\xF3n, un ejemplo de la solicitud y una respuesta campo faltante.",
            table: "",
            json: {
              operationDate: "2021-01-21T00:00:00.0-0600",
              id: "0007172005",
              finalBalanceReceiver: {
                availableBalance: {
                  currency: {
                    id: "MXN",
                    code: "MXN",
                    name: "MXN"
                  },
                  amount: 1.04
                }
              },
              entityId: {
                applicationId: "0034961763",
                trackingId: "APIC01002101220034961763"
              },
              sequenceReference: "0000077793"
            }
          }
        ],
        request: [
          {
            info: "",
            subtitle: "Request Ejemplo",
            json: {
              operationDate: "2021-01-21",
              concept: [
                "prueba 01 del 02"
              ],
              numericReference: "1234567",
              reference: "pruebaAPIS",
              sender: {
                contract: {
                  product: {
                    checkAccount: {
                      accountNumber: "00743607001102625431"
                    }
                  }
                }
              }
            },
            table: [
              {
                name: "Fecha de operacion",
                key: "operationDate",
                type: "date",
                mandatory: "True",
                desc: "Fecha de operaci\xF2n en formato AAAA-MM-DD"
              },
              {
                name: "Concepto Pago",
                key: "concept",
                type: "string array",
                mandatory: "True",
                desc: "Motivo de pago"
              },
              {
                name: "Referencia num\xE9rica",
                key: "numericReference",
                type: "string",
                mandatory: "True",
                desc: "Referencia numerica formato string sin caracteres alfab\xE9ticos"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    section: "CUENTAS",
    apis: [
      {
        name: "API Alta Cuenta",
        mark: "# Integraciones Launchpad.\r\n\r\nEl ecosistema de launchpad expone diferentes endpoint para lograr una integraci\xF3n completa con nuestra aplicaci\xF3n. Desde una perspectiva sencilla la integraci\xF3n siempre recorrer\xE1 los siguientes pasos al menos de momento.\r\n\r\n1-Cliente/Organizaci\xF3n externa invoca al servicio de contexto.\r\n\r\n2-Servicio de Contexto: Seg\xFAn que endpoint se use este servicio retornar una url o un id.\r\n\r\n3-Cliente/Organizaci\xF3n debe decidir qu\xE9 acci\xF3n tomar en base a que endpoint de **service context** uso.\r\n\r\n### Gr\xE1fico para simplificar la idea \r\n\r\n[![img-envio-retorno](/envio-retorno.jpg)]()\r\n\r\nLa flecha en relacionada al \u201CEnvio\u201D  indica que quien se integre deber\xE1 enviarnos un set de datos el cual se reciben en el MundoGS el nombre por el cual se lo conoce es \u201CContexto o Context\u201D.\r\nEste set de datos son un conjunto de datos m\xEDnimos requeridos para poder hacer funcionar los sistemas de GS en este caso se armara un objeto que puede llegar a contener datos como por ejemplo.\r\n\r\n\r\n1-**Datos de la organizaci\xF3n** (Necesarios para que MundoGS sepa qui\xE9n es el que llama y usa el sistema).\r\n\r\n2-**Datos de empleados de la organizaci\xF3n**(en el caso de que la implementaci\xF3n sea en un canal que sea manejado por empleados de la organizaci\xF3n).\r\n\r\n3-**Datos personales del cliente**(Referentes a la persona a la cual se le quiere vender el producto) estos pueden contener m\xE1s o menos informaci\xF3n pero siempre existe un m\xEDnimo.\r\n\r\n\r\nB\xE1sicamente el contexto consta de 3 partes principales.\r\n\r\n1-Bloque **customer** = Contiene informaci\xF3n base del cliente.\r\n\r\n2-Bloque **channel** = Contiene informaci\xF3n de la organizaci\xF3n que env\xEDa el contexto para ubicarla en nuestro sistema.\r\n\r\n3-Bloque  **transaction** = Contiene informaci\xF3n que se usa en las integraciones contra el CRM engage interno de Galicia Seguros.\r\n\r\nDepende de a que endpoint del Servicio de contexto **(Context-Service)** se invoque la repuesta puede cambiar para dar la posibilidad al invocador (Organizaci\xF3n integradora) de elegir que hacer en cada caso.\r\n\r\nPor ejemplo dentro de **context-service** existe el endpoint \r\n[![img-envio-retorno](/post-launchpad.jpg)]()\r\n \r\nEste endpoint crea un contexto y retorna su ID.\r\n\r\n### Ejemplo response caso 1\r\n\r\n\r\n[![img-envio-retorno](/objeto-endpoint.jpg)]()\r\n\r\n\r\n\r\nQuedara por cuenta del cliente el armar la url de launchpad con el id de contexto\r\n\r\n### [Hace click para ver un ejemplo](https://dev.integradordeseguros.com/launchpad/?idContext=1bbd7777-83b8-4933-6698-08db2ad53557)\r\n\r\n\r\nEl par\xE1metro **\u201CidContext\u201D**  es el identificador creado en la llamada del post anterior.\r\n\r\nInvocando a la url de launchpad se renderizara el front con todos los producto configurados para dicha organizaci\xF3n.\r\n\r\nExisten otros endpoint de car\xE1cter similar es decir tambi\xE9n reciben un contexto pero en algunos casos lo que permiten es enviar el contexto en vez de en un formato JSON en un formato TXT o encriptado bajo alg\xFAn est\xE1ndar definido con la organizaci\xF3n.\r\nPero estos actualmente est\xE1n en de desarrollo o son espec\xEDficos para algunas de nuestras organizaci\xF3n las cuales ya est\xE1n integradas a nosotros.",
        info: "Galicia ofrece una plataforma de API's empresariales para la gesti\xF3n \xE1gil de tesorer\xEDa en sitios web, aplicaciones m\xF3viles, sistemas del cliente y para beneficio del usuario final, permitiendo la gesti\xF3n de pagos y mensajes, consulta de informaci\xF3n y notificaciones en l\xEDnea.",
        method: "POST",
        baseUrl: {
          info: "Esta API es para las transferencias monetarias de cuenta Galicia a cuentas interbancarias o Tarjeta de D\xE9bito",
          test: "https://galicia.test.ar/apisemppr/internalTransfers/V03/createEnterpriseInterna",
          prod: "https://galicia.com.ar/apisemppr/internalTransfers/V03/createEnterpriseInterna"
        },
        auth: [{
          info: "",
          subtitle: "",
          table: ""
        }],
        headers: [{
          info: "",
          subtitle: "",
          table: ""
        }],
        errors: [{
          info: "",
          subtitle: "",
          table: ""
        }],
        response: [
          {
            subtitle: "Success",
            info: "A continuaci\xF3n, un ejemplo de la solicitud y una respuesta exitosa, cuando se ejecuta correctamente el API regresa en el campo tsec del encabezado o header la llave de sesi\xF3n.",
            table: "",
            json: {
              operationDate: "2021-01-21T00:00:00.0-0600",
              id: "0007172005",
              finalBalanceReceiver: {
                availableBalance: {
                  currency: {
                    id: "MXN",
                    code: "MXN",
                    name: "MXN"
                  },
                  amount: 1.04
                }
              },
              entityId: {
                applicationId: "0034961763",
                trackingId: "APIC01002101220034961763"
              },
              sequenceReference: "0000077793"
            }
          },
          {
            subtitle: "Missing Value",
            info: "A continuaci\xF3n, un ejemplo de la solicitud y una respuesta campo faltante.",
            table: "",
            json: {
              operationDate: "2021-01-21T00:00:00.0-0600",
              id: "0007172005",
              finalBalanceReceiver: {
                availableBalance: {
                  currency: {
                    id: "MXN",
                    code: "MXN",
                    name: "MXN"
                  },
                  amount: 1.04
                }
              },
              entityId: {
                applicationId: "0034961763",
                trackingId: "APIC01002101220034961763"
              },
              sequenceReference: "0000077793"
            }
          }
        ],
        request: [
          {
            info: "",
            subtitle: "Request Ejemplo",
            json: {
              operationDate: "2021-01-21",
              concept: [
                "prueba 01 del 02"
              ],
              numericReference: "1234567",
              reference: "pruebaAPIS",
              sender: {
                contract: {
                  product: {
                    checkAccount: {
                      accountNumber: "00743607001102625431"
                    }
                  }
                }
              }
            },
            table: [
              {
                name: "Fecha de operacion",
                key: "operationDate",
                type: "date",
                mandatory: "True",
                desc: "Fecha de operaci\xF2n en formato AAAA-MM-DD"
              },
              {
                name: "Concepto Pago",
                key: "concept",
                type: "string array",
                mandatory: "True",
                desc: "Motivo de pago"
              },
              {
                name: "Referencia num\xE9rica",
                key: "numericReference",
                type: "string",
                mandatory: "True",
                desc: "Referencia numerica formato string sin caracteres alfab\xE9ticos"
              }
            ]
          }
        ]
      },
      {
        name: "API Historial Pagos",
        mark: "# Integraciones Launchpad.\r\n\r\nEl ecosistema de launchpad expone diferentes endpoint para lograr una integraci\xF3n completa con nuestra aplicaci\xF3n. Desde una perspectiva sencilla la integraci\xF3n siempre recorrer\xE1 los siguientes pasos al menos de momento.\r\n\r\n1-Cliente/Organizaci\xF3n externa invoca al servicio de contexto.\r\n\r\n2-Servicio de Contexto: Seg\xFAn que endpoint se use este servicio retornar una url o un id.\r\n\r\n3-Cliente/Organizaci\xF3n debe decidir qu\xE9 acci\xF3n tomar en base a que endpoint de **service context** uso.\r\n\r\n### Gr\xE1fico para simplificar la idea \r\n\r\n[![img-envio-retorno](/envio-retorno.jpg)]()\r\n\r\nLa flecha en relacionada al \u201CEnvio\u201D  indica que quien se integre deber\xE1 enviarnos un set de datos el cual se reciben en el MundoGS el nombre por el cual se lo conoce es \u201CContexto o Context\u201D.\r\nEste set de datos son un conjunto de datos m\xEDnimos requeridos para poder hacer funcionar los sistemas de GS en este caso se armara un objeto que puede llegar a contener datos como por ejemplo.\r\n\r\n\r\n1-**Datos de la organizaci\xF3n** (Necesarios para que MundoGS sepa qui\xE9n es el que llama y usa el sistema).\r\n\r\n2-**Datos de empleados de la organizaci\xF3n**(en el caso de que la implementaci\xF3n sea en un canal que sea manejado por empleados de la organizaci\xF3n).\r\n\r\n3-**Datos personales del cliente**(Referentes a la persona a la cual se le quiere vender el producto) estos pueden contener m\xE1s o menos informaci\xF3n pero siempre existe un m\xEDnimo.\r\n\r\n\r\nB\xE1sicamente el contexto consta de 3 partes principales.\r\n\r\n1-Bloque **customer** = Contiene informaci\xF3n base del cliente.\r\n\r\n2-Bloque **channel** = Contiene informaci\xF3n de la organizaci\xF3n que env\xEDa el contexto para ubicarla en nuestro sistema.\r\n\r\n3-Bloque  **transaction** = Contiene informaci\xF3n que se usa en las integraciones contra el CRM engage interno de Galicia Seguros.\r\n\r\nDepende de a que endpoint del Servicio de contexto **(Context-Service)** se invoque la repuesta puede cambiar para dar la posibilidad al invocador (Organizaci\xF3n integradora) de elegir que hacer en cada caso.\r\n\r\nPor ejemplo dentro de **context-service** existe el endpoint \r\n[![img-envio-retorno](/post-launchpad.jpg)]()\r\n \r\nEste endpoint crea un contexto y retorna su ID.\r\n\r\n### Ejemplo response caso 1\r\n\r\n\r\n[![img-envio-retorno](/objeto-endpoint.jpg)]()\r\n\r\n\r\n\r\nQuedara por cuenta del cliente el armar la url de launchpad con el id de contexto\r\n\r\n### [Hace click para ver un ejemplo](https://dev.integradordeseguros.com/launchpad/?idContext=1bbd7777-83b8-4933-6698-08db2ad53557)\r\n\r\n\r\nEl par\xE1metro **\u201CidContext\u201D**  es el identificador creado en la llamada del post anterior.\r\n\r\nInvocando a la url de launchpad se renderizara el front con todos los producto configurados para dicha organizaci\xF3n.\r\n\r\nExisten otros endpoint de car\xE1cter similar es decir tambi\xE9n reciben un contexto pero en algunos casos lo que permiten es enviar el contexto en vez de en un formato JSON en un formato TXT o encriptado bajo alg\xFAn est\xE1ndar definido con la organizaci\xF3n.\r\nPero estos actualmente est\xE1n en de desarrollo o son espec\xEDficos para algunas de nuestras organizaci\xF3n las cuales ya est\xE1n integradas a nosotros.",
        info: "Galicia ofrece una plataforma de API's empresariales para la gesti\xF3n \xE1gil de tesorer\xEDa en sitios web, aplicaciones m\xF3viles, sistemas del cliente y para beneficio del usuario final, permitiendo la gesti\xF3n de pagos y mensajes, consulta de informaci\xF3n y notificaciones en l\xEDnea.",
        method: "GET",
        baseUrl: {
          info: "Esta API es para las transferencias monetarias de cuenta Galicia a cuentas interbancarias o Tarjeta de D\xE9bito",
          test: "https://galicia.test.ar/apisemppr/internalTransfers/V03/createEnterpriseInterna",
          prod: "https://galicia.com.ar/apisemppr/internalTransfers/V03/createEnterpriseInterna"
        },
        auth: [{
          info: "",
          subtitle: "",
          table: ""
        }],
        headers: [{
          info: "",
          subtitle: "",
          table: ""
        }],
        errors: [{
          info: "",
          subtitle: "",
          table: ""
        }],
        response: [
          {
            subtitle: "Success",
            info: "A continuaci\xF3n, un ejemplo de la solicitud y una respuesta exitosa, cuando se ejecuta correctamente el API regresa en el campo tsec del encabezado o header la llave de sesi\xF3n.",
            table: "",
            json: {
              operationDate: "2021-01-21T00:00:00.0-0600",
              id: "0007172005",
              finalBalanceReceiver: {
                availableBalance: {
                  currency: {
                    id: "MXN",
                    code: "MXN",
                    name: "MXN"
                  },
                  amount: 1.04
                }
              },
              entityId: {
                applicationId: "0034961763",
                trackingId: "APIC01002101220034961763"
              },
              sequenceReference: "0000077793"
            }
          },
          {
            subtitle: "Missing Value",
            info: "A continuaci\xF3n, un ejemplo de la solicitud y una respuesta campo faltante.",
            table: "",
            json: {
              operationDate: "2021-01-21T00:00:00.0-0600",
              id: "0007172005",
              finalBalanceReceiver: {
                availableBalance: {
                  currency: {
                    id: "MXN",
                    code: "MXN",
                    name: "MXN"
                  },
                  amount: 1.04
                }
              },
              entityId: {
                applicationId: "0034961763",
                trackingId: "APIC01002101220034961763"
              },
              sequenceReference: "0000077793"
            }
          }
        ],
        request: [
          {
            info: "",
            subtitle: "Request Ejemplo",
            json: {
              operationDate: "2021-01-21",
              concept: [
                "prueba 01 del 02"
              ],
              numericReference: "1234567",
              reference: "pruebaAPIS",
              sender: {
                contract: {
                  product: {
                    checkAccount: {
                      accountNumber: "00743607001102625431"
                    }
                  }
                }
              }
            },
            table: [
              {
                name: "Fecha de operacion",
                key: "operationDate",
                type: "date",
                mandatory: "True",
                desc: "Fecha de operaci\xF2n en formato AAAA-MM-DD"
              },
              {
                name: "Concepto Pago",
                key: "concept",
                type: "string array",
                mandatory: "True",
                desc: "Motivo de pago"
              },
              {
                name: "Referencia num\xE9rica",
                key: "numericReference",
                type: "string",
                mandatory: "True",
                desc: "Referencia numerica formato string sin caracteres alfab\xE9ticos"
              }
            ]
          }
        ]
      },
      {
        name: "API Baja Cuenta",
        mark: "# Integraciones Launchpad.\r\n\r\nEl ecosistema de launchpad expone diferentes endpoint para lograr una integraci\xF3n completa con nuestra aplicaci\xF3n. Desde una perspectiva sencilla la integraci\xF3n siempre recorrer\xE1 los siguientes pasos al menos de momento.\r\n\r\n1-Cliente/Organizaci\xF3n externa invoca al servicio de contexto.\r\n\r\n2-Servicio de Contexto: Seg\xFAn que endpoint se use este servicio retornar una url o un id.\r\n\r\n3-Cliente/Organizaci\xF3n debe decidir qu\xE9 acci\xF3n tomar en base a que endpoint de **service context** uso.\r\n\r\n### Gr\xE1fico para simplificar la idea \r\n\r\n[![img-envio-retorno](/envio-retorno.jpg)]()\r\n\r\nLa flecha en relacionada al \u201CEnvio\u201D  indica que quien se integre deber\xE1 enviarnos un set de datos el cual se reciben en el MundoGS el nombre por el cual se lo conoce es \u201CContexto o Context\u201D.\r\nEste set de datos son un conjunto de datos m\xEDnimos requeridos para poder hacer funcionar los sistemas de GS en este caso se armara un objeto que puede llegar a contener datos como por ejemplo.\r\n\r\n\r\n1-**Datos de la organizaci\xF3n** (Necesarios para que MundoGS sepa qui\xE9n es el que llama y usa el sistema).\r\n\r\n2-**Datos de empleados de la organizaci\xF3n**(en el caso de que la implementaci\xF3n sea en un canal que sea manejado por empleados de la organizaci\xF3n).\r\n\r\n3-**Datos personales del cliente**(Referentes a la persona a la cual se le quiere vender el producto) estos pueden contener m\xE1s o menos informaci\xF3n pero siempre existe un m\xEDnimo.\r\n\r\n\r\nB\xE1sicamente el contexto consta de 3 partes principales.\r\n\r\n1-Bloque **customer** = Contiene informaci\xF3n base del cliente.\r\n\r\n2-Bloque **channel** = Contiene informaci\xF3n de la organizaci\xF3n que env\xEDa el contexto para ubicarla en nuestro sistema.\r\n\r\n3-Bloque  **transaction** = Contiene informaci\xF3n que se usa en las integraciones contra el CRM engage interno de Galicia Seguros.\r\n\r\nDepende de a que endpoint del Servicio de contexto **(Context-Service)** se invoque la repuesta puede cambiar para dar la posibilidad al invocador (Organizaci\xF3n integradora) de elegir que hacer en cada caso.\r\n\r\nPor ejemplo dentro de **context-service** existe el endpoint \r\n[![img-envio-retorno](/post-launchpad.jpg)]()\r\n \r\nEste endpoint crea un contexto y retorna su ID.\r\n\r\n### Ejemplo response caso 1\r\n\r\n\r\n[![img-envio-retorno](/objeto-endpoint.jpg)]()\r\n\r\n\r\n\r\nQuedara por cuenta del cliente el armar la url de launchpad con el id de contexto\r\n\r\n### [Hace click para ver un ejemplo](https://dev.integradordeseguros.com/launchpad/?idContext=1bbd7777-83b8-4933-6698-08db2ad53557)\r\n\r\n\r\nEl par\xE1metro **\u201CidContext\u201D**  es el identificador creado en la llamada del post anterior.\r\n\r\nInvocando a la url de launchpad se renderizara el front con todos los producto configurados para dicha organizaci\xF3n.\r\n\r\nExisten otros endpoint de car\xE1cter similar es decir tambi\xE9n reciben un contexto pero en algunos casos lo que permiten es enviar el contexto en vez de en un formato JSON en un formato TXT o encriptado bajo alg\xFAn est\xE1ndar definido con la organizaci\xF3n.\r\nPero estos actualmente est\xE1n en de desarrollo o son espec\xEDficos para algunas de nuestras organizaci\xF3n las cuales ya est\xE1n integradas a nosotros.",
        info: "Galicia ofrece una plataforma de API's empresariales para la gesti\xF3n \xE1gil de tesorer\xEDa en sitios web, aplicaciones m\xF3viles, sistemas del cliente y para beneficio del usuario final, permitiendo la gesti\xF3n de pagos y mensajes, consulta de informaci\xF3n y notificaciones en l\xEDnea.",
        method: "DELETE",
        baseUrl: {
          info: "Esta API es para las transferencias monetarias de cuenta Galicia a cuentas interbancarias o Tarjeta de D\xE9bito",
          test: "https://galicia.test.ar/apisemppr/internalTransfers/V03/createEnterpriseInterna",
          prod: "https://galicia.com.ar/apisemppr/internalTransfers/V03/createEnterpriseInterna"
        },
        auth: [{
          info: "",
          subtitle: "",
          table: ""
        }],
        headers: [{
          info: "",
          subtitle: "",
          table: ""
        }],
        errors: [{
          info: "",
          subtitle: "",
          table: ""
        }],
        response: [
          {
            subtitle: "Success",
            info: "A continuaci\xF3n, un ejemplo de la solicitud y una respuesta exitosa, cuando se ejecuta correctamente el API regresa en el campo tsec del encabezado o header la llave de sesi\xF3n.",
            table: "",
            json: {
              operationDate: "2021-01-21T00:00:00.0-0600",
              id: "0007172005",
              finalBalanceReceiver: {
                availableBalance: {
                  currency: {
                    id: "MXN",
                    code: "MXN",
                    name: "MXN"
                  },
                  amount: 1.04
                }
              },
              entityId: {
                applicationId: "0034961763",
                trackingId: "APIC01002101220034961763"
              },
              sequenceReference: "0000077793"
            }
          },
          {
            subtitle: "Missing Value",
            info: "A continuaci\xF3n, un ejemplo de la solicitud y una respuesta campo faltante.",
            table: "",
            json: {
              operationDate: "2021-01-21T00:00:00.0-0600",
              id: "0007172005",
              finalBalanceReceiver: {
                availableBalance: {
                  currency: {
                    id: "MXN",
                    code: "MXN",
                    name: "MXN"
                  },
                  amount: 1.04
                }
              },
              entityId: {
                applicationId: "0034961763",
                trackingId: "APIC01002101220034961763"
              },
              sequenceReference: "0000077793"
            }
          }
        ],
        request: [
          {
            info: "",
            subtitle: "Request Ejemplo",
            json: {
              operationDate: "2021-01-21",
              concept: [
                "prueba 01 del 02"
              ],
              numericReference: "1234567",
              reference: "pruebaAPIS",
              sender: {
                contract: {
                  product: {
                    checkAccount: {
                      accountNumber: "00743607001102625431"
                    }
                  }
                }
              }
            },
            table: [
              {
                name: "Fecha de operacion",
                key: "operationDate",
                type: "date",
                mandatory: "True",
                desc: "Fecha de operaci\xF2n en formato AAAA-MM-DD"
              },
              {
                name: "Concepto Pago",
                key: "concept",
                type: "string array",
                mandatory: "True",
                desc: "Motivo de pago"
              },
              {
                name: "Referencia num\xE9rica",
                key: "numericReference",
                type: "string",
                mandatory: "True",
                desc: "Referencia numerica formato string sin caracteres alfab\xE9ticos"
              }
            ]
          }
        ]
      }
    ]
  }
];

export {
  apis_default
};
//# sourceMappingURL=/build/_shared/chunk-7J3JD5O5.js.map
