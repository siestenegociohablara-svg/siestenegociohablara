'use strict';

// ═══════════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════════

const emprendimientoFotos = {
  1:[
    'img/ceramicas-mary/mafalda-verde.png',
    'img/ceramicas-mary/garfield-nuevo.png',
    'img/ceramicas-mary/snoopy-nuevo.png',
    'img/ceramicas-mary/snoopy.png',
    'img/ceramicas-mary/pesebre-blanco-azul.png',
    'img/ceramicas-mary/mafalda.png',
    'img/ceramicas-mary/garfield.png',
    'img/ceramicas-mary/pesebre.png',
    'img/ceramicas-mary/snoopy.png',
    'img/ceramicas-mary/matera.png',
  ],
  2:[
    'img/accesorios-andre/aretes-azules.png',
    'img/accesorios-andre/collar-y-aretes.png',
    'img/accesorios-andre/collar-y-aretes-morados.png',
    'img/accesorios-andre/aretes.png',
    'img/accesorios-andre/aretes-rojos.png',
    'img/accesorios-andre/collar-y-aretes-verdes.png',
    'img/accesorios-andre/aretes-de-colores.png',
    'img/accesorios-andre/aretes-tricolor.png',
  ],
  3:[
    'img/cajik/madera-vela.png',
    'img/cajik/hombre-cesped.png',
    'img/cajik/moto.png',
    'img/cajik/porta-llaves.png',
    'img/cajik/decoracion-velas.png',
    'img/cajik/decoracion-vela.png',
  ],
  4:[
    'img/flores-eternas/ramo-rosado.png',
    'img/flores-eternas/flor.png',
    'img/flores-eternas/ramo-azul.png',
    'img/flores-eternas/flor-roja.png',
    'img/flores-eternas/girasol.png',
    'img/flores-eternas/virgen.png',
  ],
  6:[
    'img/suni-style/saco-blanco-osos.png',
    'img/suni-style/pantalon-negro.png',
    'img/suni-style/camiseta-cafe.png',
    'img/suni-style/camiseta-polo.png',
    'img/suni-style/camiseta-verde.png',
    'img/suni-style/saco-rosado.png',
    'img/suni-style/chaqueta-jean.png',
    'img/suni-style/pantalon-cafe.png',
    'img/suni-style/jean.png',
  ],
  7:[
    'img/la-pela-de-los-bolsos/bolso-azul-grande.png',
    'img/la-pela-de-los-bolsos/bolso-rosado-grande.png',
    'img/la-pela-de-los-bolsos/bolso-leopardo-grande.png',
    'img/la-pela-de-los-bolsos/bolso-verde-pequeno.png',
    'img/la-pela-de-los-bolsos/bolso-negro-pequeno.png',
    'img/la-pela-de-los-bolsos/bolso-azul-pequeno.png',
    'img/la-pela-de-los-bolsos/bolso-rojo-pequeno.png',
  ],
};

const emprendimientos = [
  { id:1, nombre:'Cerámicas Mary', logo:'img/ceramicas-mary/logo.png', color:'#971B2C', lat:4.9175, lng:-74.0220, direccion:'Cajicá, Cundinamarca', telefono:'313 280 3019', dias:'Atención por WhatsApp', descripcion:'Cerámicas Mary crea figuras, materas y piezas decorativas pintadas a mano, con acabados llenos de color y personalidad.', caracteristicas:['Cerámica pintada a mano','Figuras decorativas','Materas artesanales','Pedidos por WhatsApp'], whatsapp:'https://wa.me/3132803019', instagramUrl:'https://www.instagram.com/ceramicasmary_?rpxt=ejAyY29tZTRraTQz' },
  { id:2, nombre:'Accesorios Andre', logo:'img/accesorios-andre/logo.png', color:'#F6A443', lat:4.9200, lng:-74.0220, direccion:'Cajicá, Cundinamarca', telefono:'305 726 0480', dias:'Atención por WhatsApp', descripcion:'Accesorios con estilo propio, elaborados con dedicación para acompañarte todos los días.', caracteristicas:['Hecho a mano','Diseño propio','Producción local'], whatsapp:'https://wa.me/3057260480', instagramUrl:'https://www.instagram.com/accesoriosandrecolombia?vrfl=eXA3eTJrMTZjYTBp' },
  { id:3, nombre:'Cajik Artesanías', logo:'img/cajik/logo.png', color:'#7C1524', lat:4.9195, lng:-74.0265, direccion:'Cajicá, Cundinamarca', telefono:'310 209 3655', dias:'Atención por WhatsApp', descripcion:'Objetos artesanales que celebran la creatividad y la identidad de Cajicá.', caracteristicas:['Diseño local','Trabajo manual','Ediciones pequeñas','Identidad territorial'], whatsapp:'https://wa.me/3102093655', instagramUrl:'https://www.instagram.com/cajik_artesanias?cplk=aWNkcDRsZDA0d3dn' },
  { id:4, nombre:'Flores Eternas', logo:'img/flores-eternas/logo.png', color:'#F8B472', lat:4.9280, lng:-74.0205, direccion:'Cajicá, Cundinamarca', telefono:'320 329 1438', dias:'Atención por WhatsApp', descripcion:'Detalles florales duraderos creados a mano para acompañar momentos especiales.', caracteristicas:['Trabajo manual','Diseños personalizados','Larga duración','Detalles para regalo'], whatsapp:'https://wa.me/3203291438', instagramUrl:'https://www.instagram.com/floreseternas123011?vrfl=MTl6b3R0bWQyMTFpOQ==' },
  { id:6, nombre:'Suni Style', logo:'img/suni-style/logo.png', color:'#C4566B', lat:4.8620, lng:-74.0330, direccion:'Centro Comercial Expo Chía, local D4', telefono:'313 407 2386', dias:'Horario por confirmar', descripcion:'Moda y accesorios con personalidad, pensados para expresar tu estilo.', caracteristicas:['Moda local','Estilo propio','Prendas versátiles'], whatsapp:'https://wa.me/3134072386', instagramUrl:'https://www.instagram.com/suni_style26?srtk=aHh3Mmw2N3l0eHhs', facebookUrl:'https://www.facebook.com/share/18CPzpxsw3/' },
  { id:7, nombre:'La Pelá de los Bolsos', logo:'img/la-pela-de-los-bolsos/logo.png', color:'#5E1A26', lat:4.9700, lng:-74.0270, direccion:'Cajicá, Cundinamarca', telefono:'Información por confirmar', dias:'Horario por confirmar', descripcion:'Bolsos con carácter, diseñados y seleccionados para cada ocasión.', caracteristicas:['Hecho a mano','Diseño propio','Producción local'], instagramUrl:'https://www.instagram.com/gabii.ii26?exln=bDg3eDBkaDRwMXhw' },
];

