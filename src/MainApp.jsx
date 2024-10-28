import { useEffect, useState } from "react"
import { getApi1 } from "./helpers/getApi1"
import { getApi2 } from "./helpers/getApi2";



export const MainApp = () => {

const [apis1, setApi1] = useState({
        "quote": "...Mr White yo",
        "author": "Jesse Pinkman"});
const [apis2, setApi2] = useState({
    "id": "123545",
    "title": "...",
    "url": "http://#"});

    const retreaveData = () => {
        getApi1()
        .then((data) => {
            setApi1(data);
            getApi2(data.author)
            .then((gifs) => setApi2(gifs))
            .catch((error) => console.error('Error fetching api2:', error))
        })
        .catch((error) => console.error('Error fetching api1:', error));
    }

        useEffect(() => {
            retreaveData();
    }, []);
    
    return (
    <>
      <div>
        <h1>Breaking Bad Quotes</h1>
        
          {
            <div>
                <button onClick={ retreaveData }>Refresh!</button>
                <h4 key={apis1.quote}> {apis1.quote} </h4>
                <p key={apis1.author}>{ apis1.author }</p>
                <img key={ apis2.id } src={ apis2.url } alt= { apis2.title } />
            </div>

            
          }
      </div>
      </>
    );
  }
