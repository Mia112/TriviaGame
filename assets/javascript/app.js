
        var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
        var questions = [
            ["In Javascript, an Object can contain what?", "Properties", "Methods", "Both", "C" ],
            ["In Javascript statements that are surrounded by curly braces are known as what?", 
            "Code Blocks","Statements", "Groups", "A" ],
            ["In Javascript, we use this to stores data", "Object", "Variables", "Element", "B"],
            ["Which is not consider a Data Type?", "String", "Boolean", "Symbols", "C"],
            ["The process of joining together two or more strings to create one new string", "Concatenation", "Joining", "Connecting", "A"],
            ["The acronym CSS means what?", "Cool Style Sheets", "Cascading Style Sheets", "Colored Style Sheets", "B"],
            ["Which is not consider to be a Data Type?","String", "Boolean", "Symbols", "C"],
            ["This allow programmers to create a single value from one or more values.", "Operators", "Expressions", "Strings", "A"],
            ["This allow us to group a series of statements together to perform a spacific task", "Object", "Variable", "Function", "C"],
            ["Pieces of information passed to a function are known as what?", "Data", "Parameters", "Values", "B"],
            ["The response we expect the function to provide is known as what?", "Return Function", "Answers", "Return Info", "A"],
            ["A Function with no name is called what?", "No Name Function", "Undefined Function", "Anonymous Function", "C"],
            ["When a Variable is created inside a function using the var keyword, it is called what?", "In-line Variable", "Local Variable", "Function Variable", "B"]
            
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
            document.getElementById("test_status").innerHTML = "question " + (pos + 1) +" of "+ questions.length;
            //to add data into our variable
            var sec = 10;
            var time = setInterval(run, 1000);
            function run() {
                document.getElementById("timer").innerHTML = sec;
                sec--;
                if(sec == 0) {
                stop();
                run();
                }   
                  
            }
            // function run() {
            // clearInterval(time);
            // time = setInterval(decrement, 100000);
            // }

            // The stop function
            function stop() {
            clearInterval(time);
        
            }
            question = questions[pos][0];
            chA = questions[pos][1];
            chB = questions[pos][2];
            chC = questions[pos][3];
            
            
            test.innerHTML = "<h3>" + question + "</h3>";
            test.innerHTML += "<input type='radio' name='choices' value='A'> " + chA + "<br>";
            test.innerHTML += "<input type='radio' name='choices' value='B'> " + chB + "<br>";
            test.innerHTML += "<input type='radio' name='choices' value='C'> " + chC + "<br><br>";

            test.innerHTML += "<button onclick='checkAnswer()';>Submit Answer</button>";

        }
        function checkAnswer(){
            choices = document.getElementsByName("choices");
            for(var i=0; i < choices.length; i++) {
                if(choices[i].checked) {
                    choice = choices[i].value;
                    stop();
                    
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
            run();

        }
        window.addEventListener("load", randerQuestion, false);

        
