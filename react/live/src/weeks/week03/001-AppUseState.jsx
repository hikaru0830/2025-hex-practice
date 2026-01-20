import { useState } from "react"

// useState：React 來管理資料狀態所使用
let num = 0;
function AppUseState() {
    const [count, setCount] = useState(1);
    num++;
    console.log('元件運行次數：' + num);

    return (<>
        <h1>AppUseState</h1>
        <button type='button' onClick={() => {
            setCount(count + 1);
            console.log('count:'+count);
        }}>{count}</button>
        <hr />
        
    </>);
}

export default AppUseState