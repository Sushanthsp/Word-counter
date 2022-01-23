import React,{useState} from 'react'

export default function TextForms(props) {

    const clear = () =>
    {
        set('')
    }

    const dis = () =>
    {

        if (text.length === 0) {
            return true;
        }
        else
        return false;
    }

    const removeSpace = () =>
    {
        let n = text.split(/\s+/);
        set(n.join(" "));
        props.setMsg("extra space removed", "success")
        document.title = "textutils-Space removed"
        setTimeout(()=>{document.title = "textutils-Home"},2000)
    }

    const copy = () =>
    {
        const text = document.querySelector('.box');
        text.select()
        navigator.clipboard.writeText(text.value);
        props.setMsg("Copied to clipboard", "success");
        document.title = "textutils-Copied";
        setTimeout(()=>{document.title = "textutils-Home"},2000)
    }

    const handleOnClick = () =>
    {
        const btn =  document.querySelector('.button')
        let newText 
        if (btn.innerText.toLowerCase() === "Convert to upper case".toLowerCase())
        {
             newText = text.toUpperCase()
            set(newText)
            btn.innerText = "Convert to lower case"
            props.setMsg("Converted to upper case", "success")
            document.title = "textutils-upper case"
            setTimeout(()=>{document.title = "textutils-Home"},2000)
        }
        else if(btn.innerText.toLowerCase() === "Convert to lower case".toLowerCase())
        {
            newText = text.toLowerCase()
            set(newText)
            btn.innerText = "Convert to upper case"
            props.setMsg("Converted to lower case", "success")
            document.title = "textutils-lower case"
            setTimeout(()=>{document.title = "textutils-Home"},2000)
        }
    }

    const handleOnChange = (event) =>
    {
        set(event.target.value);
    }

    const [text, set] = useState("enter your text here");
    return (
    <>
    <div className='container' style={{ color: props.mode === "dark"?"white":"black" ,backgroundColor:props.mode === "dark"?"#07172a":"white" }} >
    <h3  className="my-3">{props.heading}</h3>
    <div className="mb-3">
    <textarea type="password" className="form-control box" onChange={handleOnChange} value={text} rows="8" id="exampleInputPassword1" style={{color: props.mode === "dark"?"white":"dark", backgroundColor:props.mode === "dark"?"#07172a":"white"}}/>
    </div>
    
                <button className="btn btn-primary button mx-2 my-2" disabled={dis()} onClick={handleOnClick}>Convert to upper case</button>
                <button className="btn btn-primary button mx-2 my-2" disabled={dis()} onClick={removeSpace}>Remove space</button>
                <button className="btn btn-primary button mx-2 my-2" disabled={dis()} onClick={copy}> Copy to clipboard </button>
                <button className="btn btn-primary button mx-2 my-2" disabled={dis()} onClick={clear}> Clear text </button>

     </div>
                <div className="container" style={{ color: props.mode === "dark"?"white":"black" ,backgroundColor:props.mode === "dark"?"#07172a":"white"}}>
                <h2 className="classname my-4"> Your text summary</h2> 
                <p> your text has {text.length} characters and it has { text.split(' ').filter((e)=> e.length > 1).length} words</p>
                <h2 className="classname my-4"> Average read time</h2> 
                <p>{.008 * text.split(' ').filter((e)=> e.length > 1).length} min</p>
                <h2 className="classname my-4"></h2> 
                <p>{text.length> 0 ? text: "Enter something inside the container to preview your text!!"}</p>            
    </div>    


    </>
    )
}
