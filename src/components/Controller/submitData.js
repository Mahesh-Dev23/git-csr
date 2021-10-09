// const jsonServer = require('json-server')
// const server = jsonServer.create()



// server.listen(5000, () => {
//   console.log('file saved')
// })

const fs = require('fs');

function submitData(id) {
    const idName = document.getElementById(id)
    //const userName = idName.elements[0].value
    let i 
    const responce = []
    
    for(i = 0; i< idName.length; i++ ){
        responce.push( `${idName.elements[i].name} : ${idName.elements[i].value}`)

    }
    alert(responce)
    // const data = userName

    // alert(userName)
    // if(userName){

    //     fs.writeFile(`${userName}.pdf` , data, function (err) {
    //         if (err) throw err;
    //         console.log(err)
    //     });
       
    //         alert("submited " + userName)
        
    // }
}

export default submitData
