var fs = require('fs'),
    readline = require('readline');

var rd = readline.createInterface({
  input: fs.createReadStream('6.sql'),
  //output: process.stdout,
  output: fs.createWriteStream('test.sql'),
  terminal: false
});

var data=[];
var str='INSERT INTO `rekomendi_platform`.`requests` (`code`, `created_date`, `updated_date`, `name`, `status`, `submission_time`, `parent_facility`, `requested_by`, `tier_requested`, `decision_time`) VALUES (\'';

rd.on('line', function(line) {
  data=line.split(";");
  console.log(str+ data[1]+ "', NOW(), NOW(), '"+data[1]+"', '"+data[7]+"', "+ "NOW()" +", '"+data[6]+"', '"+data[5]+"', '"+data[4]+"', "+ "NOW()" +");");
  rd.output.write(str+ data[1]+ "', NOW(), NOW(), '"+data[1]+"', '"+data[7]+"', "+ "NOW()" +", '"+data[6]+"', '"+data[5]+"', '"+data[4]+"', "+ "NOW()" +");"+"\n");
});


//the thrid NOW : data[2]
// forth: data[3]