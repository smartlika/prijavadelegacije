var playersDatabase = {
    "HKS123": "Krešimir Mesić",
    "HKS124": "Monika Milanović",
    "HKS125": "Bore Juričević",
    "HKS126": "Hrvoje Marinović",
    "HKS128": "Darko Zovko",
    "HKS129": "Valnetina Gal",
    "HKS130": "Luka Ukalović",
    "HKS131": "Mihael Grivičić",
    "HKS132": "Nataša Ravnić",
    "HKS133": "Ines Maričić",
    // Dodajte ostale igrače ovde
  };
  


  var lige = [
    { id: 1, naziv: "Prva liga" },
    { id: 2, naziv: "Druga liga" },
    { id: 3, naziv: "Treća liga" },
    { id: 4, naziv: "Četvrta liga" },
    { id: 5, naziv: "Peta liga" }
  ];
  
  var utakmice = [
    { id_liga: 1, broj_utakmice: 1, kolo: 1, id_klub_domaci: 1, id_klub_gosti: 2, kuglana: "Kuglana A", datum: "2024-04-30", mjesto: "Grad A" },
    { id_liga: 1, broj_utakmice: 2, kolo: 1, id_klub_domaci: 3, id_klub_gosti: 4, kuglana: "Kuglana B", datum: "2024-05-01", mjesto: "Grad B" },
    // Dodatne utakmice za Prvu ligu
    { id_liga: 1, broj_utakmice: 3, kolo: 2, id_klub_domaci: 2, id_klub_gosti: 3, kuglana: "Kuglana C", datum: "2024-05-05", mjesto: "Grad C" },
    { id_liga: 1, broj_utakmice: 4, kolo: 2, id_klub_domaci: 4, id_klub_gosti: 5, kuglana: "Kuglana D", datum: "2024-05-06", mjesto: "Grad D" },
    { id_liga: 1, broj_utakmice: 5, kolo: 3, id_klub_domaci: 1, id_klub_gosti: 4, kuglana: "Kuglana A", datum: "2024-05-10", mjesto: "Grad A" },
    // Dodatne utakmice za Drugu ligu
    { id_liga: 2, broj_utakmice: 1, kolo: 1, id_klub_domaci: 6, id_klub_gosti: 7, kuglana: "Kuglana E", datum: "2024-05-02", mjesto: "Grad E" },
    { id_liga: 2, broj_utakmice: 2, kolo: 1, id_klub_domaci: 8, id_klub_gosti: 9, kuglana: "Kuglana F", datum: "2024-05-03", mjesto: "Grad F" },
    { id_liga: 2, broj_utakmice: 3, kolo: 2, id_klub_domaci: 7, id_klub_gosti: 8, kuglana: "Kuglana G", datum: "2024-05-07", mjesto: "Grad G" },
    { id_liga: 2, broj_utakmice: 4, kolo: 2, id_klub_domaci: 9, id_klub_gosti: 10, kuglana: "Kuglana H", datum: "2024-05-08", mjesto: "Grad H" },
    { id_liga: 2, broj_utakmice: 5, kolo: 3, id_klub_domaci: 6, id_klub_gosti: 9, kuglana: "Kuglana E", datum: "2024-05-12", mjesto: "Grad E" },
    // Dodatne utakmice za Treću ligu
    { id_liga: 3, broj_utakmice: 1, kolo: 1, id_klub_domaci: 11, id_klub_gosti: 12, kuglana: "Kuglana I", datum: "2024-05-04", mjesto: "Grad I" },
    { id_liga: 3, broj_utakmice: 2, kolo: 1, id_klub_domaci: 13, id_klub_gosti: 14, kuglana: "Kuglana J", datum: "2024-05-05", mjesto: "Grad J" },
    { id_liga: 3, broj_utakmice: 3, kolo: 2, id_klub_domaci: 12, id_klub_gosti: 13, kuglana: "Kuglana K", datum: "2024-05-09", mjesto: "Grad K" },
    { id_liga: 3, broj_utakmice: 4, kolo: 2, id_klub_domaci: 14, id_klub_gosti: 15, kuglana: "Kuglana L", datum: "2024-05-10", mjesto: "Grad L" },
    { id_liga: 3, broj_utakmice: 5, kolo: 3, id_klub_domaci: 11, id_klub_gosti: 14, kuglana: "Kuglana I", datum: "2024-05-14", mjesto: "Grad I" },
    // Dodatne utakmice za Četvrtu ligu
    { id_liga: 4, broj_utakmice: 1, kolo: 1, id_klub_domaci: 16, id_klub_gosti: 17, kuglana: "Kuglana M", datum: "2024-05-06", mjesto: "Grad M" },
    { id_liga: 4, broj_utakmice: 2, kolo: 1, id_klub_domaci: 18, id_klub_gosti: 19, kuglana: "Kuglana N", datum: "2024-05-07", mjesto: "Grad N" },
    { id_liga: 4, broj_utakmice: 3, kolo: 2, id_klub_domaci: 17, id_klub_gosti: 18, kuglana: "Kuglana O", datum: "2024-05-11", mjesto: "Grad O" },
    { id_liga: 4, broj_utakmice: 4, kolo: 2, id_klub_domaci: 19, id_klub_gosti: 20, kuglana: "Kuglana P", datum: "2024-05-12", mjesto: "Grad P" },
    { id_liga: 4, broj_utakmice: 5, kolo: 3, id_klub_domaci: 16, id_klub_gosti: 19, kuglana: "Kuglana M", datum: "2024-05-16", mjesto: "Grad M" },
    // Dodatne utakmice za Petu ligu
    { id_liga: 5, broj_utakmice: 1, kolo: 1, id_klub_domaci: 21, id_klub_gosti: 22, kuglana: "Kuglana Q", datum: "2024-05-08", mjesto: "Grad Q" },
    { id_liga: 5, broj_utakmice: 2, kolo: 1, id_klub_domaci: 23, id_klub_gosti: 24, kuglana: "Kuglana R", datum: "2024-05-09", mjesto: "Grad R" },
    { id_liga: 5, broj_utakmice: 3, kolo: 2, id_klub_domaci: 22, id_klub_gosti: 23, kuglana: "Kuglana S", datum: "2024-05-13", mjesto: "Grad S" },
    { id_liga: 5, broj_utakmice: 4, kolo: 2, id_klub_domaci: 24, id_klub_gosti: 25, kuglana: "Kuglana T", datum: "2024-05-14", mjesto: "Grad T" },
    { id_liga: 5, broj_utakmice: 5, kolo: 3, id_klub_domaci: 21, id_klub_gosti: 24, kuglana: "Kuglana Q", datum: "2024-05-18", mjesto: "Grad Q" }
  ];
  
  var klubovi = [
    { id: 1, naziv: "Klub A", mjesto: "Grad A" },
    { id: 2, naziv: "Klub B", mjesto: "Grad B" },
    { id: 3, naziv: "Klub C", mjesto: "Grad C" },
    { id: 4, naziv: "Klub D", mjesto: "Grad D" },
    // Dodatni klubovi
  ];
  
  var igraci = [
    { ID: 1, id_klub: 1, ime: "Antonio-test", prezime: "Antonić-test" },
    { ID: 2, id_klub: 1, ime: "Barbara", prezime: "Barbarić" },
    { ID: 3, id_klub: 1, ime: "Cristiano", prezime: "Cristanić" },
    { ID: 4, id_klub: 1, ime: "Diana", prezime: "Dianić" },
    { ID: 5, id_klub: 1, ime: "Emanuel", prezime: "Emanuilović" },
    { ID: 6, id_klub: 1, ime: "Fabio", prezime: "Fabić" },
    { ID: 7, id_klub: 1, ime: "Gloria", prezime: "Glorić" },
    { ID: 8, id_klub: 1, ime: "Hrvoje", prezime: "Hrvojić" },
    { ID: 9, id_klub: 1, ime: "Ivana", prezime: "Ivančić" },
    { ID: 10, id_klub: 1, ime: "Juraj", prezime: "Juranić" },
    { ID: 11, id_klub: 2, ime: "Luka", prezime: "Lukić" },
    { ID: 12, id_klub: 2, ime: "Ana", prezime: "Anić" },
    { ID: 13, id_klub: 2, ime: "Ivana", prezime: "Ivanić" },
    { ID: 14, id_klub: 2, ime: "Marko", prezime: "Marković" },
    { ID: 15, id_klub: 2, ime: "Petar", prezime: "Petrović" },
    { ID: 16, id_klub: 2, ime: "Ana", prezime: "Anić" },
    { ID: 17, id_klub: 2, ime: "Ivan", prezime: "Ivanović" },
    { ID: 18, id_klub: 2, ime: "Ivana", prezime: "Ivanić" },
    { ID: 19, id_klub: 2, ime: "Marko", prezime: "Marković" },
    { ID: 20, id_klub: 2, ime: "Ana", prezime: "Anić" },
    { ID: 21, id_klub: 3, ime: "Petar", prezime: "Petrović" },
    { ID: 22, id_klub: 3, ime: "Ana", prezime: "Anić" },
    { ID: 23, id_klub: 3, ime: "Ivana", prezime: "Ivanić" },
    { ID: 24, id_klub: 3, ime: "Marko", prezime: "Marković" },
    { ID: 25, id_klub: 3, ime: "Petar", prezime: "Petrović" },
    { ID: 26, id_klub: 3, ime: "Ana", prezime: "Anić" },
    { ID: 27, id_klub: 3, ime: "Ivan", prezime: "Ivanović" },
    { ID: 28, id_klub: 3, ime: "Ivana", prezime: "Ivanić" },
    { ID: 29, id_klub: 3, ime: "Marko", prezime: "Marković" },
    { ID: 30, id_klub: 3, ime: "Ana", prezime: "Anić" },
    // Dodatni igrači
  ];
  
  // Exportanje podataka za korištenje u drugim datotekama, ako je potrebno
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      lige: lige,
      utakmice: utakmice,
      klubovi: klubovi,
      igraci: igraci,
      playersDatabase: playersDatabase
    };
  }
