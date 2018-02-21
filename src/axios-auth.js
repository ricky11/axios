import axios from 'axios'

const instance = axios.create({
baseURL: 'url endpoint here'

})

instance.defaults.headers.common['SOMEHING'] = 'something'

export default instance
