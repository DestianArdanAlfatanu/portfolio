import { useEffect, useId, useState } from 'react';
import { Linkedin } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import WindowFrame from '@/components/ui/WindowFrame';
import PixelIcon from '@/components/ui/PixelIcon';
import ContactCard from '@/components/cards/ContactCard';
import Button from '@/components/ui/Button';
import { copyToClipboard, getGmailComposeUrl } from '@/lib/utils';

const EMAIL = 'destianardanalfatanu@gmail.com';

const MailIcon = (props) => <PixelIcon name="mail" size={16} {...props} />;
const CopyIcon = (props) => <PixelIcon name="file" size={16} {...props} />;
const CheckIcon = (props) => <PixelIcon name="check" size={16} {...props} />;

const inputClass =
  'block w-full bg-white border-2 border-ink shadow-[inset_2px_2px_0_0_rgba(20,17,46,0.25)] px-3 text-sm text-ink placeholder:text-ink/60 outline-none focus-visible:outline-3 focus-visible:outline-ink focus-visible:outline-offset-2';

function Field({ label, id, children }) {
  return (
    <div>
      <label htmlFor={id} className="block font-pixel text-xs text-ink uppercase mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}

/**
 * OS-style compose dialog. There is no backend, so sending opens a prefilled
 * Gmail compose window in a new tab.
 */
function ComposeDialog() {
  const id = useId();
  const [form, setForm] = useState({ name: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
    setSent(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `${form.message.trim()}\n\n— ${form.name.trim()}`;
    window.open(getGmailComposeUrl(EMAIL, form.subject.trim(), body), '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  return (
    <WindowFrame title="new-message.eml" controls="full" className="on-light" bodyClassName="p-5 sm:p-6">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="flex items-center gap-3 pb-4 border-b-2 border-ink/20 text-sm text-ink">
          <span className="font-pixel text-xs uppercase w-10">To</span>
          <span className="truncate">{EMAIL}</span>
        </div>
        <Field label="Your name" id={`${id}-name`}>
          <input id={`${id}-name`} type="text" required autoComplete="name" value={form.name} onChange={update('name')} className={`${inputClass} h-10`} />
        </Field>
        <Field label="Subject" id={`${id}-subject`}>
          <input id={`${id}-subject`} type="text" required value={form.subject} onChange={update('subject')} className={`${inputClass} h-10`} />
        </Field>
        <Field label="Message" id={`${id}-message`}>
          <textarea id={`${id}-message`} required rows={6} value={form.message} onChange={update('message')} className={`${inputClass} py-2 resize-y`} />
        </Field>
        <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
          <p className="text-xs text-ink/75 max-w-xs">Sending opens Gmail in a new tab with your message filled in.</p>
          <Button type="submit" variant="primary" icon={MailIcon}>
            Send via Gmail
          </Button>
        </div>
        <p className="sr-only" aria-live="polite">{sent ? 'Gmail opened in a new tab.' : ''}</p>
      </form>
    </WindowFrame>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.title = 'Contact — Destian Ardan Alfatanu | Full-Stack & Front-End Developer';
  }, []);

  const handleCopyEmail = async () => {
    await copyToClipboard(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <PageHeader
        overline="Currently Open to Opportunities"
        title="Let's Work Together"
        description="I am actively seeking opportunities as a Front-End Developer or Full-Stack Developer. Feel free to reach out through any of the channels below."
      />

      <section className="bg-orange border-b-2 border-shade">
        <div className="bg-dither">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 grid lg:grid-cols-[1.15fr_1fr] gap-8 items-start">
            <AnimatedContainer animation="fadeUp" className="min-w-0">
              <ComposeDialog />
            </AnimatedContainer>

            <AnimatedContainer animation="fadeUp" delay={0.1} className="min-w-0 flex flex-col gap-6">
              <WindowFrame title="email.txt" tone="navy" bodyClassName="p-5">
                <p className="font-pixel text-[11px] text-yellow uppercase">Email</p>
                <p className="text-base sm:text-lg text-cream break-all mt-2">{EMAIL}</p>
                <div className="flex flex-wrap gap-4 mt-5">
                  <Button type="button" onClick={handleCopyEmail} variant="primary" size="sm" icon={copied ? CheckIcon : CopyIcon}>
                    {copied ? 'Copied!' : 'Copy Email'}
                  </Button>
                  <Button href={getGmailComposeUrl(EMAIL)} target="_blank" rel="noopener noreferrer" variant="secondary" size="sm" icon={MailIcon}>
                    Open Gmail
                  </Button>
                </div>
                <p className="sr-only" aria-live="polite">{copied ? 'Email address copied to clipboard.' : ''}</p>
              </WindowFrame>

              <div className="grid gap-4">
                <ContactCard
                  icon={<PixelIcon name="github" size={22} />}
                  label="GitHub"
                  value="@DestianArdanAlfatanu"
                  href="https://github.com/DestianArdanAlfatanu"
                />
                <ContactCard
                  icon={<Linkedin size={22} aria-hidden="true" />}
                  iconColor="text-teal"
                  label="LinkedIn"
                  value="Destian Ardan Alfatanu"
                  href="https://www.linkedin.com/in/destian-ardan-alfatanu/"
                />
                <ContactCard
                  icon={<PixelIcon name="chat" size={22} />}
                  iconColor="text-orange"
                  label="WhatsApp"
                  value="+6285156615935"
                  href="https://wa.me/+6285156615935"
                />
                <ContactCard
                  icon={<PixelIcon name="file" size={22} />}
                  iconColor="text-cream"
                  label="Resume"
                  value="Download PDF"
                  href="/cv.pdf"
                />
              </div>
            </AnimatedContainer>
          </div>
        </div>
      </section>
    </>
  );
}
