import SlideSet from "../SlideSet/SlideSet";

const Object = props => (
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
      <ul class="short-info-list">
        <li>6 m</li>
        <li>€ 50.000</li>
        <li>36,7% filled</li>
      </ul>
    </div>
  </div>
)
const ObjectList = props => (
  // object slider
  <ul class="object-list">
    {
      props.objectList.map(object => {
        return (
          <li>
            {/* object */}
            <Object />
          </li>
        )
      })
    }
  </ul>
)

export default ObjectList