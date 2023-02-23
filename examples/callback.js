function loadScript(src,callback){
    const script=document.createElement("script");
    script.src=src;
    script.onload=function(){
        callback(script);
    };
    script.onerror=function(){
        callback(new Error("Lỗi rồi"));
    }
    document.head.append(script);
}
loadScript("https://github.com",function(error,data){
     if(error){
        console.log(error);
     }
     else{
        console.log(data);
     }
})