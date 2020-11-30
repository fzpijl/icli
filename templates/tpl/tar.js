const cp = require('child_process')

cp.exec('tar -cf tar.tar tartest', (err, stdout, stderr) => {
    console.log(err, stdout, stderr, '...')
})