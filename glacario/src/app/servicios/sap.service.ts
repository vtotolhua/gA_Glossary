import {Injectable} from '@angular/core';

@Injectable()
export class SapService {


    private sap:Sapi[] = [ 

        {
            jde:"Tool kit",
            saphana:"ABAP",
            descripcion: "ABAP (Advanced Business Application Programming) es un lenguaje de cuarta generación, propiedad de SAP, que se utiliza para programar la mayoría de sus productos (R/3, mySAP Business suite...). Utiliza sentencias de Open SQL para conectarse con prácticamente cualquier base de datos. Cuenta con miles de funciones para el manejo de archivos, bases de datos, fechas, etc. Permite conexiones RFC (Remote Function Calls) para conectar a los sistemas SAP con cualquier otro sistema o lenguaje de programación.",
            ejemplo: "Programa de carga de datos maestros Programa de carga de inventario inicial de materias primas"
        },
	{
            jde:"OVR (One View Report)",
            saphana:"SAP:ALV S/4 HANA: Fiori",
            descripcion: "ALV significa ABAP List Viewer. ALV nos brinda un formato de Lista estándar y una interfaz de usuario para todos nuestros informes ABAP. ALV es creado por un conjunto de módulos de funciones estándar proporcionados por SAP",
            ejemplo: "Listado de documentos de material-MB51 Documentos de compras por proveedor ME2N"
        },
        {
            jde:"Business Functions (NER)",
            saphana:"BAPI-BADI",
            descripcion: "Son funciones programadas que desarrollan una operación específica y pueden ser llamadas desde otro programa. Vienen desarrolladas de fábrica y son estándares.",
            ejemplo: "BAPI_REQUISITION_CREATE Create purchase requisition BAPI_REQUISITION_CHANGE Change purchase requisition"
        },
        {
            jde:"CNC (Configurable Network Computing)",
            saphana:"Basis",
            descripcion: "Consultor técnico encargado de la instalación del sistema SAP, monitoreo y seguimiento al performance de la máquina.",
            ejemplo:""
        },
        {
            jde:"Suite",
            saphana:"SAP:Componente S/4 HANA: Line of business",
            descripcion: "Contiene los escenarios variados y complejos de los procesos de negocio de cada sociedad dentro de SAP, tal como el control y manejo de las operaciones financieras.",
            ejemplo: "MM- se utiliza para un proceso de adquisición de extremo a extremo FI- Se utiliza para la gestión contable financiera de una o varias sociedades"
        },
        {
            jde:"Almacén (Branch/Plant)",
            saphana:"Centro",
            descripcion: "Es una unidad de organización donde se mantienen, gestionan y/o producen materiales dentro de una empresa. MM",
            ejemplo: "CDIS- DISTRIBUIDORA-MEXICO 11000 México Centro Distribución. CIM1- Planta productora México"
        },
        {
            jde:"Unidad de Negocio (Business Unit)",
            saphana:"Centro de Costos",
            descripcion: "Unidad organizativa dentro de una sociedad CO que representa un emplazamiento claramente determinado en donde se produce el costo. Control de Gastos",
            ejemplo: "9200000    GZO1 SM04 W    Planta Compuestos COM COMPUESTOS 9203010    GZO1 SM04 F    Planta Compuestos COM GERENCIA 9203011    GZO1 SM04 F    Planta Compuestos COM EXTRUSION"
        },
        {
            jde:"Unidad de negocio (Business Unit)",
            saphana:"Centro de beneficios",
            descripcion:"Unidad organizativa de finanzas que refleja una estructura de la empresa orientada hacia la gestión con el propósito de control interno",
            ejemplo: "2221310 Multiproducto 2221311 Gastos de Mercadotecnia  2221312 Gastos de Administración  2321313 Gastos Corporativos  2321314 Gastos de Capital Humano  2321315 Gastos de Investigación y Desarrollo  2421316 Gastos de Distribución"
        },
        {
            jde:"Acceso rápido (Fast Path)",
            saphana:"Comando campo",
            descripcion: "En el campo de comando, ingrese / n seguido de un código de transacción. Esto finalizará la tarea actual. Si no desea finalizar su tarea actual, puede crear una nueva sesión.",
            ejemplo: "/NME23N -Visualizar pedidos de compra. /NMB51- Visualizar listado de documentos. /NMMBE- Visualizar stock por material."
        },
        {
            jde:"Cuenta contable",
            saphana:"Cuenta contable",
            descripcion:"Término que se refiere a las cuentas de mayor en que la contabilidad de la Empresa registra cada uno de sus movimientos",
            ejemplo: "45021 ZNT Acciones 46001 ZNT Otros préstamos  46021 ZNT Otros préstamos, tmpo.restante  46031 ZNT TR-LO Amo acumulada préstamos 50001  ZNT  Aportaciones de capital."
        },
        {
            jde:"Datos Maestros",
            saphana:"Dato Maestro",
            descripcion: "Información que representa en el sistema las entidades básicas de una empresa, cuentas mayores, ejemplo clientes, acreedores, materiales, proveedores, elementos pep, grafos, puestos de trabajo, lotes de inspección, ubicaciones técnicas, equipos, valores estadísticos etc. Conjunto de datos almacenados sistemáticamente.",
            ejemplo: "000000000000100066 POLIETILENO POLVO AZUL AD TEST 000000000000100074 POLIETILENO POLVO AZUL AD BRASIL y000000000000100084 PE PRUEBA APO"
        },
        {
            jde:"Maestro de clientes y Libro de direcciones (Address Book)",
            saphana:"SAP: Datos Maestros de Clientes S/4 HANA: Business partner",
            descripcion: "Es un repositorio central de los datos de los Clientes de la empresa. SD",
            ejemplo: "0001000092 MX VICENTE CHAVES REYES 0001000273 MX  NUEVA WALMART DE MEXICO 0001000343 MX VALVULAS PLASTICAS SA DE CV 0001000368 MX COPLES SA DE CV 0001000407 MX LUIS GIBRAN ROJANO"
        },
        {
            jde:"Item/Recurso",
            saphana:"Datos Maestros de Materiales",
            descripcion: "Es un repositorio central de los datos de los materiales que tiene una empresa. MM",
            ejemplo: "000000000000100066 POLIETILENO POLVO AZUL AD TEST 000000000000100074 POLIETILENO POLVO AZUL AD BRASIL 000000000000100084 PE PRUEBA APO"
        },
        {
            jde:"Maestro de proveedores y Libro de direcciones (Address Book)",
            saphana:"Business Partner SAP: Datos Maestros de Proveedores Business Partner",
            descripcion: "Es un repositorio central de los datos de los Proveedores (Acreedores) de la empresa. MM - SD. En los maestros de proveedores existe el concepto de vistas, parecida a las solapas de JDE pero que pueden desactivarse en función del usuario responsable de los datos de cada vista.",
            ejemplo: "0000170007 MX    DISTRIBUIDORA DEL HOGAR SA DE CV  0000170008 MX    SERVICIOS ROTOMONTAJES SA DE CV  0000170009 MX    ROTOMONTAJES COMERCIALIZADORA SA DE CV  0000170010 MX    ROTOMONTAJES BIENES RAICES SA DE CV"
        },
        {
            jde:"Compañía",
            saphana:"Estructura Organizacional",
            descripcion: "Representación que se hace en SAP de la forma como se estructura una empresa u organización.",
            ejemplo:""
        },
        {
            jde:"Interfaces",
            saphana:"Interfaces",
            descripcion: "Conexión física y funcional entre dos aparatos o sistemas independientes. Permite la circulación correcta y sencilla de información entre varias aplicaciones.",
            ejemplo: "Z_PROGRMA DE ENVO DE ORDENS DE PRODUCCION A LEGADO."
        },
        {
            jde:"Job",
            saphana:"Job",
            descripcion:"Proceso que se programa en el sistema para que se ejecute.",
            ejemplo: "BI_WRITE_PROT_TO_APPLLOG C.JMORA  terminado 28.06.2020 18:12:47"
        },
        {
            jde:"Ambientes (DV, PY, QA, PD)",
            saphana:"Land Scape",
            descripcion: "Representación de la forma como se organizan y disponen los distintos componentes de la infraestructura tecnológica de SAP. Esquema landscape (Mandantes, transportes y órdenes)",
            ejemplo:""
        },
{
            jde:"Legacy",
            saphana:"Legacy",
            descripcion: "Cualquier sistema anterior a SAP",
            ejemplo:"Cualquier sistema externo a SAP"
        },
        {
            jde:"Aprobaciones",
            saphana:"Liberación de Contrato Marco",
            descripcion: "Es el procedimiento de autorización para continuar con el proceso de compras. MM",
            ejemplo: "AM 2 Z_PEDIDO2 Contraro Marco Mto.  B1 2 Z_PEDIDO2 Contrato Marco   B2 2 Z_PEDIDO2 Contrato Marco  B3 2 Z_PEDIDO2	Contrato Marco."
        },
        {
            jde:"Aprobaciones",
            saphana:"Liberación de Órdenes de Compra",
            descripcion: "Es el procedimiento de autorización para continuar con el proceso de compras. MM",
            ejemplo: "AM 2 Z_PEDIDO2 Pedidos Compra Mto.  B1 2 Z_PEDIDO2 Pedidos de Compra  B2 2 Z_PEDIDO2 Pedidos de Compra  B3 2 Z_PEDIDO2 Pedidos de Compra"
        },
        {
            jde:"Ambiente",
            saphana:"Mandante o Client",
            descripcion: "El mandante es el nivel jerárquico más alto en el Sistema SAP. Las especificaciones que se realicen o los datos que se introduzcan en este nivel son válidos para todas las sociedades y para todas las otras estructuras organizativas.",
            ejemplo: "100- Mandante de ambiente de desarrollo 500- Mandante de ambiente de calidad"
        },
        {
            jde:"División interna de departamento de compras",
            saphana:"Organización de Compras",
            descripcion: "Una unidad de organización es responsable del aprovisionamiento de materiales y servicios para uno o más centros y de la negociación de precios y condiciones de compras con el proveedor. La organización de compras asume responsabilidad legal para todas las operaciones de compras externas. MM",
            ejemplo: "IM01 OC importacion IM02 OC imp MP IM03 OC imp Compuesto IM04 OC imp PT IM08 OC imp Servicios"
        },
        {
            jde:"Organización de ventas",
            saphana:"Organización de ventas",
            descripcion: "Una unidad de organización es responsable de la venta de productos y servicios y de la negociación de precios y condiciones de venta con los clientes. SD",
            ejemplo: "SM02	02	LA NACIONAL SA DE CV	Tradicional"
        },
        {
            jde:"Electronic System Update (ESU) Software Action Request (SAR)",
            saphana:"Nota",
            descripcion: "Aplicación de una corrección generada por SAP en su casa matriz que corrige anomalías o errores en el sistema SAP estándar. SUPPORT PACKARD",
            ejemplo: "368460 - Stock data transfer with handling units - general Version15 Type SAP Note Language English Master Language German Priority Recommendations / Additional Info Category Help for error analysis Release Status Released for Customer Released On 05.05.2015 Component LO-HU-BF ( Basic Functions ) Please find the original document at https://launchpad.support"
        },
        {
            jde:"Perfil/Rol",
            saphana:"Perfil",
            descripcion: "Objeto que contiene las autorizaciones que los usuarios necesitan para acceder a las transacciones, reportes y aplicaciones. Se puede asignar un perfil a un número ilimitado de usuarios",
            ejemplo: "SAP_ALL	@2U\QPerfil compuesto@	Todas las autorizaciones en el Sistema SAP"
        },
        {
            jde:"Perfil/Rol de seguridad",
            saphana:"Perfil de Seguridad",
            descripcion: "Elemento que comprende el conjunto de transacciones y datos a los que tienen acceso un usuario o un grupo de usuarios",
            ejemplo:""
        },
        {
            jde:"Universal Batch Entry (UBE)",
            saphana:"Fiori SAP: Reporte",
            descripcion: "Agrupamiento de datos, layouts – querys (organización de columna de datos en pantalla), reportes ALV (reporte exportable y flexible para gestionar datos).",
            ejemplo: "MB51_Listado de documentos de material S_ALR_87012277 Saldos de cuentas de mayor"
        },
        {
            jde:"JDE",
            saphana:"SAP: SAP GUI S/4 HANA: SAP HANA",
            descripcion: "Interfaz gráfica de usuario",
            ejemplo:""
        },
        {
            jde:"JDE Logon",
            saphana:"SAP: SAP Logon S/4 HANA: SAP HANA",
            descripcion: "Icono para ingresar a SAP",
            ejemplo:""
        },
        {
            jde:"Compañía",
            saphana:"Sociedad CO",
            descripcion: "Es el nivel superior de informes de la contabilidad de centros de costo, cuya información se podrá compartir y visualizar en el módulo de Controlling.",
            ejemplo:""
        },
        {
            jde:"Compañía",
            saphana:"Sociedad FI",
            descripcion: "Contabilidad financiera (FI) La unidad organizativa más pequeña de la contabilidad financiera para la que se puede elaborar un conjunto completo de cuentas independientes para fines de informes externos. Esto incluye el registro de todas las transacciones relevantes y la generación de todos los documentos de respaldo necesarios para los estados financieros.",
            ejemplo: "SC01 Tanques Nacionales de CR Costa Rica CRC SC09 Tinacos y Tanques de PR   Puerto Rico PR  SC06 Tinacos y Envases de HN   Honduras HNL"
        },
        {
            jde:"Reporte",
            saphana:"Smartform",
            descripcion: "Son formularios de SAP que se utilizan para crear documentos que necesitan ser impresos, visualizados por pantalla o enviados por correo electrónico.",
            ejemplo: "Formato de factura de ventas Formato de lista de picking Formato de orden de compra"
        },
        {
            jde:"Módulo",
            saphana:"Sub-Componente",
            descripcion: "Forma parte de un componente y dentro del cual se ejecutan y controlan procesos de negocio especifico tales como pago a proveedores, costeo de productos, facturación, etc.",
            ejemplo: "FI-GL - Contabilidad general FI-AP - Cuentas por pagar FI-AR - Cuentas por cobrar MM-PUR - Compras MM-IM - Gestión del Inventario e Inventario MM-IV - Verificación de facturas de logística"
        },
        {
            jde:"Tabla",
            saphana:"Columnas y filas SAP: Tabla-Campo",
            descripcion: "Espacio del mandante o ambiente que contiene datos determinados. Por ejemplo, clientes, materiales, proyectos, ordenes, centros de costo. TABLA – CAMPO (Ruta de acceso a datos)",
            ejemplo: "Tabla MARA- Datos generales materia Campo- MATNR- Material"
        },
        {
            jde:"Menú / Objeto Versión",
            saphana:"Fiori Transacción SAP: Transacción",
            descripcion: "Una transacción en terminología SAP es la ejecución de un programa. La forma normal de ejecutar código ABAP en el sistema SAP es ingresando un código de transacción.",
            ejemplo: "VA01 es el código de transacción para Crear Órdenes de Venta"
        },
        {
            jde:"Unidad de Negocio (Business Unit)",
            saphana:"Unidad Organizativa",
            descripcion: "Diferentes áreas de la empresa en la estructura organizativa",
            ejemplo:""
        },
        {
            jde:"Usuario ID",
            saphana:"Usuario ID",
            descripcion:"Identificador único",
            ejemplo: "CJMORA Consultor SAP -gA C.VCISNEROS Consultor WM"
        },
        {
            jde:"Rol",
            saphana:"Rol",
            descripcion:"Los roles también contienen las autorizaciones que los usuarios pueden usar para acceder a las transacciones, informes, aplicaciones basadas en la web, etc., que se encuentran en el menú.",
            ejemplo:""
        },
        {
            jde:"Workflow",
            saphana:"Workflow",
            descripcion:"Automatización de la secuencia de transacciones que se llevan a cabo dentro de un proceso.",
            ejemplo:""
        }
];

    constructor(){
        console.log("Servicio SAP listo para usarse");
    }

    getSap():Sapi[]{
        return this.sap;
    }
}
    export interface Sapi{
        jde: string;
        saphana: string; 
        descripcion: string;
        ejemplo: string;
    };