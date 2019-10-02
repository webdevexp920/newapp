
const ObjectImage = props => (
  <div class="image">
    <img src="images/img-object-1.png" width="208" height="125" alt="image description" />
    <span class="country">
      <img src="images/img-country-1.png" width="23" height="15" alt="image description" />
    </span>
    <ul class="control">
      <li>
        <a href="#"><i class="icon-star"></i> <span class="sr-only">star</span></a>
      </li>
      <li>
        <a href="#"><i class="icon-compare"></i> <span class="sr-only">compare</span></a>
      </li>
    </ul>
  </div>
)

const Objectinfo = props => (
  <div class="info">
    <div class="info-row">
      <div class="info-col">
        <div class="title-holder">
          <span class="title">Цена унции</span>
        </div>
        <span class="number">€ 100,00</span>
      </div>
      <div class="info-col">
        <div class="title-holder">
          <span class="title">Количество</span>
        </div>
        <span class="amount">1000</span>
      </div>
    </div>
  </div>

)
const ObjectLocation = props => (
  <div class="location-wrap">
    <span class="location"><i class="icon-location"></i> Cohousing Chiaravalle, Estonia / <span>Secure loan to develop</span></span>
  </div>
)

const ObjectCurrency = props => (
  <div class="currency">
    <div class="currency-row">
      <div class="currency-col">
        <span class="currency-title">LBMA</span>
        <ul class="currency-list">
          <li><i class="icon-arrow-up"></i> € 1,320</li>
          <li><i class="icon-arrow-down"></i> € 1,320</li>
        </ul>
      </div>
      <div class="currency-col">
        <span class="currency-title"><i class="icon-triangle"></i></span>
        <ul class="currency-list">
          <li><i class="icon-arrow-up"></i>€ 320</li>
          <li><i class="icon-arrow-down"></i> € 280</li>
        </ul>
      </div>
      <div class="currency-col">
        <span class="currency-title">LTV</span>
        <ul class="currency-list">
          <li>72.0%</li>
        </ul>
      </div>
    </div>
  </div>
)
const ObjectBlockInfo = props => (
  <div class="hover-block-info">
    <a href="#" class="btn btn-primary">See more</a>
    <div class="info">
      <div class="info-row">
        <div class="info-col">
          <div class="title-holder">
            <span class="title">Сумма доли</span>
            <div class="object-dropdown-wrap">
              <a href="#"><i class="icon-info"></i></a>
              <div class="object-dropdown-holder">
                <div class="object-dropdown-inner">
                  <span class="object-dropdown-title">Сезоны:</span>
                  <ul>
                    <li><span class="circle" style="background: rgba(51, 102, 153, 0.3);"></span> Низкий</li>
                    <li><span class="circle" style="background: rgba(51, 102, 153, 0.5);"></span> Средний</li>
                    <li><span class="circle" style="background: rgba(51, 102, 153, 1);"></span> Высокий</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <span class="number">11.0%</span>
        </div>
        <div class="info-col">
          <div class="title-holder">
            <span class="title">Сумма</span>
          </div>
          <span class="amount">€ 250,000</span>
        </div>
      </div>
      <div class="range"><span style="width: 30%;"></span></div>
    </div>
  </div>
)
const SlideObject = props => (
  // main slider slide
  // object slider slide
  <div class="slide">
    {/* object */}
    <div class="object">
      <ObjectImage />
      <div class="text">
        <ObjectLocation />
        <Objectinfo />
        <ObjectCurrency />
        <ObjectBlockInfo />
      </div>
    </div>
  </div>
)

export default SlideObject