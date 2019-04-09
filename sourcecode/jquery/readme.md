DOM 树
快点看到页面，将页面分成几件事，html + css 形成了静态页面，
将js　我们可以用jquery vue 等框架，100kb 要下载，执行要花时间（几毫秒/几十，几百不等）
window.onload

doucument.DOMContentLoaded 是js最佳也是最快执行的地方
图片资源，js资源，ajax请求资源  通过网络，依次到达浏览器，不应该影响网页 DOM Ready