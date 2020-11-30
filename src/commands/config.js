import { get, getAll, set } from '../util/RC'

export default function (program) {
    program.command('config <action> [k] [v]')
        .description('config for the cli tool')
        .action(async (action, k, v) => {
            switch (action) {
                case 'get':
                    if (k === undefined) {
                        let keys = await getAll()
                        console.log(JSON.stringify(keys, null, 2))
                    } else {
                        let key = await get(k)
                        console.log(key)
                    }
                    break
                case 'set':
                    await set(k, v)
                    break
            }
                
        })
}