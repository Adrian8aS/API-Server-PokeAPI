#	All Berries (endpoint)
Berries son frutas pequeñas que pueden proporcionar HP y restauración de condición de estado, mejora de estadísticas e incluso negación de daño cuando son consumidas por Pokémon. Aquí se trae todas las Berries disponibles en orden alfabético y el conteo total de estas.

GET   http://localhost:8080/Berries
   
Nombre - Descripción - Tipo

count	- Es el total de Berries disponibles - integer

berries	- Arreglo con el nombre de todas las Berries disponibles - array [strings]

#	Egg Groups (endpoint)
Los Egg Groups son categorías que determinan qué Pokémon pueden cruzarse para criar. Los Pokémon pueden pertenecer a uno o dos Egg Groups. Aquí se trae todos los Egg Groups disponibles en orden alfabético y el conteo total de estos.

GET   http://localhost:8080/Egg/Groups
 
Nombre -	Descripción	- Tipo

count	- Es el total de Egg Groups disponibles -	integer

types	- Arreglo con el nombre de todos los Egg Groups disponibles -	array [strings]

#	Random Team (endpoint)
Random Team consiste en generar un equipo de 6 Pokémon aleatorios para que jugadores experimentados, si desean aceptar el reto, puedan participar en combates con Pokémon poco habituales del competitivo

GET   http://localhost:8080/Random/Team
 
Nombre	- Descripción	- Tipo

pokemon_team - Arreglo con el nombre de 6 Pokémon aleatorios que conforman el equipo	- array [strings]

#	Pokemon Types (endpoint)
Los Types son propiedades de los Pokémon y sus movimientos. Aquí se trae los diferentes tipos de Pokémon ordenados alfabéticamente.

GET   http://localhost:8080/PokemonTypes
 
Nombre	- Descripción	- Tipo

count	- Es el total de Types disponibles - integer

types	- Arreglo con el nombre de todos los diferentes tipos disponibles - array [strings]

#	Genderless Pokemon (endpoint)
Los géneros se introdujeron con el propósito de criar Pokémon, pero también pueden resultar en diferencias visuales o incluso diferentes líneas evolutivas. Aquí se trae todos los Pokémon calificados como Genderless y su total.

GET   http://localhost:8080/Pokemon/Genderless
   
Nombre - Descripción - Tipo

count	- Es el total de Pokémon sin género disponibles - integer

pokemon -	Arreglo con el nombre de todos los Pokémon sin género disponibles -	array [strings]

#	Pokemon Identifier (endpoint)
Aquí se trae el id o número de la Pokédex, el nombre, las habilidades y tipos de un Pokémon el cual es proporcionado por el usuario. Se puede proporcionar cualquier Pokémon existente o un id hasta 898 con el parámetro “info”. Ver imagen de abajo.

POST   http://localhost:8080/Identifier/Pokemon
 
Nombre	- Descripción	- Tipo

id	- Es el número de la Pokédex que identifica de manera única al Pokémon - integer

name	- Es el nombre del Pokémon - string

abilities	- Arreglo con las posibles habilidades del Pokémon seleccionado -	array [strings]

types	- Arreglo con los tipos del Pokémon seleccionado - array [strings]

#	Abilities Identifier (endpoint)
Las habilidades proporcionan efectos pasivos para Pokémon en batalla o en el mundo. Los Pokémon tienen múltiples habilidades posibles, pero solo pueden tener una habilidad a la vez. Aquí se muestra el id, el nombre, el efecto, la cantidad de Pokémon con esta habilidad y dichos Pokémon, todo esto referente a la habilidad proporcionada por el usuario. Se puede proporcionar cualquier habilidad existente o un id hasta 267 con el parámetro “info”. Ver imagen de abajo.

POST   http://localhost:8080/Identifier/Abilities
 
Nombre	- Descripción	- Tipo

id	- Es el id que identifica de manera única a la habilidad dada por el usuario - integer 

name	- Es el nombre de la habilidad - string

effect - Arreglo con el efecto de la habilidad - array [string]

count -	Es el total de Pokémon con dicha habilidad	- integer

pokemon	- Arreglo con los Pokémon que poseen la habilidad seleccionada	- array [strings]

#	Items Identifier (endpoint)
Un Item es un objeto en los juegos que el jugador puede recoger, guardar en su bolso y usar de alguna manera. Aquí se muestra el id, el nombre, la categoría y el efecto del Item proporcionado por el usuario. Se puede proporcionar cualquier Item existente o un id hasta 1005 con el parámetro “info”. Ver imagen de abajo.

POST   http://localhost:8080/Identifier/Items
 
Nombre	- Descripción	- Tipo

id	- Es el id que identifica de manera única al Item dado por el usuario	- integer 

name -	Es el nombre del Item	- string

category	- Es la categoría del Item	- string

effect	- Arreglo con el efecto del Item	- array [string]

#	Moves Identifier (endpoint)
Los movimientos son las habilidades de los Pokémon en la batalla. Aquí se muestra el id, el nombre, el tipo elemental y de daño, el poder, la precisión, la cantidad de usos, la prioridad, el target y el efecto del Movimiento proporcionado por el usuario. Se puede proporcionar cualquier Movimiento existente o un id hasta 826 con el parámetro “info”. Ver imagen de abajo.

POST   http://localhost:8080/Identifier/Moves
 
Nombre	- Descripción	- Tipo

id	- Es el id que identifica de manera única al Move dado por el usuario	- integer 

name	- Es el nombre del Movimiento -	string

type	- Es el tipo elemental del Movimiento	- string

damage_class	- Es el tipo de daño del ataque puede ser físico o especial -	string

power	- Es la cantidad de daño a causar por el movimiento -	integer

accuracy	- Es la precisión de dicho movimiento nos indica la probabilidad de acertar -	integer

pp	- Es la cantidad de usos del movimiento -	integer

priority -	La prioridad del movimiento -	integer

target	- Indica si ataca a uno o a todos los Pokémon - string

effect	- Arreglo con el efecto del movimiento	- array [string]

#	Pokemon by type (endpoint)
Aquí se divide a los Pokémon por sus tipos elementales y además nos trae su id, nombre, cuenta del total de Pokémon de ese tipo y dicha lista de esos Pokémon según el tipo proporcionado por el usuario. Se puede proporcionar cualquier Tipo existente o un id hasta 18 con el parámetro “type”. Ver imagen de abajo.

POST   http://localhost:8080/Pokemon/Type
 
Nombre - Descripción	- Tipo

id	- Es el id que identifica de manera única al tipo dado por el usuario	- integer 

name	- Es el nombre del tipo	 - string

count	- Es el total de Pokémon con ese tipo -	integer

pokemon	- Arreglo con los Pokémon que poseen ese tipo seleccionado	- array [strings]

