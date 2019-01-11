// Updated: 2018-11-18
// This script is made for demonstrative purposes only. 
// Use at your own risk. 
// Respect the 500px's policy and terms of use.
function loop() {
console.log('Script loading…please wait…');
// Get a random number between 1-10 and add 3, to get one between 4-13:
var Time1 = Math.ceil(Math.random() * 10) + 3;
var Time2 = Math.ceil(Math.random() * 10) + 3;
setTimeout(function() {
// Do a Like action
if ( $('div[tabindex="0"] g[id*="Icon---Like---Filled"]').length) {
    console.log('Photo already liked. Skipping…');
} else {
    console.log('Like the photo…');
    $('div[tabindex="0"]').click();   
} 
setTimeout(function() {
// Go to the next picture if exists
if ($('#copyrightTooltipContainer .isvg.loaded').length) {
        console.log('Loading next photo…');
        $('#copyrightTooltipContainer .loaded:eq(1)').click();      
} else {
        // If not… 
        // ..nothing. Page can't be reloaded. Do it manually and run the script again.
        console.log('Reload the page and run the script manually.!');
}
loop();    
}, Time1 * 1000);
}, Time2 * 1000);
}
loop();
