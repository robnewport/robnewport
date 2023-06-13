import {preloadTensorflowModel, predict} from './tensorflow-controller.js';

/**
 * JS Promise to Tensorflow controller
 */
const makePredictionUsingImage = async () => {
    const defaultImageElement = document.getElementById('default_image');
    const status = document.getElementById('status');
    predict(defaultImageElement).then(
        (result) => {            
           status.innerText = JSON.stringify(result);
        },
        (error) => { 
           console.log(error);
        }
    );
};

/**
 * JS event listener for submit button
 */
document.getElementById('btn').addEventListener("click", makePredictionUsingImage);

/**
 * Preload Tensorflow Model then immediately promise a prediction
 */
preloadTensorflowModel().then(makePredictionUsingImage);
