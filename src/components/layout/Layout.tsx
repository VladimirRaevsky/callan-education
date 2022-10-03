import React, { FunctionComponent } from "react";
import Container from "../container/Container";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Wrapper from "../wrapper/Wrapper";

import { ChildrenType } from "../../interfaces/Children";

function Layout({ children }: ChildrenType): JSX.Element {
  return (
    <Wrapper>
      <Header />

      <main className="main">
        <Container>{children}</Container>
      </main>

      <Footer />
    </Wrapper>
  );
}

export default Layout;
