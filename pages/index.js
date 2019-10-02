import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import fetch from 'isomorphic-unfetch';
import { className } from 'postcss-selector-parser';

import LayoutWrapper from '../components/LayoutWrapper/LayoutWrapper';
import LayoutWrapperEntry from '../components/LayoutWrapperEntry/LayoutWrapperEntry';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';
import Logo from '../components/Logo/Logo';
import { HeaderArea } from '../components';
import Link from 'next/link';
import SlideSet from '../components/SlideSet/SlideSet';
import Pagination from '../components/Pagination/Pagination';
import SearchBlock from '../components/SearchBlock/SearchBlock';
import ObjectList from '../components/ObjectList/ObjectList';
import Footer from '../components/Footer/Footer';
import Subscription from '../components/Subscription/Subscription';
import { Nav } from '../components';

import linksData from '../support/fake/LinksData';

const Home = props => {

  const {
    links
  } = props;

  const {
    linkHeaderControl,
    linkLogo,
  } = links;

  return (
    <div>
      {/* <!-- wrapper of the page --> */}
      <LayoutWrapper>
        {/* wrapper entry */}
        <LayoutWrapperEntry>
          {/* header of the page */}
          <Header>
            <Container>
              {/* header control */}
              <NavBar className="header-control" link={linkHeaderControl} />
              {/* logo of the page */}
              <Logo className="logo" link={linkLogo} />
              <HeaderArea className="header-area">
                {/* navigation */}
                <Nav className="nav">
                  {/* navigation opener */}
                  <LinkItem href="#" className="nav-opener">
                    <span>Menu</span>
                  </LinkItem>

                  <div class="nav-drop">
                    {/* navigation primary */}
                    <NavBar links={} />
                    {/* switcher language */}
                    <div class="switcher-language">
                      <span class="title">Eng <i class="icon-arrow-down"></i></span>
                      <div class="dropdown">
                        <NavBar className={} />
                      </div>
                    </div>
                  </div>
                </Nav>
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
                  <Subscription />
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
}

Home.getInitialProps = async function ({ req }) {
  // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  // const data = await res.json();

  // console.log(`Show data fetched. Count: ${data.length}`);
  return {
    links: linksData,
  };
}

export default Home
