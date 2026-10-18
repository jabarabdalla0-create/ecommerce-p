import { useState } from 'react';
import Icon from '../components/Icon.jsx';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const submit = (event) => { event.preventDefault(); setSent(true); event.currentTarget.reset(); };
  return (
    <div className="contact-page page-shell"><div className="breadcrumb"><a href="/">HOME</a><span>/</span><span>CONTACT</span></div><div className="contact-layout"><div className="contact-intro"><p className="eyebrow">WE'RE ALL EARS</p><h1>Let's talk<br /><span>sport.</span></h1><p>Questions about your order, a product, or what to wear for the next match? Drop us a note.</p><div className="contact-details"><span>EMAIL US</span><a href="mailto:hello@jabarsport.com">hello@jabarsport.com <Icon name="arrow" size={15} /></a><span>RESPONSE TIME</span><p>Usually within one business day.</p></div></div><form className="contact-form" onSubmit={submit}><label>Your name<input required name="name" placeholder="Name" /></label><label>Email address<input required name="email" type="email" placeholder="you@example.com" /></label><label>What can we help with?<select name="topic" defaultValue=""><option value="" disabled>Select a topic</option><option>Order question</option><option>Product question</option><option>Returns & delivery</option><option>Something else</option></select></label><label>Your message<textarea required name="message" rows="4" placeholder="Tell us a little more..." /></label><button className="button button--dark" type="submit">{sent ? 'MESSAGE SENT' : 'SEND MESSAGE'} <Icon name={sent ? 'check' : 'arrow'} size={17} /></button>{sent && <p className="form-success">Thanks for reaching out. We'll be in touch soon.</p>}</form></div></div>
  );
}