const productos = [
  { emp:1, img:'img/ceramicas-mary/mafalda-verde.png', x:'0%', y:'0%', r:'-4deg', nombre:'Mafalda verde', precio:50000, descripcion:'Figura decorativa de Mafalda en tonos verdes, pintada a mano.', detalles:['Cerámica','Pintada a mano'] },
  { emp:1, img:'img/ceramicas-mary/garfield-nuevo.png', x:'34%', y:'1%', r:'4deg', nombre:'Garfield', precio:35000, descripcion:'Figura de Garfield elaborada y pintada artesanalmente.', detalles:['Cerámica','Acabado brillante'] },
  { emp:1, img:'img/ceramicas-mary/snoopy-nuevo.png', x:'67%', y:'3%', r:'-2deg', nombre:'Snoopy', precio:40000, descripcion:'Figura decorativa de Snoopy en cerámica esmaltada.', detalles:['Cerámica esmaltada','Pintada a mano'] },
  { emp:1, img:'img/ceramicas-mary/snoopy.png', x:'16%', y:'51%', r:'3deg', nombre:'Snoopy corazón', precio:25000, descripcion:'Figura decorativa de Snoopy elaborada en cerámica esmaltada.', detalles:['Cerámica esmaltada','Pieza decorativa'] },
  { emp:1, img:'img/ceramicas-mary/pesebre-blanco-azul.png', x:'52%', y:'49%', r:'-3deg', nombre:'Pesebre blanco con azul', precio:50000, descripcion:'Pesebre decorativo con acabado artesanal en tonos blanco y azul.', detalles:['Cerámica decorativa','Pieza detallada'] },
  { emp:1, img:'img/ceramicas-mary/mafalda.png', x:'0%', y:'0%', r:'2deg', nombre:'Mafalda', precio:60000, descripcion:'Figura decorativa de Mafalda pintada a mano en tonos rojos.', detalles:['Cerámica','Pintada a mano'] },
  { emp:1, img:'img/ceramicas-mary/garfield.png', x:'0%', y:'0%', r:'-3deg', nombre:'Garfield', precio:40000, descripcion:'Figura clásica de Garfield elaborada en cerámica.', detalles:['Cerámica','Acabado brillante'] },
  { emp:1, img:'img/ceramicas-mary/pesebre.png', x:'0%', y:'0%', r:'3deg', nombre:'Pesebre', precio:30000, descripcion:'Pesebre decorativo con acabado artesanal en tonos cálidos.', detalles:['Cerámica decorativa','Pieza detallada'] },
  { emp:1, img:'img/ceramicas-mary/snoopy.png', x:'0%', y:'0%', r:'-2deg', nombre:'Snoopy', precio:40000, descripcion:'Figura de Snoopy sobre su casa roja elaborada en cerámica.', detalles:['Cerámica esmaltada','Pieza decorativa'] },
  { emp:1, img:'img/ceramicas-mary/matera.png', x:'0%', y:'0%', r:'3deg', nombre:'Matera', precio:50000, descripcion:'Matera de cerámica pintada a mano con diseño floral.', detalles:['Cerámica','Diseño floral'] },
  { emp:2, img:'img/accesorios-andre/aretes-azules.png', x:'0%', y:'0%', r:'-3deg', nombre:'Aretes azules', precio:28000, descripcion:'Aretes azules tejidos a mano con estructura dorada.', detalles:['Hecho a mano','Diseño liviano'] },
  { emp:2, img:'img/accesorios-andre/collar-y-aretes.png', x:'0%', y:'0%', r:'3deg', nombre:'Collar y aretes', precio:45000, descripcion:'Conjunto artesanal de collar y aretes con detalles naturales.', detalles:['Juego completo','Hecho a mano'] },
  { emp:2, img:'img/accesorios-andre/collar-y-aretes-morados.png', x:'0%', y:'0%', r:'-2deg', nombre:'Collar y aretes morados', precio:48000, descripcion:'Conjunto de collar y aretes en tonos morados intensos.', detalles:['Juego completo','Diseño artesanal'] },
  { emp:2, img:'img/accesorios-andre/aretes.png', x:'0%', y:'0%', r:'4deg', nombre:'Aretes', precio:30000, descripcion:'Aretes florales multicolor elaborados a mano.', detalles:['Hecho a mano','Diseño floral'] },
  { emp:2, img:'img/accesorios-andre/aretes-rojos.png', x:'0%', y:'0%', r:'-4deg', nombre:'Aretes rojos', precio:32000, descripcion:'Aretes florales rojos con acabado dorado.', detalles:['Hecho a mano','Diseño floral'] },
  { emp:2, img:'img/accesorios-andre/collar-y-aretes-verdes.png', x:'0%', y:'0%', r:'2deg', nombre:'Collar y aretes verdes', precio:48000, descripcion:'Conjunto de collar y aretes en tonos verdes.', detalles:['Juego completo','Diseño artesanal'] },
  { emp:2, img:'img/accesorios-andre/aretes-de-colores.png', x:'0%', y:'0%', r:'-3deg', nombre:'Aretes de colores', precio:35000, descripcion:'Aretes circulares con piezas de múltiples colores.', detalles:['Diseño colorido','Hecho a mano'] },
  { emp:2, img:'img/accesorios-andre/aretes-tricolor.png', x:'0%', y:'0%', r:'3deg', nombre:'Aretes tricolor', precio:30000, descripcion:'Aretes tejidos en azul, amarillo y rojo.', detalles:['Diseño tricolor','Hecho a mano'] },
  { emp:3, img:'img/cajik/madera-vela.png', x:'0%', y:'0%', r:'-3deg', nombre:'Madera decorativa para vela', precio:55000, descripcion:'Base de madera natural que realza cualquier vela y decora tu espacio.', detalles:['Madera natural','Pieza única'] },
  { emp:3, img:'img/cajik/hombre-cesped.png', x:'0%', y:'0%', r:'3deg', nombre:'Hombre cortando césped', precio:70000, descripcion:'Figura decorativa en metal que cuenta una escena cotidiana con humor.', detalles:['Metal','Hecho a mano'] },
  { emp:3, img:'img/cajik/moto.png', x:'0%', y:'0%', r:'-2deg', nombre:'Moto pequeña de tuercas', precio:45000, descripcion:'Moto en miniatura armada con tuercas y tornillos reciclados.', detalles:['Metal reciclado','Pieza única'] },
  { emp:3, img:'img/cajik/porta-llaves.png', x:'0%', y:'0%', r:'4deg', nombre:'Porta llaves de madera', precio:60000, descripcion:'Porta llaves de madera tallada con forma de llave y candado.', detalles:['Madera tallada','Funcional'] },
  { emp:4, img:'img/flores-eternas/ramo-rosado.png', x:'0%', y:'0%', r:'-3deg', nombre:'Ramo de flores rosadas', precio:75000, descripcion:'Ramo de flores tejidas a mano que nunca se marchitan.', detalles:['Larga duración','Hecho a mano'] },
  { emp:4, img:'img/flores-eternas/flor.png', x:'0%', y:'0%', r:'3deg', nombre:'Flor', precio:30000, descripcion:'Flor artesanal en matera, un detalle que dura para siempre.', detalles:['Larga duración','Hecho a mano'] },
  { emp:4, img:'img/flores-eternas/ramo-azul.png', x:'0%', y:'0%', r:'-2deg', nombre:'Ramo de flores azul', precio:70000, descripcion:'Ramo azul con mariposa, ideal para regalar.', detalles:['Larga duración','Ideal para regalo'] },
  { emp:4, img:'img/flores-eternas/flor-roja.png', x:'0%', y:'0%', r:'-3deg', nombre:'Flor roja', precio:30000, descripcion:'Flor roja artesanal en matera, un detalle que dura para siempre.', detalles:['Larga duración','Hecho a mano'] },
  { emp:4, img:'img/flores-eternas/girasol.png', x:'0%', y:'0%', r:'3deg', nombre:'Girasol', precio:35000, descripcion:'Girasol artesanal en matera para llenar de luz cualquier espacio.', detalles:['Larga duración','Hecho a mano'] },
  { emp:4, img:'img/flores-eternas/virgen.png', x:'0%', y:'0%', r:'-2deg', nombre:'Virgen', precio:55000, descripcion:'Virgen artesanal elaborada a mano con detalles dorados.', detalles:['Hecho a mano','Ideal para regalo'] },
  { emp:3, img:'img/cajik/decoracion-velas.png', x:'0%', y:'0%', r:'-3deg', nombre:'Decoración para velas', precio:85000, descripcion:'Candelabro en metal para tres velas de colores.', detalles:['Metal','Pieza única'] },
  { emp:3, img:'img/cajik/decoracion-vela.png', x:'0%', y:'0%', r:'3deg', nombre:'Decoración para vela', precio:65000, descripcion:'Ave artesanal sobre tronco que sostiene una vela.', detalles:['Metal y madera','Pieza única'] },
  { emp:6, img:'img/suni-style/saco-blanco-osos.png', x:'0%', y:'0%', r:'-3deg', nombre:'Saco blanco con osos', precio:65000, descripcion:'Saco blanco con estampado de osos, suave y cómodo para todos los días.', detalles:['Prenda cómoda', 'Estampado de osos'] },
  { emp:6, img:'img/suni-style/pantalon-negro.png', x:'0%', y:'0%', r:'3deg', nombre:'Pantalón negro', precio:75000, descripcion:'Pantalón negro versátil, fácil de combinar con cualquier outfit.', detalles:['Corte versátil', 'Color básico'] },
  { emp:6, img:'img/suni-style/camiseta-cafe.png', x:'0%', y:'0%', r:'-2deg', nombre:'Camiseta café', precio:45000, descripcion:'Camiseta café de tela suave, ideal para un look casual.', detalles:['Tela suave', 'Look casual'] },
  { emp:6, img:'img/suni-style/camiseta-polo.png', x:'0%', y:'0%', r:'4deg', nombre:'Camiseta tipo polo', precio:55000, descripcion:'Camiseta tipo polo con acabado elegante y casual.', detalles:['Cuello polo', 'Look casual'] },
  { emp:6, img:'img/suni-style/camiseta-verde.png', x:'0%', y:'0%', r:'-4deg', nombre:'Camiseta verde', precio:45000, descripcion:'Camiseta verde de tela cómoda para el día a día.', detalles:['Tela cómoda', 'Color vibrante'] },
  { emp:6, img:'img/suni-style/saco-rosado.png', x:'0%', y:'0%', r:'2deg', nombre:'Saco rosado', precio:70000, descripcion:'Saco rosado suave y abrigado con mucho estilo.', detalles:['Abrigado', 'Color suave'] },
  { emp:6, img:'img/suni-style/chaqueta-jean.png', x:'0%', y:'0%', r:'-3deg', nombre:'Chaqueta de jean', precio:120000, descripcion:'Chaqueta de jean clásica que no pasa de moda.', detalles:['Denim clásico', 'Prenda versátil'] },
  { emp:6, img:'img/suni-style/pantalon-cafe.png', x:'0%', y:'0%', r:'3deg', nombre:'Pantalón café', precio:80000, descripcion:'Pantalón café de corte cómodo y elegante.', detalles:['Corte cómodo', 'Tono neutro'] },
  { emp:6, img:'img/suni-style/jean.png', x:'0%', y:'0%', r:'-2deg', nombre:'Jean', precio:95000, descripcion:'Jean cómodo de corte clásico para toda ocasión.', detalles:['Denim', 'Corte clásico'] },
  { emp:7, img:'img/la-pela-de-los-bolsos/bolso-azul-grande.png', x:'0%', y:'0%', r:'-3deg', nombre:'Bolso azul grande', precio:110000, descripcion:'Bolso amplio en tonos azul y rosa con detalles decorativos hechos a mano.', detalles:['Gran capacidad','Diseño colorido'] },
  { emp:7, img:'img/la-pela-de-los-bolsos/bolso-rosado-grande.png', x:'0%', y:'0%', r:'3deg', nombre:'Bolso rosado grande', precio:110000, descripcion:'Bolso amplio con estampado rosado y aplique decorativo.', detalles:['Gran capacidad','Diseño estampado'] },
  { emp:7, img:'img/la-pela-de-los-bolsos/bolso-leopardo-grande.png', x:'0%', y:'0%', r:'-2deg', nombre:'Bolso leopardo grande', precio:120000, descripcion:'Bolso amplio con estampado de leopardo y detalles decorativos.', detalles:['Gran capacidad','Diseño estampado'] },
  { emp:7, img:'img/la-pela-de-los-bolsos/bolso-verde-pequeno.png', x:'0%', y:'0%', r:'4deg', nombre:'Bolso verde pequeño', precio:65000, descripcion:'Bolso acolchado pequeño en tono verde suave.', detalles:['Tamaño compacto','Diseño acolchado'] },
  { emp:7, img:'img/la-pela-de-los-bolsos/bolso-negro-pequeno.png', x:'0%', y:'0%', r:'-4deg', nombre:'Bolso negro pequeño', precio:65000, descripcion:'Bolso acolchado pequeño en color negro.', detalles:['Tamaño compacto','Diseño acolchado'] },
  { emp:7, img:'img/la-pela-de-los-bolsos/bolso-azul-pequeno.png', x:'0%', y:'0%', r:'2deg', nombre:'Bolso azul pequeño', precio:65000, descripcion:'Bolso acolchado pequeño en color azul.', detalles:['Tamaño compacto','Diseño acolchado'] },
  { emp:7, img:'img/la-pela-de-los-bolsos/bolso-rojo-pequeno.png', x:'0%', y:'0%', r:'-3deg', nombre:'Bolso rojo pequeño', precio:65000, descripcion:'Bolso acolchado pequeño en tono rojo.', detalles:['Tamaño compacto','Diseño acolchado'] },
];

