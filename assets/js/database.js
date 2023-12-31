const items = [
  {
    "id": 1,
    "name": "Botas",
    "description": "   25  de Velocidad de Movimiento   ",
    "tag1": "Boots",
    "totalGold": 300,
    "sellGold": 210,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/1001.png"
  },
  {
    "id": 2,
    "name": "Amuleto de las Hadas",
    "description": "   50%  de Regen. de Maná Básica   ",
    "tag1": "ManaRegen",
    "totalGold": 250,
    "sellGold": 175,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/1004.png"
  },
  {
    "id": 3,
    "name": "Perla de Rejuvenecimiento",
    "description": "   100%  de Regen. de Vida Básica   ",
    "tag1": "HealthRegen",
    "totalGold": 300,
    "sellGold": 120,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/1006.png"
  },
  {
    "id": 4,
    "name": "Cinturón de Gigante",
    "description": "   350  de Vida   ",
    "class": "Tanque",
    "totalGold": 900,
    "sellGold": 630,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/1011.png"
  },
  {
    "id": 5,
    "name": "Capa de Agilidad",
    "description": "   15%  de Probabilidad de Golpe Crítico   ",
    "tag1": "CriticalStrike",
    "totalGold": 600,
    "sellGold": 420,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/1018.png"
  },
  {
    "id": 6,
    "name": "Varita Explosiva",
    "description": "   40  de Poder de Habilidad   ",
    "class": "Mago",
    "totalGold": 850,
    "sellGold": 595,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/1026.png"
  },
  {
    "id": 7,
    "name": "Cristal de Zafiro",
    "description": "   250  de Maná   ",
    "class": "Mago",
    "totalGold": 350,
    "sellGold": 245,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/1027.png"
  },
  {
    "id": 8,
    "name": "Cristal de Rubí",
    "description": "   150  de Vida   ",
    "class": "Tanque",
    "totalGold": 400,
    "sellGold": 280,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/1028.png"
  },
  {
    "id": 9,
    "name": "Armadura de Tela",
    "description": "   15  de Armadura   ",
    "class": "Tanque",
    "totalGold": 300,
    "sellGold": 210,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/1029.png"
  },
  {
    "id": 10,
    "name": "Cota de Malla",
    "description": "   40  de Armadura   ",
    "class": "Tanque",
    "totalGold": 800,
    "sellGold": 560,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/1031.png"
  },
  {
    "id": 11,
    "name": "Manto Anulamagia",
    "description": "   25  de Resistencia Mágica   ",
    "class": "Tanque",
    "totalGold": 450,
    "sellGold": 315,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/1033.png"
  },
  {
    "id": 12,
    "name": "Cuchillo Ámbar",
    "description": "     Abrasar:  Infligir daño a los monstruos los quema con daño prolongado.  Camino Desafiante:  Usar Castigo 5 veces consume este objeto, mejora tu Castigo a  Castigo Desafiante  y aumenta su daño contra monstruos. Castigo Desafiante marca a los campeones. Durante ese tiempo, les infliges daño verdadero adicional al impacto y recibes daño reducido de ellos.  Cazador:  Matar monstruos grandes otorga experiencia adicional.  Recuperación:  Regeneras Maná al estar en la jungla o en el río.     Consumir  este objeto otorga todos los efectos del objeto de forma permanente y aumenta el daño que inflige Castigo a monstruos. Si has obtenido más oro de súbditos que de monstruos de la jungla, el oro y la experiencia de súbditos se reducen de forma considerable. La curación no se reduce con ataques de área. Si estás dos niveles por debajo del nivel promedio de los campeones del juego, matar monstruos otorga experiencia adicional.     Solo los ataques y las habilidades aplican la quemadura de Castigo Desafiante   ",
    "tag1": "LifeSteal",
    "tag2": "SpellVamp",
    "tag3": "Jungle",
    "totalGold": 350,
    "sellGold": 140,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/1035.png"
  },
  {
    "id": 13,
    "name": "Espada Larga",
    "description": "   10  de Daño de Ataque   ",
    "class": "Asesino",
    "totalGold": 350,
    "sellGold": 245,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/1036.png"
  },
  {
    "id": 14,
    "name": "Picacha",
    "description": "   25  de Daño de Ataque   ",
    "class": "Tanque",
    "totalGold": 875,
    "sellGold": 613,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/1037.png"
  },
  {
    "id": 15,
    "name": "Espadón",
    "description": "   40  de Daño de Ataque   ",
    "class": "Tirador",
    "totalGold": 1300,
    "sellGold": 910,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/1038.png"
  },
  {
    "id": 16,
    "name": "Hoja Granizo",
    "description": "     Abrasar:  Infligir daño a monstruos los quema con daño prolongado.  Camino Devastador:  Usar Castigo 5 veces consume este objeto, mejora tu Castigo a  Castigo Devastador  y aumenta su daño contra monstruos. Usar Castigo Devastador en campeones inflige daño verdadero y roba su Velocidad de Movimiento  Cazador:  Matar monstruos grandes otorga experiencia adicional.  Recuperación:  Regenera Maná cuando estés en la jungla o en el río.     Consumir  este objeto otorga todos los efectos del objeto de forma permanente y aumenta el daño que inflige Castigo a monstruos. Si has obtenido más oro de súbditos que de monstruos de la jungla, el oro y la experiencia de súbditos se reducen de forma considerable. La curación no se reduce con ataques de área. Si estás dos niveles por debajo del nivel promedio de los campeones del juego, matar monstruos otorga experiencia adicional.      ",
    "tag1": "LifeSteal",
    "tag2": "SpellVamp",
    "tag3": "Jungle",
    "totalGold": 350,
    "sellGold": 140,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/1039.png"
  },
  {
    "id": 17,
    "name": "Filo de Obsidiana",
    "description": "     Abrasar:  Infligir daño a monstruos los quema con daño prolongado.  Piloto Automático:  Usar Castigo 5 veces consume este objeto y mejora tu Castigo de ataque, lo que aumenta el daño infligido a monstruos.  Cazador:  Matar monstruos grandes otorga experiencia adicional.  Recuperación:  Regenera Maná cuando estés en la jungla o en el río.     Consumir  este objeto otorga todos los efectos del objeto de forma permanente y aumenta el daño que inflige Castigo a monstruos. Si has obtenido más oro de súbditos que de monstruos de la jungla, el oro y la experiencia de súbditos se reducen de forma considerable. La curación no se reduce con ataques de área. Si estás dos niveles por debajo del nivel promedio de los campeones del juego, matar monstruos otorga experiencia adicional.    ",
    "tag1": "LifeSteal",
    "tag2": "SpellVamp",
    "tag3": "Jungle",
    "totalGold": 350,
    "sellGold": 140,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/1040.png"
  },
  {
    "id": 18,
    "name": "Daga",
    "description": "   12%  de Velocidad de Ataque   ",
    "class": "Tirador",
    "totalGold": 300,
    "sellGold": 210,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/1042.png"
  },
  {
    "id": 19,
    "name": "Arco Recurvado",
    "description": "   15%  de Velocidad de Ataque    Punta de Acero:  Los ataques aplican daño mágico al impacto.  ",
    "class": "Tirador",
    "totalGold": 700,
    "sellGold": 490,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/1043.png"
  },
  {
    "id": 20,
    "name": "Libro Amplificador",
    "description": "   20  de Poder de Habilidad   ",
    "class": "Mago",
    "totalGold": 435,
    "sellGold": 305,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/1052.png"
  },
  {
    "id": 21,
    "name": "Cetro Vampírico",
    "description": "   15  de Daño de Ataque  7%  de Robo de Vida   ",
    "class": "Asesino",
    "totalGold": 900,
    "sellGold": 630,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/1053.png"
  },
  {
    "id": 22,
    "name": "Escudo de Doran",
    "description": "   80  de Vida    Enfoque:  Los ataques infligen daño adicional a súbditos.  Restauración:  Restaura Vida con el tiempo.  Resistir:  Restaura vida luego de recibir daño de un campeón, un monstruo grande de la jungla o un monstruo épico de la jungla. La restauración aumenta cuando tienes poca vida.    Resistencia  66% efectiva cuando lo compran campeones a distancia o al recibir daño de efectos de área o fuentes de daño periódico.   ",
    "class": "Tanque",
    "totalGold": 450,
    "sellGold": 180,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/1054.png"
  },
  {
    "id": 23,
    "name": "Espada de Doran",
    "description": "   8  de Daño de Ataque  80  de Vida    Belicista:  Obtiene Omnivampirismo.   El Omnivampirismo solo tiene un 33% de efectividad al infligir daño de área de efecto o a través de mascotas.   ",
    "class": "Tirador",
    "totalGold": 450,
    "sellGold": 180,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/1055.png"
  },
  {
    "id": 24,
    "name": "Sortija de Doran",
    "description": "   15  de Poder de Habilidad  70  de Vida    Enfoque:  Los ataques infligen daño adicional a súbditos.   Drenar:  Restaura Maná cada segundo. Infligir daño a un campeón enemigo aumenta esta cantidad. Si no puedes obtener Maná, regenera Vida.   ",
    "class": "Mago",
    "totalGold": 400,
    "sellGold": 160,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/1056.png"
  },
  {
    "id": 25,
    "name": "Capa de Negatrones",
    "description": "   50  de Resistencia Mágica   ",
    "class": "Soporte",
    "totalGold": 900,
    "sellGold": 630,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/1057.png"
  },
  {
    "id": 26,
    "name": "Vara Innecesariamente Grande",
    "description": "   60  de Poder de Habilidad   ",
    "class": "Mago",
    "totalGold": 1250,
    "sellGold": 875,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/1058.png"
  },
  {
    "id": 27,
    "name": "El Sello de la Oscuridad",
    "description": "   15  de Poder de Habilidad  40  de Vida    Gloria:  Obtiene 2 acumulaciones por asesinato de campeón o 1 acumulación por una asistencia (hasta un total de 10 acumulaciones) Pierdes 5 acumulaciones al morir.  Pavor:  Otorga  4 de Poder de Habilidad  por cada acumulación de  Gloria .   Las acumulaciones obtenidas de  Gloria  se mantienen entre este objeto y  Robaalmas de Mejai .   ",
    "class": "Mago",
    "totalGold": 350,
    "sellGold": 140,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/1082.png"
  },
  {
    "id": 28,
    "name": "Sacrificar",
    "description": "   7  de Daño de Ataque   Los ataques restauran vida por cada golpe.  Cosechar:  Matar a un súbdito de carril otorga  1  de oro adicional. Matar a 100 súbditos de carril otorga  350  de oro adicional de forma inmediata y desactiva  Cosechar .   ",
    "tag1": "Damage",
    "tag2": "OnHit",
    "tag3": "Lane",
    "totalGold": 450,
    "sellGold": 180,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/1083.png"
  },
  {
    "id": 29,
    "name": "Cachorro de Rasgafuegos",
    "description": "     Compañeros de la Jungla:  Invoca 1  Rasgafuegos  que te asistirá en la jungla.  Tajo de Rasgafuegos:  Al crecer a su tamaño máximo, tu acompañante mejora periódicamente tu siguiente efecto de daño para que  ralentice  y  dañe  a los campeones enemigos.  ",
    "tag1": "Jungle",
    "totalGold": 450,
    "sellGold": 180,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/1101.png"
  },
  {
    "id": 30,
    "name": "Cría de Trotabrisas",
    "description": "     Compañeros de la Jungla:  Invoca 1  Trotabrisas  que te asistirá mientras estés en la jungla.  Marcha del Trotabrisas:  Al crecer a su tamaño máximo, tu acompañante otorga  Velocidad de Movimiento  tras entrar a la maleza o asesinar monstruos.  ",
    "tag1": "Jungle",
    "totalGold": 450,
    "sellGold": 180,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/1102.png"
  },
  {
    "id": 31,
    "name": "Retoño de Pisamusgo",
    "description": "     Compañeros de la Jungla:  Invoca un  Pisamusgo  que te asistirá mientras estés en la jungla.   Valor de Pisamusgo:  Al crecer a su tamaño máximo, tu acompañante otorga un  escudo permanente  que se regenera tras matar monstruos o al estar fuera del combate. Mientras el escudo está activo, obtienes un 20% de Tenacidad y Resistencia a Ralentizaciones.  ",
    "tag1": "Jungle",
    "totalGold": 450,
    "sellGold": 180,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/1103.png"
  },
  {
    "id": 54,
    "name": "Poción de Vida",
    "description": "    Activa, Consumir:  Bebe la poción para recuperar  120 de Vida  a lo largo de 15 seg.   Como máximo, puedes llevar 5 pociones de vida.   ",
    "tag1": "HealthRegen",
    "tag2": "Consumable",
    "tag3": "Lane",
    "tag4": "Jungle",
    "totalGold": 50,
    "sellGold": 20,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/2003.png"
  },
  {
    "id": 55,
    "name": "Galleta Definitiva de la Voluntad Eterna",
    "description": "    Activa, Consumir:  Come la galleta para recuperar un  8% de Vida  y  Maná  faltantes a lo largo de 5 seg. Consumir o vender una galleta otorga permanentemente  40 de Maná Máximo .  ",
    "totalGold": 50,
    "sellGold": 5,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/2010.png"
  },
  {
    "id": 56,
    "name": "Fragmento de Kircheis",
    "description": "   15  de Daño de Ataque    Energizado:  Moverte y atacar generará un ataque Energizado.  Descarga:  Los ataques energizados obtienen  60 de Daño Mágico  adicional.  ",
    "class": "Tirador",
    "totalGold": 700,
    "sellGold": 490,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/2015.png"
  },
  {
    "id": 57,
    "name": "Sello de Acero",
    "description": "   30  de Daño de Ataque    Festín:  Matar a una unidad restaura vida.  ",
    "tag1": "Damage",
    "totalGold": 1100,
    "sellGold": 770,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/2019.png"
  },
  {
    "id": 58,
    "name": "Poción Reutilizable",
    "description": "    Activa, Consumir:  Consume una carga para restaurar  100 de Vida  a lo largo de 12 seg. Contiene hasta 2 cargas que se restauran al visitar la tienda.  ",
    "tag1": "HealthRegen",
    "tag2": "Consumable",
    "tag3": "Active",
    "tag4": "Lane",
    "tag5": "Jungle",
    "totalGold": 150,
    "sellGold": 60,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/2031.png"
  },
  {
    "id": 59,
    "name": "Poción de Corrupción",
    "description": "    Activa, Consumir:  Consume una carga para restaurar  100 de Vida  y  75 de Maná  a lo largo de 12 seg. Durante este periodo, las habilidades y ataques que infligen daño queman a los campeones enemigos por  15 de daño mágico (20 si no puedes obtener maná)  a lo largo de 3 seg. Contiene hasta 3 cargas que se restauran al visitar la tienda.   El daño de corrupción se reduce un 50% al activarse por daño de área o daño prolongado.   ",
    "tag1": "Active",
    "tag2": "Consumable",
    "tag3": "HealthRegen",
    "tag4": "Lane",
    "tag5": "ManaRegen",
    "totalGold": 500,
    "sellGold": 200,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/2033.png"
  },
  {
    "id": 60,
    "name": "Cuerno del Guardián",
    "description": "   150  de Vida    Restauración:  Restaura vida por segundo.  Osadía:  Bloquea daño de los ataques y hechizos de campeones.  Legendario:  Este objeto cuenta como un objeto  Legendario .  ",
    "class": "Tanque",
    "totalGold": 950,
    "sellGold": 665,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/2051.png"
  },
  {
    "id": 62,
    "name": "Centinela de Control",
    "description": "    Activa, Consumir:  Coloca un poderoso centinela de control que otorga visión del área circundante. Este dispositivo también revela trampas  invisibles , enemigos  camuflados  y revela (y desactiva) los centinelas invisibles enemigos.    Como máximo, puedes llevar 2 centinelas de control. Los centinelas de control no desactivan otros centinelas de control.   ",
    "tag1": "Consumable",
    "tag2": "Lane",
    "tag3": "Stealth",
    "tag4": "Vision",
    "totalGold": 75,
    "sellGold": 30,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/2055.png"
  },
  {
    "id": 63,
    "name": "Canto de Guerra de Shurelya",
    "description": "   35  de Poder de Habilidad  200  de Vida  20  de Aceleración de Habilidad  100%  de Regen. de Maná Básica    Activa:   Inspiración:  Otorga velocidad de movimiento a los aliados cercanos.  Motivación:  Potenciar o proteger a otro campeón aliado les otorga velocidad de movimiento a los dos aliados.   Pasiva Mítica:  Otorga a todos los otros objetos  legendarios  de Aceleración de Habilidad.   ",
    "class": "Soporte",
    "totalGold": 2300,
    "sellGold": 1610,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/2065.png"
  },
  {
    "id": 64,
    "name": "Elixir de Hierro",
    "description": "    Activa, Consumir:  Bébelo para obtener  300 de Vida , 25% de Tenacidad y aumentar el tamaño del campeón durante 3 minutos. Al activarlo, dejas una estela al moverte que aumenta la  Velocidad de Movimiento de los campeones aliados un 15% .   Beber un elixir diferente reemplazará los efectos del existente.   ",
    "tag1": "Health",
    "tag2": "Consumable",
    "tag3": "NonbootsMovement",
    "tag4": "Tenacity",
    "totalGold": 500,
    "sellGold": 200,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/2138.png"
  },
  {
    "id": 65,
    "name": "Elixir de Brujería",
    "description": "    Activa, Consumir:  Bébelo para obtener  50 de Poder de Habilidad  y un  15% de Regen. de Maná  durante 3 minutos. Mientras está activo, dañar a un campeón o torreta inflige  25 de daño verdadero adicional  (5 seg de Enfriamiento).   Requiere que seas nivel  9  de campeón o superior para comprarlo. El efecto de daño verdadero de Elixir de Brujería no tiene enfriamiento al atacar torretas. Beber un elixir diferente reemplazará los efectos del existente.   ",
    "tag1": "Consumable",
    "tag2": "ManaRegen",
    "tag3": "SpellDamage",
    "totalGold": 500,
    "sellGold": 200,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/2139.png"
  },
  {
    "id": 66,
    "name": "Elixir de Furia",
    "description": "    Activa, Consumir:  Bébelo para obtener  30 de Daño de Ataque  y un  12% de Vampirismo Físico  (contra campeones) durante 3 minutos.   Beber un elixir diferente reemplazará los efectos del existente.   ",
    "tag1": "Consumable",
    "tag2": "Damage",
    "tag3": "LifeSteal",
    "tag4": "SpellVamp",
    "totalGold": 500,
    "sellGold": 200,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/2140.png"
  },
  {
    "id": 69,
    "name": "Cronómetro",
    "description": "    Activa:   Estasis:  Úsalo una vez para volverte  invulnerable  e  inalcanzable  durante 2.5 seg, pero impide que realices otras acciones durante este periodo (se transforma en  Cronómetro Roto ).  ",
    "class": "Mago",
    "totalGold": 750,
    "sellGold": 300,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/2420.png"
  },
  {
    "id": 70,
    "name": "Cronómetro Roto",
    "description": "      Tiempo Fragmentado:  El Cronómetro está roto, pero se puede mejorar.   Después de romper un Cronómetro, el vendedor solo te venderá  Cronómetros Rotos.    ",
    "totalGold": 750,
    "sellGold": 300,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/2421.png"
  },
  {
    "id": 71,
    "name": "Calzado Ligeramente Mágico",
    "description": "   25  de Velocidad de Movimiento   Otorga  10 de Velocidad de Movimiento  adicional. Las botas que se arman a partir de Calzado Ligeramente Mágico conservan esta velocidad de movimiento adicional.  ",
    "tag1": "Boots",
    "totalGold": 300,
    "sellGold": 90,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/2422.png"
  },
  {
    "id": 72,
    "name": "Cronómetro Preciso",
    "description": "    Activa:   Estasis:  Úsalo una vez para volverte  invulnerable  e  inalcanzable  durante 2.5 seg, pero impide que realices otras acciones durante este periodo (se transforma en  Cronómetro Roto ).  ",
    "tag1": "Active",
    "totalGold": 750,
    "sellGold": 300,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/2423.png"
  },
  {
    "id": 74,
    "name": "Manto del Ocaso",
    "description": "   200  de Vida  30  de Armadura  30  de Resistencia Mágica  20  de Aceleración de Habilidad    Chispa:  Luego de  inmovilizar  campeones o de quedar  inmovilizado , hace que el objetivo y todos los enemigos cercanos reciban daño aumentado.   Pasiva Mítica:  Otorga a todos los otros objetos  legendarios    Armadura y Resistencia Mágica   ",
    "class": "Soporte",
    "totalGold": 2300,
    "sellGold": 1610,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3001.png"
  },
  {
    "id": 75,
    "name": "Báculo del Arcángel",
    "description": "   70  de Poder de Habilidad  500  de Maná  200  de Vida  10  de Aceleración de Habilidad    Asombro:  Obtienes Poder de Habilidad igual al porcentaje del maná adicional.  Carga de Maná:  Impacta a un objetivo con una habilidad para consumir una carga y obtener 3 de Maná adicional, que se duplica si el objetivo es un campeón. Otorga un máximo de 360 de Maná. Al llegar al máximo, este objeto se transforma en  Abrazo del Serafín .   Obtienes una  Carga de Maná  nueva cada 8 seg (máx. 4).   ",
    "class": "Mago",
    "totalGold": 3000,
    "sellGold": 2100,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3003.png"
  },
  {
    "id": 76,
    "name": "Manamune",
    "description": "   35  de Daño de Ataque  500  de Maná  15  de Aceleración de Habilidad    Asombro:  Obtienes  daño de ataque adicional igual tu maná máximo .   Carga de Maná:  Impacta a un objetivo con una habilidad o ataque para consumir una carga y obtener  3 de Maná adicional , que se duplica si el objetivo es un campeón. Otorga un máximo de 360 de Maná. Al llegar al máximo, este objeto se transforma en  Muramaná .   Obtienes una  Carga de Maná  nueva cada 8 seg (máx. 4).   ",
    "class": "Asesino",
    "totalGold": 2900,
    "sellGold": 2030,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3004.png"
  },
  {
    "id": 77,
    "name": "Grebas del Berserker",
    "description": "   35%  de Velocidad de Ataque  45  de Velocidad de Movimiento   ",
    "class": "Tirador",
    "totalGold": 1100,
    "sellGold": 770,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3006.png"
  },
  {
    "id": 78,
    "name": "Botas de Rapidez",
    "description": "   60  de Velocidad de Movimiento   La potencia de los efectos de ralentización se reduce un 25%.  ",
    "class": "Tirador",
    "totalGold": 900,
    "sellGold": 630,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3009.png"
  },
  {
    "id": 79,
    "name": "Putrificador Quimtech",
    "description": "   35  de Poder de Habilidad  10%  de poder de curaciones y escudos  75%  de Regen. de Maná Básica  15  de Aceleración de Habilidad    Toxina Fúngica:  Infligir daño aplica un  40% de Heridas Graves  a campeones enemigos por 3 seg.    Heridas Graves  reduce la efectividad de los efectos de curación y regeneración.   ",
    "class": "Soporte",
    "totalGold": 2100,
    "sellGold": 1470,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3011.png"
  },
  {
    "id": 80,
    "name": "Cáliz de Bendición",
    "description": "   200  de Vida  50%  de Regen. de Maná Básica    Armonía:  Obtienes un 25% de Regeneración de Vida Básica por cada  25% de Regeneración de Maná Básica adicional .   ''Estas aguas benditas todavía llevan su poder a los dignos''.   ",
    "class": "Soporte",
    "totalGold": 950,
    "sellGold": 665,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3012.png"
  },
  {
    "id": 81,
    "name": "Botas del Hechicero",
    "description": "   18  de Penetración de Magia  45  de Velocidad de Movimiento   ",
    "class": "Mago",
    "totalGold": 1100,
    "sellGold": 770,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3020.png"
  },
  {
    "id": 82,
    "name": "Pendiente del Pozo de Vida",
    "description": "   150  de Vida  25  de Armadura  5  de Aceleración de Habilidad    'Práctico y a la moda'.   ",
    "class": "Soporte",
    "totalGold": 1050,
    "sellGold": 735,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3023.png"
  },
  {
    "id": 83,
    "name": "Escudo Glacial",
    "description": "   20  de Armadura  250  de Maná  10  de Aceleración de Habilidad   ",
    "class": "Tanque",
    "totalGold": 900,
    "sellGold": 630,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3024.png"
  },
  {
    "id": 84,
    "name": "Ángel Guardián",
    "description": "   45  de Daño de Ataque  40  de Armadura    Gracia Salvadora:  Tras recibir daño letal, restaura un  50% de Vida básica  y un  30% de Maná Máximo  después de 4 seg de estasis (300 seg de Enfriamiento).  ",
    "class": "Tirador",
    "totalGold": 3000,
    "sellGold": 1200,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3026.png"
  },
  {
    "id": 85,
    "name": "Filo del Infinito",
    "description": "   70  de Daño de Ataque  20%  de Probabilidad de Golpe Crítico  35%  de Daño de Golpe Crítico    Pasiva Mítica:  Otorga a todos los otros objetos  legendarios   5  de Daño de Ataque.  ",
    "class": "Tirador",
    "totalGold": 3400,
    "sellGold": 2380,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3031.png"
  },
  {
    "id": 86,
    "name": "Recordatorio Mortal",
    "description": "   40  de Daño de Ataque  30%  de Penetración de Armadura  20%  de Probabilidad de Golpe Crítico    Sepsis:  Infligir daño físico aplica un  40% de Heridas Graves  a campeones enemigos por 3 seg.    Heridas Graves  reduce la efectividad de los efectos de curación y regeneración.   ",
    "class": "Tirador",
    "totalGold": 3000,
    "sellGold": 2100,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3033.png"
  },
  {
    "id": 87,
    "name": "Último Suspiro",
    "description": "   20  de Daño de Ataque  18%  de Penetración de Armadura   ",
    "class": "Asesino",
    "totalGold": 1450,
    "sellGold": 1015,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3035.png"
  },
  {
    "id": 88,
    "name": "Recuerdos de Lord Dominik",
    "description": "   35  de Daño de Ataque  20%  de Probabilidad de Golpe Crítico  30%  de Penetración de Armadura    Verdugo de Gigantes:  Inflige daño adicional contra campeones con más vida máxima que tú.  ",
    "class": "Tirador",
    "totalGold": 3000,
    "sellGold": 2100,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3036.png"
  },
  {
    "id": 89,
    "name": "Abrazo del Serafín",
    "description": "   70  de Poder de Habilidad  860  de Maná  200  de Vida  10  de Aceleración de Habilidad    Asombro:  Obtienes poder de habilidad con base en tu Maná.  Salvavidas:  Tras recibir daño que reduciría tu Vida por debajo del 30%, obtienes un escudo basado en tu Maná actual.  ",
    "class": "Mago",
    "totalGold": 3000,
    "sellGold": 2100,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3040.png"
  },
  {
    "id": 90,
    "name": "Robaalmas de Mejai",
    "description": "   20  de Poder de Habilidad  100  de Vida    Gloria:  Obtienes 4 acumulaciones por asesinato de campeón o 2 acumulaciones por asistencia (hasta un total de 25 acumulaciones). Pierdes 10 acumulaciones al morir.  Pavor:  Otorga  5 de Poder de Habilidad  por cada acumulación de  Gloria . Obtienes un  10% de Velocidad de Movimiento  si tienes al menos 10 acumulaciones.   Las acumulaciones obtenidas de  Gloria  se mantienen entre este objeto y  El Sello de la Oscuridad .   ",
    "class": "Mago",
    "totalGold": 1600,
    "sellGold": 1120,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3041.png"
  },
  {
    "id": 91,
    "name": "Muramaná",
    "description": "   35  de Daño de Ataque  860  de Maná  15  de Aceleración de Habilidad    Asombro:  Obtienes aceleración de habilidad según tu maná.   Impacto:  Los ataques contra campeones infligen daño físico adicional.  ",
    "tag1": "Damage",
    "tag2": "Mana",
    "tag3": "CooldownReduction",
    "tag4": "OnHit",
    "tag5": "ArmorPenetration",
    "totalGold": 3000,
    "sellGold": 2100,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3042.png"
  },
  {
    "id": 92,
    "name": "Bacteriófago",
    "description": "   15  de Daño de Ataque  200  de Vida    Resistente:  Tras infligir daño físico a un campeón, recupera vida por segundo.   La recuperación se reduce para los usuarios a distancia.   ",
    "class": "Tanque",
    "class": "Luchador",
    "totalGold": 1100,
    "sellGold": 770,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3044.png"
  },
  {
    "id": 93,
    "name": "Bailarín Espectral",
    "description": "   20  de Daño de Ataque  35%  de Velocidad de Ataque  20%  de Probabilidad de Golpe Crítico  7%  de Velocidad de Movimiento    Vals espectral:  Los ataques otorgan  Fantasma  y las acumulaciones aumentan la velocidad de movimiento. Además, atacar 4 veces hace que Vals Espectral también otorgue velocidad de ataque.   Las unidades  Fantasmas  ignoran la colisión con otras unidades.   ",
    "class": "Tirador",
    "totalGold": 2800,
    "sellGold": 1960,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3046.png"
  },
  {
    "id": 94,
    "name": "Punteras de Acero Revestidas",
    "description": "   20  de Armadura  45  de Velocidad de Movimiento   Reduce un 12% el daño proveniente de ataques.  ",
    "tag1": "Armor",
    "tag2": "Boots",
    "totalGold": 1100,
    "sellGold": 770,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3047.png"
  },
  {
    "id": 95,
    "name": "Convergencia de Zeke",
    "description": "   200  de Vida  250  de Maná  45  de Armadura  15  de Aceleración de Habilidad    Activa:   Conducto:  Designa a un  Cómplice .   Convergencia:  Luego de  inmovilizar  a un enemigo, los ataques e impactos de habilidad de tu  Cómplice  infligen daño adicional a ese enemigo.   Los campeones solo pueden vincularse mediante una Convergencia de Zeke a la vez.   ",
    "class": "Soporte",
    "class": "Tanque",
    "totalGold": 2200,
    "sellGold": 1540,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3050.png"
  },
  {
    "id": 96,
    "name": "Hacha Hogareña",
    "description": "   20  de Daño de Ataque  15%  de Velocidad de Ataque    Veloz:  Atacar una unidad otorga velocidad de movimiento.  ",
    "class": "Tirador",
    "class": "Luchador",
    "totalGold": 1100,
    "sellGold": 770,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3051.png"
  },
  {
    "id": 97,
    "name": "Guantelete de Sterak",
    "description": "   400  de Vida    Garras que Atrapan:  Obtienes Daño de Ataque básico como Daño de Ataque adicional.  Salvavidas:  Tras recibir daño que reduciría tu Vida por debajo del 30%, obtienes un Escudo que decae con el tiempo, así como Tenacidad.  ",
    "class": "Tanque",
    "class": "Luchador",
    "totalGold": 3100,
    "sellGold": 2170,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3053.png"
  },
  {
    "id": 98,
    "name": "Brillo",
    "description": "     Espada Encantada:  Después de usar una habilidad, tu próximo ataque recibe una mejora de daño adicional.  ",
    "tag1": "OnHit",
    "totalGold": 700,
    "sellGold": 490,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3057.png"
  },
  {
    "id": 99,
    "name": "Apariencia Espiritual",
    "description": "   450  de Vida  50  de Resistencia Mágica  10  de Aceleración de Habilidad  100%  de Regen. de Vida Básica    Vitalidad Ilimitada:  Aumenta la eficacia de todas las curaciones y los escudos sobre ti.  ",
    "class": "Tanque",
    "totalGold": 2900,
    "sellGold": 2030,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3065.png"
  },
  {
    "id": 100,
    "name": "Placa Lunar Alada",
    "description": "   150  de Vida    Vuelo:  Otorga un  5% de Velocidad de Movimiento .  ",
    "class": "Soporte",
    "class": "Tanque",
    "totalGold": 800,
    "sellGold": 560,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3066.png"
  },
  {
    "id": 101,
    "name": "Gemaluz",
    "description": "   200  de Vida  10  de Aceleración de Habilidad   ",
    "class": "Asesino",
    "class1": "Soporte",
    "class": "Tanque",
    "class": "Mago",
    "class": "Luchador",
    "totalGold": 800,
    "sellGold": 560,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3067.png"
  },
  {
    "id": 102,
    "name": "Égida de Fuego Solar",
    "description": "   500  de Vida  50  de Armadura    Inmolar:  Recibir o infligir daño provoca que comiences a infligir   (15 + 1.75% de Vida adicional) de daño mágico  por seg a los enemigos cercanos (aumenta en un 25% contra súbditos) durante 3 seg. Infligir daño a campeones o monstruos épicos con este efecto agrega una acumulación, lo que aumenta el daño del siguiente  Inmolar  en un 10% por 5 seg (un máximo de 6 acumulaciones).   ",
    "class": "Tanque",
    "totalGold": 2700,
    "sellGold": 1890,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3068.png"
  },
  {
    "id": 103,
    "name": "Lágrima de la Diosa",
    "description": "   240  de Maná    Enfoque:  Los ataques infligen daño físico adicional a súbditos.  Carga de Maná:  Impacta a un objetivo con una habilidad para consumir una carga y obtener  3 de maná adicional , que se duplica si el objetivo es un campeón. Otorga un máximo de 360 de Maná.   Obtienes una  Carga de Maná  nueva cada 8 seg (máx. 4).   ",
    "tag1": "Mana",
    "tag2": "ManaRegen",
    "totalGold": 400,
    "sellGold": 280,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3070.png"
  },
  {
    "id": 104,
    "name": "Cuchilla Oscura",
    "description": "   50  de Daño de Ataque  400  de Vida  30  de Aceleración de Habilidad    Cortar:  Infligir daño físico a un campeón aplica una acumulación de reducción de armadura.  Rabia:  Infligir daño físico a un campeón otorga velocidad de movimiento por cada acumulación de  Cortar  que tenga.  ",
    "class": "Asesino",
    "class": "Luchador",
    "totalGold": 3100,
    "sellGold": 2170,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3071.png"
  },
  {
    "id": 105,
    "name": "La Sanguinaria",
    "description": "   55  de Daño de Ataque  20%  de Probabilidad de Golpe Crítico  18%  de Robo de Vida    Saciedad:  Mientras se encuentre por encima del 50% de Vida, obtiene Daño de Ataque adicional.  ",
    "class": "Tirador",
    "totalGold": 3400,
    "sellGold": 2380,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3072.png"
  },
  {
    "id": 106,
    "name": "Hidra Voraz",
    "description": "   65  de Daño de Ataque  25  de Aceleración de Habilidad  10%  de Robo de Vida    Hender:  Los ataques y las habilidades infligen daño físico a otros enemigos cercanos.   Carnívoro:  Obtiene daño de ataque al matar a un súbdito y 2 veces esa cantidad al matar a un campeón, monstruo grande o súbdito de asedio. Se pierde el 60% de tus acumulaciones al morir.    ",
    "class": "Asesino",
    "class": "Luchador",
    "totalGold": 3400,
    "sellGold": 2380,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3074.png"
  },
  {
    "id": 107,
    "name": "Cota de Espinas",
    "description": "   350  de Vida  70  de Armadura    Espinas:  Recibir un ataque refleja daño al atacante y aplica un 40% de  Heridas Graves  si es un campeón.    Heridas Graves  reduce la efectividad de los efectos de curación y regeneración.   ",
    "class": "Soporte",
    "class": "Tanque",
    "totalGold": 2700,
    "sellGold": 1890,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3075.png"
  },
  {
    "id": 108,
    "name": "Vesta Espinosa",
    "description": "   30  de Armadura    Espinas:  Recibir un ataque refleja daño al atacante y aplica un 40% de Heridas Graves si es un campeón.    Heridas Graves  reduce la efectividad de los efectos de curación y regeneración.   ",
    "class": "Tanque",
    "totalGold": 800,
    "sellGold": 560,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3076.png"
  },
  {
    "id": 109,
    "name": "Tiamat",
    "description": "   25  de Daño de Ataque    Hender:  Los ataques infligen daño físico a otros enemigos cercanos.   Hender no se activa contra estructuras.  El rendimiento del objeto difiere para los usuarios cuerpo a cuerpo y a distancia.   ",
    "class": "Tanque",
    "class": "Luchador",
    "totalGold": 1200,
    "sellGold": 840,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3077.png"
  },
  {
    "id": 110,
    "name": "Fuerza de la Trinidad",
    "description": "   40  de Daño de Ataque  35%  de Velocidad de Ataque  300  de Vida  20  de Aceleración de Habilidad    Ataque Triple:  Los ataques otorgan velocidad de movimiento. Si el objetivo es un campeón, aumenta tu daño de ataque básico y se acumula.  Espada Encantada:  Después de usar una habilidad, tu próximo ataque recibe una mejora de daño adicional.   Pasiva Mítica:  Otorga a todos los otros objetos  legendarios  de Daño de Ataque, Aceleración de Habilidad y Velocidad de Movimiento.  ",
    "class": "Luchador",
    "totalGold": 3333,
    "sellGold": 2333,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3078.png"
  },
  {
    "id": 111,
    "name": "Cota del Guardabosques",
    "description": "   40  de Armadura    Duro como piedra:  Reduce el daño proveniente de ataques.  ",
    "class": "Tanque",
    "totalGold": 1000,
    "sellGold": 700,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3082.png"
  },
  {
    "id": 112,
    "name": "Armadura de Warmog",
    "description": "   800  de Vida  10  de Aceleración de Habilidad  200%  de Regen. de Vida Básica    Corazón de Warmog:  Si tienes al menos 1100 de Vida adicional, regeneras tu vida máxima por segundo si no has recibido daño en los últimos 6 seg.  ",
    "class": "Tanque",
    "totalGold": 3000,
    "sellGold": 2100,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3083.png"
  },
  {
    "id": 113,
    "name": "Corazón de Acero",
    "description": "   800  de Vida  200%  de Regen. de Vida Básica  20  de Aceleración de Habilidad    Consumo Colosal:  Carga un ataque poderoso contra un campeón por más de 3 seg mientras se esté dentro de 700 de alcance de él. El ataque cargado inflige un 125 +  6%  de tu Vida Máxima como daño físico adicional y te otorga un 10% de esa cantidad como Vida Máxima permanente. (30 seg) Enfriamiento por objetivo.   Pasiva Mítica:  Otorga a todos los otros objetos  legendarios   1%  de aumento de Vida y un  6%  de Tamaño de Campeón.  ",
    "class": "Tanque",
    "totalGold": 3200,
    "sellGold": 2240,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3084.png"
  },
  {
    "id": 114,
    "name": "Huracán de Runaan",
    "description": "   40%  de Velocidad de Ataque  20%  de Probabilidad de Golpe Crítico  7%  de Velocidad de Movimiento    Picotazo:  Los ataques aplican  Daño Mágico   al impacto .  Furia del Viento:  Al atacar, se disparan proyectiles hasta a 2 enemigos cerca del objetivo. Los proyectiles aplican efectos al impacto y pueden asestar golpes críticos.   Este objeto es solo para campeones a distancia.   ",
    "class": "Tirador",
    "totalGold": 2800,
    "sellGold": 1960,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3085.png"
  },
  {
    "id": 115,
    "name": "Fervor",
    "description": "   15%  de Velocidad de Ataque  15%  de Probabilidad de Golpe Crítico  5%  de Velocidad de Movimiento   ",
    "class": "Tirador",
    "totalGold": 1100,
    "sellGold": 770,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3086.png"
  },
  {
    "id": 116,
    "name": "Daga de Statikk",
    "description": "   45  de Daño de Ataque  25%  de Velocidad de Ataque  20%  de Probabilidad de Golpe Crítico    Energizado:  Moverte y atacar generará un ataque Energizado.  Electrochoque:  Dispara una Cadena de Rayos que rebota en los enemigos cercanos e inflige daño aumentado a los súbditos.  ",
    "class": "Tirador",
    "totalGold": 3000,
    "sellGold": 2100,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3087.png"
  },
  {
    "id": 117,
    "name": "Sombrero Mortífero de Rabadon",
    "description": "   120  de Poder de Habilidad    Opus Mágico:  Aumenta tu  Poder de Habilidad total un 40% .  ",
    "class": "Mago",
    "totalGold": 3600,
    "sellGold": 2520,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3089.png"
  },
  {
    "id": 118,
    "name": "Al Filo de la Cordura",
    "description": "   40  de Daño de Ataque  40%  de Velocidad de Ataque  40  de Resistencia Mágica    Fragor:  Los ataques aplican daño al impacto y otorgan velocidad de movimiento.  ",
    "class": "Tirador",
    "class": "Luchador",
    "totalGold": 3200,
    "sellGold": 2240,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3091.png"
  },
  {
    "id": 119,
    "name": "Cañón de Fuego Rápido",
    "description": "   30  de Daño de Ataque  15%  de Velocidad de Ataque  20%  de Probabilidad de Golpe Crítico  7%  de Velocidad de Movimiento    Energizado:  Moverte y atacar generará un ataque Energizado.  Francotirador:  Tus ataques energizados infligen daño adicional. Además, los ataques energizados obtienen alcance de ataque.   El alcance de ataque no puede aumentar más de 150 unidades.   ",
    "class": "Tirador",
    "totalGold": 3000,
    "sellGold": 2100,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3094.png"
  },
  {
    "id": 120,
    "name": "Filo de la Tormenta",
    "description": "   50  de Daño de Ataque  15%  de Velocidad de Ataque  20%  de Probabilidad de Golpe Crítico    Energizado:  Moverte y atacar generará un ataque Energizado.  Proyectil:  Tu siguiente ataque inflige daño adicional.   ",
    "class": "Tirador",
    "totalGold": 3000,
    "sellGold": 2100,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3095.png"
  },
  {
    "id": 121,
    "name": "Maldición del Liche",
    "description": "   85  de Poder de Habilidad  15  de Aceleración de Habilidad  8%  de Velocidad de Movimiento    Espada Encantada:  Después de usar una habilidad, tu próximo ataque recibe una mejora de daño mágico adicional.  ",
    "class": "Mago",
    "totalGold": 3000,
    "sellGold": 2100,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3100.png"
  },
  {
    "id": 122,
    "name": "Velo de la Banshee",
    "description": "   80  de Poder de Habilidad  45  de Resistencia Mágica  10  de Aceleración de Habilidad    Anulación:  Otorga un Escudo Antihechizos que bloquea la próxima habilidad de un enemigo.   El enfriamiento del objeto se reinicia si recibes daño de campeones antes de que termine.   ",
    "class": "Mago",
    "totalGold": 2600,
    "sellGold": 1820,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3102.png"
  },
  {
    "id": 123,
    "name": "Égida de la Legión",
    "description": "   30  de Armadura  30  de Resistencia Mágica  10  de Aceleración de Habilidad   ",
    "class": "Soporte",
    "totalGold": 1200,
    "sellGold": 840,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3105.png"
  },
  {
    "id": 124,
    "name": "Redención",
    "description": "   250  de Vida  100%  de Regen. de Maná Básica  15%  de poder de curaciones y escudos    Activa:   Intervención:  Selecciona un área dentro del alcance. Tras 2.5 seg, invoca un destello de luz para recuperar vida a campeones aliados e infligir daño a los campeones enemigos.   Armonía:  Obtienes un 25% de Regeneración de Vida Básica por cada  25% de Regeneración de Maná Básica  adicional.   Se puede activar el objeto aunque mueras. El daño y la curación se reducen en un 50% si el objetivo se vio recientemente afectado por otra  Intervención . El poder de los efectos que aumentan según el nivel se basan en el nivel del aliado.   ",
    "class": "Soporte",
    "totalGold": 2300,
    "sellGold": 1610,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3107.png"
  },
  {
    "id": 125,
    "name": "Códice Diabólico",
    "description": "   35  de Poder de Habilidad  10  de Aceleración de Habilidad   ",
    "class": "Mago",
    "totalGold": 900,
    "sellGold": 630,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3108.png"
  },
  {
    "id": 126,
    "name": "Promesa del Caballero",
    "description": "   350  de Vida  25  de Armadura  15  de Aceleración de Habilidad  125%  de Regen. de Vida Básica    Activa:   Juramento:  Designa a un aliado  digno .   Sacrificio:  Mientras tu aliado  digno  esté cerca, redirige el daño que tu aliado recibe hacia ti y cura según el daño que inflige tu aliado  digno  a los campeones.  ",
    "class": "Soporte",
    "totalGold": 2200,
    "sellGold": 1540,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3109.png"
  },
  {
    "id": 127,
    "name": "Corazón de Hielo",
    "description": "   90  de Armadura  400  de Maná  20  de Aceleración de Habilidad    Caricia Invernal:  Reduce la  velocidad de ataque  de los enemigos cercanos.  Duro como piedra:  Reduce el daño proveniente de ataques.  ",
    "class": "Tanque",
    "totalGold": 2700,
    "sellGold": 1890,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3110.png"
  },
  {
    "id": 128,
    "name": "Botas de Mercurio",
    "description": "   25  de Resistencia Mágica  45  de Velocidad de Movimiento  30%  de Tenacidad    La Tenacidad reduce la duración de los efectos de  aturdimiento ,  ralentización ,  provocación ,  miedo ,  silencio ,  ceguera ,  polimorfia  e  inmovilización . No tiene efecto en  lanzamientos por el aire  ni  supresiones .   ",
    "tag1": "Boots",
    "tag2": "SpellBlock",
    "tag3": "Tenacity",
    "totalGold": 1100,
    "sellGold": 770,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3111.png"
  },
  {
    "id": 129,
    "name": "Orbe del Guardián",
    "description": "   50  de Poder de Habilidad  150  de Vida    Restauración:  Restaura maná por segundo. Si no puedes obtener Maná, regenera vida.  Legendario:  Este objeto cuenta como un objeto  Legendario .  ",
    "tag1": "Health",
    "tag2": "SpellDamage",
    "tag3": "ManaRegen",
    "tag4": "Lane",
    "totalGold": 950,
    "sellGold": 665,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3112.png"
  },
  {
    "id": 130,
    "name": "Brisa de Éter",
    "description": "   30  de Poder de Habilidad    Deslizamiento:  Obtienes un  5% de Velocidad de Movimiento .  ",
    "class": "Soporte",
    "class": "Mago",
    "totalGold": 850,
    "sellGold": 595,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3113.png"
  },
  {
    "id": 131,
    "name": "Ídolo Prohibido",
    "description": "   50%  de Regen. de Maná Básica  8%  de poder de curaciones y escudos   ",
    "class": "Soporte",
    "totalGold": 800,
    "sellGold": 560,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3114.png"
  },
  {
    "id": 132,
    "name": "Diente de Nashor",
    "description": "   100  de Poder de Habilidad  50%  de Velocidad de Ataque  15  de Aceleración de Habilidad    Mordida de Icathia:  Los ataques aplican daño mágico  al impacto .  ",
    "class": "Tirador",
    "class": "Mago",
    "totalGold": 3200,
    "sellGold": 2240,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3115.png"
  },
  {
    "id": 133,
    "name": "Cetro de Cristal de Rylai",
    "description": "   75  de Poder de Habilidad  400  de Vida    Hielo Escarchado:  Las habilidades de daño  ralentizan  a los enemigos.  ",
    "class": "Mago",
    "totalGold": 2600,
    "sellGold": 1820,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3116.png"
  },
  {
    "id": 134,
    "name": "Botas de Movilidad",
    "description": "    25  de Velocidad de Movimiento  Al estar fuera de combate durante al menos 5 seg, aumenta el efecto de este objeto a  115 .  ",
    "tag1": "Boots",
    "totalGold": 1000,
    "sellGold": 700,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3117.png"
  },
  {
    "id": 135,
    "name": "Umbral del Invierno",
    "description": "   400  de Vida  500  de Maná  15  de Aceleración de Habilidad    Asombro:  Obtienes  vida adicional igual a tu maná total .  Carga de Maná:  Impacta a un objetivo con una habilidad o ataque para consumir una carga y obtener  3 de maná adicional . Se duplica si el objetivo es un campeón. Otorga un máximo de 360 de Maná. Al llegar al máximo, este objeto se transforma en  Invierno Nórdico .   Obtienes una  Carga de Maná  nueva cada 8 seg (máx. 4).   ",
    "class": "Tanque",
    "totalGold": 2600,
    "sellGold": 1820,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3119.png"
  },
  {
    "id": 136,
    "name": "Invierno Nórdico",
    "description": "   400  de Vida  860  de Maná  15  de Aceleración de Habilidad   Asombro:  Obtienes vida adicional según tu maná.  Imperecedero:   Inmovilizar  o  Ralentizar  a un campeón enemigo otorga un escudo. El escudo aumenta si hay más de un enemigo cerca.  ",
    "tag1": "Health",
    "tag2": "Mana",
    "tag3": "AbilityHaste",
    "totalGold": 2700,
    "sellGold": 1890,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3121.png"
  },
  {
    "id": 137,
    "name": "El Llamado del Verdugo",
    "description": "   15  de Daño de Ataque    Desgarrar:  Infligir daño físico aplica un  40% de Heridas Graves  a los campeones durante 3 seg.     Heridas Graves  reduce la efectividad de los efectos de curación y regeneración.   ",
    "class": "Asesino",
    "totalGold": 800,
    "sellGold": 560,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3123.png"
  },
  {
    "id": 138,
    "name": "Espadafuria de Guinsoo",
    "description": "   30  de Daño de Ataque  30  de Poder de Habilidad  25%  de Velocidad de Ataque    Ira:  Los ataques infligen daño adicional  al impacto . Tu Probabilidad de Golpe Crítico se convierte en más.  Ataque Furioso:  Los ataques básicos otorgan  velocidad de ataque  adicional, que se acumula hasta un límite. Al máximo de acumulaciones, cada tercer ataque aplica tus  al impacto  efectos dos veces.   Pasiva Mítica:  Otorga a todos los otros objetos  legendarios  Un  5%  de Penetración de Armadura y un  6%  de Penetración de Magia.  ",
    "class": "Tirador",
    "totalGold": 3200,
    "sellGold": 2240,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3124.png"
  },
  {
    "id": 139,
    "name": "Martillo de Guerra de Caulfield",
    "description": "   25  de Daño de Ataque  10  de Aceleración de Habilidad   ",
    "class": "Luchador",
    "totalGold": 1100,
    "sellGold": 770,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3133.png"
  },
  {
    "id": 140,
    "name": "Puñal Serrado",
    "description": "   30  de Daño de Ataque    Rasgar:  Obtienes  10 de Letalidad .  ",
    "class": "Asesino",
    "totalGold": 1100,
    "sellGold": 770,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3134.png"
  },
  {
    "id": 141,
    "name": "Báculo del Vacío",
    "description": "   65  de Poder de Habilidad  40%  Penetración de Magia   ",
    "class": "Mago",
    "totalGold": 2800,
    "sellGold": 1960,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3135.png"
  },
  {
    "id": 142,
    "name": "Cimitarra Mercurial",
    "description": "   40  de Daño de Ataque  20%  de Probabilidad de Golpe Crítico  50  de Resistencia Mágica    Activa:   Capa Mercurial:  Elimina todas las debilitaciones de control de masas y gana velocidad de movimiento.  ",
    "class": "Tirador",
    "totalGold": 3000,
    "sellGold": 2100,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3139.png"
  },
  {
    "id": 143,
    "name": "Fajín de Mercurio",
    "description": "   30  de Resistencia Mágica    Activa:   Capa Mercurial:  Elimina todas las debilitaciones de control de masas (excluyendo  levantamientos ).   ",
    "class": "Tirador",
    "totalGold": 1300,
    "sellGold": 910,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3140.png"
  },
  {
    "id": 144,
    "name": "Espada Fantasma de Youmuu",
    "description": "   60  de Daño de Ataque  18  de Letalidad  15  de Aceleración de Habilidad    Activa:   Paso Espectral:  Obtiene velocidad de movimiento y Fantasma.   Persecución:  Obtienes hasta 100 Fragmentos Espectrales al moverte. Obtienes   de Velocidad de Movimiento  fuera de combate según el número de Fragmentos Espectrales. Al tener el máximo de fragmentos, obtendrás   de Letalidad . Los fragmentos se restablecerán a los 3 seg después de infligir daño a un campeón enemigo.   Pasiva Mítica:  Otorga a todos los otros objetos  legendarios     de Daño de Ataque.    Las unidades  Fantasmas  ignoran la colisión con otras unidades.   ",
    "class": "Asesino",
    "totalGold": 3100,
    "sellGold": 2170,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3142.png"
  },
  {
    "id": 145,
    "name": "Presagio de Randuin",
    "description": "   400  de Vida  60  de Armadura    Activa:   Humildad:   Ralentiza  a los enemigos cercanos.   Duro como Piedra:  Reduce el daño proveniente de ataques.  Resiliencia crítica:  Los golpes críticos te infligen un 20% menos de daño.  ",
    "class": "Tanque",
    "totalGold": 3000,
    "sellGold": 2100,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3143.png"
  },
  {
    "id": 146,
    "name": "Alternador Hextech",
    "description": "   25  de Poder de Habilidad  150  de Vida    Acelerado:  Inflige daño adicional al dañar a un campeón.  ",
    "class": "Mago",
    "totalGold": 1050,
    "sellGold": 735,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3145.png"
  },
  {
    "id": 147,
    "name": "Cinturón Cohete Hextech",
    "description": "   90  de Poder de Habilidad  6  de Penetración de Magia  250  de Vida  15  de Aceleración de Habilidad    Activa:   Supersónico:  Desplázate en la dirección del objetivo y libera un arco de misiles mágicos que infligen daño. Luego, obtén velocidad de movimiento hacia campeones enemigos.   Pasiva Mítica:  Otorga a todos los otros objetos  legendarios  de Penetración de Magia.  ",
    "class": "Mago",
    "totalGold": 3200,
    "sellGold": 2240,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3152.png"
  },
  {
    "id": 148,
    "name": "Espada del Rey Arruinado",
    "description": "   40  de Daño de Ataque  25%  de Velocidad de Ataque  8%  de Robo de Vida    Filo Neblina:  Los ataques aplican daño físico según la vida actual del objetivo.   Sifón:  Atacar a un campeón 3 veces inflige daño mágico y roba velocidad de movimiento.  El rendimiento del objeto difiere para los usuarios cuerpo a cuerpo y a distancia.  ",
    "class": "Luchador",
    "totalGold": 3300,
    "sellGold": 2310,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3153.png"
  },
  {
    "id": 149,
    "name": "Sorbechizos",
    "description": "   25  de Daño de Ataque  35  de Resistencia Mágica    Salvavidas:  Tras recibir daño mágico que reduciría la vida por debajo del 30%, obtienes un escudo contra daño mágico.  ",
    "class": "Asesino",
    "totalGold": 1300,
    "sellGold": 910,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3155.png"
  },
  {
    "id": 150,
    "name": "Fauces de Malmortius",
    "description": "   65  de Daño de Ataque  50  de Resistencia Mágica    Salvavidas:  Tras recibir daño mágico que reduciría la vida por debajo del 30%, obtienes un escudo contra daño mágico. Cuando  Salvavidas  se activa, obtienes Omnivampirismo hasta el final del combate.    ",
    "class": "Asesino",
    "totalGold": 2800,
    "sellGold": 1960,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3156.png"
  },
  {
    "id": 151,
    "name": "Reloj de Arena de Zhonya",
    "description": "   80  de Poder de Habilidad  45  de Armadura  15  de Aceleración de Habilidad    Activa:   Estasis:  Te vuelves  invulnerable  e  inalcanzable  durante 2.5 seg, pero no puedes realizar ninguna otra acción durante ese tiempo.  ",
    "class": "Mago",
    "totalGold": 3000,
    "sellGold": 2100,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3157.png"
  },
  {
    "id": 152,
    "name": "Botas Jonias de la Lucidez",
    "description": "   20  de Aceleración de Habilidad  45  de Velocidad de Movimiento   Obtienes un 12 de Aceleración de hechizos de invocador.   ''Este objeto está dedicado en honor a la victoria de Jonia sobre Noxus en la Revancha por las Provincias Meridionales del 10 de diciembre del 20 CLE''.   ",
    "tag1": "Boots",
    "tag2": "CooldownReduction",
    "totalGold": 950,
    "sellGold": 665,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3158.png"
  },
  {
    "id": 153,
    "name": "Lanza de Shojin",
    "description": "   65  de Daño de Ataque  300  de Vida  20  de Aceleración de Habilidad    Fuerza de Dragón:  Los hechizos que no sean definitivas obtienen (8 (+0.08 por cada 100 de Daño de Ataque adicional) | 6 (+0.06 por cada 100 de Daño de Ataque adicional)) de Aceleración de Habilidad, reducido a (4 (+0.04 por cada 100 de Daño de Ataque adicional) | 3 (+0.03 por cada 100 de Daño de Ataque adicional))) de Aceleración de Habilidad para los hechizos inmovilizantes.  Exigencia:  Obtiene hasta (0.15 | 0.1) de Velocidad de Movimiento aumentada según la vida faltante (llega al máximo si la vida está por debajo del 33%).  El rendimiento del objeto difiere para los usuarios cuerpo a cuerpo y a distancia.  ",
    "class": "Luchador",
    "totalGold": 3400,
    "sellGold": 2380,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3161.png"
  },
  {
    "id": 154,
    "name": "Morellonomicón",
    "description": "   90  de Poder de Habilidad  200  de Vida  10  de Penetración de Magia    Aflicción:  Infligir daño mágico aplica un  40% de Heridas Graves  a campeones enemigos por 3 seg.    Heridas Graves  reduce la efectividad de los efectos de curación y regeneración.   ",
    "class": "Mago",
    "totalGold": 3000,
    "sellGold": 2100,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3165.png"
  },
  {
    "id": 155,
    "name": "Espada del Guardián",
    "description": "   30  de Daño de Ataque  150  de Vida  15  de Aceleración de Habilidad    Legendario:  Este objeto cuenta como objeto  Legendario .  ",
    "tag1": "Health",
    "tag2": "Damage",
    "tag3": "Lane",
    "tag4": "AbilityHaste",
    "totalGold": 950,
    "sellGold": 665,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3177.png"
  },
  {
    "id": 156,
    "name": "Espada de la Penumbra",
    "description": "   50  de Daño de Ataque  10  de Letalidad  15  de Aceleración de Habilidad    Apagón:  Cuando un centinela enemigo te ha visto, revela trampas y deshabilitas centinelas a tu alrededor. Tus ataques infligen daño aumentado a los centinelas.  ",
    "class": "Asesino",
    "totalGold": 2300,
    "sellGold": 1610,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3179.png"
  },
  {
    "id": 157,
    "name": "Rompecascos",
    "description": "   60  de Daño de Ataque  400  de Vida  150%  de Regen. de Vida Básica  5%  de Velocidad de Movimiento     Tripulación de Abordaje:  Mientras no haya campeones aliados cerca, obtienes  armadura  y  resistencia mágica , y los ataques infligen daño aumentado contra torres. Los súbditos grandes cercanos obtienen  armadura  y  resistencia mágica , además de daño adicional contra torres.    Las resistencias de Tripulación de Abordaje decaen a lo largo de 3 seg, cuando un aliado se acerca demasiado.    ",
    "class": "Luchador",
    "totalGold": 3000,
    "sellGold": 2100,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3181.png"
  },
  {
    "id": 158,
    "name": "Martillo del Guardián",
    "description": "   25  de Daño de Ataque  150  de Vida  7%  de Robo de Vida    Legendario:  Este objeto cuenta como objeto  Legendario .  ",
    "tag1": "Health",
    "tag2": "Damage",
    "tag3": "LifeSteal",
    "tag4": "Lane",
    "totalGold": 950,
    "sellGold": 665,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3184.png"
  },
  {
    "id": 159,
    "name": "Relicario de los Solari de Hierro",
    "description": "   200  de Vida  30  de Armadura  30  de Resistencia Mágica  20  de Aceleración de Habilidad    Activa:   Devoción:  Otorga un  escudo  a los aliados cercanos que decae con el tiempo.   Consagrar:  Le otorgas a los campeones aliados cercanos  Armadura  y  Resistencia Mágica .    Pasiva Mítica:  Otorga a todos los otros objetos  legendarios  La armadura y la resistencia mágica aumentan al  Consagrar .    ",
    "class": "Soporte",
    "class": "Tanque",
    "totalGold": 2300,
    "sellGold": 1610,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3190.png"
  },
  {
    "id": 160,
    "name": "Guardabrazo del Buscador",
    "description": "   30  de Poder de Habilidad  15  de Armadura    Sendero de Bruja:  Matar a una unidad otorga  0.5 de Armadura  (máx.  15 ).  ",
    "class": "Mago",
    "totalGold": 1000,
    "sellGold": 700,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3191.png"
  },
  {
    "id": 161,
    "name": "Armadura Pétrea",
    "description": "   60  de Armadura  60  de Resistencia Mágica  15  de Aceleración de Habilidad    Activa:   Inquebrantable:  Obtiene un escudo que decae y crece en tamaño.   Fortificación:  Recibir daño de un campeón otorga una acumulación de  armadura adicional  y  resistencia mágica adicional .   Máximo 5 acumulaciones, 1 por campeón.   ",
    "class": "Tanque",
    "totalGold": 3200,
    "sellGold": 2240,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3193.png"
  },
  {
    "id": 162,
    "name": "Hábito del Espectro",
    "description": "   250  de Vida  25  de Resistencia Mágica    Incorpóreo:  Regenera vida tras recibir daño de un campeón.  ",
    "class": "Tanque",
    "totalGold": 1250,
    "sellGold": 875,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3211.png"
  },
  {
    "id": 163,
    "name": "Bendición de Mikael",
    "description": "   250  de Vida  100%  de Regen. de Maná Básica  15%  de poder de curaciones y escudos    Activa:   Purificación:  Restaura vida y elimina todas las debilitaciones de control de masas de un campeón aliado (excepto los  lanzamientos por el aire  y las  supresiones ).   Armonía:  Obtienes un 25% de Regeneración de Vida Básica por cada  25% de Regeneración de Maná Básica  adicional.  ",
    "class": "Soporte",
    "totalGold": 2300,
    "sellGold": 1610,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3222.png"
  },
  {
    "id": 169,
    "name": "Pebetero Ardiente",
    "description": "   35  de Poder de Habilidad  8%  de poder de curaciones y escudos  75%  de Regen. de Maná Básica  5%  de Velocidad de Movimiento    Santificación:  Curar o escudar a otro aliado les otorga a ambos mejoras de velocidad de ataque y daño mágico  al impacto .    ",
    "class": "Soporte",
    "totalGold": 2100,
    "sellGold": 1470,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3504.png"
  },
  {
    "id": 170,
    "name": "Saqueador de Esencias",
    "description": "   55  de Daño de Ataque  20%  de Probabilidad de Golpe Crítico  20  de Aceleración de Habilidad    Espada Encantada:  Después de usar una habilidad, tu próximo ataque inflige daño adicional y restaura maná.  ",
    "class": "Tirador",
    "totalGold": 2900,
    "sellGold": 2030,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3508.png"
  },
  {
    "id": 174,
    "name": "Placa del Hombre Muerto",
    "description": "   300  de Vida  45  de Armadura  5%  de Velocidad de Movimiento   Hundebarcos:  Mientras te mueves, acumulas velocidad de movimiento. Tu próximo ataque libera la velocidad de movimiento acumulada para infligir daño. Si un campeón cuerpo a cuerpo lo lanza a la máxima velocidad, el ataque también  ralentiza  al objetivo.   ''Solo hay una forma de que me quites esta armadura...''. —Autor olvidado   ",
    "class": "Tanque",
    "totalGold": 2900,
    "sellGold": 2030,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3742.png"
  },
  {
    "id": 175,
    "name": "Hidra Titánica",
    "description": "   30  de Daño de Ataque  500  de Vida    Coloso:  Obtienes  daño de ataque adicional basado en tu vida adicional .  Hender:  Los ataques infligen daño adicional  al impacto , lo que crea una onda expansiva que inflige daño a los enemigos detrás del objetivo.  ",
    "class": "Tanque",
    "totalGold": 3300,
    "sellGold": 2310,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3748.png"
  },
  {
    "id": 176,
    "name": "Brazal Cristalino",
    "description": "   200  de Vida  100%  de Regen. de Vida Básica   ",
    "class": "Soporte",
    "class": "Tanque",
    "totalGold": 800,
    "sellGold": 560,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3801.png"
  },
  {
    "id": 177,
    "name": "Capítulo Perdido",
    "description": "   40  de Poder de Habilidad  300  de Maná  10  de Aceleración de Habilidad    Iluminación:  Al subir de nivel, recuperas un  20% de Maná Máximo  a lo largo de 3 seg.  ",
    "class": "Mago",
    "totalGold": 1100,
    "sellGold": 770,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3802.png"
  },
  {
    "id": 178,
    "name": "Catalizador de Eones",
    "description": "   300  de Vida  300  de Maná    Eternidad:  Restaura Maná igual al 7% del daño recibido de campeones antes de la mitigación y restaura Vida igual al 25% del Maná utilizado, hasta 20 de Vida por lanzamiento y por seg.  ",
    "class": "Tanque",
    "class": "Mago",
    "totalGold": 1300,
    "sellGold": 910,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3803.png"
  },
  {
    "id": 179,
    "name": "Filo de la Noche",
    "description": "   50  de Daño de Ataque  10  de Letalidad  325  de Vida    Anulación:  Otorga un Escudo Antihechizos que bloquea la siguiente habilidad de un enemigo.   El enfriamiento del objeto se reinicia si recibes daño antes de que termine.   ",
    "class": "Asesino",
    "totalGold": 2900,
    "sellGold": 2030,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3814.png"
  },
  {
    "id": 180,
    "name": "Filo del Robahechizos",
    "description": "   8  de Poder de Habilidad  10  de Vida  25%  de Regen. de Maná Básica  2  de oro cada 10 seg    Tributo:  Mientras estés cerca de un campeón aliado, las habilidades y los ataques dañinos contra campeones o estructuras otorgan 20 de oro. Se puede activar hasta 3 veces cada 36 seg.  Misión:  Obtienes 500 de oro de este objeto al transformarlo en  Colmillo de Escarcha  y obtienes  Activa:   Vigilancia .   Este objeto otorga oro reducido de súbditos si matas a una cantidad excesiva de ellos.   ",
    "tag1": "Health",
    "tag2": "SpellDamage",
    "tag3": "ManaRegen",
    "tag4": "Vision",
    "tag5": "GoldPer",
    "tag6": "Lane",
    "totalGold": 400,
    "sellGold": 160,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3850.png"
  },
  {
    "id": 181,
    "name": "Colmillo de Escarcha",
    "description": "   15  de Poder de Habilidad  70  de Vida  50%  de Regen. de Maná Básica  3  de oro cada 10 seg    Activa:   Centinela:  Coloca en el piso un centinela  invisible  para los enemigos, pero que otorga visión del área circundante a ti y a tu equipo. Almacena hasta 0 centinelas invisibles que se recargan al visitar la tienda.   Activa:   Centinela:  Coloca en el piso un centinela  invisible  para los enemigos, pero que otorga visión del área circundante a tu equipo. Almacena hasta 3 centinelas invisibles que se recargan al visitar la tienda.       Tributo:  Mientras estés cerca de un campeón aliado, las habilidades y los ataques dañinos contra campeones o estructuras otorgan 20 de oro. Esto puede ocurrir hasta 3 veces cada 30 seg.  Misión:  Obtienes 1000 de oro de este objeto al transformarlo en  Fragmento de Hielo Puro .  ",
    "tag1": "GoldPer",
    "tag2": "Lane",
    "tag3": "ManaRegen",
    "tag4": "SpellDamage",
    "totalGold": 400,
    "sellGold": 160,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3851.png"
  },
  {
    "id": 182,
    "name": "Fragmento de Hielo Puro",
    "description": "   40  de Poder de Habilidad  75  de Vida  100%  de Regen. de Maná Básica  3  de oro cada 10 seg    Activa:   Centinela:  Coloca en el piso un centinela  invisible  para los enemigos, pero que otorga visión del área circundante a ti y a tu equipo. Almacena hasta 0 centinelas invisibles que se recargan al visitar la tienda.   Activa:   Centinela:  Coloca en el piso un centinela  invisible  para los enemigos, pero que otorga visión del área circundante a tu equipo. Almacena hasta 4 centinelas invisibles que se recargan al visitar la tienda.   ",
    "class": "Mago",
    "totalGold": 400,
    "sellGold": 160,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3853.png"
  },
  {
    "id": 183,
    "name": "Hombreras de Acero",
    "description": "   3  de Daño de Ataque  30  de Vida  50%  de Regen. de Vida Básica  2  de oro cada 10 seg   Botín de Guerra:  Al estar cerca de un campeón aliado, los ataques ejecutan a los súbditos con menos del (50% para usuarios cuerpo a cuerpo | 30% para usuarios a distancia) de su Vida Máxima. Matar a un súbdito otorga el mismo oro de asesinato al campeón aliado más cercano. Estos efectos se recargan cada 35 seg (máx. 3 cargas).  Misión:  Obtienes 500 de oro de este objeto al transformarlo en  Hombreras de Acero Rúnico , lo que otorga  Activa:   Vigilancia .   Este objeto otorga oro reducido de súbditos si matas a una cantidad excesiva de ellos.   ",
    "class": "Soporte",
    "totalGold": 400,
    "sellGold": 160,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3854.png"
  },
  {
    "id": 184,
    "name": "Hombreras de Acero Rúnico",
    "description": "   6  de Daño de Ataque  100  de Vida  75%  de Regen. de Vida Básica  3  de oro cada 10 seg    Activa:   Centinela:  Coloca en el piso un centinela  invisible  para los enemigos, pero que otorga visión del área circundante a ti y a tu equipo. Almacena hasta 0 centinelas invisibles que se recargan al visitar la tienda.   Activa:   Centinela:  Coloca en el piso un centinela  invisible  para los enemigos, pero que otorga visión del área circundante a tu equipo. Almacena hasta 3 centinelas invisibles que se recargan al visitar la tienda.    Botín de Guerra:  Al estar cerca de un campeón aliado, los ataques ejecutan a los súbditos con menos del 50% de su Vida Máxima. Matar a un súbdito otorga el mismo oro de asesinato al campeón aliado más cercano. Estos efectos se recargan cada 35 seg (máx. 3 cargas).  Misión:  Obtienes 1000 de oro de este objeto al transformarlo en  Baluarte de la Montaña .   ",
    "class": "Soporte",
    "totalGold": 400,
    "sellGold": 160,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3855.png"
  },
  {
    "id": 185,
    "name": "Hombreras de Roca Blanca",
    "description": "   15  de Daño de Ataque  250  de Vida  100%  de Regen. de Vida Básica  3  de oro cada 10 seg    Activa:   Centinela:  Coloca en el piso un centinela  invisible  para los enemigos, pero que otorga visión del área circundante a ti y a tu equipo. Almacena hasta 0 centinelas invisibles que se recargan al visitar la tienda.   Activa:   Centinela:  Coloca en el piso un centinela  invisible  para los enemigos, pero que otorga visión del área circundante a tu equipo. Almacena hasta 4 centinelas invisibles que se recargan al visitar la tienda.   ",
    "class": "Soporte",
    "totalGold": 400,
    "sellGold": 160,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3857.png"
  },
  {
    "id": 186,
    "name": "Escudo Reliquia",
    "description": "   5  de Poder de Habilidad  30  de Vida  50%  de Regen. de Vida Básica  2  de oro cada 10 seg   Botín de Guerra:  Al estar cerca de un campeón aliado, los ataques ejecutan a los súbditos con menos del (50% para usuarios cuerpo a cuerpo | 30% para usuarios a distancia) de su Vida Máxima. Matar a un súbdito otorga el mismo oro de asesinato al campeón aliado más cercano. Estos efectos se recargan cada 35 seg (máx. 3 cargas).  Misión:  Obtienes 500 de oro de este objeto al transformarlo en  Escudo de Targón , lo que otorga  Activa:   Vigilancia .   Este objeto otorga oro reducido de súbditos si matas a una cantidad excesiva de ellos.   ",
    "class": "Soporte",
    "totalGold": 400,
    "sellGold": 160,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3858.png"
  },
  {
    "id": 187,
    "name": "Escudo de Targón",
    "description": "   10  de Poder de Habilidad  100  de Vida  75%  de Regen. de Vida Básica  3  de oro cada 10 seg    Activa:   Centinela:  Coloca en el piso un centinela  invisible  para los enemigos, pero que otorga visión del área circundante a ti y a tu equipo. Almacena hasta 0 centinelas invisibles que se recargan al visitar la tienda.   Activa:   Centinela:  Coloca en el piso un centinela  invisible  para los enemigos, pero que otorga visión del área circundante a tu equipo. Almacena hasta 3 centinelas invisibles que se recargan al visitar la tienda.    Botín de Guerra:  Al estar cerca de un campeón aliado, los ataques ejecutan a los súbditos con menos del 50% de su Vida Máxima. Matar a un súbdito otorga el mismo oro de asesinato al campeón aliado más cercano. Estos efectos se recargan cada 35 seg (máx. 3 cargas).  Misión:  Obtienes 1000 de oro de este objeto al transformarlo en  Baluarte de la Montaña .   ",
    "class": "Soporte",
    "totalGold": 400,
    "sellGold": 160,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3859.png"
  },
  {
    "id": 195,
    "name": "Orbe del Olvido",
    "description": "   30  de Poder de Habilidad    Maldición:  Infligir daño mágico aplica un  40% de Heridas Graves  a campeones durante 3 seg.    Heridas Graves  reduce la efectividad de los efectos de curación y regeneración.   ",
    "class": "Mago",
    "totalGold": 800,
    "sellGold": 560,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3916.png"
  },
  {
    "id": 196,
    "name": "Mandato Imperial",
    "description": "",
    "class": "Soporte",
    "totalGold": 2300,
    "sellGold": 1610,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/4005.png"
  },
  {
    "id": 197,
    "name": "Fuerza de la Naturaleza",
    "description": "   400  de Vida  60  de Resistencia Mágica  5%  de Velocidad de Movimiento    Absorber:  Al recibir  daño mágico  de campeones enemigos, obtienes una acumulación de  Firmeza . Los efectos de  inmovilización  contra enemigos otorgan acumulaciones adicionales.  Disipar:  Al alcanzar el máximo de acumulaciones de  Firmeza , obtienes un aumento de resistencia mágica y velocidad de movimiento.  ",
    "class": "Tanque",
    "totalGold": 2800,
    "sellGold": 1960,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/4401.png"
  },
  {
    "id": 198,
    "name": "La Espátula Dorada",
    "description": "   70  de Daño de Ataque  120  de Poder de Habilidad  50%  de Velocidad de Ataque  30%  de Probabilidad de Golpe Crítico  250  de Vida  30  de Armadura  30  de Resistencia Mágica  250  de Maná  20  de Aceleración de Habilidad  10%  de Velocidad de Movimiento  10%  de Robo de Vida  100%  de Regen. de Vida Básica  100%  de Regen. de Maná Básica    Haciendo Algo:  ¡Estás permanentemente en llamas!  ",
    "totalGold": 7237,
    "sellGold": 5066,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/4403.png"
  },
  {
    "id": 199,
    "name": "Enfoque al Horizonte",
    "description": "   100  de Poder de Habilidad  150  de Vida  15  de Aceleración de Habilidad    Hiperdisparo:  Infligir daño a un campeón con una habilidad sin fijación de objetivo a 700 de alcance o  ralentizarlo o inmovilizarlo  lo  revela  y aumenta el daño que recibe de ti.   La habilidad que activa  Hiperdisparo  también recibe el aumento de daño. Las mascotas y las trampas que no inmovilizan no activan este efecto. Solo la colocación inicial de habilidades de zona activará este efecto. La distancia se mide desde la posición del lanzamiento de la habilidad.    ",
    "class": "Mago",
    "totalGold": 3000,
    "sellGold": 2100,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/4628.png"
  },
  {
    "id": 200,
    "name": "Impulso Cósmico",
    "description": "   100  de Poder de Habilidad  30  de Aceleración de Habilidad  5%  de Velocidad de Movimiento    Danza de Hechizos:  Infligir daño a campeones genera una acumulación de un  2.5% de Velocidad de Movimiento  cada 1.5 seg durante los siguientes 5 seg hasta un máximo de un  10% de Velocidad de Movimiento . Al llegar a 4 acumulaciones, obtienes un  10% de Velocidad de Movimiento adicional  ( 20% de Velocidad de Movimiento  total). Infligir daño restablece este efecto.     ",
    "class": "Mago",
    "totalGold": 3000,
    "sellGold": 2100,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/4629.png"
  },
  {
    "id": 201,
    "name": "Joya Maldita",
    "description": "   25  de Poder de Habilidad  13%  Penetración de Magia   ",
    "class": "Mago",
    "totalGold": 1250,
    "sellGold": 875,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/4630.png"
  },
  {
    "id": 202,
    "name": "Barrera Esmeralda",
    "description": "   20  de Poder de Habilidad  25  de Resistencia Mágica    Adaptable:  Matar a una unidad otorga  0.3 de Resistencia Mágica  (máx.  9 ).     ",
    "class": "Mago",
    "totalGold": 1000,
    "sellGold": 700,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/4632.png"
  },
  {
    "id": 203,
    "name": "Agrietador",
    "description": "   70  de Poder de Habilidad  300  de Vida  15  de Aceleración de Habilidad  7%  de Omnivampirismo    Corrupción del Vacío:  Por cada segundo de infligir daño a campeones enemigos, inflige daño adicional. Al tener el máximo de fuerza, el daño adicional se inflige como  daño verdadero .    Pasiva Mítica:  Otorga a todos los otros objetos  legendarios  de Omnivampirismo y Poder de Habilidad  ",
    "class": "Mago",
    "totalGold": 3200,
    "sellGold": 2240,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/4633.png"
  },
  {
    "id": 204,
    "name": "Mirada Absorbente",
    "description": "   20  de Poder de Habilidad  250  de Vida  5%  de Omnivampirismo   ",
    "class": "Mago",
    "totalGold": 1300,
    "sellGold": 910,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/4635.png"
  },
  {
    "id": 205,
    "name": "Cosechador Nocturno",
    "description": "   90  de Poder de Habilidad  300  de Vida  25  de Aceleración de Habilidad    Desgarraalmas:  Infligir daño a un campeón inflige daño mágico adicional y te otorga velocidad de movimiento.   Pasiva Mítica:  Otorga a todos los otros objetos  legendarios  de Aceleración de Habilidad.  ",
    "class": "Mago",
    "totalGold": 3200,
    "sellGold": 2240,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/4636.png"
  },
  {
    "id": 206,
    "name": "Abrazo Demoniaco",
    "description": "   75  de Poder de Habilidad  350  de Vida    Mirada de Azakana:  Infligir daño con habilidades quema a los enemigos por su Vida Máxima como daño mágico cada segundo.  Pacto Oscuro:  Obtienes  vida adicional  como  poder de habilidad .   ",
    "class": "Mago",
    "totalGold": 3000,
    "sellGold": 2100,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/4637.png"
  },
  {
    "id": 207,
    "name": "Piedravigía Observadora",
    "description": "   150  de Vida  10  de Aceleración de Habilidad  50%  de Regen. de Maná Básica    Cofre Arcano:  Este objeto puede almacenar hasta 3 centinelas de control comprados.  Bendición de Ixtal:  Aumenta un 8% la Vida adicional, el Daño de Ataque adicional, la Aceleración de Habilidad y el Poder de Habilidad.  ",
    "class": "Soporte",
    "sellGold": 770,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/4638.png"
  },
  {
    "id": 208,
    "name": "Piedravigía Agitadora",
    "description": "   80  de Vida  25%  de Regen. de Maná Básica    Cofre Arcano:  Este objeto puede almacenar hasta 2 centinelas de control comprados.    ",
    "class": "Soporte",
    "totalGold": 350,
    "sellGold": 140,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/4641.png"
  },
  {
    "id": 209,
    "name": "Espejo de Vitrobandle",
    "description": "   20  de Poder de Habilidad  10  de Aceleración de Habilidad  50%  de Regen. de Maná Básica   ",
    "class": "Soporte",
    "totalGold": 950,
    "sellGold": 665,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/4642.png"
  },
  {
    "id": 210,
    "name": "Piedravigía Alerta",
    "description": "   250  de Vida  10  de Aceleración de Habilidad  50%  de Regen. de Maná Básica    Cofre Arcano:  Este objeto puede almacenar hasta 3 Centinelas de Control comprados.  Contemplen:  Aumenta los límites de colocación de Centinelas Invisibles y Centinelas de Control en 1.  Elegidos de Ixtal:  Otorga un aumento de un 20% de Vida adicional, Daño de Ataque adicional, Aceleración de Habilidad y Poder de Habilidad.  ",
    "class": "Soporte",
    "totalGold": 2300,
    "sellGold": 1610,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/4643.png"
  },
  {
    "id": 211,
    "name": "Corona de la Reina Fragmentada",
    "description": "   70  de Poder de Habilidad  250  de Vida  600  de Maná  20  de Aceleración de Habilidad    Salvaguarda Divina:  Obtienes  Salvaguarda , lo que reduce el daño recibido por campeones. El efecto de  Salvaguarda  perdura durante 1.5 seg tras recibir daño de campeones.   Regalo Divino:  Al estar bajo el efecto de  Salvaguarda  y durante 3 seg tras romperse, obtienes poder de habilidad.    Pasiva Mítica:  Otorga a todos los otros objetos  legendarios  de Velocidad de Movimiento y Poder de Habilidad.  ",
    "class": "Mago",
    "totalGold": 2800,
    "sellGold": 1960,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/4644.png"
  },
  {
    "id": 212,
    "name": "Lumbría",
    "description": "   100  de Poder de Habilidad  200  de Vida    Flor de Ceniza:  El daño a campeones se beneficia de  de Penetración de Magia  adicional, según la  vida actual  del objetivo. Otorga el beneficio máximo contra el objetivo si este recibió un escudo recientemente.   ",
    "class": "Mago",
    "totalGold": 3000,
    "sellGold": 2100,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/4645.png"
  },
  {
    "id": 213,
    "name": "Látigo Férreo",
    "description": "   30  de Daño de Ataque    Activa:   Creciente:  Inflige daño a los enemigos cercanos.  ",
    "class": "Luchador",
    "totalGold": 1100,
    "sellGold": 770,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/6029.png"
  },
  {
    "id": 214,
    "name": "Amanecer Plateado",
    "description": "   40  de Daño de Ataque  300  de Vida  40  de Resistencia Mágica    Activa:   Capa Mercurial:  Elimina todas las debilitaciones de control de masas y obtienes Tenacidad y resistencia a ralentizaciones.  ",
    "class": "Luchador",
    "totalGold": 3000,
    "sellGold": 2100,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/6035.png"
  },
  {
    "id": 215,
    "name": "Danza de la Muerte",
    "description": "   55  de Daño de Ataque  15  de Aceleración de Habilidad  45  de Armadura    Ignorar Dolor:  El daño recibido se inflige a lo largo del tiempo.  Desafiar:  Los derribos de campeones disipan el daño restante de  Ignorar Dolor  y restauran vida a lo largo del tiempo.  ",
    "class": "Luchador",
    "totalGold": 3300,
    "sellGold": 2310,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/6333.png"
  },
  {
    "id": 216,
    "name": "Sierraespada Quimopunk",
    "description": "   55  de Daño de Ataque  250  de Vida  25  de Aceleración de Habilidad    Corte Mutilador:  Infligir daño físico aplica un 40% de  Heridas Graves  a campeones enemigos por 3 seg.   Corte Mutilador Heridas Graves  reduce la efectividad de los efectos de curación y regeneración.   ",
    "class": "Luchador",
    "totalGold": 2800,
    "sellGold": 1960,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/6609.png"
  },
  {
    "id": 217,
    "name": "Báculo de Agua Fluyente",
    "description": "   35  de Poder de Habilidad  8%  de poder de curaciones y escudos  75%  de Regen. de Maná Básica  5%  de Velocidad de Movimiento    Rápidos:  Curar o escudar a otro aliado les otorga poder de habilidad y aceleración de habilidad a ambos.   ",
    "class": "Soporte",
    "totalGold": 2100,
    "sellGold": 1470,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/6616.png"
  },
  {
    "id": 218,
    "name": "Renovador de Piedra Lunar",
    "description": "   35  de Poder de Habilidad  200  de Vida  20  de Aceleración de Habilidad  100%  de Regen. de Maná Básica    Gracia Estrellada:  Curar o escudar a un aliado se extiende al campeón aliado más cercano (excluyéndote), lo que cura o escuda según la cantidad original   Pasiva Mítica:  Otorga a todos los otros objetos  legendarios  del  Poder de curaciones y escudos.   ",
    "class": "Soporte",
    "totalGold": 2300,
    "sellGold": 1610,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/6617.png"
  },
  {
    "id": 219,
    "name": "Ecos de Helia",
    "description": "   30  de Poder de Habilidad  200  de Vida  15  de Aceleración de Habilidad  125%  de Regen. de Maná Básica    Sifón del Alma:  Infligir daño a un campeón otorga un  Fragmento de Alma . Curar o escudar a un aliado consume todos los  Fragmentos de Alma  para restaurar vida e inflige daño mágico por cada fragmento al campeón enemigo más cercano.   Disonancia:  Obtienes  poder de habilidad  por cada   Regeneración de Maná Básica . Desactiva Armonía.   Pasiva Mítica:  Otorga a todos los otros objetos  legendarios  de  Aceleración de Habilidad.    ",
    "class": "Soporte",
    "totalGold": 2300,
    "sellGold": 1610,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/6620.png"
  },
  {
    "id": 220,
    "name": "Bebedor de Sangre",
    "description": "   55  de Daño de Ataque  300  de Vida  20  de Aceleración de Habilidad  8%  de Omnivampirismo    Activa:   Corte Sediento  Inflige daño a los enemigos cercanos. Restaura vida por cada campeón alcanzado.   Pasiva Mítica:  Otorga a todos los otros objetos  legendarios  de Vida y Aceleración de Habilidad.  ",
    "class": "Luchador",
    "totalGold": 3200,
    "sellGold": 2240,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/6630.png"
  },
  {
    "id": 221,
    "name": "Rompeavances",
    "description": "   60  de Daño de Ataque  20%  de Velocidad de Ataque  300  de Vida  20  de Aceleración de Habilidad    Activa:   Corte Obstructor:  Inflige daño a los enemigos cercanos y los  ralentiza . Se puede lanzar mientras te mueves.   Marcha Heroica:  Infligir daño físico otorga velocidad de movimiento.   Pasiva Mítica:  Otorga a todos los otros objetos  legendarios  de Velocidad de movimiento.  ",
    "class": "Luchador",
    "totalGold": 3300,
    "sellGold": 2310,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/6631.png"
  },
  {
    "id": 222,
    "name": "Cercenador Divino",
    "description": "   40  de Daño de Ataque  300  de Vida  20  de Aceleración de Habilidad   Espada Encantada:  Después de usar una habilidad, tu próximo ataque recibe una mejora de daño adicional  al impacto . Si el objetivo es un campeón, también cura.   Pasiva Mítica:  Otorga a todos los otros objetos  legendarios  de Penetración de Armadura y Penetración de Magia.   ",
    "class": "Luchador",
    "totalGold": 3300,
    "sellGold": 2310,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/6632.png"
  },
  {
    "id": 223,
    "name": "Angustia de Liandry",
    "description": "   80  de Poder de Habilidad  600  de Maná  20  de Aceleración de Habilidad    Agonía:  Inflige daño mágico adicional a campeones según la vida adicional del objetivo.  Tormento:  Infligir daño con habilidades quema a los enemigos a lo largo del tiempo.   Pasiva Mítica:  Otorga a todos los otros objetos  legendarios  de Aceleración de Habilidad.  ",
    "class": "Mago",
    "totalGold": 3200,
    "sellGold": 2240,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/6653.png"
  },
  {
    "id": 224,
    "name": "Tempestad de Luden",
    "description": "   80  de Poder de Habilidad  6  de Penetración de Magia  600  de Maná  20  de Aceleración de Habilidad    Eco:  Las habilidades de daño infligen daño mágico al objetivo y a 3 enemigos cercanos y otorgan velocidad de movimiento. Infligir daño de habilidad a campeones reduce el enfriamiento de este objeto.   Pasiva Mítica:  Otorga a todos los otros objetos  legendarios  de Penetración de Magia.   ",
    "class": "Mago",
    "totalGold": 3200,
    "sellGold": 2240,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/6655.png"
  },
  {
    "id": 225,
    "name": "Hielo Eterno",
    "description": "   70  de Poder de Habilidad  250  de Vida  600  de Maná  20  de Aceleración de Habilidad    Activa:   Congelar:  Inflige daño en un cono y  ralentiza  a los enemigos que impacta. Los enemigos en el centro del cono quedarán  inmovilizados .   Pasiva Mítica:  Otorga a todos los otros objetos  legendarios  Poder de habilidad.    ",
    "class": "Mago",
    "totalGold": 2800,
    "sellGold": 1960,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/6656.png"
  },
  {
    "id": 226,
    "name": "Vara de las Edades",
    "description": "   60  de Poder de Habilidad  400  de Vida  400  de Maná   Este objeto gana 20 de Vida, 20 de Maná y 4 de Poder de Habilidad cada 60 seg hasta 10 veces, con un máximo de 200 de Vida, 200 de Maná y 40 de Poder de Habilidad. Al alcanzar las acumulaciones máximas, sube un nivel y todos los efectos de Eternidad aumentan en un 50%.   Eternidad:  Restaura Maná igual a un 7% del daño recibido de campeones antes de la mitigación y restaura Vida igual a un 25% del Maná utilizado, hasta 20 de Vida por lanzamiento por seg. Por cada 200 de Vida o Maná restaurados de este modo, obtiene un  35% de Velocidad de Movimiento  que decae por 3 seg.   Pasiva Mítica:  Otorga a todos los otros objetos  legendarios   5 de Aceleración de Habilidad.   ",
    "class": "Mago",
    "totalGold": 2800,
    "sellGold": 1960,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/6657.png"
  },
  {
    "id": 227,
    "name": "Ceniza de Bami",
    "description": "   300  de Vida    Inmolar:  Recibir o infligir daño provoca que comiences a infligir daño mágico por segundo a los enemigos cercanos (aumenta contra súbditos y monstruos).  ",
    "class": "Tanque",
    "totalGold": 1000,
    "sellGold": 700,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/6660.png"
  },
  {
    "id": 228,
    "name": "Guantelete del Hijo del Hielo",
    "description": "   400  de Vida  50  de Armadura  20  de Aceleración de Habilidad    Espada Encantada:  Después de usar una habilidad, tu próximo ataque recibe una mejora de daño adicional y crea un campo congelado por 2.5 seg. Los enemigos que se muevan a través del campo quedan  ralentizados . El objetivo principal queda incapacitado, ya que le aplica un 100% de ralentización adicional y reduce su daño en un 10% contra ti por 2.5 seg. (1.5 seg ).   Pasiva Mítica:  Otorga a todos los otros objetos  legendarios   50 de Vida ,  5%  de Tenacidad y  5%  de resistencia a ralentizaciones.   ",
    "class": "Tanque",
    "totalGold": 3000,
    "sellGold": 2100,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/6662.png"
  },
  {
    "id": 229,
    "name": "Quimotanque Turbo",
    "description": "   500  de Vida  50  de Resistencia Mágica  10  de Aceleración de Habilidad    Activa:   Supercarga:  Otorga velocidad de movimiento al moverse hacia los enemigos o las torretas enemigas. Al acercarte a un enemigo (o luego de 4 seg), emite una onda de choque que  ralentiza  a los campeones cercanos.  ",
    "class": "Tanque",
    "totalGold": 2800,
    "sellGold": 1960,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/6664.png"
  },
  {
    "id": 230,
    "name": "Jak'Sho, el Proteico",
    "description": "   400  de Vida  30  de Armadura  30  de Resistencia Mágica  20  de Aceleración de Habilidad    Resistencia del Vacío:  Por cada seg en combate contra campeones, se obtiene una acumulación de  Armadura  y  Resistencia Mágica , con un máximo de 8 acumulaciones. Al llegar al máximo de acumulaciones se potencia, drena instantáneamente a los enemigos a tu alrededor para infligir daño mágico, te cura y aumenta las resistencias adicionales hasta el final del combate.   Pasiva Mítica:  Otorga a todos los otros objetos  legendarios    de Armadura y de Resistencia Mágica .  ",
    "class": "Tanque",
    "totalGold": 3200,
    "sellGold": 2240,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/6665.png"
  },
  {
    "id": 231,
    "name": "Virtud Radiante",
    "description": "   350  de Vida  30  de Armadura  30  de Resistencia Mágica  10  de Aceleración de Habilidad    Luz Guía:  Trasciendes al lanzar tu definitiva, lo que aumenta tu vida máxima. Al estar bajo el efecto de Trascendencia, tú y tus aliados se curan con el tiempo.   Pasiva Mítica:  Otorga a todos los otros objetos  legendarios  de Vida.  ",
    "class": "Soporte",
    "totalGold": 2700,
    "sellGold": 1890,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/6667.png"
  },
  {
    "id": 232,
    "name": "Carcaj de Mediodía",
    "description": "   30  de Daño de Ataque  15%  de Velocidad de Ataque    Precisión:  Los ataques infligen daño adicional a súbditos y monstruos.  ",
    "class": "Tirador",
    "totalGold": 1300,
    "sellGold": 910,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/6670.png"
  },
  {
    "id": 233,
    "name": "Fuerza del Viento",
    "description": "   50  de Daño de Ataque  15%  de Velocidad de Ataque  20%  de Probabilidad de Golpe Crítico  7%  de Velocidad de Movimiento    Activa:   Tromba:  Se desplaza a la dirección objetivo, dispara tres misiles al enemigo con menos vida cerca de tu destino. Inflige daño físico, que aumenta contra objetivos con menos vida.   Pasiva Mítica:  Otorga a todos los otros objetos  legendarios   5  de Daño de Ataque.   Daño de misil máximo infligido cuando la vida de un enemigo es menor que al 25%. El desplazamiento de Tromba no puede pasar a través del terreno.   ",
    "class": "Tirador",
    "totalGold": 3400,
    "sellGold": 2380,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/6671.png"
  },
  {
    "id": 234,
    "name": "Matakrakens",
    "description": "   40  de Daño de Ataque  30%  de Velocidad de Ataque  20%  de Probabilidad de Golpe Crítico    Derríbalo:  Cada tercer ataque inflige daño físico adicional. Las activaciones repetidas en el mismo objetivo aumentan el daño infligido.  ",
    "class": "Tirador",
    "totalGold": 3000,
    "sellGold": 2100,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/6672.png"
  },
  {
    "id": 235,
    "name": "Arcoescudo Inmortal",
    "description": "   50  de Daño de Ataque  20%  de Probabilidad de Golpe Crítico  10%  de Robo de Vida    Salvavidas:  Al recibir daño que reduciría tu Vida por debajo de un 30%, obtienes un escudo. Además, obtienes velocidad de ataque.  ",
    "class": "Tirador",
    "totalGold": 3000,
    "sellGold": 2100,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/6673.png"
  },
  {
    "id": 236,
    "name": "Cuchillas Raudas de Navori",
    "description": "   65  de Daño de Ataque  20%  de Probabilidad de Golpe Crítico  15  de Aceleración de Habilidad    Trascendencia:  Tus ataques reducen los enfriamientos de tus habilidades básicas.  Impermanencia:  Tus habilidades infligen daño aumentado según la probabilidad de golpe crítico.   Pasiva Mítica:  Otorga a todos los otros objetos  legendarios   5  de Daño de Ataque.  ",
    "class": "Tirador",
    "totalGold": 3400,
    "sellGold": 2380,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/6675.png"
  },
  {
    "id": 237,
    "name": "El Coleccionista",
    "description": "   55  de Daño de Ataque  20%  de Probabilidad de Golpe Crítico  18  de Letalidad    Muerte e Impuestos:  Infligir daño que dejaría a un campeón enemigo por debajo del 5% de Vida lo ejecuta. Los asesinatos de campeones otorgan 25 de oro adicional.  ",
    "class": "Tirador",
    "totalGold": 3000,
    "sellGold": 2100,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/6676.png"
  },
  {
    "id": 238,
    "name": "Cuchillo de Furia",
    "description": "   25%  de Velocidad de Ataque    Ira:  Los ataques infligen  20 de daño mágico   al impacto .  Ataque Furioso:  Los ataques básicos otorgan un  5% de Velocidad de Ataque , que se acumula hasta 3 veces.  ",
    "class": "Tirador",
    "totalGold": 1200,
    "sellGold": 840,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/6677.png"
  },
  {
    "id": 239,
    "name": "Hoja Crepuscular de Draktharr",
    "description": "   60  de Daño de Ataque  18  de Letalidad  20  de Aceleración de Habilidad    Acechador Nocturno:  Tus habilidades infligen un porcentaje de daño según la vida faltante del objetivo. Cuando muera un campeón al que le hayas infligido daño durante los últimos 3 seg, te volverás  inalcanzable  para las unidades que no sean estructuras durante 1.5 seg (10 seg ).   Pasiva Mítica:  Otorga a todos los otros objetos  legendarios  de Aceleración de Habilidad y Velocidad de Movimiento.   ",
    "class": "Asesino",
    "totalGold": 3100,
    "sellGold": 2170,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/6691.png"
  },
  {
    "id": 240,
    "name": "Eclipse",
    "description": "   60  de Daño de Ataque  12  de Letalidad  15  de Aceleración de Habilidad     Luna Eterna:  Impactar a un campeón con 2 ataques o habilidades diferentes en un lapso de 1.5 seg inflige daño adicional, te otorga velocidad de movimiento y un escudo.   Pasiva Mítica:  Otorga a todos los otros objetos  legendarios  de Penetración de Armadura y de Velocidad de Movimiento.  ",
    "class": "Asesino",
    "totalGold": 3100,
    "sellGold": 2170,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/6692.png"
  },
  {
    "id": 241,
    "name": "Garra del Merodeador",
    "description": "   55  de Daño de Ataque  15  de Letalidad  15  de Aceleración de Habilidad     Ataque de Arena:  Tras desplazarte, saltar o salir de sigilo, tu próximo ataque contra un campeón inflige daño físico adicional. Si lo inflige un campeón cuerpo a cuerpo, este ataque además  ralentizará  al objetivo.  ",
    "class": "Asesino",
    "totalGold": 3000,
    "sellGold": 2100,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/6693.png"
  },
  {
    "id": 242,
    "name": "Rencor de Serylda",
    "description": "   45  de Daño de Ataque  30%  de Penetración de Armadura  20  de Aceleración de Habilidad    Frío Implacable:  Las habilidades de daño  ralentizan  a los enemigos.  ",
    "class": "Asesino",
    "totalGold": 3200,
    "sellGold": 2240,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/6694.png"
  },
  {
    "id": 243,
    "name": "Colmillo de Serpiente",
    "description": "   55  de Daño de Ataque  12  de Letalidad    Rompeescudos:  Infligir daño a un campeón enemigo reduce cualquier escudo que obtenga. Al infligir daño a un enemigo que no esté bajo los efectos de Rompeescudos, reduce todos los escudos que tenga.  El rendimiento del objeto difiere para los usuarios cuerpo a cuerpo y a distancia.  ",
    "class": "Asesino",
    "totalGold": 2600,
    "sellGold": 1820,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/6695.png"
  },
  {
    "id": 244,
    "name": "Arco Axiomático",
    "description": "   55  de Daño de Ataque  18  de Letalidad  25  de Aceleración de Habilidad    Flujo:  Cuando un campeón muere en un lapso de 3 seg después de haberle infligido daño, recuperas un 20% del tiempo total de enfriamiento de tu habilidad definitiva.  ",
    "class": "Asesino",
    "totalGold": 3000,
    "sellGold": 2100,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/6696.png"
  },
  {
    "id": 278,
    "name": "Cadenas de Anatema",
    "description": "   650  de Vida  20  de Aceleración de Habilidad    Activa:   Promesa:  Selecciona un Némesis para comenzar a crear una Vendetta (90 seg).   Vendetta:  Recibe daño reducido de tu Némesis, el cual aumenta por cada acumulación de Vendetta. Obtienes acumulaciones con el tiempo y alcanzas el máximo de acumulaciones tras 60 seg.  Venganza:  Al tener el máximo de acumulaciones, tu Némesis tiene Tenacidad reducida al estar cerca de ti.   La activa se puede lanzar al estar muerto y con alcance global. Las acumulaciones se restablecen tras elegir a un nuevo objetivo. No se puede lanzar durante 15 seg al estar en combate con campeones.    ''Ella juró dedicar su vida a destruirlo. Los guanteletes escucharon''.   ",
    "class": "Tanque",
    "totalGold": 2500,
    "sellGold": 1750,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/8001.png"
  },
  {
    "id": 279,
    "name": "Máscara Abisal",
    "description": "   300  de Vida  60  de Resistencia Mágica  10  de Aceleración de Habilidad    Deshacer:   Maldice  a los campeones enemigos cercanos, lo que reduce su resistencia mágica. Por cada enemigo  Maldito , obtienes resistencia mágica.  ",
    "class": "Soporte",
    "class": "Tanque",
    "totalGold": 2400,
    "sellGold": 1680,
    "image": "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/8020.png"
  }
]
