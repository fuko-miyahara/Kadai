import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({

    state: {
        items: [
            {
                id: 1,
                name: "トマト",
                description: "イタリアから輸入してきたトマト",
                price: 216,
                unit: "個",
                stock: 5,
                inCart: 0
            },
            {
                id: 2,
                name: "ほうれん草",
                description: "我が家のベランダで収穫したほうれん草",
                price: 118,
                unit: "束",
                stock: 3,
                inCart: 0
            },
            {
                id: 3,
                name: "たまご",
                description: "Free rangeのおいしいたまご",
                price: 262,
                unit: "ダース",
                stock: 10,
                inCart: 0
            },
            {
                id: 4,
                name: "じゃがいも",
                description: "北海道産のじゃがいも",
                price: 49,
                stock: 4,
                unit: "個",
                inCart: 0
            },
            {
                id: 5,
                name: "にんじん",
                description: "赤くて形がきれいなにんじん",
                price: 82,
                stock: 1,
                unit: "本",
                inCart: 0
            },
            {
                id: 6,
                name: "ゴールドキウイ",
                description: "超甘いキウイ",
                price: 130,
                unit: "個",
                stock: 5,
                inCart: 0
            }
        ]
    },
    mutations: {},
    actions: {}

})