const merch = [
  { img:'img/merch_pocillo.jpg', nombre:'Mug', precio:'$30.000 COP', descripcion:'Taza cerámica con el lema "Si este negocio hablara" en relieve. Para el café del emprendedor que madruga.', caracteristicas:['Cerámica de alta calidad','Capacidad 350ml','Apto para microondas','Relieve exclusivo SENH'] },
  { img:'img/merch_tula.jpg', nombre:'Bolsa de Tela', precio:'$35.000 COP', descripcion:'Bolsa ecológica de tela con el logo SENH. Ideal para el mercado, la universidad o el día a día.', caracteristicas:['Tela 100% algodón resistente','Asas reforzadas','Logo SENH','Eco-friendly'] },
  { img:'img/merch_stickers.jpg', nombre:'Stickers', precio:'$5.000 COP c/u', descripcion:'Pack de stickers oficiales de Si Este Negocio Hablara para llevar la voz de los emprendedores a donde vayas.', caracteristicas:['Vinilo resistente al agua','Diseños exclusivos SENH','Ideales para laptop, libretas y botellas'] },
];

const equipo = [
  { nombre:'Oscar',     rol:'Dirección',    descripcion:'Lidera la visión creativa y dirección general del proyecto.', photo:'img/team_oscar.png', redes:{ ig:'https://www.instagram.com/siestenegociohablara', fb:'https://www.facebook.com/share/1Hv2EvzAEz/', tk:'https://www.tiktok.com/@si.este.negocio.h', yt:'https://youtube.com/@siestenegociohablara' }, portfolio:'https://www.behance.net/' },
  { nombre:'Alejandro', rol:'Edición', descripcion:'Desarrolla las plataformas digitales y tecnología del equipo.', photo:'img/team_alejandro.jpeg', redes:{ ig:'https://www.instagram.com/siestenegociohablara', fb:'https://www.facebook.com/share/1Hv2EvzAEz/', tk:'https://www.tiktok.com/@si.este.negocio.h', yt:'https://youtube.com/@siestenegociohablara' }, portfolio:'https://github.com/' },
  { nombre:'Paula',     rol:'Fotografía',   descripcion:'Captura la esencia visual de cada emprendimiento.', photo:'img/team_paula.jpeg', redes:{ ig:'https://www.instagram.com/siestenegociohablara', fb:'https://www.facebook.com/share/1Hv2EvzAEz/', tk:'https://www.tiktok.com/@si.este.negocio.h', yt:'https://youtube.com/@siestenegociohablara' }, portfolio:'https://www.behance.net/' },
  { nombre:'Karen',     rol:'Diseño',       descripcion:'Construye la identidad visual y experiencia gráfica.', photo:'img/team_karen.jpeg', redes:{ ig:'https://www.instagram.com/siestenegociohablara', fb:'https://www.facebook.com/share/1Hv2EvzAEz/', tk:'https://www.tiktok.com/@si.este.negocio.h', yt:'https://youtube.com/@siestenegociohablara' }, portfolio:'https://www.behance.net/' },
  { nombre:'Carlos',    rol:'Sonido',       descripcion:'Diseña el paisaje sonoro y producción de audio.', photo:'img/team_carlos.jpeg', redes:{ ig:'https://www.instagram.com/siestenegociohablara', fb:'https://www.facebook.com/share/1Hv2EvzAEz/', tk:'https://www.tiktok.com/@si.este.negocio.h', yt:'https://youtube.com/@siestenegociohablara' }, portfolio:'https://soundcloud.com/' },
  { nombre:'Daniela',   rol:'Arte',         descripcion:'Dirige la dirección de arte en las producciones del equipo.', photo:'img/team_daniela.jpeg', redes:{ ig:'https://www.instagram.com/siestenegociohablara', fb:'https://www.facebook.com/share/1Hv2EvzAEz/', tk:'https://www.tiktok.com/@si.este.negocio.h', yt:'https://youtube.com/@siestenegociohablara' }, portfolio:'https://www.behance.net/' },
];

