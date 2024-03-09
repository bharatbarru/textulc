function Student(props){
    return(
        <div className="division">
            <p>
                name is : {props.name}
                <br />
                age is : {props.age}
                <br />
                gender is : {props.gender}
            </p>
        </div>
    );
}
export default Student