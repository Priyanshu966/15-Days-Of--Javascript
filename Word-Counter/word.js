let text = document.getElementById('text');
            let word = document.getElementById('span1');
            let letter = document.getElementById('span2');
            text.addEventListener('input' , function(){ 
                let smurf = text.value;
                letter.innerHTML = smurf.length
                text.value.split(" ");
                smurf = smurf.trim()
                word.innerHTML = smurf.split(" ").filter(function(elm){
                    return elm != "";
                }).length
                
            })