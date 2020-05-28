import React from 'react'
import {Header, Card,} from 'semantic-ui-react'



const Faq = () => (
  <>
    <Header.Content as="h1" className="eventHead">Frequently Ask Questions</Header.Content>
  <div className="faqContainer">
   <Card.Group className="cardContainer" stackable>
    <Card className="faqCard">
      <Card.Header className="cardHead">Q: Can I buy alcohol through you?</Card.Header>
      <Card.Meta className="cardMeta">A: Yes I can special order wine or place an order for alcohol and pick it up for a nominal fee.</Card.Meta>
    </Card>
    <Card className="faqCard">
      <Card.Header className="cardHead">Q: What if I need a bartender? Can I arrange that with you?</Card.Header>
      <Card.Meta className="cardMeta">A: Yes of course, we have a few companies we work with that offer bartending or if its just beer/wine and mixers we can provide someone. </Card.Meta>
    </Card>
    <Card className="faqCard">
      <Card.Header className="cardHead">Q: Do you you cater on-site events?</Card.Header>
      <Card.Meta className="cardMeta">A: Yes we can. We would like to do a site tour and get a feel for the facilities, so there is no surprises but yes on-site catering.</Card.Meta>
    </Card>
    <Card className="faqCard">
      <Card.Header className="cardHead">Q: Do I have to rent my own plates/silverware/tables etc?</Card.Header>
      <Card.Meta className="cardMeta">A: We can take care of the serving-ware up to 10 people, after that we can work with you to put a rental order together for whatever you may need. Delivery charge will be included in final price.</Card.Meta>
    </Card>
    <Card className="faqCard">
      <Card.Header className="cardHead">Q: Can I request a custom menu?</Card.Header>
      <Card.Meta className="cardMeta">A: Yes of course, however prices will vary with seasonality and availability of product.</Card.Meta>
    </Card>
   </Card.Group>
   </div>
  </>
)

export default Faq;