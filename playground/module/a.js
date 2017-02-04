//module.exportsオブジェクトは、Moduleシステムによって作成されます。
// 時々これは受け入れられない。
// 多くの人がモジュールをあるクラスのインスタンスにしたいと思っています。
// これを行うには、目的のエクスポートオブジェクトをmodule.exportsに割り当てます。
// エクスポートに目的のオブジェクトを割り当てることは、
// ローカルエクスポート変数を単にリバインドすることになります。
// これはおそらくあなたがやりたいことではありません。
//たとえば、a.jsというモジュールを作っているとします

const EventEmitter = require('events');
module.exports = new EventEmitter();


// Do some work, and after some time emit
// the 'ready' event from the module itself.

setTimeout(()=> {
    module.exports.emit('ready');
}, 1000);


//exports shortcut

module.export.hello = true;//Exported from require of module
export = { hello: false}; //Not exported, only avaible in module


//reassign
module.exports = exports = function Constructor(){}