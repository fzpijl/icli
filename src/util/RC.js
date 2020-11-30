import fs from 'fs-extra'
import ini from 'ini'
import chalk from 'chalk'

import { RC, DEFAULTS } from './constants'

const read = async () => {
    let content = await fs.readFile(RC, 'utf8')
    return ini.decode(content)
}

const write = async (content) => {
    content = ini.encode(content)
    await fs.writeFile(RC, content)
}

const isExist = (path) => {
    return  fs.existsSync(path)
}


export async function get(k) {
    if (isExist(RC)) {
        let content = await read()
        return content[k]
    } else {
        return DEFAULTS[k]
    }
}
export async function getAll() {
    if (isExist(RC)) {
        return await read()
    } else {
        return DEFAULTS
    }
}

export async function set(k, v) {
    if(!k) {
        console.log(chalk.red(chalk.bold('Error:')), chalk.red('key is required'));
        return;
    }
    if(!v) {
        console.log(chalk.red(chalk.bold('Error:')), chalk.red('value is required'));
        return;
    }
    if (!isExist(RC)) {
        await write(DEFAULTS)
    }
    let content = await read()
    content[k] = v
    await write(content)
}


