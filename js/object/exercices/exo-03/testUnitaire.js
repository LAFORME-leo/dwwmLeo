 
 
 function test1()
 {
    let calcul = new Calcul(0,0);
    let message = "test 1 échoué"
    console.assert((calcul !== undefined)&&(calcul instanceof Calcul)&&(calcul.getNombre1()==0)&&(calcul.getNombre2()==0),{calcul,message})
 }
  
 function test2()
 {
    let calcul = new Calcul(3,2);
    let message = "test 2 échoué"
    console.assert((calcul !== undefined)&&(calcul instanceof Calcul)&&(calcul.getNombre1()==3)&&(calcul.getNombre2()==2),{calcul,message})
 }
 function test3()
 {
    let calcul = new Calcul(2,3);
    let message = "test 3 échoué"
    console.assert((calcul !== undefined)&&(calcul instanceof Calcul)&&(calcul.getNombre1()==2)&&(calcul.getNombre2()==3),{calcul,message})
 }
 function test4()
 {
    let calcul = new Calcul('yolo',3);
    let message = "test 4 échoué"
    console.assert((calcul !== undefined)&&(calcul instanceof Calcul)&&(calcul.getNombre1()==0)&&(calcul.getNombre2()==3),{calcul,message})
 }
 function test5()
 {
    let calcul = new Calcul(3,'yolo');
    let message = "test 5 échoué"
    console.assert((calcul !== undefined)&&(calcul instanceof Calcul)&&(calcul.getNombre1()==3)&&(calcul.getNombre2()==0),{calcul,message})
 }
 function test6()
 {
    let calcul = new Calcul('tata','yolo');
    let message = "test 6 échoué"
    console.assert((calcul !== undefined)&&(calcul instanceof Calcul)&&(calcul.getNombre1()==0)&&(calcul.getNombre2()==0),{calcul,message})
 }
function test7()
{
   let calcul = new Calcul(3.15,6.9);
   let message = "test 7 échoué"
   console.assert((calcul !== undefined)&&(calcul instanceof Calcul)&&(calcul.getNombre1()==3.15)&&(calcul.getNombre2()==6.9),{calcul,message})
}
 test1();
 test2();
 test3();
 test4();
 test5();
 test6();
 test7();