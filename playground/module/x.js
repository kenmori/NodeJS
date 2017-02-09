setTimeout(()=>{
    module.exports = {a: 'hello'};
}, 1000);

//module.exportsへの代入は直ちに代入しないといけない。どんなコールバックでも実行することはできない。