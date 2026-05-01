
import { useState } from "react";
import DisplayLayout from "../layout/DisplayLayout";

const FormSection = ({ number, title, subtitle, children }: any) => (
  <div className="mb-20">
    <div className="flex items-baseline gap-4 mb-8">
      <span className="text-3xl font-light text-white">{number}.</span>
      <div>
        <h3 className="text-3xl font-medium text-white mb-3">{title}</h3>
        {subtitle && <p className="text-sm text-white mt-1">{subtitle}</p>}
      </div>
    </div>
    {children}
  </div>
);

const CheckboxField = ({ label, checked, onChange }: any) => (
  <label className="flex items-center gap-3 mb-4 cursor-pointer group">
    <div className={`w-4 h-4 border ${checked ? 'bg-white border-white' : 'border-white/30'} flex items-center justify-center transition-all`}>
      {checked && <div className="w-2 h-2 bg-black" />}
    </div>
    <span className={`text-sm ${checked ? 'text-white' : 'text-white/60'} group-hover:text-white transition-colors tracking-tight`}>
      {label}
    </span>
    <input type="checkbox" className="hidden" checked={checked} onChange={onChange} />
  </label>
);

const RadioField = ({ label, checked, onChange, name }: any) => (
  <label className="flex items-center gap-3 mb-4 cursor-pointer group">
    <div className={`w-4 h-4 border rounded-full ${checked ? 'border-white' : 'border-white/30'} flex items-center justify-center transition-all`}>
      {checked && <div className="w-2 h-2 bg-white rounded-full" />}
    </div>
    <span className={`text-sm ${checked ? 'text-white' : 'text-white/60'} group-hover:text-white transition-colors tracking-tight`}>
      {label}
    </span>
    <input type="radio" name={name} className="hidden" checked={checked} onChange={onChange} />
  </label>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    needs: [],
    stage: "",
    details: "",
    budget: "",
    connection: "",
  });

  const toggleNeed = (need: string) => {
    setFormData((prev: any) => ({
      ...prev,
      needs: prev.needs.includes(need)
        ? prev.needs.filter((n: string) => n !== need)
        : [...prev.needs, need],
    }));
  };

  return (
    <DisplayLayout>
      <div className="bg-black min-h-screen pt-40 pb-40 px-5 md:px-24">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <h1 className="text-4xl md:text-5xl font-medium text-white mb-6 uppercase tracking-tight">
            The Spark
          </h1>
          <p className="text-white/60 text-base md:text-lg leading-relaxed md:max-w-[65%] mx-auto!">
            You have the vision. We have the blueprint. Tell us about your
            project below, and let's see if we're the right partners to bring
            it to life.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-2xl mx-auto">
          {/* Section 1 */}
          <FormSection number="1" title="Who are you?" subtitle="Every legend begins with an author">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-white transition-colors"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <input
                type="email"
                placeholder="Work Email"
                className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-white transition-colors"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <input
                type="text"
                placeholder="Company/Organization"
                className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-white transition-colors"
                onChange={(e) => setFormData({...formData, company: e.target.value})}
              />
            </div>
          </FormSection>

          {/* Section 2 */}
          <FormSection number="2" title="What do you need?" subtitle="What are we building?">
            <div className="space-y-1">
              {[
                "Brand Identity System (Logo, Strategy, Full Rebrand)",
                "Web Design & Development (Marketing Site, Portfolio, Corporate)",
                "Digital Product Design (Mobile App, SaaS Dashboard, UI/UX)",
                "Motion & 3D (Animation, Commercials, Product Viz)",
                "Full Partnership (I need it all / Retainer)",
              ].map((item) => (
                <CheckboxField
                  key={item}
                  label={item}
                  checked={formData.needs.includes(item as never)}
                  onChange={() => toggleNeed(item)}
                />
              ))}
            </div>
          </FormSection>

          {/* Section 3 */}
          <FormSection number="3" title="Where are you now?" subtitle="Current Stage">
            <div className="space-y-1">
              {[
                "Idea Phase (I have a concept, but no assets yet)",
                "Early Stage (We have a business, but need to look professional)",
                "Growth / Scaling (We are established, but need to level up)",
                "Market Leader (We are dominating, and want to stay there)",
              ].map((item) => (
                <RadioField
                  key={item}
                  name="stage"
                  label={item}
                  checked={formData.stage === item}
                  onChange={() => setFormData({ ...formData, stage: item })}
                />
              ))}
            </div>
          </FormSection>

          {/* Section 4 */}
          <FormSection number="4" title="Tell us more" subtitle="Project Details">
            <textarea
              placeholder="Tell us about your goals, timeline, and the problem you are trying to solve. Be as specific as you like."
              className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-white transition-colors min-h-[100px] resize-none"
              onChange={(e) => setFormData({...formData, details: e.target.value})}
            />
          </FormSection>

          {/* Section 5 */}
          <FormSection number="5" title="The Investment" subtitle="Estimated Budget">
            <div className="space-y-1">
              {["$3,000 - $8,000", "$8,000 - $15,000", "$15,000 - $30,000", "$30,000 +"].map((item) => (
                <RadioField
                  key={item}
                  name="budget"
                  label={item}
                  checked={formData.budget === item}
                  onChange={() => setFormData({ ...formData, budget: item })}
                />
              ))}
            </div>
          </FormSection>

          {/* Section 6 */}
          <FormSection number="6" title="The Connection" subtitle="How did you hear about us? (Optional)">
            <textarea
              placeholder="Linkedin, Twitter, Instagram, Google, Referral etc."
              className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-white transition-colors min-h-[60px] resize-none"
              onChange={(e) => setFormData({...formData, connection: e.target.value})}
            />
          </FormSection>
          
          <button className="w-full py-5 bg-white text-black font-medium uppercase tracking-widest hover:bg-white/90 transition-colors mt-10">
            Send Message
          </button>
        </div>
      </div>
    </DisplayLayout>
  );
};

export default Contact;
