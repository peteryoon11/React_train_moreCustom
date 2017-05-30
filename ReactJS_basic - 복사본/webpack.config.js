var webpack = require('webpack');//es6에서 import webpack 과 동일
 
//객체를 모듈로 내보내기 선언하면 webpack에서 이 모듈을 불러서 사용가능.
module.exports = {
    entry: './src/index.js',//배열을 쓰면 js파일을 여러개 선언 가능.
 
    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },//public폴더에 bundle.js로 저장하겠다.
 
    devServer: {//개발 서버 설정
        hot: true,//파일 수정할때마다 리로딩
        inline: true,//bundle에 넣기
        host: '0.0.0.0',//클라우드 사용시 localhost사용못함.
        port: 4000,//클라우드 port는  8080 or 8081
        contentBase: __dirname + '/public/',
    },
 
    module: {
               loaders: [
            {
                test: /\.js$/,
                loader: ['react-hot-loader', 'babel-loader?'+JSON.stringify({
                    cacheDirectory: true,
                    presets: ['es2015', 'react']                
         })],
                exclude: /node_modules/
            }
        ]

    },
 
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