const socialPosts = [
  { id:0, usuario:'@siestenegociohablara', plataforma:'instagram', link:'https://www.instagram.com/p/DdG-Aodkeil/', embed:'https://www.instagram.com/p/DdG-Aodkeil/embed/' },
  { id:6, usuario: '@si.este.negocio.h',plataforma: 'tiktok', link: 'https://vt.tiktok.com/ZSp2cRXC6/', embed: 'https://www.tiktok.com/player/v1/7704714161661463828?embed_from=oembed&music_info=1&description=1&autoplay=0&muted=1'},
  { id:1, usuario:'@siestenegociohablara', plataforma:'instagram', link:'https://www.instagram.com/reel/DfFmFHfPFbT/', embed:'https://www.instagram.com/reel/DfFmFHfPFbT/embed/' },
  { id:2, usuario:'@si.este.negocio.h', plataforma:'tiktok', link:'https://vt.tiktok.com/ZSgtFQkec/', embed:'https://www.tiktok.com/player/v1/7702092067077508372?embed_from=oembed&music_info=1&description=1&autoplay=0&muted=1' },
  { id:8, usuario:'@siestenegociohablara', plataforma:'instagram', link:'https://www.instagram.com/reel/DfcjhfNxeIW/', embed:'https://www.instagram.com/reel/DfcjhfNxeIW/embed/' },
  { id:3, usuario:'@si.este.negocio.h', plataforma:'tiktok', link:'https://vt.tiktok.com/ZSgtk1xAv/', embed:'https://www.tiktok.com/player/v1/7690403531345448213?embed_from=oembed&music_info=1&description=1&autoplay=0&muted=1' },
  { id:4, usuario: '@siestenegociohablara',plataforma: 'instagram', link: 'https://www.instagram.com/p/DfVz_iQDCzk/', embed: 'https://www.instagram.com/p/DfVz_iQDCzk/embed/'},
  { id:5, usuario: '@si.este.negocio.h',plataforma: 'tiktok', link: 'https://vt.tiktok.com/ZSp86Vo6K/', embed: 'https://www.tiktok.com/player/v1/7704122364010794241?embed_from=oembed&music_info=1&description=1&autoplay=0&muted=1'},
  { id:7, usuario:'@siestenegociohablara', plataforma:'instagram', story:true, link:'https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MTMzNzIxMzIzNzU1OTk2?story_media_id=4023821731894514950_15263316818&vrfl=MWhqNTd3dnM4NWtuZg==' },


];


const socialSvg = {
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/></svg>',
  tiktok:    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/></svg>',
  facebook:  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
  youtube:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 001.95-1.97A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>',
  whatsapp:  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>',
  email:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>',
  linkedin:  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>',
};

const platformBg = { instagram:'#C13584', tiktok:'#000', facebook:'#1877F2', youtube:'#FF0000', linkedin:'#0A66C2' };

// ═══════════════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════════════

function isMobile() { return window.innerWidth < 768; }

function catColor(cat) {
  const emp = emprendimientos.find(x => x.id === cat);
  return emp ? emp.color : '#971B2C';
}

function el(id) { return document.getElementById(id); }

function closeModal(id) { el(id).classList.add('hidden'); }
function openModal(id)  { el(id).classList.remove('hidden'); }

// ═══════════════════════════════════════════════════════════════
// 1. SPLASH
// ═══════════════════════════════════════════════════════════════

function initSplash() {
  const splash = el('splash');
  const btn    = el('splash-btn');
  const app    = el('app');

  btn.addEventListener('click', () => {
    splash.classList.add('splash-exiting');
    splash.addEventListener('animationend', () => {
      splash.style.display = 'none';
      app.classList.remove('hidden');
      document.body.style.overflow = '';
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, { once: true });
  });

  document.body.style.overflow = 'hidden';
}

// ═══════════════════════════════════════════════════════════════
// 2. NAVBAR
// ═══════════════════════════════════════════════════════════════

function initNavbar() {
  const navbar   = el('navbar');
  const hamBtn   = el('hamburger-btn');
  const overlay  = el('menu-overlay');
  const panel    = el('menu-panel');
  const closeBtn = el('menu-close-btn');
  const logoBtn  = el('nav-logo-btn');

  // scroll darken
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  function openMenu() {
    overlay.classList.remove('hidden');
    panel.classList.remove('menu-panel-hidden');
    panel.classList.add('menu-panel-open');
  }
  function closeMenu() {
    overlay.classList.add('hidden');
    panel.classList.remove('menu-panel-open');
    panel.classList.add('menu-panel-hidden');
  }

  hamBtn.addEventListener('click', openMenu);
  overlay.addEventListener('click', closeMenu);
  closeBtn.addEventListener('click', closeMenu);

  logoBtn.addEventListener('click', () => {
    el('seccion-proyecto').scrollIntoView({ behavior: 'smooth' });
  });

  document.querySelectorAll('.menu-item').forEach(btn => {
    btn.addEventListener('click', () => {
      closeMenu();
      const target = el(btn.dataset.target);
      if (target) setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 180);
    });
  });
}

