const downloadGit = require('download-git-repo')

const downloadLocal = async (templateName, projectName) => {
    let api = `git@github.com:fzpijl/${templateName}`;
    return new Promise((resolve, reject) => {
        //projectName 为下载到的本地目录
        downloadGit(api, projectName, (err) => {
            if (err) {
                reject(err);
            }
            resolve();
        });
    });
}

downloadLocal('templ1', 'mypro')

