let active_cases = document.querySelector('.active_cases');
let deaths = document.querySelector('.deaths');
let last_updated = document.querySelector('.last_updated');

// let select = document.querySelector('select');

apiData();

function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

function apiData(){
    fetch('https://api.covid19india.org/data.json')
        .then(function(res){
            return res.json();
        }).then(function(data){
            let states = data.statewise;

            let options = ''
            
            // states.forEach(state => {
                //     console.log(state.state);
            //     select.innerHTML = `<option>${states.state}</option>`;
            // });
            
            states.forEach(state => {
                

                // options += `<option value="${state.state}">${state.state}</option>`;

                // select.addEventListener('click', function values(value){
                //     return value = select.value;
                // });

                if(state.state == 'Gujarat'){
                    active_cases.innerHTML = numberWithCommas(state.active);
                    deaths.innerHTML = numberWithCommas(state.deaths);
                    last_updated.innerHTML = `Last updated - ${state.lastupdatedtime}`;
                }
                // select.innerHTML = options;
            });

        });
}


