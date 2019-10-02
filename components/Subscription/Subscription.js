const Subscription = props => (
  <div class="row">
    <div class="col">
      <h1>Stay in <br /> the loop</h1>
      <div class="text">
        <p>Fill out the form to subscribe to our newsletter. Keep up to date with news and insights from our partners</p>
      </div>
    </div>
    <div class="col">
      <h2>Newsletter</h2>
      {/* subscribe form */}
      <form action="#" class="subscribe-form">
        <div class="row-form">
          <input type="text" placeholder="Name" />
        </div>
        <div class="row-form">
          <input type="email" placeholder="E-mail" />
        </div>
        <div class="row-form">
          <input type="submit" value="Subscribe" />
        </div>
      </form>
    </div>
    <div class="col">
      <h2>Publications</h2>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et</p>
      <a href="#" class="read-more">Read more</a>
    </div>
  </div>
)

export default Subscription