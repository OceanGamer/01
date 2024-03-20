let noButtonTexts = [
    "Estás segura pinchecha?",
    "Piénsalo de nuevo guapa",
    "Creo que te equivocaste de botón",
    "De verdad quieres hacer esto?",
    "Deja de tocar ese boton",
    "Quizás deberías reconsiderarlo...",
    "El boton verde es mas bonito",
    "Y los recuerdos bonitos que?",
    "Porfavor :(",
    "Para continuar, favor presionar boton verde",
    "¿Seguro que quieres hacerlo?",
    "Piensalo una vez mas bebe",
    "No deberíamos pensarlo más en frío?",
    "No crees que deberíamos pensarlo juntos?"
  ];
  
    let noButtonIndex = 0;
    let increaseSize = 150;
    
  
  function showMessage(confirmation) {
    const messageElement = document.getElementById("message");
    const waitElement = document.getElementById("wait");
    if (confirmation) {
    const yesButton = document.getElementById("yesBtn");
      const noButton = document.getElementById("noBtn");
      messageElement.innerText = "Eres la mejorrrr, te amo muchoooo";
      waitElement.innerText = "Espera 2 segundos porfisss";
      yesButton.style.display = 'none'
      noButton.style.display = 'none'
      document.getElementById("image").src = "foto2.jpg"; // Agrega la ruta de la imagen
      document.getElementById("image").style.width = '400px';


      setTimeout(function() {
        // Número de teléfono al que se enviará el mensaje (incluyendo el código de país)
        let phoneNumber = "584126316772"; // Reemplazar con tu número de teléfono
        // Mensaje que se enviará
        let message = "Si quiero volver <3";
    
        // Crear el enlace de redirección a WhatsApp con el número y el mensaje
        let whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
        // Redirigir a WhatsApp
        window.location.href = whatsappLink;
      }, 2000);

    } else {
      messageElement.innerText = noButtonTexts[noButtonIndex];
      noButtonIndex = (noButtonIndex + 1) % noButtonTexts.length;
      const yesButton = document.getElementById("yesBtn");
      const noButton = document.getElementById("noBtn");
      yesButton.style.width = "calc(100px + " + increaseSize + "px)";
      yesButton.style.height = "calc(100px + " + increaseSize + "px)";
      yesButton.innerText = "¡Síiiii!";
      increaseSize += 100;
      console.log(increaseSize)

      if (increaseSize >= 1050) {
        noButton.style.width = '50px'
        noButton.style.height = '50px'
      }
      if (increaseSize >= 1150) {
        noButton.style.width = '30px'
        noButton.style.height = '30px'
      }
      if (increaseSize >= 1250) {
        noButton.style.width = '10px'
        noButton.style.height = '10px'
      }
      if (increaseSize >= 1350) {
        noButton.style.display = 'none'
        yesButton.style.marginRight = "0";
      }
    }
  }