// ═══════════════════════════════════════════════════════════════
// 3. HORIZONTAL SCROLL
// ═══════════════════════════════════════════════════════════════

function initSlides() {
  const stage  = el('seccion-proyecto');
  const slides = Array.from(stage.querySelectorAll('.slide'));
  const prev   = el('slide-prev');
  const next   = el('slide-next');
  const dots   = Array.from(stage.querySelectorAll('.slide-dot'));
  let cur = 0;

  function go(n) {
    cur = Math.max(0, Math.min(slides.length - 1, n));
    slides.forEach((sl, i) => sl.classList.toggle('is-next', i > cur));
    prev.disabled = cur === 0;
    next.disabled = cur === slides.length - 1;
    dots.forEach((d, i) => d.classList.toggle('active', i === cur));
    stage.querySelectorAll('.slide-card.open').forEach(c => c.classList.remove('open'));
  }
  prev.addEventListener('click', () => go(cur - 1));
  next.addEventListener('click', () => go(cur + 1));
  dots.forEach((d, i) => d.addEventListener('click', () => go(i)));
  document.addEventListener('keydown', e => {
    const r = stage.getBoundingClientRect();
    if (r.bottom < 0 || r.top > innerHeight * 0.5) return;
    if (e.key === 'ArrowRight') go(cur + 1);
    if (e.key === 'ArrowLeft')  go(cur - 1);
  });

  slides.forEach(sl => sl.querySelector('.slide-card').addEventListener('click', e => {
    if (e.target.closest('button, a')) return;
    sl.querySelector('.slide-card').classList.toggle('open');
  }));
  go(0);
}

// ═══════════════════════════════════════════════════════════════
// 4. TRAILER scroll reveal + autoplay
// ═══════════════════════════════════════════════════════════════

const TRAILER_ID = 'cmlITg5xIb0';
function trailerSrc(extra) {
  const origin = location.protocol.startsWith('http') ? '&origin=' + encodeURIComponent(location.origin) : '';
  return 'https://www.youtube.com/embed/' + TRAILER_ID + '?rel=0&modestbranding=1&playsinline=1&enablejsapi=1' + origin + (extra || '');
}

function initTrailer() {
  const section = el('trailer-video-section');
  const wrap    = el('trailer-iframe-wrap');
  const iframe  = el('trailer-iframe');
  const hero    = el('trailer-hero');
  const back    = el('trailer-back-btn');
  let bgStarted = false;
  let watching  = false;
  iframe.src = trailerSrc();

  function update() {
    if (!section) return;
    if (isMobile()) {
      wrap.style.transform = 'none';
      wrap.style.opacity = '1';
      return;
    }
    const rect = section.getBoundingClientRect();
    const vh   = window.innerHeight;
    const entry = 1 - Math.max(0, Math.min(1, rect.top / vh));
    const safe  = isFinite(entry) ? entry : 0;
    wrap.style.transform = `translateY(${Math.round((1 - safe) * 100)}px)`;
    wrap.style.opacity   = safe;

    if (safe > 0.85 && !bgStarted && !watching) {
      bgStarted = true;
      iframe.src = trailerSrc('&autoplay=1&mute=1&controls=0&loop=1&playlist=' + TRAILER_ID);
    }
  }

  function setWatching(on) {
    watching = on;
    section.classList.toggle('is-watching', on);
    back.hidden = !on;
    iframe.src = on ? trailerSrc('&autoplay=1') : trailerSrc('&autoplay=1&mute=1&controls=0&loop=1&playlist=' + TRAILER_ID);
  }

  el('trailer-play-btn').addEventListener('click', () => setWatching(true));
  back.addEventListener('click', () => setWatching(false));
  window.addEventListener('scroll', update, { passive: true });
  update();
}

// ═══════════════════════════════════════════════════════════════
// 5. EMPRENDIMIENTOS — productos arrastrables + canasta + ficha
// ═══════════════════════════════════════════════════════════════

let empActivo = 1;
let fichaMap = null;

function monogram(emp) {
  return emp.nombre.replace(/^(La|El|Los|Las)\s+/i, '').charAt(0);
}

function openEmpModal(empId, producto) {
  const emp = emprendimientos.find(e => e.id === empId);
  if (!emp) return;
  const modalContent = el('emp-modal-content');
  modalContent.classList.toggle('product-modal-box', Boolean(producto));

  const fotos = emprendimientoFotos[emp.id] || [];

  const instagramBtn = emp.instagramUrl ? `
    <a href="${emp.instagramUrl}" target="_blank" rel="noopener noreferrer" class="ficha-contact-btn ficha-instagram">
      <span>${socialSvg.instagram}</span> Instagram
    </a>` : '';
  const whatsappBtn = emp.whatsapp ? `
    <a href="${emp.whatsapp}" target="_blank" rel="noopener noreferrer" class="ficha-contact-btn ficha-whatsapp">
      WhatsApp
    </a>` : '';
  const facebookBtn = emp.facebookUrl ? `
    <a href="${emp.facebookUrl}" target="_blank" rel="noopener noreferrer" class="ficha-contact-btn ficha-facebook">
      <span>${socialSvg.facebook}</span> Facebook
    </a>` : '';
  const contactButtons = instagramBtn || whatsappBtn || facebookBtn
    ? `<div class="ficha-contact-actions">${whatsappBtn}${instagramBtn}${facebookBtn}</div>`
    : '<p class="ficha-contact-pending">Datos de contacto próximamente.</p>';

  if (producto) {
    if (fichaMap) { fichaMap.remove(); fichaMap = null; }
    modalContent.innerHTML = `
      <button class="modal-x-btn" onclick="closeModal('emp-modal')" style="float:right">×</button>
      <div class="product-quick-card">
        <img src="${producto.img}" alt="${producto.nombre}">
        <span>Producto de ${emp.nombre}</span>
        <h2>${producto.nombre}</h2>
        ${producto.precio ? `<div class="product-price">$${producto.precio.toLocaleString('es-CO')} COP</div>` : ''}
        <p>${producto.descripcion}</p>
        <small>${producto.detalles.join(' · ')}</small>
        ${contactButtons}
      </div>
    `;
    openModal('emp-modal');
    modalContent.scrollTop = 0;
    return;
  }

  const fotosHtml = fotos.length ? `
    <div style="margin-bottom:1.25rem">
      <div style="color:rgba(124,21,36,.7);font-size:.72rem;text-transform:uppercase;letter-spacing:.1em;margin-bottom:.65rem;font-weight:700">Sus productos — clic para ampliar</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:.5rem">
        ${fotos.map(url => `<img src="${url}" alt="" onclick="openLightbox('${url}')" style="width:100%;aspect-ratio:3/2;object-fit:cover;border-radius:.5rem;cursor:zoom-in;transition:transform .2s" onmouseover="this.style.transform='scale(1.04)'" onmouseout="this.style.transform='scale(1)'">`).join('')}
      </div>
    </div>` : '';

  const caraHtml = emp.caracteristicas.map(c => `
    <li style="display:flex;align-items:center;gap:.5rem;color:var(--vino-dark);font-size:.88rem">
      <div style="width:6px;height:6px;border-radius:50%;background:#F6A443;flex-shrink:0"></div>${c}
    </li>`).join('');

  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=' + emp.lat + ',' + emp.lng;

  modalContent.innerHTML = `
    <button class="modal-x-btn" onclick="closeModal('emp-modal')" style="float:right">×</button>
    <div style="height:8px;margin:-2rem -2rem 1.25rem;background:linear-gradient(90deg,#971B2C,#F6A443,#F8B472)"></div>
    <div class="ficha-logo" style="clear:both">
      ${emp.logo ? `<img src="${emp.logo}" alt="Logo ${emp.nombre}">` : `<div class="ficha-monogram">${monogram(emp)}</div>`}
    </div>
    <h2 style="font-family:var(--font-display);color:var(--vino);font-size:1.8rem;margin:0 0 .2rem;text-align:center">${emp.nombre}</h2>
    <p style="text-align:center;margin:0 0 1rem">
      <span style="display:inline-block;background:#F6A443;color:#5E0F1C;font-weight:700;font-size:.8rem;padding:.25rem .8rem;border-radius:100px">Emprendimiento local</span></p>
    ${fotosHtml}
    <p style="color:var(--vino-dark);line-height:1.7;margin:0 0 1.25rem;font-size:.9rem">${emp.descripcion}</p>
    <div style="margin-bottom:1.25rem;display:flex;flex-direction:column;gap:.35rem">
      <div style="display:flex;gap:.5rem;color:var(--vino-dark);font-size:.85rem"><span>📍</span><span>${emp.direccion}</span></div>
      <div style="display:flex;gap:.5rem;color:var(--vino-dark);font-size:.85rem"><span>📞</span><span>${emp.telefono}</span></div>
      <div style="display:flex;gap:.5rem;color:var(--vino-dark);font-size:.85rem"><span>🕐</span><span>${emp.dias}</span></div>
    </div>
    ${contactButtons}
    <ul style="margin:0 0 1.25rem;padding:0;list-style:none;display:flex;flex-direction:column;gap:.35rem">${caraHtml}</ul>
    <div style="color:rgba(124,21,36,.7);font-size:.72rem;text-transform:uppercase;letter-spacing:.1em;margin-bottom:.65rem;font-weight:700">Ubicación</div>
    <div id="ficha-map" class="ficha-map"></div>
    <a class="ficha-maplink" href="${mapsUrl}" target="_blank" rel="noopener noreferrer">Cómo llegar ↗</a>
  `;
  openModal('emp-modal');
  modalContent.scrollTop = 0;

  if (fichaMap) { fichaMap.remove(); fichaMap = null; }
  if (typeof L !== 'undefined') {
    fichaMap = L.map('ficha-map', { scrollWheelZoom: false }).setView([emp.lat, emp.lng], 16);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      maxZoom: 20, subdomains: 'abcd', attribution: '&copy; OpenStreetMap &copy; CARTO'
    }).addTo(fichaMap);
    L.marker([emp.lat, emp.lng], { icon: createPinIcon(catColor(emp.id)) }).addTo(fichaMap);
    setTimeout(() => fichaMap && fichaMap.invalidateSize(), 120);
  }
}
window.openEmpModal = openEmpModal;

