/**
 * node should be started after setting
 * NODE_ENV=development or production
 */
module.exports = function(){
    switch(process.env.NODE_ENV){
        case 'development':
            return {
               debug:1,
               port:8000
            };

        case 'production':
            return {
               debug:0,
               port:443
            };

        default:
            return {
                debug:1,
                port:8000
            };
    }
};