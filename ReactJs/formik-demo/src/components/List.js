export const List=()=>{
    // const countries=["India","Australia","Srilanka","Japan"];
    const products=[{id:1, name:'Pencil', price:10},{id:2, name:'sharpner', price:15}];
    return <div>
        {/* {
            countries.map((country)=><li>{country}</li>)
        } */}
        <table className="table table-bordered table-striped table-hover">
            <thead>
                <tr>
                    <td>Id</td><td>Name</td><td>Price</td><td></td>
                </tr>
            </thead>
            <tbody>
        {
            products.map((p)=><tr>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>Select</td>
            </tr>)
        }
        </tbody>
        </table>
    </div>
}