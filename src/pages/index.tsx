// C:\jorge\jj-distribuciones\src\pages\index.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image'; // Import the Image component from Next.js

// Importaciones de tus componentes Shadcn UI
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Button } from "@/button"; // Assuming this is correct path for Button
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Importaciones de iconos de Lucide React
import { Search, ArrowRight, ChevronDown, ChevronUp, Snowflake, Phone } from "lucide-react";

// --- Local image paths ---
// Asegúrate de que estas rutas coincidan con los nombres de tus archivos en la carpeta public/images/
const imagenesProductos = {
  lomoCerdo: '/images/lomo-cerdo.jpg',
  papasFrancesas: '/images/papas-francesas.jpg',
  piernaPollo: '/images/pierna-pollo.jpg',
  chuletaCerdo: '/images/chuleta-cerdo.jpg',
  fileteRes: '/images/filete-res.jpg',
  piernaCerdo: '/images/pierna-cerdo.jpg',
  pechugaPollo: '/images/pechuga-pollo.jpg',
  camarones: '/images/camarones.jpg',
  salmon: '/images/salmon.jpg',
  chuletonCerdo: '/images/chuleton-cerdo.jpg',
  // --- Nuevas imágenes para los productos solicitados ---
  bocachicoImportado: '/images/bocachico-importado.jpg',
  bagreRioPostas: '/images/bagre-rio-postas.jpg',
  cachamaEntera: '/images/cachama-entera.jpg',
  basaPostas: '/images/basa-postas.jpg',
  basaEntera: '/images/basa-entera.jpg',
  fileteBasa: '/images/filete-basa.jpg',
  truchaMariposa: '/images/trucha-mariposa.jpg',
  pechugaEntera: '/images/pechuga-entera.jpg'
};

