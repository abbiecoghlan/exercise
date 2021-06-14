// The THX-1138 connection check program below is written in javascript
// To run this program, cd into the folder containing the file and enter the following command into the terminal: node thx.js

let counter = 0

const interval = setInterval(() => {
    ping()
}, 1000)

const ping = () => {
    counter++
    if (counter <= 100) {
        if (counter % 5 === 0 && counter % 3 === 0 ){
            console.log("SCAN_FOR_TOWERS")
        } else if (counter % 5 === 0) {
            console.log("CHECK_CHANNEL_NOISE")
        } else if (counter % 3 === 0) {
            console.log("CHECK_SIGNAL_STRENGTH")
        } else {
            console.log("PING")
        }
    } else { 
        clearInterval(interval) 
    } 
}