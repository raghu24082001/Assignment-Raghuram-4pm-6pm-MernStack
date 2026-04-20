export const movieCreate = (req,res)=>{

  


   try {

 const {id,movieName,movieCat,hero,herion} = req.body

    const datas = []

   

    const obj = {id,movieName,movieCat,hero,herion}

   

    datas.push(obj)



    //console.log(datas);



   const datanew = datas.find((e)=>e.id==1001)

   console.log('fileter',datanew);

   

    res.status(200).json({msg:"Succfully Added" ,sendData:datanew.movieName})




   

   } catch (error) {



    console.log('Error',error);

    res.json({msg:"Something error"})

   

   }




   



}



export const moviegetbyParams = (req,res)=>{



    console.log(req.params);




}




export const movieFilter = (req,res)=>{



    console.log(req.query);



   



}



export const movieToken = (req,res)=>{



    console.log(req.headers.authorization);



   



}