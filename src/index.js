import React from "react";
import ReactDOM from "react-dom";
import {
  Button,
  DatePicker,
  Col,
  Row,
  Avatar,
  Divider,
  Modal,
  Switch
} from "antd";
import "antd/dist/antd.css";
import "./index.css";

import {
  Layout,
  Menu,
  Breadcrumb,
  Icon,
  Form,
  Radio,
  Select,
  Checkbox,
  Input,
  Popover,
  Progress
} from "antd";
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component {
  state = {
    includeOffer: false,
    visible: false
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  onChange = checked => {
    this.setState({ includeOffer: checked });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  render() {
    return (
      <div className="App">
        <Layout style={{ minHeight: "100vh" }}>
          <Header className="header" style={{ padding: 0 }}>
            <div
              style={{
                padding: "0px 30px",
                maxWidth: "1400px",
                margin: "auto",
                width: "100%"
              }}
            >
              <div className="logo" />
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={["2"]}
                style={{ lineHeight: "64px" }}
              >
                <div style={{ float: "right" }}>
                  <Avatar icon="user" />
                </div>
              </Menu>
            </div>
          </Header>

          <Content
            style={{
              padding: "30px 30px",
              maxWidth: "1400px",
              margin: "auto",
              width: "100%"
            }}
          >
            <Row gutter={16}>
              <Col md={19} sm={24}>
                <Content
                  style={{
                    padding: "10px 20px",
                    margin: "0",
                    background: "#fff"
                  }}
                >
                  <div>
                    <Row type="flex" align="middle">
                      <Col span={18}>
                        <h1>Create Drop</h1>
                      </Col>
                      <Col
                        span={6}
                        className={"lime-6"}
                        style={{ textAlign: "right" }}
                      >
                        <Progress
                          percent={30}
                          size="small"
                          strokeColor="rgb(74, 158, 159)"
                        />
                      </Col>
                    </Row>
                  </div>

                  <Divider style={{ marginTop: "10px", marginBottom: "0px" }} />
                </Content>

                <Row
                  style={{
                    backgroundColor: "white"
                  }}
                >
                  <Col
                    md={8}
                    sm={24}
                    style={{ borderRight: "1px solid #E8E8E8" }}
                  >
                    <div
                      style={{
                        padding: "16px 16px 0px 16px"
                        // borderBottom: "1px dashed lightgray"
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Icon
                          type="check-circle"
                          theme="filled"
                          style={{
                            color: "#4A9E9F",
                            fontSize: 16,
                            marginRight: 8
                          }}
                        />
                        <span
                          style={{
                            fontSize: 16,
                            fontWeight: 600,
                            color: "#000000"
                          }}
                        >
                          Information{" "}
                        </span>
                      </div>
                      <div>
                        <Form layout="vertical" onSubmit={this.handleSubmit}>
                          <Form.Item
                            label="Name"
                            style={{ margin: "18px 0 12px 24px" }}
                          >
                            <Input
                              placeholder="Enter drop name"
                              value="Brand_2019-01-15"
                            />
                          </Form.Item>
                          <Form.Item
                            label="Tags"
                            style={{ margin: "18px 0 12px 24px" }}
                          >
                            <Select
                              mode="tags"
                              style={{ width: "100%" }}
                              placeholder="Type in tags"
                              dropdownStyle={{ display: "none" }}
                              value={["holiday"]}
                            />
                          </Form.Item>
                        </Form>
                      </div>
                    </div>

                    <div
                      style={{
                        padding: "16px 16px 0px 16px"
                        //borderBottom: "1px dashed lightgray"
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Icon
                          type="check-circle"
                          style={{
                            color: "lightgray",
                            fontSize: 16,
                            marginRight: 8
                          }}
                        />
                        <span
                          style={{
                            fontSize: 16,
                            color: "#000000",
                            fontWeight: 600
                            //color: "#4A9E9F"
                          }}
                        >
                          Postcard{" "}
                        </span>
                      </div>
                      <div>
                        <Form layout="vertical" onSubmit={this.handleSubmit}>
                          <Row>
                            <Col span={12} style={{ minWidth: 150 }}>
                              <Form.Item
                                label="Size"
                                style={{ margin: "18px 0 12px 24px" }}
                              >
                                <RadioGroup defaultValue="4 X 6">
                                  <RadioButton value="4 X 6">4 X 6</RadioButton>
                                  <RadioButton value="5 X 7">5 X 7</RadioButton>
                                </RadioGroup>
                              </Form.Item>
                            </Col>
                            <Col span={12} style={{ minWidth: 150 }}>
                              <Form.Item
                                label="Unique Offer Code"
                                style={{ margin: "18px 0 12px 24px" }}
                              >
                                <Switch
                                  checkedChildren=" Include "
                                  unCheckedChildren=" Exclude "
                                  onChange={this.onChange}
                                />{" "}
                                <Icon
                                  type="info-circle"
                                  style={{ marginLeft: 8 }}
                                />
                              </Form.Item>
                            </Col>
                          </Row>
                          <Form.Item
                            label="Finish"
                            style={{ margin: "18px 0 12px 24px" }}
                          >
                            <Select defaultValue="please select">
                              <Option value="Matte">Matte</Option>
                              <Option value="Glossy">Glossy</Option>
                              <Option value="Regular">Regular</Option>
                            </Select>
                          </Form.Item>
                        </Form>
                      </div>
                    </div>

                    <div
                      style={{
                        padding: "16px 16px 16px 16px"
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Icon
                          type="check-circle"
                          style={{
                            color: "lightgray",
                            fontSize: 16,
                            marginRight: 8
                          }}
                        />
                        <span
                          style={{
                            fontSize: 16,
                            fontWeight: 600,
                            color: "#000000"
                          }}
                        >
                          Recipient List{" "}
                          {this.state.includeOffer ? "(incl. offer code)" : ""}
                          <Icon type="info-circle" style={{ marginLeft: 8 }} />
                        </span>
                      </div>
                      <div>
                        <Form layout="vertical" onSubmit={this.handleSubmit}>
                          <Form.Item style={{ margin: "18px 0 12px 24px" }}>
                            <Select
                              //style={{ maxWidth: 200 }}
                              defaultValue="Add a list"
                            >
                              <Option value="upload">
                                <b>
                                  <Icon type="upload" /> Upload list
                                </b>
                              </Option>
                              <Option value="Customer list 1">
                                Customer list 1
                              </Option>
                              <Option value="Customer list 2">
                                Customer list 2
                              </Option>
                              <Option value="Customer list 3">
                                Customer list 3
                              </Option>
                            </Select>
                          </Form.Item>
                        </Form>
                      </div>
                    </div>
                  </Col>

                  <Col md={16} sm={24}>
                    <div
                      style={{
                        padding: "16px 16px 16px 16px"
                        //borderBottom: "1px dashed lightgray"
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Icon
                          type="check-circle"
                          style={{
                            color: "lightgray",
                            fontSize: 16,
                            marginRight: 8
                          }}
                        />
                        <span
                          style={{
                            fontSize: 16,
                            fontWeight: 600,
                            color: "#000000"
                          }}
                        >
                          Add Creative{" "}
                          <Popover
                            content={
                              <div style={{ fontSize: 12 }}>
                                <div>Front: 2175px x 1575px</div>
                                <div>Back: 1125px x 1300px</div>
                                <div>
                                  <a>Download Template</a>
                                </div>
                              </div>
                            }
                            title="Image specs"
                          >
                            <Icon
                              type="info-circle"
                              style={{ marginLeft: 8 }}
                            />
                          </Popover>
                        </span>
                        <span style={{ flex: 1 }} />
                        <Button disabled size="small">
                          Preview
                        </Button>
                      </div>
                      <div>
                        <Row
                          style={{ margin: "18px 0 12px 16px " }}
                          gutter={32}
                        >
                          <Col md={24} lg={12}>
                            <div>
                              <div style={{ display: "flex", marginBottom: 4 }}>
                                <b>Front</b> <span style={{ flex: 1 }} />
                              </div>
                              <div
                                style={{
                                  paddingBottom: "72%",
                                  width: "100%",
                                  border: "1px dashed lightgray",
                                  position: "relative"
                                }}
                              >
                                <div
                                  style={{
                                    position: "absolute",
                                    display: "flex",
                                    alignItems: "center",
                                    left: 0,
                                    right: 0,
                                    top: 0,
                                    bottom: 0,
                                    justifyContent: "center"
                                  }}
                                >
                                  <div>
                                    <Icon
                                      type="plus"
                                      style={{ fontSize: 48 }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>

                          <Col md={24} lg={12}>
                            <div>
                              <div style={{ display: "flex", marginBottom: 4 }}>
                                <b>Back</b> <span style={{ flex: 1 }} />
                              </div>
                              <div
                                style={{
                                  paddingTop: "72%",
                                  width: "100%",
                                  border: "1px solid #E8E8E8",
                                  position: "relative"
                                }}
                              >
                                <div
                                  style={{
                                    position: "absolute",
                                    width: "51.73%",
                                    height: "82.96%",
                                    display: "flex",
                                    alignItems: "center",
                                    left: "4.53%",
                                    right: 0,
                                    top: "4.53%",
                                    bottom: 0,
                                    justifyContent: "center",
                                    border: "1px dashed lightgray"
                                  }}
                                >
                                  <div>
                                    <Icon
                                      type="plus"
                                      style={{ fontSize: 36 }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>

                    <div
                      style={{
                        padding: "16px 16px 16px 16px",
                        opacity: this.state.includeOffer ? 1 : 0.5
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Icon
                          type="check-circle"
                          style={{
                            color: "lightgray",
                            fontSize: 16,
                            marginRight: 8
                          }}
                        />
                        <span
                          style={{
                            fontSize: 16,
                            fontWeight: 600,
                            //color: "#4A9E9F"
                            display: "flex",
                            alignItems: "center",
                            color: "#000000"
                          }}
                        >
                          Place Offer Code{" "}
                          <Button
                            icon="barcode"
                            style={{ marginLeft: 12 }}
                            disabled={this.state.includeOffer ? false : true}
                          >
                            Customize
                          </Button>
                        </span>
                      </div>
                      <div>
                        <Form layout="vertical" onSubmit={this.handleSubmit} />
                      </div>
                    </div>

                    <div
                      style={{
                        padding: "16px 16px 16px 16px"
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Icon
                          type="check-circle"
                          style={{
                            color: "lightgray",
                            fontSize: 16,
                            marginRight: 8
                          }}
                        />
                        <span
                          style={{
                            fontSize: 16,
                            fontWeight: 600,
                            color: "#000000"
                          }}
                        >
                          Schedule + Postage
                        </span>
                      </div>
                      <div>
                        <Form layout="vertical" onSubmit={this.handleSubmit}>
                          <Row>
                            <Col md={12} sm={24}>
                              <Form.Item
                                label="Drop Date"
                                style={{ margin: "18px 0 12px 24px" }}
                              >
                                <DatePicker style={{ width: "100%" }} />
                              </Form.Item>
                            </Col>
                            <Col md={12} sm={24}>
                              <Form.Item
                                label="Postage"
                                style={{ margin: "18px 0 12px 24px" }}
                              >
                                <Select defaultValue="please select">
                                  <Option value="Standard">Standard</Option>
                                  <Option value="First Class">
                                    First Class
                                  </Option>
                                </Select>
                              </Form.Item>
                            </Col>
                          </Row>
                        </Form>
                      </div>
                    </div>
                  </Col>
                </Row>
                <div style={{ backgroundColor: "#ffffff", paddingTop: "20px" }}>
                  <Divider style={{ margin: 0 }} />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: 8,
                    color: "black",
                    fontSize: 16,
                    display: "flex",
                    justifyContent: "center",
                    background: "white"
                  }}
                >
                  <div
                    style={{
                      margin: 4,
                      display: "flex",
                      width: "100%",
                      alignItems: "center"
                    }}
                  >
                    <a style={{ opacity: 0.4, marginRight: 24 }}>Save Draft</a>
                    <span style={{ flex: 1 }} />
                    <Button
                      style={{
                        background: "#FF6178",
                        border: "1px solid #FF6178"
                      }}
                      type="primary"
                      onClick={this.showModal}
                      size="large"
                    >
                      Prepare Drop
                    </Button>
                  </div>
                  <Modal
                    title="Basic Modal"
                    footer={null}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    maskStyle={{
                      background:
                        "linear-gradient(to bottom left, #f10f4d 0%, #fa7044 100%)"
                    }}
                  >
                    <div>
                      <div style={{ backgroundColor: "lightgray" }} />
                      <div style={{ backgroundColor: "white" }} />
                    </div>
                  </Modal>
                </div>
              </Col>

              <Col md={5} sm={24}>
                <div
                  style={{
                    minHeight: "400px",
                    backgroundColor: "#fff9fa",
                    padding: "16px 16px 24px 16px"
                  }}
                >
                  instructions
                </div>
              </Col>
            </Row>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Flamingo ©2019 Created by Pebblepost
          </Footer>
        </Layout>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
