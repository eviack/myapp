import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function Textform(props) {
    const [text,editText] = useState("Sample text");

    const textChange = (event)=>{
        const content = text.toUpperCase();
        editText(content);

        props.generateAlert("Text turned to Uppercase", "Success");
    }
    const textChangelow = (event)=>{
        const content = text.toLowerCase();
        editText(content);

        props.generateAlert("Text turned to Lowercase", "Success");
    }
    const handleChange = (event)=>{
        editText(event.target.value);
    }
    function vowel(){
        let count = 0;
        let vowels = ['a','e','i','o','u'];
        for (let i of text){
            if (vowels.includes(i.toLowerCase())){
                count++
            }
        }
        return count
    }
    function countWord(){
        let count = 0;
        let array = text.split(" ");
        console.log(array);
        
        for(let i of array){
            if (i !== ""){
                count++
            }
        }
        return count
        }
    let theme={
        backgroundColor:props.mode==="light"?"#ffffff":"#222222",
        color:props.mode==="light"?"#121212":"#ffffff"
    }
  return (
    <>
    <div>
        <div className={`my-3 text-${props.mode==="light"?"dark":"light"}`}>
            <label for="exampleFormControlTextarea1" className="form-label">{props.title}</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" style={theme} rows={props.row} value={text} onChange={handleChange}></textarea>

        </div>
        <button disabled={text.length===0} className="btn btn-dark" onClick={textChange}>Uppercase</button> 
        <button disabled={text.length===0} className="btn btn-dark mx-2" onClick={textChangelow}>Lowercase</button> 
    </div>
    
    <div className={`container my-3 text-${props.mode==="light"?"dark":"light"}`}>
        <h4>Text Summary</h4>
        <p>{countWord()} words, {text.length} characters, {vowel()} vowels</p>
        <p>Reading time : {0.008*countWord()} mins or {0.008*countWord()*60} secs</p>
        <h4>Preview Content</h4>
        <p>{text}</p>
    </div>
    

    </>
    
  );
}

Textform.propTypes = {
    title:PropTypes.string,
    row:PropTypes.string
}