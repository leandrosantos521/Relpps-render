function toNetlifyEvent(req){
  const query={};
  for(const [key,value] of Object.entries(req.query||{})){
    query[key]=Array.isArray(value)?value[0]:value;
  }
  let body=req.body;
  if(body!==undefined && body!==null && typeof body!=="string"){
    try{ body=JSON.stringify(body); }catch{ body="{}"; }
  }
  return {
    httpMethod:req.method,
    headers:req.headers||{},
    queryStringParameters:query,
    body:body==null?"":body,
    isBase64Encoded:false,
    rawUrl:req.url
  };
}

module.exports=async function runNetlifyCompatible(handler,req,res){
  try{
    const result=await handler(toNetlifyEvent(req),{});
    const status=Number(result?.statusCode)||200;
    const headers=result?.headers||{"Content-Type":"application/json; charset=utf-8"};
    Object.entries(headers).forEach(([k,v])=>res.setHeader(k,String(v)));
    res.status(status);
    if(result?.isBase64Encoded){
      return res.send(Buffer.from(String(result.body||""),"base64"));
    }
    const body=result?.body;
    if(body===undefined||body===null) return res.end();
    return res.send(body);
  }catch(error){
    console.error("Vercel API error:",error);
    return res.status(500).json({message:error?.message||"Erro interno do servidor."});
  }
};
