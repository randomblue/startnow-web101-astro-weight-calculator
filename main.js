// Write your JavaScript code here!
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];planets.reverse();
  // We're going to solve this by breaking the problem into three parts.
// Programmers like automating things, we'll populate the HTML drop down options using code,
// instead of having to type out all the values.
// Create a function that does the some math and gives us the new weight.
// Then create a function that responds when the user clicks on the button.

// 1. Populate the dropdown element with the data found in the planets array.
// The value of each option should be the planet's name.
// Use the following built-in methods:
// `.forEach` `document.createElement` `document.getElementById` `.appendChild`
planets.forEach(function(planet) {
    var option = document.createElement("option");
    var planetText = document.createTextNode(planet[0]);
    option.appendChild(planetText);
    document.getElementById('planets').appendChild(option);
})

function calculateWeight(weight, planetName) {
    // 2. Write the code to return the correct weight
    var myPlanet = planets.find(function(planetA){
      return planetA[0] == planetName
    })
    var gravity = myPlanet[1];
  return weight * gravity;
}

  function handleClickEvent() {
    // 3. Create a variable called userWeight and assign the value of the user's weight.
      var weight = document.getElementById('user-weight').value;
    // 4. Create a variable called planetName and assign the name of the selected planet from the drop down.
      var planetName = document.getElementById('planets').value;
    // 5. Create a variable called result and assign the value of the new calculated weight.
      var results = calculateWeight(weight, planetName);
    // 6. Write code to display the message shown in the screenshot.
      document.getElementById('output').innerHTML = "If you were on " + planetName + ", you would weigh " + results + "lbs!"
  }
  

  // 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.
  
  // Bonus Challenges
  // 8. Reverse the drop down order so that the sun is first.
  // 9. Make it look nice using bootstrap (http://getbootstrap.com/getting-started/)













/*planets.forEach(function(planet){
    var option = document.createElement('option');
    var planetText = document.createTextNode(planet[0]);
    option.appendChild(planetText);
    option.setAttribute('value', planet[1]);
    document.getElementById('planets').appendChild(option);
})
*/


//var planetSelects = document.getElementById('planets');
//foreach.options[]

//planets.foreach(function() )



  //var planetSelect = document.getElementById('planets');
//foreach (var i = 0; < planets.length; i++) {
  //  var opt = document.createElement('option');
 //   opt.innerHTML = planets[i];
 //   pot.value = planets[i];
//    sel.appendChild(opt);
//}
//planetSelect
//