import post from './post'

const postData = (toPost, data, que ) =>{
    console.log(que)
    qLength = Object.keys(toPost).length
            if(qLength === data){
                
                post({[que] : toPost})
                console.log({[que] : toPost})
            }
}

export default postData