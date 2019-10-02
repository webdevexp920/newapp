const ModalCompare = props => (
  <div class="modal-compare">
    {/* modal compare content  */}
    <div class="modal-compare-content">
      {/* modal compare close  */}
      <div class="modal-compare-controls">
        <a href="#" class="modal-compare-hide"><span class="sr-only">Hide</span> <i class="icon-arrow-down"></i></a>
        <a href="#" class="modal-compare-close"><span class="sr-only">Close</span></a>
      </div>
      <div class="row">
        <div class="col">
          {/* compare title  */}
          <strong class="compare-title">Objects to compare:</strong>
          <a href="#" class="btn btn-warning">Compare</a>
        </div>
        <div class="col">
          {/* compare list  */}
          <ul class="compare-list">
            <li>
              {/* counter  */}
              <span class="counter">1</span>
              {/* object  */}
              <div class="object">
                <div class="image">
                  <img src="images/img-object-1.png" width="208" height="125" alt="image description" />
                  <span class="country"><img src="images/img-country-1.png" width="23" height="15" alt="image description" /></span>
                  <ul class="control">
                    <li>
                      <a href="#"><i class="icon-star"></i> <span class="sr-only">star</span></a>
                    </li>
                    <li>
                      <a href="#"><i class="icon-compare"></i> <span class="sr-only">compare</span></a>
                    </li>
                  </ul>
                </div>
                <div class="text">
                  <div class="location-wrap">
                    <span class="location"><i class="icon-location"></i> Cohousing Chiaravalle, Estonia / <span>Secure loan to develop</span></span>
                  </div>
                </div>
              </div>
            </li>
            <li>
              {/* counter  */}
              <span class="counter">2</span>
              {/* object  */}
              <div class="object">
                <div class="image">
                  <img src="images/img-object-1.png" width="208" height="125" alt="image description" />
                  <span class="country"><img src="images/img-country-1.png" width="23" height="15" alt="image description" /></span>
                  <ul class="control">
                    <li>
                      <a href="#"><i class="icon-star"></i> <span class="sr-only">star</span></a>
                    </li>
                    <li>
                      <a href="#"><i class="icon-compare"></i> <span class="sr-only">compare</span></a>
                    </li>
                  </ul>
                </div>
                <div class="text">
                  <div class="location-wrap">
                    <span class="location"><i class="icon-location"></i> Cohousing Chiaravalle, Estonia / <span>Secure loan to develop</span></span>
                  </div>
                </div>
              </div>
            </li>
            <li>
              {/* counter  */}
              <span class="counter">3</span>
              {/* object  */}
              <div class="object">
                <div class="image">
                  <img src="images/img-object-1.png" width="208" height="125" alt="image description" />
                  <span class="country"><img src="images/img-country-1.png" width="23" height="15" alt="image description" /></span>
                  <ul class="control">
                    <li>
                      <a href="#"><i class="icon-star"></i> <span class="sr-only">star</span></a>
                    </li>
                    <li>
                      <a href="#"><i class="icon-compare"></i> <span class="sr-only">compare</span></a>
                    </li>
                  </ul>
                </div>
                <div class="text">
                  <div class="location-wrap">
                    <span class="location"><i class="icon-location"></i> Cohousing Chiaravalle, Estonia / <span>Secure loan to develop</span></span>
                  </div>
                </div>
              </div>
            </li>
            <li>
              {/* counter  */}
              <span class="counter">4</span>
              {/* object placeholder  */}
              <div class="object-placeholder">
                <span class="object-placeholder-title">Place object here</span>
              </div>
            </li>
          </ul>
          {/* compare title  */}
          <strong class="compare-title">Comparing results:</strong>
          {/* object info list  */}
          <ul class="object-info-list">
            <li>
              {/* counter  */}
              <span class="counter">1</span>
              {/* object info  */}
              <div class="object-info">
                <div class="object-info-top">
                  <span class="rating">RATING 5,0 <i class="icon-star-solid"></i></span>
                </div>
                <div class="object-info-middle">
                  <div class="range-wrap">
                    <div class="box">
                      <span class="number">€ 230,000</span>
                      <span class="text">Loan amount</span>
                    </div>
                    <div class="range">
                      <span style="width: 30%;"></span>
                    </div>
                    <div class="box">
                      <span class="number">36,5%</span>
                      <span class="text">Filled</span>
                    </div>
                  </div>
                  <dl>
                    <dt>Expires</dt>
                    <dd>Fully Invested</dd>
                    <dt>Collateral value</dt>
                    <dd>€190,000</dd>
                    <dt>Target</dt>
                    <dd>€520,000</dd>
                  </dl>
                </div>
                <div class="object-info-bottom">
                  <ul class="documents-list">
                    <li><a href="#">SWOT.pdf</a></li>
                    <li><a href="#">Due diligence.pdf</a></li>
                    <li><a href="#">Investment attractiveness.pdf</a></li>
                  </ul>
                </div>
                <a href="#" class="btn btn-success">See more</a>
              </div>
            </li>
            <li>
              {/* counter  */}
              <span class="counter">2</span>
              {/* object info  */}
              <div class="object-info">
                <div class="object-info-top">
                  <span class="rating">RATING 5,0 <i class="icon-star-solid"></i></span>
                </div>
                <div class="object-info-middle">
                  <div class="range-wrap">
                    <div class="box">
                      <span class="number">€ 230,000</span>
                      <span class="text">Loan amount</span>
                    </div>
                    <div class="range">
                      <span style="width: 30%;"></span>
                    </div>
                    <div class="box">
                      <span class="number">36,5%</span>
                      <span class="text">Filled</span>
                    </div>
                  </div>
                  <dl>
                    <dt>Expires</dt>
                    <dd>Fully Invested</dd>
                    <dt>Collateral value</dt>
                    <dd>€190,000</dd>
                    <dt>Target</dt>
                    <dd>€520,000</dd>
                  </dl>
                </div>
                <div class="object-info-bottom">
                  <ul class="documents-list">
                    <li><a href="#">SWOT.pdf</a></li>
                    <li><a href="#">Due diligence.pdf</a></li>
                    <li><a href="#">Investment attractiveness.pdf</a></li>
                  </ul>
                </div>
                <a href="#" class="btn btn-success">See more</a>
              </div>
            </li>
            <li>
              {/* counter  */}
              <span class="counter">3</span>
              {/* object info  */}
              <div class="object-info">
                <div class="object-info-top">
                  <span class="rating">RATING 5,0 <i class="icon-star-solid"></i></span>
                </div>
                <div class="object-info-middle">
                  <div class="range-wrap">
                    <div class="box">
                      <span class="number">€ 230,000</span>
                      <span class="text">Loan amount</span>
                    </div>
                    <div class="range">
                      <span style="width: 30%;"></span>
                    </div>
                    <div class="box">
                      <span class="number">36,5%</span>
                      <span class="text">Filled</span>
                    </div>
                  </div>
                  <dl>
                    <dt>Expires</dt>
                    <dd>Fully Invested</dd>
                    <dt>Collateral value</dt>
                    <dd>€190,000</dd>
                    <dt>Target</dt>
                    <dd>€520,000</dd>
                  </dl>
                </div>
                <div class="object-info-bottom">
                  <ul class="documents-list">
                    <li><a href="#">SWOT.pdf</a></li>
                    <li><a href="#">Due diligence.pdf</a></li>
                    <li><a href="#">Investment attractiveness.pdf</a></li>
                  </ul>
                </div>
                <a href="#" class="btn btn-success">See more</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)
export default ModalCompare
