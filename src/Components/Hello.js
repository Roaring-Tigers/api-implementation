import React,{useState} from "react";
import axios from "axios";


const Hello = () => {

    const [data1, setData1] = useState([])
    const [num1, setNum1] = useState("")
    const [num2, setNum2] = useState("")
    const [sum, setSum] = useState("")


    function api1(){
           fetch("http://localhost:5000/hello")
           .then(response => response.json())
             .then(data => {
                console.log(data)
                setData1(data)
            })
            .catch(error => console.log(error));
     }

     function api1Axios(){
         axios.get("http://localhost:5000/hello")
         .then(response => console.log(response.data.message))
         .catch(err=>console.log(err))
     }


     function api2(e){
         e.preventDefault()
         fetch("http://localhost:5000/sum",{
              method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "num1": num1,
                    "num2": num2
                })
         })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setSum(data.message)
            })
            .catch(error => console.log(error));
     }


     function api2Axios(e){
        e.preventDefault()
        axios.post("http://localhost:5000/sum",{num1, num2})
        .then(response => console.log(response.data.message))
        .catch(err=>console.log(err))
     }









    return(
        <div>
            <button onClick={api1Axios}>Click Ap1</button>
            {
                data1 && <p>{data1.message}</p>
            }

            <form onSubmit={api2Axios}>
                 {/* hey create two inputs for two numbers */}
                 <input type="number"  placeholder="enter num 1"
                    onChange={(e)=>setNum1(e.target.value)}
                 />
                 <input type="number"  placeholder="enter num 2"
                    onChange={(e)=>setNum2(e.target.value)}
                 />
                 <button type="submit">Submit</button>
            </form>
            {
                sum && <p>{sum}</p>
            }
        </div>
    )
}

export default Hello;