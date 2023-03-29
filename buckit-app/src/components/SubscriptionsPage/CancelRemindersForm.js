import { useState } from 'react';
import { Form, FormCheck, Row, Col } from 'react-bootstrap';

export default function CancelRemindersForm() {
  const [emailChecked, setEmailChecked] = useState(false);
  const [smsChecked, setSmsChecked] = useState(false);

  const [sevenDayChecked, setSevenDayChecked] = useState(false);
  const [threeDayChecked, setThreeDayChecked] = useState(false);

  const handleEmailChange = (event) => {
    setEmailChecked(event.target.checked);
  };

  const handleSmsChange = (event) => {
    setSmsChecked(event.target.checked);
  };

  const handleSevenDayChange = (event) => {
    setSevenDayChecked(event.target.checked);
  };

  const handleThreeDayChange = (event) => {
    setThreeDayChecked(event.target.checked);
  };

  return (
    <Form>
      <Form.Label className="mt-3 justify-content-center" column sm={3}>Contact By:</Form.Label>
      <Row className="mb-3 justify-content-center">
        <Col sm={9}>
          <FormCheck inline type="checkbox" label="Email" checked={emailChecked} onChange={handleEmailChange} />
          <FormCheck inline type="checkbox" label="SMS" checked={smsChecked} onChange={handleSmsChange} />
        </Col>
      </Row>

      <Form.Label column sm={3}>Reminders:</Form.Label>
      <Row className="mb-3 justify-content-center">
        <Col sm={9}>
          <FormCheck inline type="checkbox" label="7 Days" checked={sevenDayChecked} onChange={handleSevenDayChange} />
          <FormCheck inline type="checkbox" label="3 Days" checked={threeDayChecked} onChange={handleThreeDayChange} />
        </Col>
      </Row>
  </Form>
  
  );
};
