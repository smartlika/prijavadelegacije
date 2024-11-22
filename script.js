  document.getElementById('addPlayerBtn').addEventListener('click', function() {
    var playerName = prompt("Unesite ime novog igrača:");
    if (playerName) {
      var newPlayer = $("<div class='player draggable bg-light rounded p-2 mb-2' data-player='" + playerName + "'>" + playerName + "</div>");
      $("#container1").append(newPlayer);
      newPlayer.draggable({
        revert: "invalid",
        cursor: "move",
        containment: ".container"
      });
    }
  });
  
  $(function() {
    $(".draggable").draggable({
      revert: "invalid",
      cursor: "move",
      containment: ".container"
    });
  
    $(".droppable").droppable({
      accept: ".draggable",
      drop: function(event, ui) {
        var droppedPlayer = ui.helper;
        $(this).append(droppedPlayer);
        droppedPlayer.css({ top: 0, left: 0 });
      }
    });
  
    $("#container1").droppable({
      accept: "#container2 .draggable",
      drop: function(event, ui) {
        var droppedPlayer = ui.helper;
        $(this).append(droppedPlayer);
        droppedPlayer.css({ top: 0, left: 0 });
      }
    });
  });
  
  // Add event listener for printing button
  document.getElementById('printButton').addEventListener('click', function() {
    printContainer2Content();
  });
  

  // Pronalazi element kontejnera u koji će se dodati igrači
var container1 = document.getElementById('container1');

// Iterira kroz "bazu" igrača i dodaje HTML elemente za svakog igrača
for (var playerId in playersDatabase) {
  if (playersDatabase.hasOwnProperty(playerId)) {
    var playerName = playersDatabase[playerId];
    var playerElement = document.createElement('div');
    playerElement.textContent = playerName;
    playerElement.classList.add('player', 'draggable', 'bg-light', 'rounded', 'p-2', 'mb-2');
    playerElement.setAttribute('data-player-id', playerId);
    container1.appendChild(playerElement);
  }
}

// Funkcija za brisanje elementa na dvostruki klik u kontejneru 2
function deletePlayerContainer2(event) {
    // Uklanja element iz DOM-a
    event.target.remove();
  }
  
  // Dodavanje event listenera za dvostruki klik na elemente s klasom 'player' u kontejneru 2
  $(document).on('dblclick', '#container2 .player', deletePlayerContainer2);






