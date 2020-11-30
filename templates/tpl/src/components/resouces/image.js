const { app } = require('XRWeb')
const path = require('path')

let imagePath = '../../images/earth.png'


const image = app.createElement('Image', {
    depth: 4,
    postion: [15, 10, 0],
    src: path.resolve(__dirname, imagePath),
    scale: [3, 3, 3]
})


module.exports = image