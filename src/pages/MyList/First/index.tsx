
import React, { Component } from 'react';
// 路由里配置的name
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Button, Card, DatePicker, Input, InputNumber, Radio, Select, Tooltip } from 'antd';
import { Form } from '@ant-design/compatible';
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import styles from './style.less';


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

class MyList extends Component {


  render() {



    return (
      <PageHeaderWrapper >
        <Card >
          <Form>
            <Form.Item
              label={<FormattedMessage id="formandbasic-form.title.label" />}
            >
                <Input
                  placeholder={formatMessage({ id: 'formandbasic-form.title.placeholder' })}
                />

            </Form.Item>

          </Form>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default MyList;
