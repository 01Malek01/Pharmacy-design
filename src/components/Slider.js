function Slider(){
    return(
      <div id="carouselExampleAutoplaying" className="carousel slide m-3" data-bs-ride="carousel">
  <div className="carousel-inner rounded">
    <div className="carousel-item active">
      <img src={require('../assets/imgs/macro-dose-medicine-spills-pharmacist-cares-generated-by-ai.jpg')} className="d-block w-100" height='600px' alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={require('../assets/imgs/medicine-bottle-spilling-colorful-pills-depicting-addiction-risks-generative-ai.jpg')} className="d-block w-100" height='600px' alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={require('../assets/imgs/plastic-container-holds-fresh-liquid-medicine-bottle-generated-by-ai.jpg')} className="d-block w-100" height='600px' alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

















      

    );
}
export default Slider;