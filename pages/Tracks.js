import {Asset} from 'expo-asset'

export const tracks= [
    {
        id:'1',
        url:Asset.fromModule(require('../assets/cherry.mp3')).uri,
        title:'First Course'
    }
]