# 编码
  计算机世界都是二进制的 0 / 1，需要一个规则 把这些二进制对应到不同的字符串
  utf-8 编码需要发送的字符串
  接收方再用 utf-8 解码

  ## 常见的编码
  - 16进制 hex
  - unicode 编码：&#xe607; 计算界字符标准，全世界的语言文字，都有一个对应的编码，utf-8就是 unicode的一种实现
  - base64: 用 64 个字符来表示一个二进制

  ## 传输
  - 流
  ```js
  fs.createReadStream().pipe(fs.WriteStream)
  ```
  - 流的好处
    不用一次性读取所有的内容，中间有一个管道不断的传输数据，
    a(读) -> b(写)
    数据不对等
    buffer 有单独的空间管理 这些数据
    缓冲一下传输速度，这个单独的区域就是 buffer。

  ## buffer 基础
  ```js
  { [Function: Buffer]
    // 8kB = 8 * 1024 = 8192
     poolSize: 8192,
     // 创建的方式
     from: [Function: from],
     of: [Function: of],
     alloc: [Function: alloc],
     allocUnsafe: [Function: allocUnsafe],
     allocUnsafeSlow: [Function: allocUnsafeSlow],
     isBuffer: [Function: isBuffer],
     compare: [Function: compare],
     isEncoding: [Function: isEncoding],
     concat: [Function: concat],
     byteLength: [Function: byteLength],
     [Symbol(kIsEncodingSymbol)]: [Function: isEncoding] },
  SlowBuffer: [Function: SlowBuffer],
  transcode: [Function: transcode],
  INSPECT_MAX_BYTES: 50,
  kMaxLength: 2147483647,
  kStringMaxLength: 1073741799,
  constants: { MAX_LENGTH: 2147483647, MAX_STRING_LENGTH: 1073741799 } }
  ```

  <Buffer 68 65 6c 6c 6f 20 62 75 66 66 65 72>
  以16进制的ASCII 输出