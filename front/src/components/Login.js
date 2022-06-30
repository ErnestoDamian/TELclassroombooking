import React,{useEffect, useState} from "react";
import axios from 'axios'

function New_Twitt(){
  
  const [loaded, setLoaded] = useState(false);

  let autor, texto;

  useEffect(()=>{
    const fetchData = async() =>{
      if(!loaded){
        try {
          const result = await axios.post('http://localhost:3002/getProfesor/:nombre',{
            author: autor,
            text: texto
          })
          console.log(result)
          setLoaded(true)
        } catch (error) {
          console.log(error)
        }
      }
    }
    fetchData()
  })
  return (
    <div>
      <h3 className="center">Ingrese sus datos
      </h3>
      
    </div>
  );

}

export default New_Twitt;
