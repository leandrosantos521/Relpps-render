const handler=require("../server/functions/bling.js").handler;
const run=require("../server/vercel-adapter");
module.exports=(req,res)=>run(handler,req,res);
