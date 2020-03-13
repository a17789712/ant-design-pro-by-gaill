
import React, { Component } from 'react';
// 路由里配置的name
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Button, Card, DatePicker, Input, InputNumber, Radio, Select, Tooltip } from 'antd';
import { Form } from '@ant-design/compatible';
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import styles from './style.less';

const FormItem=Form.Item;
const { RangePicker }=DatePicker;




class MyList extends Component {
  render() {
    return (
      <PageHeaderWrapper >
        <Card >
          <Form>
            <FormItem  label={<FormattedMessage id="formandbasic-form.title.label" />}  >
                <Input   placeholder={formatMessage({ id: 'formandbasic-form.userName.required' })}    />
              <FormItem  >
                {/*<DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />*/}
                {/*<DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />*/}
                <RangePicker   placeholder={[
                  formatMessage({id:'formandbasic-form.placeholder.start'}),
                  formatMessage({id:'formandbasic-form.placeholder.end'})
                ]} />
              </FormItem>

            </FormItem>


          </Form>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default MyList;
