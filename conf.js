/**
 * node should be started after setting
 * NODE_ENV=development or production
 */
module.exports = function(){
    switch(process.env.NODE_ENV){
        case 'development':
            return {
               debug:1 
            };

        case 'production':
            return {
               debug:0 
            };

        default:
            return {
                debug:1
            };
    }
};