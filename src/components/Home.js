import useStorage from "../hooks/useStorage"

const Home=()=>{
    let [userInput,updateInput]=useStorage("")

    let showData=()=>{
        let lsData=localStorage.getItem("content")
        let ssData = sessionStorage.getItem("content");

        alert(`SessionStore: ${ssData}\n\nLocalStore: ${lsData}`)
    }

    return(
        <div className="Home">
            <input type="text" onChange={(e)=>updateInput(e.target.value)} value={userInput?userInput:""} placeholder="Type something to make your storage APIs happy 😊" />
            <div><button onClick={showData}>View Storage</button></div>
        </div>
    )
}

export default Home