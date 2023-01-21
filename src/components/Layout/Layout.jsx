import React, { Suspense } from 'react';
import Header from 'components/Header/Header';
import { Section } from 'components/Section/Section';
import Container from 'components/Container/Container';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Section>
          <Container>
            <Suspense>
              <Outlet />
            </Suspense>
          </Container>
        </Section>
      </main>
    </>
  );
};

export default Layout;
