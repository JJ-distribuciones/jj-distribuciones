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
  piernaCerdo: '/images/pierna-cerdo.jpg',
  pechugaPollo: '/images/pechuga-pollo.jpg',
  camarones: '/images/camarones.jpg',
  salmon: '/images/salmon.jpg',
  chuletonCerdo: '/images/chuleton-cerdo.jpg',
  bocachicoImportado: '/images/bocachico-importado.jpg',
  bagreRioPostas: '/images/bagre-rio-postas.jpg',
  cachamaEntera: '/images/cachama-entera.jpg',
  basaPostas: '/images/basa-postas.jpg',
  basaEntera: '/images/basa-entera.jpg',
  fileteBasa: '/images/filete-basa.jpg',
  truchaMariposa: '/images/trucha-mariposa.jpg',
  pechugaEntera: '/images/pechuga-entera.jpg',
  tilapiaRoja: '/images/tilapia-roja.jpg',
  papaGoldenPhoenix: '/images/papa-golden-phoenix.jpg',

  // --- IMÁGENES POLLO BLANCO ---
  polloBlancoEntero: '/images/pollo-blanco-entero.jpg',
  pechugaBlancoConPiel: '/images/pechuga-blanco-con-piel.jpg',
  pechugaBlancoSinPiel: '/images/pechuga-blanco-sin-piel.jpg',
  piernaPernilBlanco: '/images/pierna-pernil-blanco.jpg',
  piernaPernilBlancoSinPiel: '/images/pierna-pernil-blanco-sin-piel.jpg',
  piernaBlancoSinPiel: '/images/pierna-blanco-sin-piel.jpg',
  piernaBlanco: '/images/pierna-blanco.jpg',
  pernilMixtoBlanco: '/images/pernil-mixto-blanco.jpg',
  alaMixtaBlanco: '/images/ala-mixta-blanco.jpg',
  alaBlanco: '/images/ala-blanco.jpg',
  colombinaBlanco: '/images/colombina-blanco.jpg',
  codosBlanco: '/images/codos-blanco.jpg',
  pernilBlancoSinPielContramuslo: '/images/pernil-blanco-sin-piel-contramuslo.jpg',
  churrascoPolloBlanco: '/images/churrasco-pollo-blanco.jpg',

  // --- IMÁGENES POLLO CAMPESINO ---
  polloCampesinoEntero: '/images/pollo-campesino-entero.jpg',
  pechugaCampesinoConPiel: '/images/pechuga-campesino-con-piel.jpg',
  piernaPernilCampesinoMixta: '/images/pierna-pernil-campesino-mixta.jpg',
  piernaCampesino: '/images/pierna-campesino.jpg',
  pernilCampesinoContramuslo: '/images/pernil-campesino-contramuslo.jpg',
  alaMixtaCampesino: '/images/ala-mixta-campesino.jpg',
  alaCampesino: '/images/ala-campesino.jpg',

  // --- IMÁGENES SALSAMENTARIA ---
  chorizoAhumado300: '/images/chorizo-ahumado-300.jpg',
  chorizoPolloPicante300: '/images/chorizo-pollo-picante-300.jpg',
  chorizoParrillero250: '/images/chorizo-parrillero-250.jpg',
  chorizoParrillero500: '/images/chorizo-parrillero-500.jpg',
  jamonPolloAhumo250: '/images/jamon-pollo-ahumo-250.jpg',
  jamonFamiliar500: '/images/jamon-familiar-500.jpg',
  jamon250: '/images/jamon-250.jpg',
  molipolloCongelado500: '/images/molipollo-congelado-500.jpg',
  salchichaAhumada500: '/images/salchicha-ahumada-500.jpg',
  salchichaAhumada1000: '/images/salchicha-ahumada-1000.jpg',
  salchichonSeleccionado500: '/images/salchichon-seleccionado-500.jpg',
  salchichaPremium500: '/images/salchicha-premium-500.jpg',
};

