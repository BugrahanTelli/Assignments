const kitaplar = [
    {name:"Alice", author:"Anan"},
    {name:"Yaban", author:"Ali Osman"},
    {name:"Ceyhun", author:"Ali Osman"}
]
const listele = ()=>{
    kitaplar.map(kitap => console.log(kitap.name))    
}
const kitapekle = (eklenen)=>{
    kitaplar.push(eklenen)
    console.log(kitaplar)
}
async function goster() {

    try{
        await kitapekle({name:"burger",author:"No7"})
    }
    catch(error){
        console.log(error)
    }

}
goster()