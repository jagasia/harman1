export const List=()=>{
    const countries=["India","Australia","Srilanka","Japan"];
    return <div>
        {
            countries.map((country)=><li>{country}</li>)
        }
    </div>
}