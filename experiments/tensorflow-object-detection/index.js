const img = document.getElementById('img');
  cocoSsd.load().then(model => {
    model.detect(img).then(predictions => {
        console.log('Predictions: ', predictions);
        for (let i = 0; i < predictions.length; i++) {
            boundingBox(predictions[i])
        }
    });
  });

  function boundingBox(prediction) {
        label = prediction.class;
        score = prediction.score;
        box = prediction.bbox;
        const newDiv = document.createElement("div");
        newDiv.className = "box"
        newDiv.style.left = box[0];
        newDiv.style.top = box[1];
        newDiv.style.width = box[2];
        newDiv.style.height = box[3];
        newDiv.innerText = label;
        document.body.appendChild(newDiv);
  }