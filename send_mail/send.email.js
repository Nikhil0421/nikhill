const nodeCron = require("node-cron");

module.exnports ={
    sendEmail: (data) =>{
const job = nodeCron.schedule("* * * * * *", () => {
    console.log(new Date().toLocaleString());
  });

}};