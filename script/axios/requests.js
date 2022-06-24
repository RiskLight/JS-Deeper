import {axiosInstance} from "./axios.js";

let urls = [
    'http://httpbin.org/get?var1=value&var2=value2',
    'http://httpbin.org/get?var3=value3&var4=value5',
    'http://httpbin.org/get?var5=value5&var5=value5',
]

let one = axiosInstance.get(urls[0]);
let two = axiosInstance.get(urls[1]);
let three = axiosInstance.get(urls[2]);

Promise.all([one, two, three]).then(data => {
    data.map(four => {
        let arg = '';
        for (let key in four.data.args) {
            arg = `${arg} ${four.data.args[key]}`

        }
        console.log(`${four.status} ${four.data.url} ${arg}`)
    })
})


axiosInstance.get(urls[0])
    .then(function (data) {
        Promise.all([data]).then(data => {
            data.map(four => {
                let arg = '';
                for (let key in four.data.args) {
                    arg = four.data.args
                }
                axiosInstance.post('https://httpbin.org/post', {
                    var: arg.var1,
                    var2: arg.var2
                }).then(function (response) {
                    console.log(response.data.data);
                })
            })
        })
    })

