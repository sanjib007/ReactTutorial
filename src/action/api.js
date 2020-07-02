import axios from 'axios'
import { fatchAll } from './tabAct';

const baseUrl = 'https://san.cashbaba.com.bd:9001/api/v1';

const token = 'CfDJ8Pq8rl1DRJdJknzcGRgbL4YC2BD8_ikfIEXqIi3pIBEyS8lhtW8dV3EA6yVkphz3uw3tWY5sgHA4IiLWpZb0hxeSw50ZwC-9FU98PBtMZ_JRjNXN9xz1AYkadFWEdBp4GVhQDXtBml8pIwaRnargId2TXHzTak6QROxHXoZLtwNPFlUXMTXWyTmeUaN1lVC6on4boRmWQqP3EKOlQ0_hFdzutWGqZ0HsfKLigxd6OwYMV8ZCBMd68edDPZOyxgdjwOhaauV5DOVU6mdtVhUq9619PxK8zaH-IDcM7SrJLkTaprQp3KL01Go2mpyOZkAaw3okGOolqAJpxrZk9narXVuVjXhyVIcNUvSpmqu3XLfLy0FDjRRLtiYSxLiQQLPfAAV0cZOzWf8eMTmu_lhml6emuwzNl1pIEd6UxT-ev6EJ81kr62rjeQLM2pQqTgavgyQ0PrF1tK_LPY2amjBDIwHdWKOK4rfGeplTefs5V1r9KLLXCcbgLYpt4hf1z9tqBkXOcmv7XJX7af3mhhqdTwDdzSQsVnnl3Qaa-OB77wRWxkPAf1YVq2_-N1gkCbOgG0pgKAYLT-ifL2HH6O_bnPhqI5YY1MHS-0RSrFMkSSLpn8be_bP_UjdVgGDClOBhWOSB_9qlA4_jFZcIhzx4_Kux5vaHrd-g-P8e0WqM2vf_VIVHZSfjtzC0RXlcbYUgTClyZAIzXCP-ce3WGIycTkMF4S8iWzgmWmYwr_gCGrN9Gw3DZAuceFpJZ2wnsnNWvehgF5uuyvHf-CEXBmSSM606Ps0FJN6QJGwqi3d38IS1-nkh3uxvchMkluShedSpApH5iTytgWS7DIM-GyCQlgc';

const config = {
    headers: { Authorization: `Bearer ${token}` }
};


// export const tagUrl = {
//     getallTag : baseUrl + '/tag/getalltag',
//     insertTag : baseUrl + '/tag/InsertTag',
//     getTagById : baseUrl + '/tag/getalltag',
//     updateTag : baseUrl + '/tag/UpdateTag/',
//     deleteTag : baseUrl + '/tag/DeleteTag/',
// }

export default {
    tag(tagUrl = baseUrl){
        return {
            fatchAll: ()=> axios.get(tagUrl + '/tag/getalltag', config),
            create: (data)=> axios.post(tagUrl + '/tag/InsertTag', data, config),
            update: (id, data)=> axios.put(tagUrl + '/tag/UpdateTag/'+id, data, config),
            delete: (id)=> axios.delete(tagUrl + '/tag/DeleteTag/' + id, config)
        }
    }
}