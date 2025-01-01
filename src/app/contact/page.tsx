"use client"
import { useState, FormEvent } from 'react';
import { Mail, Github, Linkedin, Send, MessageSquare } from 'lucide-react';
import styles from '../../styles/contact.module.css';
import emailjs from '@emailjs/browser';

interface ContactForm {
    from_name: string;
    to_name: string;
    from_email: string;
    subject: string;
    message: string;
}


const ContactPage = () => {
    const [formData, setFormData] = useState<ContactForm>({
        from_name: '',
        from_email: '',
        to_name: 'Timothy',
        subject: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {

            emailjs
                .send('service_sikk80u', 'template_mc6yagg', formData, {
                    publicKey: 'qnp0dpFE7oFcJAyUa',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        console.log('FAILED...', error);
                    },
                );

            setSubmitStatus('success');
            setFormData({ from_name: '', from_email: '', to_name: '', subject: '', message: '' });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus('idle'), 3000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Get in Touch</h1>
                    <p className={styles.subtitle}>
                        Have a question or want to work together? I would love to hear from you.
                    </p>
                </div>

                <div className={styles.content}>
                    <div className={styles.contactInfo}>
                        <div className={styles.infoCard}>
                            <MessageSquare className={styles.infoIcon} />
                            <h3>Let us Talk</h3>
                            <p>I am always interested in hearing about new projects and opportunities.</p>
                        </div>

                        <div className={styles.socialLinks}>
                            <a
                                href="mailto:tlin56@jh.edu"
                                className={styles.socialLink}
                            >
                                <Mail />
                                <span>tlin56@jh.edu</span>
                            </a>
                            <a
                                href="https://github.com/Deodat-Lawson"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                            >
                                <Github />
                                <span>GitHub</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/tlin2004"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                            >
                                <Linkedin />
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className={styles.contactForm}>
                        <div className={styles.formGroup}>
                            <input
                                type="text"
                                name="from_name"
                                value={formData.from_name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <input
                                type="email"
                                name="from_email"
                                value={formData.from_email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                required
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Subject"
                                required
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.formGroup}>
              <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className={styles.textarea}
                  rows={6}
              />
                        </div>

                        <button
                            type="submit"
                            className={styles.submitButton}
                            disabled={isSubmitting}
                        >
                            <Send className={styles.submitIcon} />
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>

                        {submitStatus === 'success' && (
                            <p className={styles.successMessage}>
                                Message sent successfully! I will get back to you soon.
                            </p>
                        )}

                        {submitStatus === 'error' && (
                            <p className={styles.errorMessage}>
                                Oops! Something went wrong. Please try again.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;