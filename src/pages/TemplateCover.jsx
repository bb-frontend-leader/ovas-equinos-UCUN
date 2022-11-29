import { Link } from "react-router-dom";
import { Col, Row, Image } from "UI-Components-books";

const TemplateCover = () => {
  return (
    <div className="template-container">
      <Col md="10">
        <Image
          url="/assets/images/Cover-image-1.png"
          alt="Tomando las riendas de la producción equina"
          addClass="u-mt-5"
          width="1500"
          noCaption
        />
      </Col>

      <Col md="10" addClass="template-container__button u-mb-4">
        <Row justify-content="center" align-items="center">
          <Link to="unit/1/page/1">
            <Image
              url="/assets/images/Cover-image-2.png"
              alt="Continuar"
              width="270"
              noCaption
            />
          </Link>
        </Row>
      </Col>
    </div>
  );
};

export default TemplateCover;