function createPinIcon(color) {
  return L.divIcon({
    className: 'senh-pin',
    html: `<svg width="38" height="50" viewBox="0 0 38 50"><path d="M19 48C19 48 3 31 3 19a16 16 0 0132 0c0 12-16 29-16 29z" fill="${color}" stroke="#FFF8DA" stroke-width="3"/><circle cx="19" cy="19" r="6" fill="#FFF8DA"/></svg>`,
    iconSize: [38, 50],
    iconAnchor: [19, 48],
  });
}

function openLightbox(url) {
  el('lightbox-img').src = url;
  openModal('lightbox');
}
window.openLightbox = openLightbox;

function renderProductos() {
  const items  = el('emp-items');
  const basket = el('emp-basket');
  items.innerHTML = '';
  const track = document.createElement('div');
  track.className = 'emp-products-track';
  items.appendChild(track);
  items.classList.remove('swap');
  void items.offsetWidth;
  items.classList.add('swap');

  const selectedProducts = productos.filter(p => p.emp === empActivo);
  if (!selectedProducts.length) return;
  const sequence = [];
  while (sequence.length < 5) sequence.push(...selectedProducts);
  const railProducts = [...sequence, ...sequence];

  railProducts.forEach((prod, index) => {
    const emp = emprendimientos.find(e => e.id === prod.emp);
    const img = prod.img;
    const card = document.createElement('div');
    card.className = 'emp-item';
    const duplicate = index >= sequence.length;
    card.tabIndex = duplicate ? -1 : 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', prod.nombre + ': arrastra al carrito para ver su ficha técnica');
    if (duplicate) card.setAttribute('aria-hidden', 'true');
    card.style.setProperty('--x', prod.x);
    card.style.setProperty('--y', prod.y);
    card.style.setProperty('--r', prod.r);
    card.style.setProperty('--d', (-Math.random() * 4).toFixed(2) + 's');
    card.innerHTML = `<img src="${img}" alt="${prod.nombre}" draggable="false"/><div class="emp-item-name">${prod.nombre}</div>`;
    track.appendChild(card);

    let sx = 0, sy = 0, moved = false, ghost = null, gw = 0, gh = 0;
    const overBasket = (x, y) => {
      const r = basket.getBoundingClientRect();
      return x > r.left + r.width * .08 && x < r.right - r.width * .08 && y > r.top - 20 && y < r.bottom;
    };
    const place = (x, y, extra = '') => {
      ghost.style.transform = `translate(${x - gw / 2}px, ${y - gh / 2}px) ${extra}`;
    };
    const startGhost = e => {
      const r = card.getBoundingClientRect();
      gw = r.width; gh = r.height;
      ghost = card.cloneNode(true);
      ghost.removeAttribute('tabindex'); ghost.removeAttribute('aria-label');
      ghost.className = 'emp-item emp-ghost';
      ghost.style.cssText = `width:${gw}px;left:0;top:0;`;
      document.body.appendChild(ghost);
      place(e.clientX, e.clientY, 'scale(1.08)');
      card.classList.add('lifted');
    };
    const dispose = () => { if (ghost) { ghost.remove(); ghost = null; } card.classList.remove('lifted'); };
    card.addEventListener('pointerdown', e => {
      if (card.classList.contains('dragging')) return;
      card.setPointerCapture(e.pointerId);
      sx = e.clientX; sy = e.clientY; moved = false;
      card.classList.add('dragging');
    });
    card.addEventListener('pointermove', e => {
      if (!card.classList.contains('dragging')) return;
      if (!moved && Math.abs(e.clientX - sx) + Math.abs(e.clientY - sy) > 6) { moved = true; startGhost(e); }
      if (!moved) return;
      place(e.clientX, e.clientY, 'scale(1.08)');
      basket.classList.toggle('hot', overBasket(e.clientX, e.clientY));
    });
    const end = e => {
      if (!card.classList.contains('dragging')) return;
      card.classList.remove('dragging');
      basket.classList.remove('hot');
      if (!moved || !ghost) return;
      if (e.type !== 'pointercancel' && overBasket(e.clientX, e.clientY)) {
        const b = basket.getBoundingClientRect();
        ghost.classList.add('flying');
        place(b.left + b.width / 2, b.top + b.height * .55, 'scale(.25)');
        const g = ghost;
        setTimeout(() => { openEmpModal(prod.emp, prod); if (g === ghost) dispose(); }, 450);
      } else {
        ghost.classList.add('returning');
        const r = card.getBoundingClientRect();
        place(r.left + r.width / 2, r.top + r.height / 2);
        setTimeout(dispose, 320);
      }
    };
    card.addEventListener('pointerup', end);
    card.addEventListener('pointercancel', end);
  });
}

