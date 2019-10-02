import React from 'react'
import Head from 'next/head'
import NavBar from '../components/NavBar'
import fetch from 'isomorphic-unfetch';
import { className } from 'postcss-selector-parser';
import LayoutWrapper from '../components/LayoutWrapper';
import LayoutWrapperEntry from '../components/LayoutWrapperEntry';
import LayoutHeader from '../components/Header';
import Container from '../components/Container';
import Logo from '../components/Logo';
import HeaderArea from '../components/HeaderArea';
import Link from 'next/link';
import SlideSet from '../components/SlideSet';
import Pagination from '../components/Pagination';
import SearchBlock from '../components/SearchBlock';
import ObjectList from '../components/ObjectList';
import Footer from '../components/Footer';

const Home = props => (
  <div>
    {/* <!-- wrapper of the page --> */}
    <LayoutWrapper>
      {/* wrapper entry */}
      <LayoutWrapperEntry>
        {/* header of the page */}
        <Header>
          <Container>
            {/* header control */}
            <NavBar className={header - control} />
            {/* logo of the page */}
            <Logo link={} />
            <HeaderArea>
              {/* navigation */}
              <nav className={css.nav - drop}>
                {/* navigation opener */}
                <Link>
                  <a href="#" class="nav-opener"><span>Menu</span></a>
                </Link>
                <div class="nav-drop">
                  {/* navigation primary */}
                  <NavBar className={css.nav - primary} links={} />
                  {/* switcher language */}
                  <div class="switcher-language">
                    <span class="title">Eng <i class="icon-arrow-down"></i></span>
                    <div class="dropdown">
                      <NavBar className={} />
                    </div>
                  </div>
                </div>
              </nav>
              {/* welcome block */}
              <div class="welcome-block">
                <NavBar className={} />
              </div>
            </HeaderArea>
          </Container>
        </Header>
        {/* main of the page */}
        <Main>
          {/* main entry */}
          <div class="main-entry">
            <Section className="main-slider">
              <SlideSet slides={} />
              <Pagination />
              <SearchBlock />
            </Section>
            {/* main slider */}
            <Section>
              <Container>
                <div class="row">
                  <div class="col">
                    <h1>Our investment services</h1>
                  </div>
                  <div class="col">
                    <ServiceList serviceList={serviceList} />
                  </div>
                </div>
              </Container>
            </Section>

            <Section>
              <Container>
                <div class="row">
                  <div class="col">
                    <h1>Real estate</h1>
                    <p>Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    <a href="#" class="read-more">Open all projects &#62;</a>
                  </div>
                  <div class="col">
                    {/* object slider */}
                    <div class="object-slider">
                      <SlideSet />
                      {/* object slider controls */}
                      <Link />
                      <Link />
                    </div>
                  </div>
                </div>
              </Container>
            </Section>
            {/* investment process section */}
            <Section>
              <Container>
                <div class="row">
                  <div class="col">
                    <h1>Cash flow</h1>
                    <p>Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    <a href="#" class="read-more">Open all projects &#62;</a>
                  </div>
                  <div class="col">
                    {/* object slider */}
                    <div class="object-slider">
                      <SlideSet />
                      {/* object slider controls */}
                      <Link />
                      <Link />
                    </div>
                  </div>
                </div>
              </Container>
            </Section>
            {/* investment period section */}
            <Section>
              <Container>
                {/* header section */}
                <div class="header-section">
                  <h1>Eclat capital <small>investment platform</small></h1>
                </div>
                {/* item list */}
                <ItemList />
                <a href="#" class="btn btn-primary">Read about company</a>
              </Container>
            </Section>

            <Section>
              <Container>
                {/* header section */}
                {/* header section */}
                <div class="header-section">
                  <h1>Projects by investment period</h1>
                </div>
                {/* investment tabset */}
                <ul class="investment-tabset">
                  <li>
                    <a href="#">
                      <span class="term">Short-term</span>
                      <span class="period">1-12 months</span>
                    </a>
                  </li>
                  <li class="active">
                    <a href="#">
                      <span class="term">Medium-term</span>
                      <span class="period">1-2 years</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="term">Long-term</span>
                      <span class="period">2+ years</span>
                    </a>
                  </li>
                </ul>
                {/* investment tab content */}
                <div class="investment-tab-content">
                  {/* investment tab */}
                  <div class="tab js-hidden">
                    <ObjectList />
                  </div>
                  <div class="tab active">
                    <ObjectList />
                  </div>
                  <div class="tab js-hidden">
                    <ObjectList />
                  </div>
                </div>
                <a href="#" class="btn btn-primary">Read about company</a>
              </Container>
            </Section>
            {/* subscribe section */}
            <Section>
              <Container>
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
              </Container>
            </Section>

            <Footer />
            <Modal />
            <ModalCompare />
          </div>
        </Main>
      </LayoutWrapperEntry>
    </LayoutWrapper>

  </div>
)

Home.getInitialProps = async function ({ req }) {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    links: {
      search: {
        className: '',
        iconClassName: 'icon-search',
        href: '',
        label: '',
      },
      search: {
        className: '',
        iconClassName: 'icon-user',
        href: '',
        label: '',
      },
      search: {
        className: '',
        iconClassName: '',
        href: '',
        label: 'search',
      },
    },
  };
}

export default Home
