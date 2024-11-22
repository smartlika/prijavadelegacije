// Funkcija za ispisivanje podataka iz kontejnera 2 prema prilagođenom predlošku
// Funkcija za ispisivanje podataka iz kontejnera 2 prema prilagođenom predlošku
function printContainer2Content() {
    // Preuzimanje kontejnera 2 iz glavnog HTML-a
    var container2Elements = document.getElementById('container2').getElementsByClassName('player');

    // Inicijalizacija niza za sadržaj
    var content = [];

    // Iteracija kroz elemente kontejnera 2 i dodavanje podataka u content
    for (var i = 0; i < container2Elements.length; i++) {
      var playerId = container2Elements[i].getAttribute('data-player-id');
      var playerName = container2Elements[i].textContent;
      content.push({id: playerId, name: playerName}); // Dodajemo rječnik s podacima
    }
    
    // Dodavanje praznih elemenata ako je manje od 10 elemenata
    while (content.length < 10) {
      content.push({id: '', name: ''}); // Dodajemo prazni rječnik
    }
  
    // Stvaranje predloška s lijevim i desnim kontejnerom
    var template = `
      <div style="display: flex; width: 100%; height: 100%;">
        <div style="flex: 1; width: 50%; float: left; border-right: 1px dashed black; border-right-width: 75%;">

          <!-- Lijevi kontejner (A stupac)-->
          <div style="height: 10%; overflow: auto; border: 0px solid black; box-sizing: border-box; padding: 5px;">
            <!-- A0 -->
            
          </div>        

          <!-- Lijevi kontejner (A stupac) -->
          <div style="height: 20%; overflow: auto; border: 0px solid black; box-sizing: border-box; padding: 5px;">
            <!-- A1 -->
            ${generateContainerA1(content)}
          </div>

          <div style="height: 15%; border: 0px solid black; box-sizing: border-box; padding: 5px;">
            <!-- A2 -->
            ${generateContainerA2(content)} 
          </div>

          <div style="height: 35%; border: 0px solid black; box-sizing: border-box; padding: 5px;">
            <!-- A3 -->
            ${generateContainerA3(content)} 
          </div>

          <div style="height: 15%; border: 0px solid black; box-sizing: border-box; padding: 0px;">
            <!-- A4 -->
            ${generateContainerA4(content)} 
          </div>

          <!-- Lijevi kontejner (A stupac)-->
          <div style="height: 2%; overflow: auto; border: 0px solid black; box-sizing: border-box; padding: 0px;">
            <!-- A5 -->
            
          </div> 

        </div>
        <div style="flex: 1; width: 50%; float: right;">
          <!-- Desni kontejner (B stupac)-->
          <div style="height: 7%; overflow: auto; border: 0px solid black; box-sizing: border-box; padding: 10px;">
            <!-- B1 -->
            
          </div>

          <div style="height: 20%; overflow: auto; border-bottom: 1px dashed black; border-bottom-width: 75%; box-sizing: border-box; padding: 10px;">
            <!-- B2 -->
            ${generateContainerB1(content)} 
          </div>

          <div style="height: 20%; border-bottom: 1px dashed black; border-bottom-width: 75%; box-sizing: border-box; padding: 10px;">
            <!-- B3 -->
            ${generateContainerB1(content)}
          </div>

          <div style="height: 20%; border-bottom: 1px dashed black; border-bottom-width: 75%; box-sizing: border-box; padding: 10px;">
            <!-- B4 -->
            ${generateContainerB1(content)}
          </div>

          <div style="height: 20%; border: 0px solid black; box-sizing: border-box; padding: 10px;">
            <!-- B5 -->
            ${generateContainerB1(content)}
          </div>

        </div>
      </div>
    `;
    
    // Stvaranje novog prozora za ispis
    var printWindow = window.open('', '_blank');
    printWindow.document.open();
    printWindow.document.write('<html><head><title>Print</title><style>@page { size: landscape; margin: 0; }</style></head><body>' + template + '</body></html>');
    printWindow.document.close();
  
    // Pokretanje procesa ispisivanja
    printWindow.print();

  }

  function generateContainerA1() {
    var containerContent = `
      <table style="font-family: Arial, sans-serif; border-collapse: collapse; width: 100%; height: 100%; border: 0px solid black;">
        <tbody>
 
          <tr style="height: 8%;">
            <td style="border: 0px solid black; text-align: center; width: 13.40%;"></td>
            <td colspan="4" style="border: 0px solid black; text-align: left; width: 13.40%; font-size: 10px;"><strong>HRVATSKI KUGLAČKI SAVEZ</strong></td>
            <td colspan="4" style="border: 0px solid black; text-align: center; width: 8%;"></td>
            <td colspan="3" style="border: 0px solid black; text-align: right; width: 3.35%; font-size: 10px;">Obrazac: PDE_23_24</td>
            <td style="border: 0px solid black; text-align: center; width: 5%;"></td>
          </tr>

          <tr style="height: 8%;">
            <td style="border: 0px solid black; text-align: center; width: 13.40%;"></td>
            <td colspan="4" style="border: 0px solid black; text-align: left; width: 13.40%; font-size: 10px;">Ilica 37/I, 10000 ZAGREB</td>
            <td colspan="7"style="border: 0px solid black; text-align: center; width: 8%;"></td>
            <td style="border: 0px solid black; text-align: center; width: 5%;"></td>
          </tr>

          <tr style="height: 20%;">
            <td colspan="13" style="border: 0px solid black; text-align: center; width: 13.40%; font-size: 12px;"><strong>PRIJAVA DELEGACIJE EKIPE</strong></td>
          </tr>

          <tr style="height: 12.50%;">
            <td style="border: 0px solid black; text-align: center; width: 13.40%;"></td>
            <td colspan="2" style="border: 0px solid black; text-align: left; width: 6.70%; font-size: 10px; vertical-align: bottom;">Utakmica</td>
            <td colspan="4" style="border-bottom: 1px solid black; text-align: center; width: 10%;"></td>
            <td colspan="2" style="border: 0px solid black; text-align: center; width: 2%;font-size: 10px; vertical-align: bottom;">kolo</td>
            <td style="border-bottom: 1px solid black; text-align: center; width: 14%;"></td>
            <td style="border: 0px solid black; text-align: center; width: 3.35%; font-size: 10px; vertical-align: bottom;">br.</td>
            <td style="border-bottom: 1px solid black; text-align: center; width: 9%;"></td>
            <td style="border: 0px solid black; text-align: center; width: 5%;"></td>
          </tr>

          <tr style="height: 12.50%;">
            <td style="border: 0px solid black; text-align: center; width: 13.40%;"></td>
            <td style="border: 0px solid black; text-align: left; width: 6.70%; font-size: 10px; vertical-align: bottom;">dana: </td>
            <td colspan="2" style="border-bottom: 1px solid black; text-align: center; width: 8.00%;"></td>
            <td colspan="2" style="border: 0px solid black; text-align: left; width: 8%; font-size: 10px; vertical-align: bottom;">, na kuglani</td>
            <td colspan="6" style="border-bottom: 1px solid black; text-align: center; width: 8%;"></td>
            <td style="border: 0px solid black; text-align: center; width: 5%;"></td>
          </tr>

          <tr style="height: 12.50%;">
            <td style="border: 0px solid black; text-align: center; width: 13.40%;"></td>
            <td style="border: 0px solid black; text-align: left; width: 6.70%; font-size: 10px; vertical-align: bottom;">Staze </td>
            <td colspan="2" style="border-bottom: 1px solid black; text-align: center; width: 8.00%;"></td>
            <td colspan="1" style="border: 0px solid black; text-align: left; width: 8%; font-size: 10px; vertical-align: bottom;">, u </td>
            <td colspan="5" style="border-bottom: 1px solid black; text-align: center; width: 8%;"></td>
            <td style="border: 0px solid black; text-align: center; width: 3.35%;"></td>
            <td style="border: 0px solid black; text-align: center; width: 9%;"></td>
            <td style="border: 0px solid black; text-align: center; width: 5%;"></td>
          </tr>


          <tr style="height: 12.50%;">
            <td style="border: 0px solid black; text-align: center; width: 13.40%;"></td>
            <td colspan="2" style="border: 0px solid black; text-align: left; width: 6.70%; font-size: 10px; vertical-align: bottom;">Sastav KK:</td>
            <td colspan="5" style="border-bottom: 1px solid black; text-align: center; width: 8.00%;"></td>
            <td colspan="1" style="border: 0px solid black; text-align: center; width: 3.35%; font-size: 10px; vertical-align: bottom;">, iz</td>
            <td colspan="3" style="border-bottom: 1px solid black; text-align: center; width: 14%;"></td>
            <td style="border: 0px solid black; text-align: center; width: 5%;"></td>
          </tr>

          <tr style="height: 12.50%;">
            <td style="border: 0px solid black; text-align: center; width: 13.40%;"></td>
            <td colspan="2" style="border: 0px solid black; text-align: left; width: 6.70%; font-size: 10px; vertical-align: bottom;">Protivnik KK:</td>
            <td colspan="5" style="border-bottom: 1px solid black; text-align: center; width: 8.00%;"></td>
            <td colspan="1" style="border: 0px solid black; text-align: center; width: 3.35%; font-size: 10px; vertical-align: bottom;">, iz</td>
            <td colspan="3" style="border-bottom: 1px solid black; text-align: center; width: 14%;"></td>
            <td style="border: 0px solid black; text-align: center; width: 5%;"></td>
          </tr>

          <tr style="height: 0.5%;">
            <td style="border: 0px solid black; text-align: center; width: 13.4%;"></td>
            <td style="border: 0px solid black; text-align: center; width: 6.7%;"></td>
            <td style="border: 0px solid black; text-align: center; width: 8%;"></td>
            <td style="border: 0px solid black; text-align: center; width: 10%;"></td>
            <td style="border: 0px solid black; text-align: center; width: 8%;"></td>
            <td style="border: 0px solid black; text-align: center; width: 8%;"></td>
            <td style="border: 0px solid black; text-align: center; width: 8%;"></td>
            <td style="border: 0px solid black; text-align: center; width: 2%;"></td>
            <td style="border: 0px solid black; text-align: center; width: 3.35%;"></td>
            <td style="border: 0px solid black; text-align: center; width: 14%;"></td>
            <td style="border: 0px solid black; text-align: center; width: 3.35%;"></td>
            <td style="border: 0px solid black; text-align: center; width: 9%;"></td>
            <td style="border: 0px solid black; text-align: center; width: 5;"></td>
          </tr>

        </tbody>
      </table>
    `;
    return containerContent;
  }

  function generateContainerA2() {
    var containerContent = `
      <table style="font-family: Arial, sans-serif; border-collapse: collapse; width: 100%; height: 100%; border: 0px solid black;">
        <tbody>
          <tr style="height: 12.50%;">
            
            <td colspan="4" style="border: 0px solid black; text-align: center; font-size: 10px; width: 100%;"><strong>VODSTVO EKIPE:</strong></td>
          </tr>

          <tr style="height: 12.50%;">
            <td style="border: 0px solid black; text-align: center; width: 25%;"></td>
            <td style="border: 1px solid black; text-align: center; font-size: 10px; width: 24%;">Voditelj ekipe:</td>
            <td style="border: 1px solid black; text-align: center; width: 36%;"></td>
            <td style="border: 0px solid black; text-align: center; width: 15%;"></td>
          </tr>

          <tr style="height: 12.50%;">
            <td style="border: 0px solid black; text-align: center; width: 25%;"></td>
            <td style="border: 1px solid black; text-align: center; font-size: 10px; width: 24%;">Kapetan:</td>
            <td style="border: 1px solid black; text-align: center; width: 36%;"></td>
            <td style="border: 0px solid black; text-align: center; width: 15%;"></td>
          </tr>

          <tr style="height: 12.50%;">
            <td style="border: 0px solid black; text-align: center; width: 25%;"></td>
            <td style="border: 1px solid black; text-align: center; font-size: 10px; width: 24%;">Sekundant I:</td>
            <td style="border: 1px solid black; text-align: center; width: 36%;"></td>
            <td style="border: 0px solid black; text-align: center; width: 15%;"></td>
          </tr>

          <tr style="height: 12.50%;">
            <td style="border: 0px solid black; text-align: center; width: 25%;"></td>
            <td style="border: 1px solid black; text-align: center; font-size: 10px; width: 24%;">Sekundant II:</td>
            <td style="border: 1px solid black; text-align: center; width: 36%;"></td>
            <td style="border: 0px solid black; text-align: center; width: 15%;"></td>
          </tr>

          <tr style="height: 12.50%;">
            <td style="border: 0px solid black; text-align: center; width: 25%;"></td>
            <td style="border: 1px solid black; text-align: center; font-size: 10px; width: 24%;">Sekundant III:</td>
            <td style="border: 1px solid black; text-align: center; width: 36%;"></td>
            <td style="border: 0px solid black; text-align: center; width: 15%;"></td>
          </tr>

 

        </tbody>
      </table>
    `;
    return containerContent;
  }

  function generateContainerA3(content) {
    var containerContent = `
      <table style="font-family: Arial, sans-serif; border-collapse: collapse; width: 100%; height: 100%; border: 0px solid black;">
        <tbody>

          <tr style="height: 8%;">
            <td colspan="5" style="border: 0px solid black; text-align: center; font-size: 10px; width: 100%;"><strong>PRIJAVA SASTAVA EKIPE</strong></td>
          </tr>

          <tr style="height: 9%;">
            <td style="border: 0px solid black; width: 8%;"></td>
            <td style="border: 1px solid black; width: 10%; font-size: 7px; text-align: center;">Startni broj - <br> pozicija za igru</td>
            <td style="border: 1px solid black; width: 62%; font-size: 10px; text-align: center;">Ime i prezime</td>
            <td style="border: 1px solid black; width: 15%; font-size: 10px; text-align: center;">HKS ID</td>
            <td style="border: 0px solid black; width: 5%;"></td>
          </tr>
    `;
  
    for (let i = 0; i < 6; i++) {
      containerContent += `
        <tr style="height: 8%;">
          <td style="border: 0px solid black;"></td>
          <td style="border: 1px solid black; text-align: center; font-size: 11px;">${i + 1}.</td>
          <td style="border: 1px solid black; padding-left: 10px; font-size: 11px; text-transform: uppercase;">${content[i].name}</td>
          <td style="border: 1px solid black; text-align: center; font-size: 11px; text-transform: uppercase;">${content[i].id}</td>
          <td style="border: 0px solid black;"></td>
        </tr>
      `;
    }

    for (let i = 6; i < 10; i++) {
      containerContent += `
        <tr style="height: 8%;">
          <td style="border: 0px solid black;"></td>
          <td style="border: 1px solid black; text-align: center; font-size: 11px;">Pr.</td>
          <td style="border: 1px solid black; padding-left: 10px; font-size: 11px; text-transform: uppercase;">${content[i].name}</td>
          <td style="border: 1px solid black; text-align: center; font-size: 11px; text-transform: uppercase;">${content[i].id}</td>
          <td style="border: 0px solid black;"></td>
        </tr>
      `;
    } 

    containerContent += `
        <!-- Nastavite dodavati retke po potrebi -->
        </tbody>
      </table>
    `;
    return containerContent;
  }
  
  function generateContainerA4() {
    var containerContent = `
      <table style="font-family: Arial, sans-serif; border-collapse: collapse; width: 100%; height: 100%; border: 0px solid black;">
        <tbody>
        
        <tr style="height: 1%;">
          <td style="border: 0px solid black; text-align: right; vertical-align: bottom; padding-right: 5px; font-size: 10px; width: 20%;">Prijavio:</td>
          <td style="text-align: right; width: 29%;"></td>
          <td style="border: 0px solid black; text-align: center; vertical-align: bottom; padding-right: 5px; font-size: 10px; width: 16%;">Vidio:</td>
          <td style="text-align: right; width: 30%;"></td>
          <td style="border: 0px solid black; text-align: right; width: 5%;"></td>
        </tr>

        <tr style="height: 33%;">
          <td style="border: 0px solid black; text-align: right; vertical-align: bottom; padding-right: 5px; font-size: 10px; width: 20%;">KK:</td>
          <td style="border-bottom: 1px solid black; text-align: right; width: 29%;"></td>
          <td style="border: 0px solid black; text-align: right; vertical-align: bottom; padding-right: 5px; font-size: 10px; width: 16%;">KK:</td>
          <td style="border-bottom: 1px solid black; text-align: right; width: 30%;"></td>
          <td style="border: 0px solid black; text-align: right; width: 5%;"></td>
        </tr>

        <tr style="height: 33%;">
          <td style="border: 0px solid black; text-align: right; vertical-align: bottom; padding-right: 5px; font-size: 10px; width: 20%;">Potpis:</td>
          <td style="border-bottom: 1px solid black; text-align: right; width: 29%;"></td>
          <td style="border: 0px solid black; text-align: right; vertical-align: bottom; padding-right: 5px; font-size: 10px; width: 16%;">Potpis:</td>
          <td style="border-bottom: 1px solid black; text-align: right; width: 30%;"></td>
          <td style="border: 0px solid black; text-align: right; width: 5%;"></td>
        </tr>

        <tr style="height: 33%;">
          <td style="border: 0px solid black; text-align: right; vertical-align: bottom; padding-right: 5px; font-size: 10px; width: 20%;"></td>
          <td style="text-align: right; width: 29%;"></td>
          <td style="border: 0px solid black; text-align: right; vertical-align: bottom; padding-right: 5px; font-size: 10px; width: 16%;">Glavni sudac:</td>
          <td style="border-bottom: 1px solid black; text-align: right; width: 30%;"></td>
          <td style="border: 0px solid black; text-align: right; width: 5%;"></td>
        </tr>

        </tbody>
      </table>
    `;
    return containerContent;
  }

  function generateContainerB1(content) {
    var containerContent = `
      <table style="font-family: Arial, sans-serif; border-collapse: collapse; width: 100%; height: 100%; border: 0px solid black;">
        <tbody>
          <tr style="height: 12.50%;">
            <td colspan="5" style="border: 0px solid black; text-align: center; width: 92%;"><strong style="font-size: 14px;">Obrazac za zamjenu igrača</strong></td>
            <td style="border: 0px solid black; text-align: center; width: 8%;"></td>
          </tr>

          <tr style="height: 12.50%;">
            <td style="border: 0px solid black; text-align: right; padding-right: 5px; font-size: 10px; width: 33%;">Klub / ekipa</td>
            <td colspan="4" style="border: 1px solid black; text-align: center; width: 59%;"></td>
            <td style="border: 0px solid black; text-align: center; width: 8%;"></td>
          </tr>

          <tr style="height: 1.5%;"></tr>

          <tr style="height: 12.50%;">
            <td style="border: 0px solid black; text-align: right; padding-right: 5px; font-size: 10px; width: 33%;">Ime i prezime igrača koji ulazi</td>
            <td colspan="2" style="border: 1px solid black; text-align: center; width: 39%; font-size: 11px; text-transform: uppercase;">${content[6].name}</td>
            <td style="border: 0px solid black; text-align: center; font-size: 10px; width: 8%;">HKS ID</td>
            <td colspan="1" style="border: 1px solid black; text-align: center; width: 12%; font-size: 11px; text-transform: uppercase;">${content[6].id}</td>
            <td style="border: 0px solid black; text-align: center; width: 8%;"></td>
          </tr>

          <tr style="height: 1.5%;"></tr>

          <tr style="height: 12.50%;">
            <td style="border: 0px solid black; text-align: right; padding-right: 5px; font-size: 10px; width: 33%;">Pozicija na koju ulazi (1-6)</td>
            <td colspan="1" style="border: 1px solid black; text-align: center; width: 12%;"></td>
            <td colspan="2" style="border: 0px solid black; text-align: right; padding-right: 5px; font-size: 10px; width: 35%;">Hitac od kojeg igrač ulazi</td>
            <td colspan="1" style="border: 1px solid black; text-align: center; width: 12%;"></td>
            <td style="border: 0px solid black; text-align: center; width: 8%;"></td>
          </tr>

          <tr style="height: 1.5%;"></tr>

          <tr style="height: 12.50%;">
            <td colspan="2" style="border: 0px solid black; text-align: right; padding-right: 5px; font-size: 10px; width: 45%;">Ime i prezime igrača kojeg mjenja (opcionalno)</td>
            <td colspan="3" style="border: 1px solid black; text-align: center; width: 47%;"></td>
            <td style="border: 0px solid black; text-align: center; width: 8%;"></td>
          </tr>

          <tr style="height: 8%;"></tr>

          <tr style="height: 12.50%;">
            <td colspan="1" style="border: 0px solid black; text-align: right; padding-right: 5px; font-size: 10px; width: 33%;">Potpis voditelja ekipe</td>
            <td colspan="2" style="border-bottom: 1px solid black; text-align: right; padding-right: 5px; font-size: 10px; width: 39%;"></td>
          </tr>

        </tbody>
      </table>
    `;
    return containerContent;
  }
  