// --- Complete product list (with single 'imagen' property) ---
const productos = [
  {
    id: 1,
    nombre: "Lomo de Cerdo IQF",
    categoria: "Carne de Cerdo",
    descripcion: "Corte premium ultracongelado mediante Individual Quick Freezing (IQF) para preservar textura y calidad. Presentación en cajas de 10kg.",
    imagen: imagenesProductos.lomoCerdo,
    congelado: true
  },
  {
    id: 2,
    nombre: "Papa a la Francesa Premium 2.5kg",
    categoria: "Congelados",
    descripcion: "Selección de papas a la francesa estilo gourmet, precocidas y ultracongeladas IQF. Estándar restaurante.",
    imagen: imagenesProductos.papasFrancesas,
    congelado: true
  },
  {
    id: 3,
    nombre: "Pierna de Pollo IQF",
    categoria: "Pollo",
    descripcion: "Piernas de pollo frescas ultracongeladas individualmente (IQF) en cajas de 15kg. Sin hormonas.",
    imagen: imagenesProductos.piernaPollo,
    congelado: true
  },
  {
    id: 4,
    nombre: "Chuleta de Cerdo IQF",
    categoria: "Carne de Cerdo",
    descripcion: "Cortes premium ultracongelados individualmente, empaque al vacío. Cajas de 12 unidades.",
    imagen: imagenesProductos.chuletaCerdo,
    congelado: true
  },
  
  {
    id: 6,
    nombre: "Pierna de Cerdo con Piel IQF",
    categoria: "Carne de Cerdo",
    descripcion: "Perniles completos ultracongelados IQF. Ideal para hornear profesionalmente.",
    imagen: imagenesProductos.piernaCerdo,
    congelado: true
  },
  {
    id: 7,
    nombre: "Pechuga de Pollo IQF",
    categoria: "Pollo",
    descripcion: "Pechugas de pollo deshuesadas ultracongeladas individualmente. Cajas de 10kg.",
    imagen: imagenesProductos.pechugaPollo,
    congelado: true
  },
  {
    id: 8,
    nombre: "Camarones U/15 IQF",
    categoria: "Mariscos",
    descripcion: "Camarones crudos ultracongelados IQF, tamaño U/15 (15 unidades por libra). Origen sostenible.",
    imagen: imagenesProductos.camarones,
    congelado: true
  },
  {
    id: 9,
    nombre: "Salmón Noruego Premium",
    categoria: "Pescados",
    descripcion: "Filetes de salmón Noruego ultracongelados al vacío. Corte sashimi grado.",
    imagen: imagenesProductos.salmon,
    congelado: true
  },
  {
    id: 10,
    nombre: "Chuleton de Cerdo Dry Aged",
    categoria: "Carne de Cerdo",
    descripcion: "Chuletones premium madurados y ultracongelados. Grosor 3cm. Empaque al vacío.",
    imagen: imagenesProductos.chuletonCerdo,
    congelado: true
  },
  // --- ¡NUEVOS PRODUCTOS AGREGADOS AQUÍ ABAJO! ---
  {
    id: 11,
    nombre: "Bocachico Importado Entero",
    categoria: "Pescados",
    descripcion: "Bocachico importado de selección premium, ultracongelado entero para mantener su frescura y sabor auténtico. Ideal para una preparación tradicional con la máxima calidad y un precio competitivo para tu negocio.",
    imagen: imagenesProductos.bocachicoImportado,
    congelado: true
  },
  {
    id: 12,
    nombre: "Bagre de Río en Postas IQF",
    categoria: "Pescados",
    descripcion: "Exquisito bagre de río en postas, congelado individualmente (IQF) para garantizar una textura y sabor inigualables. Ofrece la conveniencia de porciones perfectas y una calidad superior a un precio accesible para restaurantes.",
    imagen: imagenesProductos.bagreRioPostas,
    congelado: true
  },
  {
    id: 13,
    nombre: "Cachama Entera Premium",
    categoria: "Pescados",
    descripcion: "Cachama entera de primera calidad, cuidadosamente seleccionada y ultracongelada para preservar todas sus propiedades. Un producto versátil y económico que no compromete la excelencia en tu cocina.",
    imagen: imagenesProductos.cachamaEntera,
    congelado: true
  },
  {
    id: 14,
    nombre: "Basa en Postas IQF",
    categoria: "Pescados",
    descripcion: "Postas de basa de alto rendimiento, congeladas con tecnología IQF para asegurar su frescura y facilitar su porcionado. Es una opción de pescado blanco de excelente calidad y precio, perfecta para una variedad de platos.",
    imagen: imagenesProductos.basaPostas,
    congelado: true
  },
  {
    id: 15,
    nombre: "Basa Entera Congelada",
    categoria: "Pescados",
    descripcion: "Pescado basa entero, ultracongelado para conservar su integridad y frescura. Una alternativa económica y de gran volumen que mantiene nuestros estándares de calidad para satisfacer las necesidades de tu establecimiento.",
    imagen: imagenesProductos.basaEntera,
    congelado: true
  },
  {
    id: 16,
    nombre: "Filete de Basa Premium",
    categoria: "Pescados",
    descripcion: "Suave y magro filete de basa, sin piel ni espinas, ultracongelado individualmente. Ofrece una conveniencia excepcional y una relación calidad-precio inmejorable, ideal para preparaciones rápidas y saludables.",
    imagen: imagenesProductos.fileteBasa,
    congelado: true
  },
  {
    id: 17,
    nombre: "Trucha Mariposa Fresca Congelada",
    categoria: "Pescados",
    descripcion: "Trucha fresca en corte mariposa, ultracongelada para preservar su delicado sabor y textura. Un producto gourmet de alta calidad que se adapta a diversos métodos de cocción y ofrece un valor excepcional.",
    imagen: imagenesProductos.truchaMariposa,
    congelado: true
  },
  {
    id: 18,
    nombre: "Pechuga de Pollo Entera IQF",
    categoria: "Pollo",
    descripcion: "Pechugas de pollo enteras con hueso y piel, congeladas individualmente (IQF). Perfectas para asar o guisar, garantizando jugosidad y un sabor robusto. Una opción de gran valor por su calidad y versatilidad.",
    imagen: imagenesProductos.pechugaEntera,
    congelado: true
  }
];

