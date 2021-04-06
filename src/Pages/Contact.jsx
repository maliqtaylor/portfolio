import React from 'react';
import Footer from '../Components/Footer'
import { Form, Icon } from 'semantic-ui-react'
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("mwkakele");
  if (state.succeeded) {
    return (
      <div className='success'>
        <h3>Thank you for reaching out !</h3>
        <Footer left='/projects' />
      </div>
    )
  }
  return (
    <div className='contact'>
      <div id='page-wrap'>

        <div className='contactHeader'>
          <h1>Contact Me</h1>
        </div>

        <div className='form'>
          <Form className='contact' onSubmit={handleSubmit}>
            <Form.Group widths='equal'>
              <Form.Input
                fluid label='Name'
                placeholder='Name'
                id="name"
                type="text"
                name="name"
                required={true}
              />

              <Form.Input
                fluid label='e-mail'
                placeholder='e-mail'
                id="email"
                type="email"
                name="email"
                required={true}
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />

            </Form.Group>

            <Form.TextArea
              label='Message'
              placeholder="Let's get in touch..."
              name="message"
              id='message'
              required={true}
            />

            <Form.Button disabled={state.submitting}>
              Send
              <Icon className='send' name='paper plane outline' />
            </Form.Button>
          </Form>
        </div>
        <Footer left='/projects' />
      </div>
    </div>
  );
}

export default Contact