// --- Complete product list ---
const productos = [
  {
    id: 1,
    nombre: "Lomo de Cerdo IQF",
    categoria: "Carne de Cerdo",
    descripcion: "Un corte premium de lomo de cerdo, ultracongelado con tecnología Individual Quick Freezing (IQF) para preservar su frescura, jugosidad y textura. Presentación en cajas de 10kg, ideal para la alta cocina y el control de porciones.",
    imagen: imagenesProductos.lomoCerdo,
    congelado: true
  },
  {
    id: 2,
    nombre: "Papa a la Francesa Premium 2.5kg",
    categoria: "Congelados",
    descripcion: "Crujientes papas a la francesa estilo gourmet, crudas y ultracongeladas IQF para una cocción perfecta en tu establecimiento. El estándar de oro para restaurantes que buscan calidad y eficiencia sin compromisos.",
    imagen: imagenesProductos.papasFrancesas,
    congelado: true
  },
  {
    id: 3,
    nombre: "Pierna de Pollo IQF",
    categoria: "Pollo",
    descripcion: "Tiernas y jugosas piernas de pollo, ultracongeladas individualmente (IQF) en cajas de 15kg para una fácil manipulación y control de inventario. Criadas sin hormonas, garantizando un sabor auténtico y saludable.",
    imagen: imagenesProductos.piernaPollo,
    congelado: true
  },
  {
    id: 4,
    nombre: "Chuleta de Cerdo IQF",
    categoria: "Carne de Cerdo",
    descripcion: "Exquisitas chuletas de cerdo de corte premium, ultracongeladas individualmente y empacadas al vacío para sellar su frescura. Disponibles en cajas de 12 unidades, perfectas para ofrecer una porción generosa y de calidad superior.",
    imagen: imagenesProductos.chuletaCerdo,
    congelado: true
  },
  {
    id: 6,
    nombre: "Pierna de Cerdo con Piel IQF",
    categoria: "Carne de Cerdo",
    descripcion: "Perniles completos ultracongelados IQF. Su piel contribuye a una cocción más jugosa y un dorado perfecto, ideal para hornear o asar profesionalmente, logrando un resultado espectacular.",
    imagen: imagenesProductos.piernaCerdo,
    congelado: true
  },
  {
    id: 7,
    nombre: "Pechuga de Pollo IQF",
    categoria: "Pollo",
    descripcion: "Pechugas de pollo deshuesadas y ultracongeladas individualmente (IQF) para tu comodidad. Presentación en cajas de 10kg, ofreciendo versatilidad y facilidad en la preparación de innumerables platos saludables y deliciosos.",
    imagen: imagenesProductos.pechugaPollo,
    congelado: true
  },
  {
    id: 8,
    nombre: "Camarones U/15 IQF",
    categoria: "Mariscos",
    descripcion: "Camarones crudos de tamaño U/15 (aproximadamente 15 unidades por libra), ultracongelados IQF para mantener su frescura y textura. De origen sostenible, son perfectos para añadir un toque gourmet a tus platillos de mar.",
    imagen: imagenesProductos.camarones,
    congelado: true
  },
  {
    id: 9,
    nombre: "Salmón Noruego Premium",
    categoria: "Pescados",
    descripcion: "Lujosos filetes de salmón Noruego, ultracongelados y empacados al vacío para asegurar su pureza y calidad 'sashimi grade'. Una elección sofisticada para menús que buscan ofrecer lo mejor del mar.",
    imagen: imagenesProductos.salmon,
    congelado: true
  },
  {
    id: 10,
    nombre: "Chuleton de Cerdo Dry Aged",
    categoria: "Carne de Cerdo",
    descripcion: "Impresionantes chuletones de cerdo madurados en seco (Dry Aged) y ultracongelados. Con un grosor de 3cm y empacados al vacío, ofrecen una experiencia culinaria superior con un sabor intensificado y una ternura excepcional.",
    imagen: imagenesProductos.chuletonCerdo,
    congelado: true
  },
  {
    id: 11,
    nombre: "Bocachico Importado Entero",
    categoria: "Pescados",
    descripcion: "Bocachico importado de selección premium, ultracongelado entero para preservar su frescura y su auténtico sabor tradicional. Ideal para preparaciones caseras o especialidades culinarias con la máxima calidad y un precio competitivo para tu negocio.",
    imagen: imagenesProductos.bocachicoImportado,
    congelado: true
  },
  {
    id: 12,
    nombre: "Bagre de Río en Postas IQF",
    categoria: "Pescados",
    descripcion: "Exquisito bagre de río en postas, congelado individualmente (IQF) para garantizar una textura y sabor inigualables. Ofrece la conveniencia de porciones perfectas y una calidad superior a un precio accesible para tu restaurante.",
    imagen: imagenesProductos.bagreRioPostas,
    congelado: true
  },
  {
    id: 13,
    nombre: "Cachama Entera Premium",
    categoria: "Pescados",
    descripcion: "Cachama entera de primera calidad, cuidadosamente seleccionada y ultracongelada para preservar todas sus propiedades nutricionales y su sabor. Un producto versátil y económico que no compromete la excelencia en tu cocina profesional.",
    imagen: imagenesProductos.cachamaEntera,
    congelado: true
  },
  {
    id: 14,
    nombre: "Basa en Postas IQF",
    categoria: "Pescados",
    descripcion: "Postas de basa de alto rendimiento, congeladas con tecnología IQF para asegurar su frescura y facilitar su porcionado. Una opción de pescado blanco de excelente calidad y precio, perfecta para una gran variedad de platos nutritivos.",
    imagen: imagenesProductos.basaPostas,
    congelado: true
  },
  {
    id: 15,
    nombre: "Basa Entera Congelada",
    categoria: "Pescados",
    descripcion: "Pescado basa entero, ultracongelado para conservar su integridad y frescura desde el origen hasta tu mesa. Una alternativa económica y de gran volumen que mantiene nuestros estándares de calidad para satisfacer las necesidades de tu establecimiento.",
    imagen: imagenesProductos.basaEntera,
    congelado: true
  },
  {
    id: 16,
    nombre: "Filete de Basa Premium",
    categoria: "Pescados",
    descripcion: "Suave y magro filete de basa, cuidadosamente preparado sin piel ni espinas, y ultracongelado individualmente. Ofrece una conveniencia excepcional y una relación calidad-precio inmejorable, ideal para preparaciones rápidas y saludables.",
    imagen: imagenesProductos.fileteBasa,
    congelado: true
  },
  {
    id: 17,
    nombre: "Trucha Mariposa Fresca Congelada",
    categoria: "Pescados",
    descripcion: "Trucha fresca en un elegante corte mariposa, ultracongelada para preservar su delicado sabor y textura. Un producto gourmet de alta calidad que se adapta a diversos métodos de cocción y ofrece un valor excepcional para menús selectos.",
    imagen: imagenesProductos.truchaMariposa,
    congelado: true
  },
  {
    id: 18,
    nombre: "Pechuga de Pollo Entera IQF",
    categoria: "Pollo",
    descripcion: "Pechugas de pollo enteras con hueso y piel, congeladas individualmente (IQF). Perfectas para asar, guisar o ahumar, garantizando una jugosidad inigualable y un sabor robusto. Una opción de gran valor por su calidad y versatilidad en la cocina.",
    imagen: imagenesProductos.pechugaEntera,
    congelado: true
  },
  {
    id: 19,
    nombre: "Tilapia Roja Fresca",
    categoria: "Pescados",
    descripcion: "Tilapia roja de acuicultura controlada, ultracongelada para mantener la frescura y el sabor natural. Ideal para una variedad de menús por su carne blanca y suave, con un excelente precio para compras al por mayor.",
    imagen: imagenesProductos.tilapiaRoja,
    congelado: true
  },
  {
    id: 20,
    nombre: "Papa a la Francesa GOLDEN-PHOENIX",
    categoria: "Congelados",
    descripcion: "Papas a la francesa de corte clásico, ultracongeladas y listas para freír, garantizando una textura crujiente y un interior suave. Ofrecen un excelente rendimiento y sabor, perfectas para restaurantes y servicios de comida rápida que buscan calidad y economía.",
    imagen: imagenesProductos.papaGoldenPhoenix,
    congelado: true
  },

  // --- NUEVOS PRODUCTOS: POLLO BLANCO (REFRIGERADOS) ---
  {
    id: 21,
    nombre: "Pollo Entero Blanco Fresco",
    categoria: "Pollo Blanco",
    descripcion: "Pollo entero de calidad superior, refrigerado para mantener su frescura y jugosidad óptima. Ideal para asados o preparaciones a gran escala, ofrece una excelente relación calidad-precio y es la base perfecta para cualquier cocina profesional.",
    imagen: imagenesProductos.polloBlancoEntero,
    congelado: false
  },
  {
    id: 22,
    nombre: "Pechuga de Pollo Blanco con Piel Fresca",
    categoria: "Pollo Blanco",
    descripcion: "Pechugas completas con piel, refrigeradas para máxima frescura y control de porciones. Su piel ayuda a mantener la humedad durante la cocción, garantizando un sabor robusto y un rendimiento óptimo a un precio competitivo para tu negocio.",
    imagen: imagenesProductos.pechugaBlancoConPiel,
    congelado: false
  },
  {
    id: 23,
    nombre: "Pechuga de Pollo Blanco Sin Piel Fresca",
    categoria: "Pollo Blanco",
    descripcion: "Filetes de pechuga de pollo blanco, deshuesados y sin piel, refrigerados. Perfectos para dietas saludables o preparaciones ligeras, ofrecen versatilidad y una cocción rápida, con la calidad y precio que tu negocio merece.",
    imagen: imagenesProductos.pechugaBlancoSinPiel,
    congelado: false
  },
  {
    id: 24,
    nombre: "Pierna Pernil de Pollo Blanco Fresca",
    categoria: "Pollo Blanco",
    descripcion: "Corte completo de pierna y pernil, refrigerado para asegurar su frescura y facilidad de manejo. Ideal para guisos y asados, este corte es jugoso y sabroso, ofreciendo un gran rendimiento y un costo-efectivo para volúmenes de producción.",
    imagen: imagenesProductos.piernaPernilBlanco,
    congelado: false
  },
  {
    id: 25,
    nombre: "Pierna Pernil de Pollo Blanco Sin Piel Fresca",
    categoria: "Pollo Blanco",
    descripcion: "Pierna pernil deshuesada y sin piel, refrigerada. Este corte magro y versátil es excelente para salteados, estofados o desmenuzar, combinando la comodidad con un alto valor nutricional y un precio inmejorable para tu menú.",
    imagen: imagenesProductos.piernaPernilBlancoSinPiel,
    congelado: false
  },
  {
    id: 26,
    nombre: "Pierna de Pollo Blanco Sin Piel Fresca",
    categoria: "Pollo Blanco",
    descripcion: "Tiernas piernas de pollo deshuesadas y sin piel, refrigeradas. Perfectas para preparaciones rápidas y porcionadas, ideales para ensaladas, brochetas o platos infantiles, garantizando calidad y rendimiento por encima del promedio.",
    imagen: imagenesProductos.piernaBlancoSinPiel,
    congelado: false
  },
  {
    id: 27,
    nombre: "Pierna de Pollo Blanco Fresca",
    categoria: "Pollo Blanco",
    descripcion: "Jugosas piernas de pollo, refrigeradas. Un corte clásico, ideal para freír, hornear o asar, que ofrece un sabor consistente y una excelente textura, representando una opción económica y de alta demanda.",
    imagen: imagenesProductos.piernaBlanco,
    congelado: false
  },
  {
    id: 28,
    nombre: "Pernil Mixto de Pollo Blanco Fresco",
    categoria: "Pollo Blanco",
    descripcion: "Combinación de pernil (muslo) con hueso y piel, refrigerado. Un corte versátil y económico, ideal para dar sabor a caldos, guisos o para asar, asegurando la mejor relación calidad-precio para tus preparaciones culinarias.",
    imagen: imagenesProductos.pernilMixtoBlanco,
    congelado: false
  },
  {
    id: 29,
    nombre: "Ala Mixta de Pollo Blanco Fresca",
    categoria: "Pollo Blanco",
    descripcion: "Alas de pollo completas (drumette, flat y tip), refrigeradas. Perfectas para snacks, aperitivos o platos principales, estas alas son un éxito garantizado por su jugosidad y sabor, ofreciendo un rendimiento excepcional.",
    imagen: imagenesProductos.alaMixtaBlanco,
    congelado: false
  },
  {
    id: 30,
    nombre: "Ala de Pollo Blanco Fresca",
    categoria: "Pollo Blanco",
    descripcion: "Alas de pollo seleccionadas, refrigeradas, ideales para preparar en grandes volúmenes. Su tamaño y consistencia las hacen perfectas para freír, glasear o asar, con un precio que optimiza tus costos.",
    imagen: imagenesProductos.alaBlanco,
    congelado: false
  },
  {
    id: 31,
    nombre: "Colombina de Pollo Blanco Fresca",
    categoria: "Pollo Blanco",
    descripcion: "Deliciosas colombinas de pollo, refrigeradas, ideales para porciones individuales. Fáciles de cocinar y de gran atractivo visual, perfectas para menús infantiles o como aperitivos gourmet, con un rendimiento que sorprenderá.",
    imagen: imagenesProductos.colombinaBlanco,
    congelado: false
  },
  {
    id: 32,
    nombre: "Codos de Pollo Blanco Frescos",
    categoria: "Pollo Blanco",
    descripcion: "Codos de pollo refrigerados, ideales para caldos, sopas y fondos que requieren sabor intenso. Un producto de valor, que te permite optimizar el uso de cada parte del pollo, garantizando economía y calidad en tu cocina.",
    imagen: imagenesProductos.codosBlanco,
    congelado: false
  },
  {
    id: 34,
    nombre: "Pernil de Pollo Blanco Sin Piel (Contramuslo) Fresco",
    categoria: "Pollo Blanco",
    descripcion: "Contramuslos de pollo blanco deshuesados y sin piel, refrigerados. Un corte versátil y magro, ideal para parrilla, sartén o estofados, ofreciendo una carne tierna y jugosa con un costo altamente eficiente para tu negocio.",
    imagen: imagenesProductos.pernilBlancoSinPielContramuslo,
    congelado: false
  },
  {
    id: 35,
    nombre: "Churrasco de Pollo Blanco Fresco",
    categoria: "Pollo Blanco",
    descripcion: "Corte especial de pollo blanco tipo churrasco, refrigerado. Ideal para la parrilla o plancha, ofrece una cocción rápida y uniforme, garantizando una presentación atractiva y un sabor delicioso para tus clientes.",
    imagen: imagenesProductos.churrascoPolloBlanco,
    congelado: false
  },

  // --- NUEVOS PRODUCTOS: POLLO CAMPESINO (REFRIGERADOS) ---
  {
    id: 36,
    nombre: "Pollo Entero Campesino Fresco",
    categoria: "Pollo Campesino",
    descripcion: "Pollo entero de crianza tradicional, refrigerado, que ofrece un sabor más intenso y una textura más firme. Ideal para preparaciones que buscan un toque casero y auténtico, con la calidad superior que distingue a nuestro pollo campesino.",
    imagen: imagenesProductos.polloCampesinoEntero,
    congelado: false
  },
  {
    id: 37,
    nombre: "Pechuga de Pollo Campesino con Piel Fresca",
    categoria: "Pollo Campesino",
    descripcion: "Pechugas de pollo campesino con piel, refrigeradas. Un corte que resalta por su sabor concentrado y su textura robusta, perfecto para asar o guisar, ofreciendo la autenticidad y el rendimiento que tu cocina necesita.",
    imagen: imagenesProductos.pechugaCampesinoConPiel,
    congelado: false
  },
  {
    id: 40,
    nombre: "Pierna Pernil Mixta de Pollo Campesino Fresca",
    categoria: "Pollo Campesino",
    descripcion: "Mix de pierna y pernil de pollo campesino con hueso y piel, refrigerado. Perfecto para caldos ricos en sabor o preparaciones al horno, garantizando una experiencia culinaria auténtica y un aprovechamiento óptimo del producto.",
    imagen: imagenesProductos.piernaPernilCampesinoMixta,
    congelado: false
  },
  {
    id: 41,
    nombre: "Pierna de Pollo Campesino Fresca",
    categoria: "Pollo Campesino",
    descripcion: "Jugosas piernas de pollo campesino, refrigeradas. Reconocidas por su sabor más pronunciado y su carne consistente, son ideales para freír o asar, ofreciendo un perfil de sabor único que tus clientes apreciarán.",
    imagen: imagenesProductos.piernaCampesino,
    congelado: false
  },
  {
    id: 42,
    nombre: "Pernil de Pollo Campesino (Contramuslo) Fresco",
    categoria: "Pollo Campesino",
    descripcion: "Contramuslos de pollo campesino con hueso y piel, refrigerados. Un corte con gran sabor y textura, ideal para parrilla, estofados o desmenuzar, aportando esa autenticidad y jugosidad que solo el pollo campesino ofrece.",
    imagen: imagenesProductos.pernilCampesinoContramuslo,
    congelado: false
  },
  {
    id: 43,
    nombre: "Ala Mixta de Pollo Campesino Fresca",
    categoria: "Pollo Campesino",
    descripcion: "Alas de pollo campesino completas (drumette, flat y tip), refrigeradas. Con un sabor más robusto, son ideales para aperitivos gourmet o como plato principal, garantizando una calidad excepcional y un rendimiento superior.",
    imagen: imagenesProductos.alaMixtaCampesino,
    congelado: false
  },
  {
    id: 44,
    nombre: "Ala de Pollo Campesino Fresca",
    categoria: "Pollo Campesino",
    descripcion: "Alas de pollo campesino seleccionadas, refrigeradas. Su carne más densa y su sabor distintivo las hacen perfectas para preparaciones que buscan un gusto más auténtico y una experiencia culinaria memorable.",
    imagen: imagenesProductos.alaCampesino,
    congelado: false
  },

  // --- PRODUCTOS: SALSAMENTARIA ---
  {
    id: 45,
    nombre: "Chorizo Ahumado x 5 und x 300 grs",
    categoria: "Salsamentaria",
    descripcion: "Deliciosos chorizos ahumados, con un sabor profundo y ahumado, ideales para asar o freír. Presentación práctica de 5 unidades por paquete de 300 gramos. Perfecto para parrilladas, tapas o como un complemento sabroso en tus platos.",
    imagen: imagenesProductos.chorizoAhumado300,
    congelado: false
  },
  {
    id: 46,
    nombre: "Chorizo de Pollo Ahumado Picante x 5 und x 300 grs",
    categoria: "Salsamentaria",
    descripcion: "Un innovador chorizo de pollo ahumado con un vibrante toque picante, presentado en paquetes de 5 unidades por 300 gramos. Una alternativa ligera y llena de sabor para quienes buscan una opción saludable sin renunciar a la intensidad.",
    imagen: imagenesProductos.chorizoPolloPicante300,
    congelado: false
  },
  {
    id: 47,
    nombre: "Chorizo Parrillero x 8 und x 250 grs",
    categoria: "Salsamentaria",
    descripcion: "Chorizo parrillero de excelente calidad, con la jugosidad y el sabor perfectos para la parrilla. Empaque conveniente de 8 unidades (250 gramos). Ideal para tus eventos, asados o para ofrecer un bocado tradicional y delicioso.",
    imagen: imagenesProductos.chorizoParrillero250,
    congelado: false
  },
  {
    id: 48,
    nombre: "Chorizo Parrillero x 8 und x 500 grs",
    categoria: "Salsamentaria",
    descripcion: "El clásico chorizo parrillero de gran sabor, ahora en un práctico paquete de 8 unidades (500 gramos). Ofrece un rendimiento superior y una calidad consistente, garantizando el éxito de tus parrilladas y una experiencia culinaria memorable.",
    imagen: imagenesProductos.chorizoParrillero500,
    congelado: false
  },
  {
    id: 49,
    nombre: "Jamón de Pollo al Humo x 250 grs",
    categoria: "Salsamentaria",
    descripcion: "Delicado jamón de pollo con un exquisito sabor ahumado, en una presentación de 250 gramos. Ideal para elevar tus sándwiches, ensaladas o como un ingrediente versátil que añade un toque distintivo a cualquier receta.",
    imagen: imagenesProductos.jamonPolloAhumo250,
    congelado: false
  },
  {
    id: 50,
    nombre: "Jamón Familiar x 500 grs",
    categoria: "Salsamentaria",
    descripcion: "Jamón de cerdo tradicional en un formato familiar de 500 gramos. Su versatilidad y excelente relación calidad-precio lo hacen perfecto para el consumo diario en tu hogar o negocio, ideal para sándwiches y desayunos.",
    imagen: imagenesProductos.jamonFamiliar500,
    congelado: false
  },
  {
    id: 51,
    nombre: "Jamón x 250 grs",
    categoria: "Salsamentaria",
    descripcion: "Jamón de cerdo de alta calidad, presentado en un práctico empaque de 250 gramos. Un producto esencial que ofrece versatilidad culinaria y una opción deliciosa para porciones individuales, tablas de quesos o tus recetas favoritas.",
    imagen: imagenesProductos.jamon250,
    congelado: false
  },
  {
    id: 52,
    nombre: "Molipollo Congelado x 500 grs",
    categoria: "Salsamentaria",
    descripcion: "Versátil molipollo ultracongelado en presentación de 500 gramos. Su textura fina y facilidad de uso lo hacen ideal para la preparación de hamburguesas caseras, albóndigas, rellenos y otras delicias culinarias, optimizando tu tiempo en la cocina.",
    imagen: imagenesProductos.molipolloCongelado500,
    congelado: true // ¡ESTE SÍ ES CONGELADO!
  },
  {
    id: 54,
    nombre: "Salchicha Ahumada Clásica x 12 und x 500 grs",
    categoria: "Salsamentaria",
    descripcion: "Salchichas ahumadas de sabor tradicional y ahumado, presentadas en un paquete de 12 unidades (500 gramos). Perfectas para hot dogs, desayunos campestres o como acompañamiento versátil en tus platos.",
    imagen: imagenesProductos.salchichaAhumada500,
    congelado: false
  },
  {
    id: 55,
    nombre: "Salchicha Ahumada Clásica x 24 und x 1000 grs",
    categoria: "Salsamentaria",
    descripcion: "Salchichas ahumadas de sabor clásico en una presentación familiar y económica de 24 unidades (1000 gramos). Ideal para negocios con alta demanda, garantiza rendimiento y satisfacción en cada preparación.",
    imagen: imagenesProductos.salchichaAhumada1000,
    congelado: false
  },
  {
    id: 56,
    nombre: "Salchichón Seleccionado x 500 grs",
    categoria: "Salsamentaria",
    descripcion: "Salchichón de primera selección, en una práctica presentación de 500 gramos. Un embutido versátil y delicioso, perfecto para picadas, sándwiches o como un ingrediente clave en tus recetas tradicionales.",
    imagen: imagenesProductos.salchichonSeleccionado500,
    congelado: false
  },
  {
    id: 57,
    nombre: "Salchicha Premium x 7 und x 500 grs",
    categoria: "Salsamentaria",
    descripcion: "Salchichas de calidad premium, presentadas en un paquete de 7 unidades (500 gramos). Destacan por su sabor superior, textura firme y jugosa, ideales para ofrecer una opción diferenciada y de alta gama en tu menú.",
    imagen: imagenesProductos.salchichaPremium500,
    congelado: false
  },
];

export default function JJDistribuciones() {
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');
  const [productoExpandido, setProductoExpandido] = useState<number | null>(null);
  const numeroWhatsapp = "573017685501"; // Número de WhatsApp corregido

  const categorias = ['Todos', ...new Set(productos.map(p => p.categoria))];

  const productosFiltrados = productos.filter(producto => {
    const coincideBusqueda = producto.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
                             producto.descripcion.toLowerCase().includes(terminoBusqueda.toLowerCase());
    const coincideCategoria = categoriaSeleccionada === 'Todos' || producto.categoria === categoriaSeleccionada;
    return coincideBusqueda && coincideCategoria;
  });

  const contactarPorWhatsApp = (productoNombre?: string) => {
    let mensaje = "Hola, estoy interesado en ";
    mensaje += productoNombre ? `el producto: ${productoNombre}` : "sus productos";
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
          Calidad Premium en Productos Congelados y Frescos para tu Negocio.
        </p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-md sm:text-lg font-medium text-green-700 dark:text-green-400 mb-6"
        >
          **¿Buscas la mejor relación calidad-precio en el mercado? ¡Contáctanos para competir con los mejores precios!**
        </motion.p>

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