import { useState } from "react";

export const Prime = () => {
    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(0);
    const [result, setResult]=useState([]);

    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;

        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) {
                return false;
            }
        }
        return true;
    }
    

    function generatePrimes() {
        var arr=[];
        for (var i = from; i <= to; i++) {

            
            if(isPrime(i)){
                console.log(i);
                arr.push(i);
            }
        }
        setResult(arr);
    }
    return <div>
        From: <input type="number" className="form-control" onChange={(e) => setFrom(e.target.value)} />
        To: <input type="number" className="form-control" onChange={(e) => setTo(e.target.value)} /><br />
        <input type="button" value="Generate" onClick={generatePrimes} />
        <br/>
        {
            result.map((x, index)=><li key={index}>{x}</li>)
        }
    </div>
}