import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PortfolioItem from "components/PortfolioItem";
import PageSection from "components/PageSection";
import "./Portfolio.scss";

const Portfolio = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, portfolios } = frontmatter;

  return (
    <PageSection className={clsx("portfolio-section", className)} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row>
        {portfolios.map(
          ({ content, extraInfo, header, imageFileName, imageFileNameDetail, subheader }) => (
            <PortfolioItem
              key={header}
              imageFileName={imageFileName}
              header={header}
              subheader={subheader}
              content={content}
              imageFileNameDetail={imageFileNameDetail}
              extraInfo={
                <ul>
                  {extraInfo.map((ei) => (
                    <li key={ei}>{ei}</li>
                  ))}
                </ul>
              }
            />
          ),
        )}
      </Row>
      <h2>Prototype Video</h2>
      <iframe width="1237" height="696" src="https://www.youtube.com/embed/PD1S8FNIbmw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
    </PageSection>
  );
};

Portfolio.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Portfolio.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Portfolio;
