import FooterItem from "./FooterItem"
import Container from "./Container"

const Footer = props => (
  <footer class="footer">
    <Container>
      <div class="row">
        {
          footerItems.map(footerItem => {
            <div className={}>
              <FooterItem
                className={}
              />
            </div>
          })
        }
      </div>
    </Container>
  </footer>

)

export default Footer