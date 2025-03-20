import { useCountStore } from "../stores/useCountStore"

const ZustandJs =()=>{

    const {inc, dec, initValue} = useCountStore();
    
    
    return <div style={{border: "2px solid red", padding: "40px"}}>

        <h3>{initValue}</h3>
        <button onClick={inc}>inc</button>
        <button onClick={dec}>dec</button>
    </div>
}

export default ZustandJs