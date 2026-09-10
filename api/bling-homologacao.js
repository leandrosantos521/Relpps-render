const handler=require("../server/functions/bling-homologacao.js").handler;
const run=require("../server/vercel-adapter");
module.exports=(req,res)=>run(handler,req,res);
