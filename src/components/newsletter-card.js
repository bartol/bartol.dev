import React from 'react'
import styled from '@emotion/styled'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import Form from './newsletter-form'

const url = 'https://dev.us20.list-manage.com/subscribe/post?u=bb44129919c9411c748bdd338&amp;id=46438c5323'

const NewsletterCard = styled.div`
  background-color: var(--nav);
  box-shadow: var(--shadow);
  border-radius: var(--radius);
  display: flex;
  flex-direction: row;
  /* flex-wrap: wrap; */
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  margin: 2rem 0;

  min-width: calc(250px + 1rem);

  @media (max-width: 550px) {
    justify-content: center;
    flex-direction: column;
  }
`

const Banner = styled.div`
  width: 250px;
  font-size: 14.5px;
  color: #e1e1e1;
  /* background-color: red; */

  @media (max-width: 550px) {
    padding-top: 1.5rem;
  }

  @media (max-width: 360px) {
    width: 175px;
  }

  h4 {
    margin-top: 0;
  }
`

const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  @media (max-width: 700px) {
    width: 175px;
  }
  /* background-color: yellowgreen; */
  margin-top: 2.2rem;
`

const Newsletter = () => (
  <NewsletterCard>
    <Banner>
      <h4>Join the newsletter</h4>
      You won't get annoying newsletter popups or ads on my website, but if you want to get notified
      when new posts are published here is an option!
    </Banner>
    <FormBox>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <Form status={status} message={message} onValidated={formData => subscribe(formData)} />
        )}
      />
    </FormBox>
  </NewsletterCard>
)

export default Newsletter
