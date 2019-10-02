
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
    <p><em>33.0% filled, € 146,777 left</em></p>
  </div>

)
const ObjectLocation = props => (
  <div class="location-wrap">
    <span class="location"><i class="icon-location"></i> Cohousing Chiaravalle, Estonia / <span>Secure loan to develop</span></span>
  </div>
)

const ObjectDetail = props => (
  <ul class="details">
    <li>Период <b>12</b></li>
    <li>
      Срок % <b>12</b>
      <div class="object-dropdown-wrap">
        <a href="#"><i class="icon-info"></i></a>
        <div class="object-dropdown-holder">
          <div class="object-dropdown-inner object-dropdown-inner-large">
            <dl>
              <dt>Кол-во инвесторов:</dt>
              <dd>1-5</dd>
              <dt>Активных инвесторов:</dt>
              <dd>1-5</dd>
            </dl>
          </div>
        </div>
      </div>
    </li>
    <li>LTV <b>72%</b></li>
  </ul>
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
        <ObjectDetail />
        <a href="#" class="btn btn-primary">See more</a>
      </div>
    </div>
  </div>
)

export default SlideObject