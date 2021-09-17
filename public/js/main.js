const submitBtn = document.getElementById("submitBtn");
 const cityName = document.getElementById('cityName');
 const city_name = document.getElementById('city_name');
 const temp_realval = document.getElementById('temp_realval');
 const temp_status = document.getElementById('temp_status');
 const datahide = document.querySelector('.middle_layer');

const getInfo = async(event) =>{
    
    event.preventDefault();

    
    let cityVal = cityName.value;

    if(cityVal===""){
        city_name.innerHTML = "Please Write The Name Before Search";
        datahide.classList.add("data_hide");

    }
    else{

        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=a4dd2a6ca19e2d4bb8f9448c9c99297e`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            
            city_name.innerHTML = `${arrData[0].name},${arrData[0].sys.country}`;
            temp_realval.innerText = arrData[0].main.temp;
            const temp_mood = arrData[0].weather[0].main;
            // temp_status.innerText = arrData[0].weather[0].main;
            

                 if (temp_mood=="Clouds"){
                     temp_status.innerHTML = "<i class='fas fa-cloud' style = 'color: #ffff';></i>";
                     
                 }

                 else if (temp_mood=="Clear"){
                    temp_status.innerHTML = "<i class='fas fa-sun' style = 'color: Orange';></i>";
                }

                else if (temp_mood=="Rain"){
                    temp_status.innerHTML = "<i class='fas fa-cloud-rain' style = 'color: skyblue';></i>";
                }

                else {
                    temp_status.innerHTML = "<i class='fas fa-sun' style = 'color: Orange';></i>";
                }

            datahide.classList.remove("data_hide");

        }
        catch{
            city_name.innerHTML = "Please Enter Valid City Name";
            datahide.classList.add("data_hide");
        }
    }
    
}


submitBtn.addEventListener('click',getInfo)

// https://api.openweathermap.org/data/2.5/weather?q=Boisar&appid=a4dd2a6ca19e2d4bb8f9448c9c99297e

