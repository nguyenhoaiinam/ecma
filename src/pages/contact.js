import MainNav from "@/components/banner";
import footer from "@/components/footer";
import Header from "../components/Header";
import { useEffect, useState } from "@/lib";

const ContactPage = () => {
  const [contacts, setContact] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/contacts")
      .then((response) => response.json())
      .then((data) => setContact(data));
  }, [])
  return `
    ${Header()}
        <section id="contact">
    <div class="contact container1">
      <div>
        <h1 class="section-title">Contact <span>info</span></h1>
      </div>
      ${contacts.map((contact) => {
    return `
            <div class="contact-items">
            <div class="contact-item">
              <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/phone.png" /></div>
              <div class="contact-info">
                <h1>Phone</h1>
                <h2>${contact.contactPhone}</h2>
              </div>
            </div>
            <div class="contact-item">
              <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/new-post.png" /></div>
              <div class="contact-info">
                <h1>Email</h1>
                <h2>${contact.contactEmail}</h2>
              </div>
            </div>
            <div class="contact-item">
              <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" /></div>
              <div class="contact-info">
                <h1>Address</h1>
                <h2>${contact.contactLocation}</h2>
              </div>
            </div>
          </div>
            `;
  }).join("")
    }
    </div>
  </section>
    `;
};
export default ContactPage;