export default function JJDistribuciones() {
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');
  const [productoExpandido, setProductoExpandido] = useState<number | null>(null);
  const numeroWhatsapp = "3017685501"; // Reemplaza con tu número de WhatsApp

  const categorias = ['Todos', ...new Set(productos.map(p => p.categoria))];

  const productosFiltrados = productos.filter(producto => {
    const coincideBusqueda = producto.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
                             producto.descripcion.toLowerCase().includes(terminoBusqueda.toLowerCase());
    const coincideCategoria = categoriaSeleccionada === 'Todos' || producto.categoria === categoriaSeleccionada;
    return coincideBusqueda && coincideCategoria;
  });

  const contactarPorWhatsApp = (productoNombre?: string) => {
    let mensaje = "Hola, estoy interesado en ";
    mensaje += productoNombre ? `el producto: ${productoNombre}` : "sus productos congelados";
    mensaje += "\n\nPor favor, envíame información sobre disponibilidad y condiciones de compra.";

    // Abre el enlace de WhatsApp en una nueva pestaña
    window.open(`https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensaje)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 sm:p-8">
      {/* --- Encabezado y barra de búsqueda --- */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-4">
          JJ Distribuciones
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-6">
          Calidad Premium en Productos Congelados para tu Negocio.
        </p>
        {/* --- Nuevo Eslogan Agregado Aquí --- */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-md sm:text-lg font-medium text-green-700 dark:text-green-400 mb-6"
        >
          **¿Buscas la mejor relación calidad-precio en el mercado? ¡Contáctanos para competir con los mejores precios!**
        </motion.p>
        {/* --- Fin Nuevo Eslogan --- */}

        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
          <div className="relative flex-grow">
            <Input
              type="text"
              placeholder="Buscar productos..."
              className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
              value={terminoBusqueda}
              onChange={(e) => setTerminoBusqueda(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
          </div>

          <Select onValueChange={setCategoriaSeleccionada} defaultValue="Todos">
            <SelectTrigger className="w-full sm:w-[180px] rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500">
              <SelectValue placeholder="Categoría" />
            </SelectTrigger>
            <SelectContent>
              {categorias.map(categoria => (
                <SelectItem key={categoria} value={categoria}>
                  {categoria}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </motion.header>

      {/* --- Grid de Productos --- */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <AnimatePresence>
          {productosFiltrados.length > 0 ? (
            productosFiltrados.map(producto => (
              <motion.div
                key={producto.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
                  <CardHeader className="relative p-0">
                    {producto.congelado && (
                      <div className="absolute top-2 left-2 bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs font-bold z-10 flex items-center dark:bg-blue-900 dark:text-blue-200">
                        <Snowflake className="text-blue-600 mr-1 h-3 w-3 dark:text-blue-400" />
                        CONGELADO
                      </div>
                    )}
                    {producto.imagen ? (
                      // Contenedor para la imagen de Next.js
                      <div
                        className="relative w-full h-48 cursor-pointer"
                        onClick={() => setProductoExpandido(productoExpandido === producto.id ? null : producto.id)}
                      >
                        <Image // Usando el componente Image de Next.js
                          src={producto.imagen}
                          alt={producto.nombre}
                          fill // La imagen llenará el div padre
                          className="object-cover rounded-t-lg"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={producto.id <= 3} // Carga prioritaria para las primeras imágenes
                        />
                        <motion.div
                          className="absolute inset-0"
                          whileHover={{ scale: 1.03 }}
                          style={{ pointerEvents: 'none' }} // Para que la animación no interfiera con el click
                        />
                      </div>
                    ) : (
                      <div
                        className="bg-gray-200 dark:bg-gray-700 border-2 border-dashed rounded-t-xl w-full h-48 flex items-center justify-center text-gray-500 dark:text-gray-400 cursor-pointer"
                        onClick={() => setProductoExpandido(productoExpandido === producto.id ? null : producto.id)}
                      >
                        <Snowflake className="text-blue-400 h-12 w-12" />
                        <span className="ml-2">Sin imagen</span>
                      </div>
                    )}
                  </CardHeader>

                  <CardContent className="p-4 flex-grow">
                    <h3 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-300">
                      {producto.nombre}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Categoría: {producto.categoria}
                    </p>
                    <AnimatePresence>
                      {productoExpandido === producto.id && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-gray-800 dark:text-gray-200 text-sm mt-2"
                        >
                          {producto.descripcion}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </CardContent>

                  <CardFooter className="p-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setProductoExpandido(productoExpandido === producto.id ? null : producto.id)}
                      className="flex items-center text-blue-600 dark:text-blue-400 border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900"
                    >
                      {productoExpandido === producto.id ? (
                        <ChevronUp className="h-4 w-4 mr-1" />
                      ) : (
                        <ChevronDown className="h-4 w-4 mr-1" />
                      )}
                      {productoExpandido === producto.id ? 'Ver menos' : 'Ver más'}
                    </Button>
                    <Button
                      className="bg-green-500 hover:bg-green-600 text-white dark:bg-green-600 dark:hover:bg-green-700 flex items-center"
                      onClick={() => contactarPorWhatsApp(producto.nombre)}
                    >
                      <Phone className="h-4 w-4 mr-1" />
                      Contactar
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center text-gray-600 dark:text-gray-400 text-lg mt-8"
            >
              No se encontraron productos que coincidan con tu búsqueda.
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* --- Botón de Contacto General --- */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full shadow-lg flex items-center text-lg"
          onClick={() => contactarPorWhatsApp()} // Sin nombre de producto para consulta general
        >
          <Phone className="h-6 w-6 mr-2" />
          Contactar por WhatsApp
        </Button>
      </motion.div>
    </div>
  );
}