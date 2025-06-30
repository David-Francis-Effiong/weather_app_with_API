var searchInput = document.getElementById ('searchInput')
var submitButton = document.getElementById ('submit-btn')
var weatherInfo = document.getElementById ('result-div')


submitButton.addEventListener ('click', function(event) {
    event.preventDefault() // this cancels the default behaviour of refreshing the page as soon as any value is inserted
    //console.log(searchInput.value)
    var cityName = searchInput.value; 
    var API_KEY = '..................' // API key will be inserted here. Not for public

    if (!cityName){
        alert ('Please enter your city name')

    }
    else {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`

        ).then(function(response){
            //console.log(response.json())
             response.json().then(function(data){
                    var temperature = data.main.temp 
                    var location = data.name 
                    var humidity = data.main.humidity 
                    var windSpeed = data.wind.speed 
//dollar sign and backticks for concatenation of variables with strings
                weatherInfo.innerHTML = ` 
                <div>
                    <h1> ${location}</h2> 
                    <h2> ${temperature}</h2>
                    <h3> ${location}</h2>
                    <h4> ${location}</h2>
                                    </div>`
                }
        )

    }
}
    })
