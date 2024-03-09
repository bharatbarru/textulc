function Event(){

    function mouse(){
        alert("you hovered");
    }
    function mouse1(){
        alert("you have not hovered")
    }
    return(
        <div className="circle" onMouseOver={mouse} onMouseOut={mouse1}>
        </div>
    );
}
export default Event