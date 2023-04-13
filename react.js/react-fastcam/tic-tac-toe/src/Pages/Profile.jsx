import { useParams } from "react-router-dom";

export default function Profile(){

    const params = useParams(); 
    console.log(params.id)

    return(
    <div>
        <h2>Profile 페이지입니다.</h2>
        {params.id && <p>id는 {params.id}</p>}
    </div>
    );
}