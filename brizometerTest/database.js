var mysql = require('mysql'),db;

module.exports = {
    init: function(){
        if(!db){
          db = mysql.createPool({
                host: 'localhost', 
                user: 'root',
                password: '',
                database: 'brizometer'
              });
        }
    },
    get: function() {
      if(!db) {
        this.init()
      }

      return db;    
    }
};