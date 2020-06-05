
import React, { Component } from 'react';
// 路由里配置的name
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import {  Card, DatePicker, Input} from 'antd';
import { Form } from '@ant-design/compatible';
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';

import {FormComponentProps} from "@ant-design/compatible/es/form";
import {Dispatch} from "redux";

const FormItem=Form.Item;
const { RangePicker }=DatePicker;
const { TextArea } = Input;



interface BasicFormProps extends FormComponentProps {
  submitting: boolean;
  dispatch: Dispatch<any>;
}







@Form.create()
 class MyList extends Component<BasicFormProps> {

  render() {
    const {
      form: { getFieldDecorator, getFieldValue },
    } = this.props;
    //xs 手机
    //sm小平板
    //md中台式
    //lg大台式
    const formItemLayout = {
      labelCol: {   //标签布局
        xs: { span: 24 },
         sm: { span: 6 },

      },
      wrapperCol: {    //需要为输入控件设置布局样式时
        xs: { span: 24 },
        // sm: { span: 12 },
        md: { span: 10 },
      },
    };

    return (
      <PageHeaderWrapper >
        <Card >
          <Form>
            <FormItem  {...formItemLayout}
              label={<FormattedMessage id="formandbasic-form.title.label" />}   >
                {/*<Input   placeholder={formatMessage({ id: 'mylist-form.email.required' })}   />*/}
              {getFieldDecorator('title', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({ id: 'formandbasic-form.goal.required' }),
                  },
                ],
              })(
                <Input
                  placeholder={formatMessage({ id: 'mylist-form.email.required' })}
                  />
              )}
              <FormItem  >
                {/*<DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />*/}
                {/*<DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />*/}
                <RangePicker   placeholder={[
                  formatMessage({id:'formandbasic-form.placeholder.start'}),
                  formatMessage({id:'formandbasic-form.placeholder.end'})
                ]} />
              </FormItem>

            </FormItem>

            <FormItem
              {...formItemLayout}
              label={<FormattedMessage id="formandbasic-form.goal.label" />}
            >
              {getFieldDecorator('goal', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({ id: 'formandbasic-form.goal.required' }),
                  },
                ],
              })(
                <TextArea
                  style={{ minHeight: 32 }}
                  placeholder={formatMessage({ id: 'formandbasic-form.goal.placeholder' })}
                  rows={3}
                />,
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label={<FormattedMessage id="mylist-form.email.kehu" />}
            >
              {
                getFieldDecorator('kehu',{
                rules:[
                  {
                    message:formatMessage({id:'mylist-form.email.kehu'})
                  },
                ],
              })(
                  <Input
                    placeholder={formatMessage({ id: 'mylist-form.email.required' })}
                  />
                )}
            </FormItem>








          </Form>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default MyList;
