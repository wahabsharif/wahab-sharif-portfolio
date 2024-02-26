import styles from "../styles/ContactCode.module.css";

const contactItems = [
  {
    social: "website",
    link: "#",
    href: "#",
  },
  {
    social: "email",
    link: "wahabsharif09@gmail.com",
    href: "wahabsharif09@gmail.com",
  },
  {
    social: "phone",
    link: "+92 309 544 4412",
    href: "tel:923095444412",
  },
  {
    social: "whatsApp",
    link: "+92 309 544 4412",
    href: "https://wa.me/923095444412",
  },
  {
    social: "github",
    link: "wahabsharif",
    href: "https://github.com/wahabsharif",
  },
  {
    social: "linkedin",
    link: "wahab-sharif",
    href: "https://www.linkedin.com/in/wahab-sharif/",
  },
  {
    social: "twitter",
    link: "wahabsharif",
    href: "https://www.twitter.com/wahabsharif",
  },
  {
    social: "instagram",
    link: "_knockk_knockk",
    href: "https://www.instagram.com/_knockk_knockk/",
  },
  {
    social: "telegram",
    link: "wahabsharif",
    href: "https://t.me/Wahabsharif",
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
