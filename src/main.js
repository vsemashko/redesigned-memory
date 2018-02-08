import 'babel-runtime/regenerator';
import 'webpack-hot-middleware/client?reload=true';
import './index.html';
import './main.css';

const a = async args => {
    const {a, b} = args;
    await console.log("Hello from the future!", a, b);
};

a({a: 1, b: 2});
