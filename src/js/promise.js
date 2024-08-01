import json from './parser.js'
import read from './reader.js'

export default class GameSavingLoader {
    static async load() {
        const test = await read()
        return await json(test)
    }
}
