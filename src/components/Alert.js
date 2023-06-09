import React from 'react'

function Alert(props) {

  const capitalize = (word)=>{
    let captialWord = word.charAt(0).toUpperCase()+word.slice(1);;
    return captialWord.toLowerCase()
  }


  return (
      props.alert && <div className={`alert alert-${capitalize(String(props.alert.type))} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.type} : </strong>{props.alert.msg}
      </div>
  )

}

export default Alert