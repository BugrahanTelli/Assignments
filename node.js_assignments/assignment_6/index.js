const Koa = require("koa");
const app = new Koa();

// response
app.use((ctx) => {
    if(ctx.path==='/') ctx.body = "Index Sayfasi";
    else if(ctx.path==='/about') ctx.body = "Hakkimda Sayfasi";
    else if(ctx.path==='/contact') ctx.body = "Iletisim Sayfasi";
    else {
        ctx.status = 404
        ctx.body = "404 Sayfa Bulunamadi"
    }
});

const port = 3000

app.listen(port,()=>{
    console.log(`Sunucu ${port} portunda baslatildi`)
});
