
// 为什么会有跨域：
//     浏览器的安全机制：  同源策略 （只有同源下面才可以进行数据交互）
//     同源：协议域名端口号全部相同

// 跨域问题：
//     客户端与服务器端：
//         1. JSONP   JSON and Padding  后端将返回数据的结构包括一个padding层
//                 原理script标签中的src属性是不受同源策略的限制的
//         2. 服务器代理
//         3. CORS   cross origin resource sharing 跨域资源共享
//         简单请求和非简单请求，只要同时满足下面两个条件就属于简单请求 
//             ( 1 ) 请求的方法只能是 HEAD，GET，POST 
//             ( 2 ) HTTP 的头信息不超出以下几种字段
//                 Accept
//                 Accept-Language
//                 Content-Language
//                 Last-Event-ID
//                 Content-Type：只限于三个值 application/x-www-form-urlencoded、multipart/form-data、text/plain
//                 只要不满足以上两个条件就属于非简单请求，浏览器对于非简单请求会进行一次预检  
//             对于简单请求的跨域响应头中只需要包含：   
//                 Allow-Control-Access-Origin 必需，表示可以请求的源。 "192.168.X.X"
//             非简单请求
//                 预检请求
//                 非简单请求指的是对服务器有特殊要求，比如请求方法为 PUT 或 DELETE，或者 Content-Type 字段的类型是 application/json。
//                 非简单请求的 CORS 请求会在通信之前，增减一次 HTTP 查询的请求，成为 “预检”。
//                 浏览器会先询问服务器，当前网页所在的域名是否在服务器许可的名单之中，
//                 以及可以使用哪些 HTTP 请求和头部字段。如果通过服务器的校验，才会发起正式的 XMLHttpRequest 请求，否则就报错
//                 非简单请求的跨域处理中响应头里面必须含有以下字段：
//                 Allow-Control-Access-Origin 必需，表示可以请求的源。
//                 Access-Control-Allow-Methods 必需，表示支持的所有方法，以逗号分隔
//                 Access-Control-Allow-Headers 如果浏览器请求包括 Access-Control-Request-Headers 字段，则 Access-Control-Allow-Headers 字段是必需的。'
//                 它也是一个逗号分隔的字符串，表明服务器支持的所有头信息字段。
//     客户端与客户端：
//         1. 父页面给子窗口传递数据： iframe + location.hash
//         2. 子窗口给父页面传递数据: iframe + window.name
//         3. 双向通信： iframe + window.postMessage  接受 window.onmessage
//         4. document.domain  基础域名相同的页面可以进行数据交互

