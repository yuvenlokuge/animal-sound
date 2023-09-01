//https://teachablemachine.withgoogle.com/models/Hvfi3FpL5/model.json
function startClassification()
{
navigator.mediaDevices.getUserMedia({
    audio:true
});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Hvfi3FpL5/model.json',modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
}
function gotResults(error,result)
{
if(error){
    console.error(error)
}
else{
    console.log(result)
    random_number_r = Math.floor(Math.random()*255)+1;
    random_number_g = Math.floor(Math.random()*255)+1;
    random_number_b = Math.floor(Math.random()*255)+1;

    document.getElementById("result_label").innerHTML = 'I can hear - '+result[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (result[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

    img1=document.getElementById("alien1")
    img2=document.getElementById("alien2")
    img3=document.getElementById("alien3")
    img4=document.getElementById("alien4")
    if(result[0].label=='cat'){
        img1.src='cat.gif';
        img2.src='cow.png';
        img3.src='dog.png';
        img4.src='tiger.png';

    }
    else if(result[0].label=='cow'){
        img1.src='cat.png';
        img2.src=' cow.gif';
        img3.src='dog.png';
        img4.src='tiger.png';
    }

    else if(result[0].label=='dog'){
        img1.src='cat.png';
        img2.src='cow.png';
        img3.src='dog.gif';
        img4.src='tiger.png';
    }

    else if(result[0].label=='tiger') {
        img1.src='cat.png';
        img2.src='cow.png';
        img3.src='dog.png';
        img4.src='tiger.gif';
    }
    else{
        img1.src='cat.png';
        img2.src='cow.png';
        img3.src='dog.png';
        img4.src='tiger.png';
    }
}
}