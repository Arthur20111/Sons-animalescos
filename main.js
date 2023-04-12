function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ppkQuQ2Fh/model.json', modelReady);
  }
  
  function modelReady() {
    classifier.classify(gotResults);
  }
  
  function gotResults(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      random_number_red = Math.floor(Math.random() * 255) + 1;
      random_number_green = Math.floor(Math.random() * 255) + 1;
      random_number_blue = Math.floor(Math.random() * 255)  + 1;
  
     
      document.getElementById("result_confidence").innerHTML = 'Precisão - ' + (results[0].confidence * 100).toFixed(2) + " %";
      document.getElementById("result_label").style.color = "rgb(" + random_number_red + "," + random_number_green + "," + random_number_blue + ")";
      document.getElementById("result_confidence").style.color = "rgb(" + random_number_red + "," + random_number_green + "," + random_number_blue + ")";
  
      img = document.getElementById('alien1');
      img1 = document.getElementById('alien2');
      img2 = document.getElementById('alien3');
      img3 = document.getElementById('alien4');
  
      if (results[0].label == "Cachorros") {
        document.getElementById("result_label").innerHTML = 'Posso ouvir um cachorro';
        img.src = 'cachorro.gif';
        img1.src = 'gato.jpeg';
        img2.src = 'coelho.jpeg';
        img3.src = 'tigre.jpeg';
      } else if (results[0].label == "Gatos") {
        document.getElementById("result_label").innerHTML = 'Posso ouvir um gato';
        img.src = 'cachorro.jpg';
        img1.src = 'gato.gif';
        img2.src = 'coelho.jpeg';
        img3.src = 'tigre.jpeg';
      } else if (results[0].label == "Coelhos") {
        document.getElementById("result_label").innerHTML = 'Posso ouvir um coelho';
        img.src = 'cachorro.jpg';
        img1.src = 'gato.jpeg';
        img2.src = 'coelho.gif';
        img3.src = 'tigre.jpeg';
      } else {
        document.getElementById("result_label").innerHTML = 'Posso ouvir um tigre';
        img.src = 'cachorro.jpg';
        img1.src = 'gato.jpeg';
        img2.src = 'coelho.jpeg';
        img3.src = 'tigre.gif';
      }
    }
  }
  