
//               //  Task 1

// // let a = prompt("Enter Value:")

// // if(a>="A"&& a<="Z")
// //   document.write("UpperCase Characters")

// //  else if(a>="a"&& a<="z")
// //     document.write("LowerCase Characters")
    
// //     else
// //     document.write("Its a Number")

//               //  Task 2

// // let a = +prompt("Input Value:")
// // let b = +prompt("Input Value:")

// // if(a>b)

// //   document.write("Larger Integer Number is: "+a+"<br>")
// //     else if(b>a)

// //     document.write("Larger Integer Number is: "+b+"<br>")

// // else
// //   document.write("The values "+ a+ " and "+b+ " are equal.")

//                       // Task 3

//   // let a = +prompt("Input Value:")
//   //   if(a>=1)
//   //       document.write("The Value is Positive: "+a+"<br>")

//   //   else if(a<0)
//   //       document.write("The Value is Negative: "+a+"<br>")

//   //   else
//   //      document.write("The values is: "+a)

//                             // Task 4

//   // let a = prompt("Enter a Character: ")

//   //   if(a=="a"|| a==="e"||a==="i"||a==="o"||a==="u")
//   //       document.write("The character is a vowel: true")

//   //   else
//   //      document.write("The character is a vowel: false")

      
//                       // Task 5

//   // let password1 = prompt("Enter your password")                    
//   // let password2 = prompt("Enter your password again")                    

//   // if(password1 === "" )
//   // alert("Please enter your password")
//   //   else if(password1 === "SMIT" && password2===password1)
//   //     alert("Your both password is correct")
//   //   else
//   //   alert("Your password is incorrect")

//                     //  Task 6

// // var greeting; 
// // var hour = 13;
// //  if (hour < 18) 
// //  { greeting = "Good day";
// // } else
// //     greeting = "Good evening";
    
//                           // Task 7

// // Prompt the user to enter the time in 24-hour format (e.g., 1900)
// // var time24 = parseInt(prompt("Enter the time in 24-hour format (e.g., 1900):"));

// // // Initialize variables for 12-hour format
// // var time12;
// // var period;

// // // Check different cases based on the input time
// // if (time24 >= 0.0 && time24 <= 11.59) {
// //     time12 = time24;
// //     period = "AM";
// //     document.write( time12+" : "+period)
// //   } else if (time24 >= 1200 && time24 <= 1259) {
// //     time12 = time24;
// //     period = "PM";
// //     document.write( time12+" : "+period)
// //   } else if (time24 >= 1300 && time24 <= 2359) {
// //     time12 = time24 - 1200;
// //     period = "PM";
// //     document.write( time12+" : "+period)
// //   } else {
// //   document.write("Invalid input. Please enter a time between 0000 and 2359.")
// //     console.log("Invalid input. Please enter a time between 0000 and 2359.");
// // }

// // // Display the result
// // if (time12 !== undefined && period !== undefined) {
// //     console.log("The time in 12-hour clock format is: " + time12 + period);
// // }


//                 // Chapter 13 to 15

//                   //  Task 1

//       // var epmtyArray = [];            

//       //                 //  Task 2

//       // var arryObject = new Array();                

//       //                   //  Task 3

//       // var stringArray =["Apple", "Banana","Orange","Nashpati"]

//       //                   //  Task 4

//       // var numberArray =[1, 2,3,4] 
      
//       //                   //  Task 5

//       // var boleanArray =[true,false]   

//       //                   //  Task 6

//       // var mixedArray =["Toyota",true,5,"Samsung",6] 

//                         //  Task 7

//       //     let heading = "<h2>Qaulifications:</h2>"; 
//       //     document.write(heading+"<br>")

//       // var qaulifications =["1) SSC","2) HSC","3) BSC","4) BS","5) BCOM","6) MS","7) M.Phil","8) PhD"]
  
//       // for(let i = 0; i<=7; i++){
//       //   document.write(qaulifications[i]+"<br>" )
//       // }
        
//                 //  Task 8

//       // Create an array to store student names
// // var studentNames = ["WAqar", "Anwar", "Shehzad"];

// // // Create an array to store student scores (out of 500)
// // var studentScores = [420, 350, 480];

// // // Calculate and display the scores and percentages of students
// // for (var i = 0; i < studentNames.length; i++) {
// //     var name = studentNames[i];
// //     var score = studentScores[i];
    
// //     // Calculate the percentage
// //     var percentage = (score / 500) * 100;
    
// //     document.write("Score of " + name + " is "+score+" Percentage: " + percentage+"%" +"<br>");
   
// // }
//                         //  Task 9

// var colorNames = ["Red", " Green"," Yellow"," Pink"];                    
// document.write("<p>Original Array: " + colorNames.join(", ") + "</p>")
                                  
//                           // a

