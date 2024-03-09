import icon from './images/2.jpeg'
import icon1 from './images/3.jpeg'
import icon2 from './images/4.jpeg'
function Work(){
    return(
        <>
        <div>
            <p>
                here is some of my work on portraits
            </p>
        </div>
        <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={icon2} class="d-block w-100" alt="..." height={"500px"} width={"500px"}/>
    </div>
    <div class="carousel-item">
      <img src={icon1} class="d-block w-100" alt="..." height={"500px"} width={"500px"}/>
    </div>
    <div class="carousel-item">
      <img src={icon} class="d-block w-100" alt="..." height={"500px"} width={"500px"}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</> );
}
export default Work