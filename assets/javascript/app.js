
        var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
        var questions = [
            ["In Javascript, an Object can contain what?", "Properties", "Methods", "Both", "C" ],
            ["In Javascript statements that are surrounded by curly braces are known as what?", 
            "Code Blocks","Statements", "Groups", "A" ],
            ["In Javascript, we use this to stores data", "Object", "Variables", "Element", "B"],
            ["Which is not consider a Data Type?", "String", "Boolean", "Symbols", "C"],
            ["The process of joining together two or more strings to create one new string", "Concatenation", "Joining", "Connecting", "A"]
        ];
       
        
        //to render our questions to the page
        function randerQuestion(){
            test = document.getElementById("test");
            if(pos >= questions.length){
                test.innerHTML = "<h2>You got " +correct+ " out of "+questions.length+" question correct<h2>";
                document.getElementById("test_status").innerHTML = "Game Completed!";
                pos = 0;
                correct = 0;
                return false;
            }
            // document.getElementById("test_status").innerHTML = "question " + (pos + 1) +" of "+ questions.length;
            //to add data into our variable
            var sec = 15;
            var time = setInterval(playerTime, 1000);
            function playerTime() {
                document.getElementById("timer").innerHTML = sec;
                sec--;
                if(sec == -1) {
                    clearInterval(time);
                    pos++;
                    randerQuestion();
                }
            }
            question = questions[pos][0];
            chA = questions[pos][1];
            chB = questions[pos][2];
            chC = questions[pos][3];
            
            
            test.innerHTML = "<h3>" + question + "</h3>";
            test.innerHTML += "<input type='radio' name='choices' value='A'> " + chA + "<br>";
            test.innerHTML += "<input type='radio' name='choices' value='B'> " + chB + "<br>";
            test.innerHTML += "<input type='radio' name='choices' value='C'> " + chC + "<br><br>";

            test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";

        }
        function checkAnswer(){
            choices = document.getElementsByName("choices");
            for(var i=0; i < choices.length; i++) {
                if(choices[i].checked) {
                    choice = choices[i].value;
                    
                }
                console.log(checkAnswer);
            }
            if(choice == questions[pos][4]) {
                correct++;
                // correct = document.getElementById("correct");
               
            }

            // go to the next question
            pos++;
            randerQuestion();
        }
        window.addEventListener("load", randerQuestion, false);

