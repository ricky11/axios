import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
    //baseURL: 'https://axios-42402.firebaseio.com'
})

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance
// const bbinstance = axios.create({
// baseURL: 'https://api000.backblazeb2.com',
// })
// bbinstance.defaults.headers.common['SOMETHING'] = ''

// const azinstance = axios.create({

// })

// const fbinstance = {}

// const abinstance = {}

// export default instance

// //backblaze
// Account ID:
// 659e48410dbb
// Application Key:
// 000ab271593248be7c766d60f851bfb7733cd9bc58

// ACCOUNT_ID = '659e48410dbb'
// ACCOUNT_AUTH_TOKEN= '3_20180222092514_37a5805e88471d89354d410b_b2208b63498d4f372ce490b34c53de3d0c023690_000_acct'
// API_URL=  'https://api000.backblazeb2.com'
// BUCKET_NAME = 'sinosend'
// BUCKET_TYPE = 'allPublic'

