import read from '../reader.js'
import GameSavingLoader from '../promise.js'
jest.mock('../reader.js')
beforeEach(() => {
    jest.resetAllMocks()
})

test('resolved test', async () => {
    read.mockImplementation(() => jest.requireActual('../reader.js').default())
    const result = await GameSavingLoader.load()
    expect(result).toEqual('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}')
})

test('rejected test', async () => {
    const erroo = new Error('error :(')
    read.mockImplementation(() => Promise.reject(erroo))
    let result = ''
    try {
        await GameSavingLoader.load()
    } catch (err){
        result = err
    }
    expect(result).toBe(erroo)
})