function initEmprendimientos() {
  const filtersEl = el('cat-filters');
  const activeLogo = el('emp-active-logo');
  const dropZone = document.querySelector('.emp-drop-zone');
  const mobileQuery = window.matchMedia('(max-width: 768px)');
  const syncProfilePosition = () => {
    if (mobileQuery.matches) {
      filtersEl.before(activeLogo);
    } else {
      dropZone.insertBefore(activeLogo, dropZone.firstChild);
    }
  };
  const paint = () => {
    filtersEl.querySelectorAll('.cat-btn').forEach((b, i) => {
      const emp = emprendimientos[i], on = emp.id === empActivo;
      b.style.setProperty('--emp-color', emp.color);
      b.setAttribute('aria-pressed', on);
    });
    const selected = emprendimientos.find(emp => emp.id === empActivo);
    const whatsappLink = selected.whatsapp
      ? `<a class="emp-link-wa" href="${selected.whatsapp}" target="_blank" rel="noopener noreferrer"><i>${socialSvg.whatsapp}</i>WhatsApp</a>`
      : '';
    const instagramLink = selected.instagramUrl
      ? `<a class="emp-link-ig" href="${selected.instagramUrl}" target="_blank" rel="noopener noreferrer"><i>${socialSvg.instagram}</i>Instagram</a>`
      : '';
    const facebookLink = selected.facebookUrl
      ? `<a class="emp-link-fb" href="${selected.facebookUrl}" target="_blank" rel="noopener noreferrer"><i>${socialSvg.facebook}</i>Facebook</a>`
      : '';
    activeLogo.innerHTML = `
      <article class="emp-profile-card">
        ${selected.logo
          ? `<img class="emp-profile-logo" src="${selected.logo}" alt="Logo ${selected.nombre}">`
          : `<div class="emp-profile-wordmark">${selected.nombre}</div>`}
        <div class="emp-profile-copy">
          <strong>${selected.nombre}</strong>
          <p>${selected.descripcion}</p>
          <div class="emp-profile-meta">
            <small><b>Contacto:</b> ${selected.telefono}</small>
            <small><b>Ubicación:</b> ${selected.direccion}</small>
          </div>
          ${whatsappLink || instagramLink || facebookLink ? `<div class="emp-profile-links">${whatsappLink}${instagramLink}${facebookLink}</div>` : ''}
        </div>
      </article>`;
  };
  emprendimientos.forEach(emp => {
    const btn = document.createElement('button');
    btn.className = 'cat-btn';
    btn.textContent = emp.nombre;
    btn.addEventListener('click', () => { empActivo = emp.id; paint(); renderProductos(); });
    filtersEl.appendChild(btn);
  });
  syncProfilePosition();
  mobileQuery.addEventListener('change', syncProfilePosition);
  paint();
  renderProductos();

  el('emp-modal').addEventListener('click', e => { if (e.target === el('emp-modal')) closeModal('emp-modal'); });
  el('lightbox').addEventListener('click', e => { if (e.target === el('lightbox')) closeModal('lightbox'); });
  el('lightbox-close').addEventListener('click', () => closeModal('lightbox'));
}

// ═══════════════════════════════════════════════════════════════
// 8. COMUNIDAD MARQUEE
// ═══════════════════════════════════════════════════════════════


function initComunidad() {
  const track = el('marquee-track');
  const allPosts = [...socialPosts, ...socialPosts]; // doubled for infinite

  allPosts.forEach(post => {
    const a = document.createElement('a');
    a.href   = post.link;
    a.target = '_blank';
    a.rel    = 'noopener noreferrer';
    a.className = 'marquee-card';

    const platBg = '#971B2C';
    if (post.story) {
      a.classList.add('marquee-card-embed','marquee-card-story');
      a.innerHTML = `<img class="story-card-img" src="img/the_crew.jpeg" alt="Historia de Instagram: The Crew" loading="lazy"/><span class="marquee-card-embed-badge">${socialSvg.instagram} Ver historia</span>`;
      track.appendChild(a);
      return;
    }
    if (post.embed) {
      a.classList.add('marquee-card-embed');
      const platformName = post.plataforma === 'tiktok' ? 'TikTok' : 'Instagram';
      a.classList.toggle('marquee-card-embed-tiktok', post.plataforma === 'tiktok');
      a.innerHTML = `<iframe src="${post.embed}" title="Publicación de ${platformName}" loading="lazy" scrolling="no" tabindex="-1" allow="encrypted-media; picture-in-picture"></iframe><span class="marquee-card-embed-badge">${socialSvg[post.plataforma]} Ver en ${platformName}</span>`;
      track.appendChild(a);
      return;
    }
    a.innerHTML = `
      <div class="marquee-card-photo-wrap">
        <img src="${post.photo}" alt="" loading="lazy"/>
        <div class="marquee-card-gradient"></div>
        <div class="marquee-card-top">
          <div class="marquee-card-plat-icon" style="background:${platBg}">
            ${socialSvg[post.plataforma] || ''}
          </div>
          <div class="marquee-card-user">${post.usuario}</div>
        </div>
        <div class="marquee-card-bottom">
          <p class="marquee-card-text">${post.texto}</p>
          <div class="marquee-card-likes">&#9829; ${post.likes.toLocaleString()}</div>
        </div>
      </div>
    `;
    track.appendChild(a);
  });
}



// ═══════════════════════════════════════════════════════════════
// 9. MERCHANDISING
// ═══════════════════════════════════════════════════════════════

function openMerchModal(idx) {
  const item = merch[idx];
  const caraHtml = item.caracteristicas.map(c => `
    <li style="display:flex;align-items:center;gap:.5rem;color:var(--vino-dark);font-size:.9rem">
      <div style="width:7px;height:7px;border-radius:50%;background:#971B2C;flex-shrink:0"></div>${c}
    </li>`).join('');

  el('merch-modal-content').innerHTML = `
    <button class="modal-x-btn" onclick="closeModal('merch-modal')" style="float:right">×</button>
    <div style="border-radius:.75rem;overflow:hidden;margin-bottom:1.5rem;clear:both;max-height:380px;background:rgba(248,180,114,.35)">
      <img src="${item.img}" alt="${item.nombre}" style="width:100%;height:380px;object-fit:cover"/>
    </div>
    <h2 style="font-family:var(--font-display);color:var(--vino);font-size:2rem;margin:0 0 .2rem">${item.nombre}</h2>
    <p style="color:var(--vino-dark);font-family:var(--font-body);font-weight:700;font-size:1rem;margin:0 0 1rem">${item.precio}</p>
    <p style="color:var(--vino-dark);line-height:1.75;margin:0 0 1.25rem;font-size:.9rem">${item.descripcion}</p>
    <div style="margin-bottom:1.25rem">
      <div style="color:rgba(124,21,36,.7);font-size:.72rem;text-transform:uppercase;letter-spacing:.1em;margin-bottom:.65rem;font-weight:700">Características</div>
      <ul style="margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:.4rem">${caraHtml}</ul>
    </div>
    <a href="https://wa.me/573006983873" target="_blank" rel="noopener noreferrer"
       style="display:flex;align-items:center;justify-content:center;gap:.5rem;background:#25D366;color:#fff;padding:.7rem;border-radius:100px;font-size:.95rem;font-weight:700;text-decoration:none">
      <span style="width:18px;height:18px;display:inline-flex">${socialSvg.whatsapp}</span>
      Pedir por WhatsApp
    </a>
  `;
  openModal('merch-modal');
  el('merch-modal').addEventListener('click', function onBd(e) {
    if (e.target === el('merch-modal')) { closeModal('merch-modal'); el('merch-modal').removeEventListener('click', onBd); }
  });
}

