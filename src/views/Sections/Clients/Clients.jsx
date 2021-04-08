import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row, Col } from "react-bootstrap";
import PageSection from "components/PageSection";
import Client from "components/Client";

const Clients = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, clients } = frontmatter;

  return (
    <PageSection className={clsx("py-5", className)} id={anchor}>
      <h1>Miro Board</h1>
      <iframe title="miro" width="80%" height="432" src="https://miro.com/app/live-embed/o9J_lTi1eIM=/?moveToViewport=8397,-6173,66924,32223" frameBorder="0" scrolling="no" allowFullScreen/>
      {/* <Row>
        
        {clients.map(({ href, imageFileName }) => (
          <Col md={3} sm={6} className="my-3" key={imageFileName}>
            <Client href={href} imageFileName={imageFileName} />
          </Col>
        ))}
      </Row> */}
    </PageSection>
  );
};

Clients.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Clients.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Clients;
