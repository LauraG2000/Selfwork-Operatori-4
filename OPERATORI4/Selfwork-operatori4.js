let gatti_tot = 1000;
let gatti_per_fila = 300;

let numero_file = (gatti_tot / gatti_per_fila).toFixed(0);
let gatti_in_fila = gatti_per_fila * numero_file;
let gatti_rimanenti = gatti_tot - gatti_in_fila;
let gatti_mancanti = gatti_per_fila - gatti_rimanenti;

console.log(`Ci sono ${numero_file} file di gatti e ne mancano ${gatti_mancanti} per una nuova fila, con un avanzo di ${gatti_rimanenti}`);