function initMerchandising() {
  const grid = el('merch-grid');
  merch.forEach((item, i) => {
    const btn = document.createElement('button');
    btn.className = 'merch-card';
    btn.innerHTML = `
      <div class="merch-card-img-wrap"><img src="${item.img}" alt="${item.nombre}" loading="lazy"/></div>
      <div class="merch-card-name">${item.nombre}</div>
      <div class="merch-card-price">${item.precio}</div>
      <div class="merch-card-desc">${item.descripcion.slice(0, 80)}...</div>
      <div class="merch-card-cta">Ver ficha <span>→</span></div>
    `;
    btn.addEventListener('click', () => openMerchModal(i));
    grid.appendChild(btn);
  });
}

// ═══════════════════════════════════════════════════════════════
// 10. PRODUCTORA
// ═══════════════════════════════════════════════════════════════

function initProductora() {
  const productora     = el('productora');
  const luminartBox    = el('prod-luminart-box');
  const equipoBox      = el('prod-equipo-box');
  const luminartBackBtn = el('luminart-back-btn');
  const equipoBackBtn  = el('equipo-back-btn');

  luminartBox.addEventListener('click', () => {
    productora.classList.remove('show-equipo');
    productora.classList.add('show-luminart');
  });
  equipoBox.addEventListener('click', () => {
    productora.classList.remove('show-luminart');
    productora.classList.add('show-equipo');
  });
  luminartBackBtn.addEventListener('click', () => productora.classList.remove('show-luminart'));
  equipoBackBtn.addEventListener('click',   () => productora.classList.remove('show-equipo'));


  // Render equipo cards
  const cardsEl = el('equipo-cards');
  equipo.forEach((m, i) => {
    const card = document.createElement('div');
    card.className = 'equipo-card';
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-expanded', 'false');
    card.setAttribute('aria-label', `Ver información de ${m.nombre}`);
    card.innerHTML = `
      <img src="${m.photo}" alt="${m.nombre}" class="card-photo" loading="lazy"/>
      <div class="card-gradient"></div>
      <div class="card-info">
        <div class="card-nombre">${m.nombre}</div>
        <div class="card-rol">${m.rol}</div>
        <div class="card-reveal"><div class="card-reveal-inner">
          <p class="card-desc">${m.descripcion}</p>
          <div class="card-socials">
            <a href="${m.redes.ig}" target="_blank" rel="noopener noreferrer" class="card-social-link" style="background:#971B2C" onclick="event.stopPropagation()">${socialSvg.instagram}</a>
            <a href="${m.redes.fb}" target="_blank" rel="noopener noreferrer" class="card-social-link" style="background:#971B2C" onclick="event.stopPropagation()">${socialSvg.facebook}</a>
            <a href="${m.redes.tk}" target="_blank" rel="noopener noreferrer" class="card-social-link" style="background:#971B2C" onclick="event.stopPropagation()">${socialSvg.tiktok}</a>
            <a href="${m.redes.yt}" target="_blank" rel="noopener noreferrer" class="card-social-link" style="background:#971B2C" onclick="event.stopPropagation()">${socialSvg.youtube}</a>
          </div>
          <a href="${m.portfolio}" target="_blank" rel="noopener noreferrer" class="card-portfolio" onclick="event.stopPropagation()">Portafolio →</a>
        </div></div>
      </div>
    `;
    const toggleCard = () => {
      if (!isMobile()) return;
      const willOpen = !card.classList.contains('is-open');
      cardsEl.querySelectorAll('.equipo-card.is-open').forEach(openCard => {
        openCard.classList.remove('is-open');
        openCard.setAttribute('aria-expanded', 'false');
      });
      card.classList.toggle('is-open', willOpen);
      card.setAttribute('aria-expanded', String(willOpen));
    };
    card.addEventListener('click', toggleCard);
    card.addEventListener('keydown', event => {
      if (event.target.closest('a')) return;
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      toggleCard();
    });
    cardsEl.appendChild(card);
  });
}

// ═══════════════════════════════════════════════════════════════
// 12. CONTACTO
// ═══════════════════════════════════════════════════════════════

function initContacto() {
  const redes = [
    { nombre:'Instagram', svg:socialSvg.instagram, url:'https://www.instagram.com/siestenegociohablara?igsh=MWowcDIwODg5MHZ3eQ==' },
    { nombre:'TikTok',    svg:socialSvg.tiktok,    url:'https://www.tiktok.com/@si.este.negocio.h?_r=1&_t=ZS-97jk6o3AjTx' },
    { nombre:'YouTube',   svg:socialSvg.youtube,   url:'https://youtube.com/@siestenegociohablara?si=Qf3LQG_yinMmsfqB' },
  ];

  const linksEl = el('contact-links');
  redes.forEach(r => {
    const a = document.createElement('a');
    a.href   = r.url;
    a.target = '_blank';
    a.rel    = 'noopener noreferrer';
    a.className = 'contact-link';
    a.innerHTML = `
      <div class="contact-link-circle">${r.svg}</div>
      <span class="contact-link-label">${r.nombre}</span>
    `;
    linksEl.appendChild(a);
  });
}

// ═══════════════════════════════════════════════════════════════
// 13. INTERSECTION OBSERVER — section-fade
// ═══════════════════════════════════════════════════════════════

function initIntersectionObserver() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.section-fade').forEach(el => obs.observe(el));
}

// ═══════════════════════════════════════════════════════════════
// 14. ODS MODAL (inline in panel + standalone)
// ═══════════════════════════════════════════════════════════════

function initOdsPanel() {
  const conoceBtn  = el('ods-conoce-btn');
  const backBtn    = el('ods-back-btn');
  const whatBtn    = el('ods-what-btn');
  const initial    = el('ods-initial');
  const expanded   = el('ods-expanded');

  if (conoceBtn) {
    conoceBtn.addEventListener('click', () => {
      initial.classList.add('hidden');
      expanded.classList.remove('hidden');
    });
  }
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      expanded.classList.add('hidden');
      initial.classList.remove('hidden');
    });
  }
  if (whatBtn) {
    whatBtn.addEventListener('click', () => openModal('ods-modal'));
  }

  // ODS modal close buttons
  document.querySelectorAll('.modal-close-btn[data-modal="ods-modal"]').forEach(btn => {
    btn.addEventListener('click', () => closeModal('ods-modal'));
  });
  el('ods-modal').addEventListener('click', e => {
    if (e.target === el('ods-modal')) closeModal('ods-modal');
  });
}

// ═══════════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  initSplash();
  initNavbar();
  initSlides();
  initTrailer();
  initEmprendimientos();
  initComunidad();
  initMerchandising();
  initProductora();
  initContacto();
  initIntersectionObserver();
  initOdsPanel();
});
