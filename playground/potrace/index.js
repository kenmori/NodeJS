var potrace = require('potrace');

fs = require('fs');


potrace.trace('./img/banner_tekichuoh.jpg', function(err, svg){
    if(err) throw err;
    fs.writeFileSync('./output.svg', svg);
});

