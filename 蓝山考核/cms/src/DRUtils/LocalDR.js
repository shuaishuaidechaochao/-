/*
    作者: 邓瑞
    版本: 1.0
    网站: www.dengruicode.com
    日期: 2024-04-21
*/

const get = (key) => {
    return localStorage.getItem(key)
}

const set = (key,value) => {
    return localStorage.setItem(key, value)
}

const remove = (key) => {
    localStorage.removeItem(key)
}

//export { get, set, remove }
export default { get, set, remove }