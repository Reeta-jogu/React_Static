import React from 'react'

function Home() {
    return (
       


<div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/Images/homepage1.jpg" width="100%" height="605px"class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Interiar Designs</h5>
        <p>Up to 15% OFF on your Home Interiors. Limited Period Offer. GET OFFER 〉</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="/Images/homepage2.jpg"  width="100%" height="605px" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Interiar Designs</h5>
        <p>Up to 15% OFF on your Home Interiors. Limited Period Offer. GET OFFER 〉</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="/Images/homepage3.jpg"  width="100%" height="605px" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Interiar Designs</h5>
        <p>Up to 15% OFF on your Home Interiors. Limited Period Offer. GET OFFER 〉</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>







        
    )
}

export default Home;
