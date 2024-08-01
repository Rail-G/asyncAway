import GameSavingLoader from './promise.js'

export default (async () => {
  try {
    const data = await GameSavingLoader.load()
    console.log(JSON.parse(data))
  } catch (err) {
    console.log('error :(')
  }

})();