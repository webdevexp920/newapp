
const Modal = ({ children }) => (
  // modal content
  <div class="modal-content large">
    <div class="modal-col">
      {/* modal header  */}
      <div class="modal-header">
        {/* modal close */}
        <a href="#" class="modal-close"><span class="sr-only">Close</span></a>
        {/* modal tabset  */}
        <ul class="modal-tabset">
          <li class="active">
            <a href="#"><span>Create account</span></a>
          </li>
          <li>
            <a href="#"><span>Log in</span></a>
          </li>
        </ul>
      </div>
      {/* modal body  */}
      <div class="modal-body">
        {/* modal tab content  */}
        <div class="modal-tab-content">
          {/* modal tab  */}
          <div class="active">
            <div class="row">
              <div class="col">
                {/* sign up form  */}
                <form action="#" class="signup-form">
                  <div class="row-form">
                    <div class="col-form">
                      <label for="signup-name">Name</label>
                      <input type="text" id="signup-name" placeholder="Christina" />
                    </div>
                    <div class="col-form">
                      <label for="signup-surname">Surname</label>
                      <input type="text" id="signup-surname" placeholder="Veski" />
                    </div>
                  </div>
                  <div class="row-form">
                    <div class="col-form">
                      <label for="signup-email">E-mail</label>
                      <input type="email" id="signup-email" />
                    </div>
                  </div>
                  <div class="row-form">
                    <div class="col-form">
                      <label for="signup-password">Password</label>
                      <input type="password" id="signup-password" />
                    </div>
                    <div class="col-form">
                      <label for="signup-confirm-password">Password</label>
                      <input type="password" id="signup-confirm-password" />
                    </div>
                  </div>
                  <div class="row-form">
                    <div class="col-form">
                      <input type="submit" value="Sign in" />
                    </div>
                    <div class="col-form">
                      <div class="custom-checkbox">
                        <input type="checkbox" id="signup-checkbox" checked />
                        <label for="signup-checkbox">I agree with ECLAT CAPITAL <a href="#"><b>Terms of Service</b></a> and <a href="#"><b>Privacy Policy</b></a></label>
                      </div>
                    </div>
                  </div>
                </form>
                {/* social networks  */}
                <ul class="social-networks">
                  <li>
                    <a href="#" class="facebook"><i class="icon-facebook-thin"></i> Sign in using Facebook</a>
                  </li>
                  <li>
                    <a href="#" class="google-plus"><i class="icon-google-plus"></i> Sign in using Google+</a>
                  </li>
                  <li>
                    <a href="#" class="twitter"><i class="icon-twitter"></i> Sign in using Twitter</a>
                  </li>
                  <li>
                    <a href="#" class="linkedin"><i class="icon-linkedin-thin"></i> Sign in using Linkedin</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          modal tab
          <div class="js-hidden">
            <div class="row">
              <div class="col">
                {/* log in form  */}
                <form action="#" class="login-form">
                  <div class="row-form">
                    <label for="login-email">E-mail</label>
                    <input type="email" id="login-email" />
                  </div>
                  <div class="row-form">
                    <label for="login-password">Password</label>
                    <input type="password" id="login-password" />
                  </div>
                  <div class="row-form">
                    <input type="submit" value="Log in" />
                  </div>
                </form>
              </div>
              <div class="col">
                social networks
                <ul class="social-networks">
                  <li>
                    <a href="#" class="facebook"><i class="icon-facebook-thin"></i> Sign in using Facebook</a>
                  </li>
                  <li>
                    <a href="#" class="google-plus"><i class="icon-google-plus"></i> Sign in using Google+</a>
                  </li>
                  <li>
                    <a href="#" class="twitter"><i class="icon-twitter"></i> Sign in using Twitter</a>
                  </li>
                  <li>
                    <a href="#" class="linkedin"><i class="icon-linkedin-thin"></i> Sign in using Linkedin</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-col">
      terms service info
      <div class="terms-service-info">
        terms service info tabset
        <ul class="terms-service-info-tabset">
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Disclaimer</a></li>
        </ul>
        terms service info tab content
        <div class="terms-service-info-tab-content">
          terms service info tab
          <div class="active">
            <div class="scrollable-wrapper">
              <div class="scrollable">
                <p>Inani consequat cu vim, appetere disputationi interpretaris te cum, natum phaedrum in quo. Omnis alterum maluisset ad est, error tibique deleniti mel ad. Ea sed dico dolor pericula, quas detracto mei ne. Ius eu sumo facilisi, ea mel luptatum constituam. Alienum signiferumque quo id. His cu putent persecuti, amet consul detracto vel cu, et nihil expetendis hi</p>
                <p>Inani consequat cu vim, appetere disputationi interpretaris te cum, natum phaedrum in quo. Omnis alterum maluisset ad est, error tibique deleniti mel ad. Ea sed dico dolor pericula, quas detracto mei ne. Ius eu sumo facilisi, ea mel luptatum constituam. Alienum signiferumque quo id. His cu putent persecuti, amet consul detracto vel cu, et nihil expetendis hi nani consequat cu vim, appetere disputationi interpretaris te cum, natum phaedrum in quo. Omnis alterum maluisset ad est, error tibique deleniti mel ad. Ea sed dico dolor pericula, quas detracto mei ne. Ius eu sumo facilisi, ea mel luptatum constituam. Alienum signiferumque quo id. His cu putent persecuti, amet consul detracto vel cu, et nihil expetendis hi</p>
                <p>Inani consequat cu vim, appetere disputationi interpretaris te cum, natum phaedrum in quo. Omnis alterum maluisset ad est, error tibique deleniti mel ad. Ea sed dico dolor pericula, quas detracto mei ne. Ius eu sumo facilisi, ea mel luptatum constituam. Alienum signiferumque quo id. His cu</p>
              </div>
              <div class="scrollbar-vertical">
                <div class="scrollbar-slider">
                  <div class="scrollbar-handle"></div>
                </div>
              </div>
            </div>
          </div>
          terms service info tab
          <div class="js-hidden"></div>
          terms service info tab
          <div class="js-hidden"></div>
        </div>
        custom checkbox
        <div class="custom-checkbox">
          <input type="checkbox" id="checkbox-1" checked />
          <label for="checkbox-1">I agree with ECLAT CAPITAL <a href="#"><b>Terms of Service</b></a></label>
        </div>
      </div>
    </div>
  </div>
)
export default Modal