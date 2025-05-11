import { useState } from "react"


function Player({number}) {
    
    const [count, setCount] = useState(0);

    return (
        <>
        
        <div class="mt-5">
            <div>
                <div class="card">
                <div class="card-body">

                    <h5 class="card-title">PLAYER {number}</h5>
                    <p class="card-text">Punteggio: {count}</p>

                    <button onClick={() => setCount(count-1)} href="#" class="btn btn-danger">-</button>
                    <button onClick={() => setCount(count+1)} href="#" class="btn btn-primary">+</button>
               
                </div>
            </div>
        </div>
        
        </div>
        </>
    )
}

export default Player
