const fs = require('fs');
const files =[];
function walk(path){
    fs
        .readdirSync(path)
        .forEach(file =>{
            const newPath = path + '/' + file;
            const stat = fs.statSnyc(newPath);
            // console.log(file,'ssssss');
            if(stat.isFile()){
                //是JS文件么
                // console.log('isFile');
                if(/\.js$/.test(file)){
                    files.push(file);
                }
               // console.log(file);
                

            }else if(stat.isDirectory()){
                console.log('isDirectory');
                walk(newPath);
            }
        })
    // fs
    //     .readdir(path,function(error,files){
    //         if(error){
    //             console.log(error);
    //             return;
    //         }
    //         console.log(files);
    //     })
}
walk('./src');
console.log(files);