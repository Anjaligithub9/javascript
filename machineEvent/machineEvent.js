
    if (machineEvent.textContent == "Machine is on") {
        document.querySelector("button").addEventListener("click", (event) => {
          event.target.textContent = "Machine is off";
        });
      }
  
      else {
        document.querySelector("button").addEventListener("click", (event) => {
          event.target.textContent = "Machine is on";
        });
  
    }