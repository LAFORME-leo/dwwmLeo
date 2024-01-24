let texte=""
for(let i=2;i<=20;i++)
{
    if (i%2==0)
        texte+=i;
}
console.log(texte);
texte="";
for(let i=2;i<=20;i+=2)
{
        texte+=i;
}
console.log(texte);
texte="";
for(let i=1;i<=10;i++)
{
    let double=i*2
        texte+=double;
}
console.log(texte);