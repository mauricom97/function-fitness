fitness()

function fitness() {
    
    let hours = require('./horarios.json')
    let commercial = require('./commercial.json')

    hours = hours.horarios
    for (let hour of hours) {
        hour.score = 1000
        if (hour.commercials.indexOf(commercial.material > -1)) {
            hour.score *= 0.5
        }
        console.log(hour)
    }

}