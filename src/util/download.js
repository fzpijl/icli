const downloadFromGit = require('download-git-repo')
import { DEFAULTS } from './constants'


function _download(template, projectName) {
    let url = `${DEFAULTS.registry}/${template || DEFAULTS.templ}`
    return new Promise((resovle, reject) => {
        downloadFromGit(url, projectName, (err) => {
            if (err) {
                let customError = {
                    name: err.name,
                    statusCode: err.statusCode,
                    statusMessage: err.statusMessage,
                    path: err.path,
                    url: err.url
                }
                reject(customError)
            } 
            resovle(false)
        })
    })
}

async function download(template, projectName) {
    try {
        return await _download(template, projectName)
    } catch (err) {
        return err
    }
}

export default download