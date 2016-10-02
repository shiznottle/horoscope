
// 'Enter key --> Click' //

var zodiac = [
	{
		sign: "aquarius",
		fortune: "Knowledge, Humanitarian, Serious, Insightful, Duplicitous",
		image: "img/aquarius.png",
	},
	{
		sign: "aries",
		fortune: "Active, Demanding, Determined, Effective, Ambitious",
		image: "img/aries.png"
	},
	{
		sign: "cancer",
		fortune: "Emotion, Diplomatic, Intensity, Impulsive, Selective",
		image: "img/cancer.png"
	},
	{
		sign: "capricorn",
		fortune: "Determination, Dominance, Perservering, Practical, Willful",
		image: "img/capricorn.png"
	},
	{
		sign: "gemini",
		fortune: "Communication, Indecision, Inquisitive, Intelligent, Changeable",
		image: "img/gemini.png"
	},
	{
		sign: "leo",
		fortune: "Ruling, Warmth, Generosity, Faithful, Initiative",
		image: "img/leo.png"
	},
	{
		sign: "libra",
		fortune: "Balance, Justice, Truth, Beauty, Perfection",
		image: "img/libra.png"
	},
	{
		sign: "pisces",
		fortune: "Fluctuation, Depth, Imagination, Reactive, Indecisive",
		image: "img/pisces.png"
	},
	{
		sign: "sagittarius",
		fortune: "Philosophical, Motion, Experimentation, Optimism",
		image: "img/sagittarius.png"
	},
	{
		sign: "scorpio",
		fortune: "Transient, Self-Willed, Purposeful, Unyielding",
		image: "img/scorpio.png"
	},
	{
		sign: "taurus",
		fortune: "Security, Subtle strength, Appreciation, Instruction, Patience",
		image: "img/taurus.png"
	},
	{
		sign: "virgo",
		fortune: "Analyzing, Practical, Reflective, Observation, Thoughtful",
		image: "img/virgo.png"
	}
]

function showResult(){
	var userSign = document.getElementById("userSign")
	
	// confirm the element exists and what value the user submits
	console.log(userSign)
	console.log("user's value is: " + userSign.value)

	// loop through zodiac array one item at a time 
	for(var i = 0; i < zodiac.length; i++){
		// check what the users value is before using it in a condition
		console.log("users value lowercase is: " + userSign.value.toLowerCase())
		// check the current item's sign in the zodiac array
		console.log("current zodiac sign in loop is " + zodiac[i].sign)

		// if the value the user typed in, changed to all lowercase letters, is equal to one of our signs, then we do something
		if(userSign.value.toLowerCase() === zodiac[i].sign){
			
			h1 = document.getElementById('yourSign')
			icon = document.getElementById('icon')
			text = document.getElementById('yourHoroscope')

			h1.className = "animated fadeIn"
			icon.className = "animated fadeIn"
			text.className = "animated fadeIn"


			// get element with id="userSign" and change the text to the user input
			h1.textContent = userSign.value
			// get element with id="icon" and change source attribute to current zodiac image path
			icon.src = zodiac[i].image
			// get element with id="yourHoroscope" and change the content to this concatenated string
			text.textContent = "Your best attributes are " + zodiac[i].fortune 

			return
		
		}else {
			var errorMessage = document.getElementById("yourSign")
			errorMessage.textContent = "No matches found, try again."
			errorMessage.className = "animated fadeIn"
		}
	}
}

	
	















