var SpeechRecognition = window.webkitSpeechRecognition;
recognition = new SpeechRecognition()

function start()
{
    console.log("start")
    document.getElementById("textbox").innerHTML = ""
    recognition.start()
}

recognition.onresult = function (event)  { 
         console.log(event);   
            var spoken = event.results[0][0].transcript;    
           document.getElementById("textbox").innerHTML = spoken; 
                  console.log(spoken);
                
                  if (spoken == "take my selfie")
                  {
                      console.log("taking your selfie in 5 seconds")
                      speak();   
                    }
                 }


                  function speak()
                  {
                      synth = window.speechSynthesis; // is the game name
                      speak_data = "Taking your selfie in 5 seconds"// textbox is mind speak data is pictures name
                      utter = new SpeechSynthesisUtterance(speak_data) // speak data transferred to saanvis mind
                      synth.speak(utter) // saanvi acts the speak data
                 
                  Webcam.attach(camera)

                  setTimeout( function()
                    {
                        takeSnapshot()
                        savePhoto()
                        
                    }, 5000)

                  }

                  function takeSnapshot()
                  {
                      Webcam.snap( function (data_uri){
                          
                      image = '<img id="selfie_image" src="'+data_uri+'">'
                      document.getElementById("result").innerHTML = image
                      }
                      )
                  }

                  function savePhoto()
                  {
                      link = document.getElementById("link")
                      image_url = document.getElementById("selfie_image").src
                      link.href = image_url
                      link.click()
                  }
                  Webcam.set({  image_format: 'jpg', jpg_quality: 90 })
                 camera =  document.getElementById("camera")