import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact Us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7434.13056048599!2d72.90911444157578!3d21.30843671706876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be047cef21d3429%3A0x34b772224b1202d3!2sVelanja%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1706869096656!5m2!1sen!2sin"
        title="map"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xeqyaegb"
            method="post"
            className="contact-inputs"
          >
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              required
              autoComplete="off"
            />
            <input
              type="email"
              name="Email"
              placeholder="Enter Email"
              required
              autoComplete="off"
            />
            <textarea
              name="Message"
              cols="30"
              rows="10"
              placeholder="Enter your Message"
              required
              autoComplete="off"
            ></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
