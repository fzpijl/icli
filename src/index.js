import { program } from 'commander'
import * as commands from './commands'
import { VERSION } from './util/constants'

program.version(VERSION)

const commandlist = ['create', 'config'];

commandlist.forEach(command => commands[command](program))


program.parse(process.argv)
