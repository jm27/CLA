import Layout from "./Components/Layout";
import Button from "./Components/Button";
import Card from "./Components/Card";
import CardGroup from "./Components/CardGroup";
import Rating from "./Components/Rating";
import Carousel from "./Components/Carousel";
// import "./App.css";
//Import imgs
import maxiRef from "./utilities/imgs/max-refund.png";
import expTax from "./utilities/imgs/exp-tax.png";
import waysTax from "./utilities/imgs/ways-to-file.png";
import max from "./utilities/imgs/max.png";
import check from "./utilities/imgs/check.png";
import accurate from "./utilities/imgs/accurate.png";

function App() {
  return (
    <div className="App container-flex">
      <Layout className="container">
        <Button></Button>
        <CardGroup cardGroupTitle="Why CLA Plumbing Services?">
          {" "}
          <Card
            imgSrc={maxiRef}
            imgAlt="max refund CLA Plumbing services"
            title="Maximum refunds"
            cardText="Our goal is to get you the biggest refund you deserve. We find everything possible."
          ></Card>
          <Card
            imgSrc={expTax}
            imgAlt="experienced CLA Plumbing services"
            title="Experienced tax pros"
            cardText="We are knowledgeable tax pros, with an average of 15 years' experience."
          ></Card>
          <Card
            imgSrc={waysTax}
            imgAlt="guidance CLA Plumbing services"
            title="Guidance in case of an audit"
            cardText="One-on-one
          audit guidance
          from a trained
          tax professional."
          ></Card>
        </CardGroup>
        <CardGroup cardGroupTitle="Your satisfaction Guaranted!">
          {" "}
          <Card
            imgSrc={accurate}
            imgAlt="accurate CLA Plumbing services"
            title="Accurate
            calculations"
            cardText="100% accurate so your tax return will be done right, You receive excellent value for every dollar spent."
            imgClassName="card-img-top mx-auto d-block badge-img"
          ></Card>
          <Card
            imgSrc={max}
            imgAlt="max CLA Plumbing services"
            title="We search all
            tax deductions"
            cardText="We’ll find every tax deduction and credit you qualify for to get you the biggest tax refund."
            imgClassName="card-img-top mx-auto d-block badge-img"
          ></Card>
          <Card
            imgSrc={check}
            imgAlt="check CLA Plumbing services"
            title="Every detail
            reviewed"
            cardText="Get a comprehensive review of your tax return before you file so you can be confident nothing gets missed."
            imgClassName="card-img-top mx-auto d-block badge-img"
          ></Card>
        </CardGroup>
        <Rating></Rating>
        <Carousel></Carousel>
      </Layout>
    </div>
  );
}

export default App;
