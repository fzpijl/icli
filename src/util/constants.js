import pkg from '../../package.json'

export const VERSION = pkg.version

const HOME = process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME'];

//配置文件目录
export const RC = `${HOME}/.iriswebclirc`

//RC配置中下载模板用到的属性，给gitHub使用
// https://github.com/[registry]/[templ]
export const DEFAULTS = {
    registry: 'fzpijl',
    templ: 'templ1'
}