// let userColor = prompt("Which Color do you want to add at begining")
//  colorNames.unshift(userColor)
// document.write("<p>Original Array: " + colorNames.join(", ") + "</p>")

//                   //  b
// // Ask the user for a color to add to the end
// var userColorEnd = prompt("Enter a color to add to the end:");

// // Add the user's color choice to the end of the array
// colors.push(userColorEnd);

// // Display the updated array in the browser
// document.write("<p>Updated Array (with user's color at the end): " + colors.join(", ") + "</p>");
//                           // c 

// // Add two more colors to the beginning of the array
// colors.unshift("Purple", "Pink");

// // Display the updated array with two colors added to the beginning
// document.write("<p>Updated Array (with two colors added to the beginning): " + colors.join(", ") + "</p>");
                                
//                                 // d 

// // Delete the first color in the array
// colors.shift();

// // Display the updated array after deleting the first color
// document.write("<p>Updated Array (after deleting the first color): " + colors.join(", ") + "</p>");

//                                 //  f 

//  // Ask the user for the position/index and color name to add
// var addIndex = parseInt(prompt("Enter the index where you want to add a color:"));
// var userColorToAdd = prompt("Enter the color name to add:");

// // Check if the index is valid
// if (addIndex >= 0 && addIndex <= colors.length) {
//     // Add the user's color choice at the specified index
//     colors.splice(addIndex, 0, userColorToAdd);
    
//     // Display the updated array with the user's color added at the specified index
//     document.write("<p>Updated Array (with user's color added at index " + addIndex + "): " + colors.join(", ") + "</p>");
// } else {
//     document.write("<p>Invalid index. Color not added.</p>");
  
// }
//                                 // g 
// // Ask the user for the position/index and number of colors to delete
// var deleteIndex = parseInt(prompt("Enter the index where you want to delete color(s):"));
// var deleteCount = parseInt(prompt("Enter how many colors you want to delete:"));

// // Check if the index is valid
// if (deleteIndex >= 0 && deleteIndex < colors.length && deleteCount > 0 && deleteIndex + deleteCount <= colors.length) {
//     // Remove the specified number of colors from the user-defined position
//     colors.splice(deleteIndex, deleteCount);
    
//     // Display the updated array after deleting the colors
//     document.write("<p>Updated Array (after deleting " + deleteCount + " color(s) from index " + deleteIndex + "): " + colors.join(", ") + "</p>");
// } else {
//     document.write("<p>Invalid input. Colors not deleted.</p>");
// }                                

//                         // Task 10
//  // Create an array to store student scores
// var studentScores = [85, 72, 93, 88, 64, 97, 78];

// // Sort the array in ascending order
// studentScores.sort(function(a, b) {
//     return a - b;
// });

// // Display the sorted array
// console.log("Sorted Student Scores (Ascending Order): " + studentScores.join(", "));                       

//                   // Task 11
//  // Initialize an array with city names
// var cities = ["New York", "Los Angeles", "Chicago", "Houston", "Miami"];

// // Create an empty array to store selected cities
// var selectedCities = [];

// // Copy three elements from the cities array to selectedCities array
// selectedCities = cities.slice(0, 3);

// // Display the selected cities array
// console.log("Selected Cities: " + selectedCities.join(", "));                 

//                           //  Task 12
// var arr = ["This", " is", " my", " cat"];
// var singleString = arr.join('');
                          
// console.log(singleString);                        

//                             // Task 13
//  // Create an empty array to represent the FIFO queue
// var fifoQueue = [];

// // Add values to the queue (FIFO)
// fifoQueue.push("Value 1");
// fifoQueue.push("Value 2");
// fifoQueue.push("Value 3");

// // Access and remove values in FIFO order
// var firstValue = fifoQueue.shift(); // Removes and retrieves "Value 1"
// var secondValue = fifoQueue.shift(); // Removes and retrieves "Value 2"

// console.log("First Value: " + firstValue);
// console.log("Second Value: " + secondValue);                           

//                           // Task 14
// // Create an empty array to represent the LIFO stack
// var lifoStack = [];

// // Add values to the stack (LIFO)
// lifoStack.push("Value 1");
// lifoStack.push("Value 2");
// lifoStack.push("Value 3");

// // Access and remove values in reverse order (LIFO)
// var lastValue = lifoStack.pop(); // Removes and retrieves "Value 3"
// var secondLastValue = lifoStack.pop(); // Removes and retrieves "Value 2"

// console.log("Last Value: " + lastValue);
// console.log("Second Last Value: " + secondLastValue);                          

//                       // Task 15
//  // Array of phone manufacturers
// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// // Begin the HTML select element
// document.write("<select>");

// // Loop through the manufacturers array and create options for the select menu
// for (var i = 0; i < manufacturers.length; i++) {
//     document.write("<option value='" + manufacturers[i] + "'>" + manufacturers[i] + "</option>");
// }

// // Close the HTML select element
// document.write("</select>");                     