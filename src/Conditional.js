function Condition(props){
{

    }
    if(props.isloggedin===0){
        return(<div>
            <p className="offline">
                {props.name} you are offline
                <div>
                <p>
                    <h1>hello {props.name}</h1>
                        login details:
                        <br />
                        name is : {props.name}
                        <br />
                        age is : {props.age}
                        <br />
                        gender is : {props.gender}
                        
                    </p>
                </div>
            </p>
        </div>);
    }
    else{
        return(
            <div>
                <p className="online">
                    {props.name} you are online
                    <div>
                    <p>
                        login details:
                        <br />
                        name is : {props.name}
                        <br />
                        age is : {props.age}
                        <br />
                        gender is : {props.gender}
                    </p>
                </div>
                </p>
            </div>
        );
    }
}
export default Condition