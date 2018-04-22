import 'babel-polyfill';// 或者require('babel-polyfill');
import React from 'react'
import ReactDOM from 'react-dom'


//this is test
console.log('this is test');
console.log(Array.from([1,2,3]));



async function foo() {
    var a = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(1);
        }, 2000);
    });
    console.log(a); // 第2秒时输出: 1

    try {
        var b = await new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(2);
            }, 1000);
        })
    } catch (e) {
        console.log(e); // 第3秒时输出: 2
    }

    // 函数暂停2秒后再继续执行
    var sleep = await new Promise((resolve) => {
        setTimeout(() => {
            resolve('sleep');
        }, 2000);
    });

    var c = await 3;
    console.log(c); // 第5秒时输出: 3
}

foo();


fetch("http://127.0.0.1").then(function(response){console.log(response)})








class Gallery extends React.Component{
    constructor(){
        super();
    }
    render(){
        return <div>Hello React</div>
    }
}
ReactDOM.render(
    <Gallery />,
    document.querySelector('#app')
);