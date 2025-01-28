import Link from "next/link"
import { ContactForm } from "../contact-form/ContactForm"
import { socialItems } from "../header/social-items"
import css from "./contact.module.css"

export const Contat = () => {
    return(
        <section className={css.contact} id="contact">
            <h3>GET IN TOUCH</h3>
            <div className={css.contactGrid}>
                <div className={css.socialContainer}>
                    <picture title="Patrick Rios Photo">
                        <source 
                            srcSet="/images/profile/about-me-360-min.png" 
                            media="(max-width:480px)"
                        />
                        <source 
                            srcSet="/images/profile/about-me-450-min.png" 
                            media="(min-width:480px and max-width:720px)"
                        />
                        <img 
                            src="/images/profile/about-me-575-min.png" 
                            className={css.aboutImg}
                        />
                    </picture>
                    <div>
                        {socialItems?.map( link => (
                            <Link 
                                href={link?.url}
                                target="_black" 
                                title={link?.title}
                                className={css[link?.styleClass]}
                                key={`social-link~${link?.styleClass}`}
                            >
                                { link?.icon }
                            </Link>
                        ))}
                    </div>
                </div>
                <ContactForm/>
            </div>
        </section>
    )
}