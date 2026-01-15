// Lets damage the crowdly divs quietly across the board.
var crowdlyobserver = new MutationObserver(function(mutations, observer) {
    // look through all mutations that just occured
    for(var i=0; i<mutations.length; ++i) {
        // look through all added nodes of this mutation
        for(var j=0; j<mutations[i].addedNodes.length; ++j) {
            // was a child added with ID of 'bar'?
            var newelemntid = mutations[i].addedNodes[j].id;
            if(newelemntid && newelemntid !== undefined && newelemntid !== null){
                if(newelemntid.includes('crowdvns')  || newelemntid.includes('crowdvns')) {
                document.querySelectorAll('[id^=crowdvns]').forEach(e => e.remove());
                document.querySelectorAll('[id^=crowdly]').forEach(e => e.remove());
                }
            }

        }
    }
});
var crowdlyobserverconfig = {
    attributes: true,
    childList: true,
    characterData: true
};

crowdlyobserver.observe(document.body, crowdlyobserverconfig);

// When fails, plugin will enforce it via exception handler.