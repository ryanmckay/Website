function greet(){
				//finds the variable inTest
				var nameTest = document.getElementById("name");
				var questTest = document.getElementById("quest");
				var colorTest = document.getElementById("color");
				//assigns the data in inTest to inputTest
				var name = nameTest.value;
				var quest = questTest.value;
				var color = colorTest.value;
				
				//assigns the data in output (further down) to this output
				var output = document.getElementById("output");
				if(name !="" && quest !="" && color !=""){
					output.innerHTML = "Hello, " + name + ".\n'" + 
						quest + "'" + " sounds interesting.\n" +
						color + " is my favorite color, too.\n";
				}

				else output.innerHTML = "You didn't fill everything out!\n";
				//alert makes a dialog box
				//alert("You typed: " + inputTest);

}
