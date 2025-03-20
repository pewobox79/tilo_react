import {useRef} from 'react'

const RefForm = () => {

    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);

    function submit(e){
        e.preventDefault()

        console.log("ref", firstNameRef.current?.value)
    }


    return <>
        <h2>Ref Form exercise</h2>
        <form onSubmit={submit}>
            <input 
            name="firstname" 
            placeholder="firstname"
            value={firstNameRef.current?.value} 
            ref={firstNameRef}
            />
            <br />
            <input 
            name="lastname" 
            placeholder='lastname'
            ref={lastNameRef} 
            /><br/>
            <button type="submit">submit</button>
        </form>
    </>

}

export default RefForm
