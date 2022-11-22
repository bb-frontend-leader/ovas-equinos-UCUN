import {
  Col,
  Row,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Button,
} from "UI-Components-books";

import { useState } from "react";

const Ova7p2 = () => {
  const [open, setOpen] = useState(3);

  return (
    <Row justify-content="center" align-items="center">
      <Col md="8">
        <Tabs defaultIndex={open}>
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab>Three</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              First panel
              <Button onClick={() => setOpen(2)} />
              1️⃣
            </TabPanel>
            <TabPanel>Second panel 2️⃣</TabPanel>
            <TabPanel>Third panel 3️⃣</TabPanel>
            <TabPanel>fourt panel 3️⃣</TabPanel>
          </TabPanels>
        </Tabs>
      </Col>
    </Row>
  );
};

export default Ova7p2;
