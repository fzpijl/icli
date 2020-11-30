const webpack = require('webpack')
const config = require('../webpack.config')
const fs = require('fs')
const FormData = require('form-data')
const fecth = require('node-fetch')
const path = require('path')
const cp = require('child_process')

const JSZip = require('jszip')
const zip = new JSZip()

function makeZip(p, folder) {
    let dirs = fs.readdirSync(p)
    for (let i = 0, l = dirs.length; i < l; i++) {
        let filePath = path.resolve(p, dirs[i])
        let stats = fs.statSync(filePath)
        if (stats.isDirectory()) {
            let newFolder = folder.folder(dirs[i])
            makeZip(filePath, newFolder)
        } else if (stats.isFile()) {
            let fileContent = fs.readFileSync(filePath)
            folder.file(dirs[i], fileContent)
        }
    }
}

console.log(path.resolve( __dirname, '..'))

//jest.test.zip 
// function makeTar(source, target) {
//     return new Promise((resolve, reject) => {
//         cp.exec(`tar -cf ${target} ${source}`, {
//             cwd: path.resolve(__dirname, '..')
//         }, function (err) {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(path.resolve(target))
//             }
//         })
//     })
// }


function send(zipFile) {
    fs.readFile(zipFile, (err, buffer) => {
        const fdata = new FormData()
        fdata.append('file', buffer, { filename: 'out.zip' })
        fecth('http://192.168.1.79:8081/app/upload', {
            method: 'POST',
            body: fdata
        }).then(res => {
            console.log('fetch success......')
        }).catch(err => {
            console.log('fetch err..............')
        })
    })
}

config.mode = 'production'

webpack(config, (err, stats) => {
    if (err) throw err
    let distPath = path.resolve(__dirname, '..', 'dist')
    makeZip(distPath, zip)

    zip.generateNodeStream({ type: 'nodebuffer', streamFiles: true }).
        pipe(fs.createWriteStream('out.zip')).
        on('finish', function (e) {
            console.log('make zip file')
            send('out.zip')
        })

})

