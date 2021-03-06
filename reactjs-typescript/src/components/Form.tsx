import React, { useState } from 'react'
import "../css/Form.css"
import {IState as Props} from "../App";

interface IProps {
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}


const Form = ({people, setPeople}: IProps) => {
    const [inputData, setInputData] = useState({name:"", age:"", bio:""})

    const onChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) : void => {
        setInputData({...inputData,[e.target.name] : e.target.value})
    }
    const onSubmit = (e:React.FormEvent<HTMLFormElement>):void => {
        e.preventDefault();
        setPeople([...people,{
            name: inputData.name,
            age: Number(inputData.age),
            bio: inputData.bio
        }]);
        setInputData({name:"", age:"", bio:""});
    }
    return (
        <div className="form-container">
            <h1>Form</h1>
            <form onSubmit={onSubmit}>
               <input type="text" name="name" id="name" placeholder="Tên" onChange={onChange} value={inputData.name}/>
                <input type="number" name="age" id="age" placeholder="Tuổi" onChange={onChange} value={inputData.age}/>
                <textarea name="bio" id="bio" placeholder="Nghề Nghiệp" onChange={onChange} value={inputData.bio}></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form
