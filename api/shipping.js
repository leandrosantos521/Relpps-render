const handler=require("../server/functions/shipping.js").handler;
const run=require("../server/vercel-adapter");
module.exports=(req,res)=>run(handler,req,res);
