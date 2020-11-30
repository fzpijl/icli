import fs from 'fs-extra'
import path from 'path'
import chalk from 'chalk'
import inquirer from 'inquirer'
import symbols from 'log-symbols'
import ora from 'ora'
import download from '../util/download'

let createPrompts = [
    {
        name: 'description',
        message: 'Please enter the project description: '
    },
    {
        name: 'author',
        message: 'Please enter the author name: '
    }
]

async function updatePkgName(name) {
    let pgk = path.join(process.cwd(), name, 'package.json')
    try {
        let json = await fs.readJSON(pgk)
        json.name = name
        await fs.writeJSON(pgk, json, {
            spaces: 2
        })
    } catch (e) {
        console.log(e)
    }
}

function getNewProject(projectName, template) {
    inquirer.prompt(createPrompts).then(async (answer) => {

        //answer 还没有用到,打印出来是为了通过eslint检查
        console.log(answer)
        let loading = ora('download template ...')
        loading.start()

        let hasError = await download(template, projectName)

        if (hasError) {
            loading.text = 'failed in download template'
            loading.fail()
            console.log(chalk.red('HTTPError', JSON.stringify(hasError, null, 4)))
            return
        }

        loading.text = 'succeed in download template'
        loading.succeed()
        updatePkgName(projectName)
        console.log(symbols.success, chalk.green('Project initialization finished!'));
    })
}


function create(projectName, template) {
    if (fs.existsSync(projectName)) {
        let existPrompts = [
            {
                type: 'list',
                name: 'action',
                message: `project named ${chalk.yellow(projectName)} already exists. Pick an action:`,
                choices: ['Overwrite', 'Cancel']
            }
        ]
        inquirer.prompt(existPrompts).then(async (answer) => {
            switch (answer.action) {
                case 'Overwrite':
                    fs.removeSync(projectName)
                    getNewProject(projectName, template)
                    break
                case 'Cancel':
                    break
            }
        })

    } else {
        getNewProject(projectName, template)
    }
}


export default function (program) {
    program.command('create <projectName> [templateName]')
        .description('create a new Project')
        .action((projectName, templateName) => {
            create(projectName, templateName)
    })
}