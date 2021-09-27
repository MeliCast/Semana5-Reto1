
//Cantidad de litros de leche que produce
let cantidadLitrosLeche = +prompt("Ingrese la cantidad de litros de leche que produce"); 

//Precio de un galón de leche
let PrecioGalon = +prompt("Ingrese el precio de un galón de leche"); 

//1 galón = 3.785 litros
//Cantidad de galones que produce
let CantidadGalones = (cantidadLitrosLeche/3.785);

//Ganancia por la entrega de leche
let GananciaPorLeche =  (PrecioGalon*CantidadGalones);

console.log(`Recibirá s/. ${GananciaPorLeche} de ganancia por la entrega de ${CantidadGalones} galon(es) que produjo en un día`);

