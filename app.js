let active_cases = document.querySelector('.active_cases');
let total_cases = document.querySelector('.total_cases');
let confirmed_cases = document.querySelector('.confirmed_cases');
let recovered = document.querySelector('.recovered');
let deaths = document.querySelector('.deaths');
let last_updated = document.querySelector('.last_updated');


apiData();


function apiData(){
    fetch('https://api.covid19india.org/data.json')
        .then(function(res){
            return res.json();
        }).then(function(data){
            let states = data.statewise;
            
            states.forEach(state => {
                if(state.state == 'Gujarat'){
                    console.log(state);
                    active_cases.innerHTML = state.active;
                    confirmed_cases.innerHTML = state.confirmed;
                    recovered.innerHTML = state.recovered;
                    deaths.innerHTML = state.deaths;
                    last_updated.innerHTML = state.lastupdatedtime;
                }
            });
        });
}