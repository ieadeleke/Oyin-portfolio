import { useState } from 'react';

const brand = {
    colors: {
        cream: '#F5EFE4',
        sage: '#7E9E89',
        sageLight: '#A8C4AE',
        sageDark: '#4A6B54',
        charcoal: '#1E1F1C',
        warmGray: '#7A786F',
        terracotta: '#C07A5A',
        white: '#FDFAF6',
    },
};

const Section = ({ title, subtitle, children, dark }) => (

    <div
        style={{
            background: dark ? brand.colors.charcoal : brand.colors.white,
            padding: "64px 48px",
            borderBottom: `1px solid ${dark ? "#2e2f2b" : "#EDE5D8"}`,
        }}
    >
        {title && (
            <div style={{ marginBottom: 40 }}>
                <p
                    style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 11,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: dark ? brand.colors.sage : brand.colors.terracotta,
                        margin: "0 0 10px",
                    }}
                >
                    {subtitle || "Brand Strategy"}
                </p>
                <h2
                    style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 36,
                        fontWeight: 400,
                        color: dark ? brand.colors.cream : brand.colors.charcoal,
                        margin: 0,
                        lineHeight: 1.2,
                    }}
                >
                    {title}
                </h2>
            </div>
        )}
        {children}
    </div>
);

const Tag = ({ children, color }) => (
    <span
        style={{
            display: 'inline-block',
            padding: '6px 14px',
            borderRadius: 2,
            background: color || brand.colors.sage + '22',
            color: color ? '#fff' : brand.colors.sageDark,
            fontFamily: '‘DM Sans’, sans-serif',
            fontSize: 12,
            letterSpacing: '0.08em',
            marginRight: 8,
            marginBottom: 8,
        }}>
        {children}
    </span>
);

const ColorSwatch = ({ hex, name, role }) => (

    <div style={{ marginRight: 20, marginBottom: 20 }}>
        <div
            style={{
                width: 80,
                height: 80,
                borderRadius: 4,
                background: hex,
                border: hex === brand.colors.white ? "1px solid #EDE5D8" : "none",
                marginBottom: 10,
            }}
        />
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: brand.colors.charcoal, margin: "0 0 2px", fontWeight: 600 }}>{name}</p>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: brand.colors.warmGray, margin: "0 0 2px" }}>{hex}</p>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: brand.colors.terracotta, margin: 0 }}>{role}</p>
    </div>
);

const TaglineCard = ({ tagline, rationale, preferred }) => (

    <div
        style={{
            border: preferred ? `1.5px solid ${brand.colors.sage}` : `1px solid #EDE5D8`,
            borderRadius: 4,
            padding: "28px 32px",
            marginBottom: 16,
            background: preferred ? brand.colors.sage + "0A" : "transparent",
            position: "relative",
        }}
    >
        {preferred && (
            <span
                style={{
                    position: "absolute",
                    top: -11,
                    left: 24,
                    background: brand.colors.sage,
                    color: "#fff",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 10,
                    letterSpacing: "0.15em",
                    padding: "3px 10px",
                    borderRadius: 2,
                    textTransform: "uppercase",
                }}
            >
                Recommended
            </span>
        )}
        <p
            style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 22,
                fontWeight: 500,
                color: brand.colors.charcoal,
                margin: "0 0 10px",
                fontStyle: "italic",
            }}
        >
            "{tagline}"
        </p>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: brand.colors.warmGray, margin: 0, lineHeight: 1.6 }}>
            {rationale}
        </p>
    </div>
);

const VoiceCard = ({ trait, description, doExample, dontExample }) => (

    <div
        style={{
            border: `1px solid #EDE5D8`,
            borderRadius: 4,
            padding: "24px 28px",
            marginBottom: 16,
        }}
    >
        <p
            style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 20,
                fontWeight: 600,
                color: brand.colors.sageDark,
                margin: "0 0 8px",
            }}
        >
            {trait}
        </p>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: brand.colors.warmGray, margin: "0 0 16px", lineHeight: 1.6 }}>
            {description}
        </p>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 200, background: "#E8F4EB", borderRadius: 3, padding: "12px 16px" }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: "0.15em", color: brand.colors.sageDark, textTransform: "uppercase", margin: "0 0 6px" }}>✓ Say this</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: brand.colors.charcoal, margin: 0, fontStyle: "italic" }}>"{doExample}"</p>
            </div>
            <div style={{ flex: 1, minWidth: 200, background: "#F9EDE8", borderRadius: 3, padding: "12px 16px" }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: "0.15em", color: brand.colors.terracotta, textTransform: "uppercase", margin: "0 0 6px" }}>✗ Not this</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: brand.colors.charcoal, margin: 0, fontStyle: "italic" }}>"{dontExample}"</p>
            </div>
        </div>
    </div>
);

const LogoConceptCard = ({ number, name, description, structure, bestFor, accent }) => (

    <div
        style={{
            border: `1px solid #EDE5D8`,
            borderRadius: 4,
            overflow: "hidden",
            marginBottom: 20,
        }}
    >
        <div
            style={{
                background: accent || brand.colors.charcoal,
                padding: "40px 32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 120,
            }}
        >
            {number === 1 && (
                <div style={{ textAlign: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <div style={{ width: 32, height: 32, borderRadius: "50%", border: `2px solid ${brand.colors.sage}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <div style={{ width: 10, height: 10, background: brand.colors.sage, borderRadius: "50%" }} />
                        </div>
                        <div>
                            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, color: brand.colors.cream, margin: 0, letterSpacing: "0.08em" }}>OASIS DEFINED</p>
                            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 8, color: brand.colors.sage, letterSpacing: "0.25em", margin: 0, textTransform: "uppercase" }}>Interior Design & Space Care</p>
                        </div>
                    </div>
                </div>
            )}
            {number === 2 && (
                <div style={{ textAlign: "center" }}>
                    <div style={{ position: "relative", display: "inline-block" }}>
                        <div style={{ width: 50, height: 50, borderRadius: "50% 50% 50% 0", background: brand.colors.sage, transform: "rotate(-45deg)", margin: "0 auto 12px" }} />
                        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, color: brand.colors.cream, margin: 0, letterSpacing: "0.12em" }}>OASIS</p>
                        <div style={{ width: "100%", height: 1, background: brand.colors.sageLight, margin: "4px 0" }} />
                        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: brand.colors.sageLight, letterSpacing: "0.3em", margin: 0, textTransform: "uppercase" }}>DEFINED</p>
                    </div>
                </div>
            )}
            {number === 3 && (
                <div style={{ textAlign: "center" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <div style={{ width: 48, height: 28, borderRadius: "48px 48px 0 0", border: `2px solid ${brand.colors.sage}`, borderBottom: "none", marginBottom: 6 }} />
                        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, color: brand.colors.cream, margin: 0, letterSpacing: "0.1em", fontStyle: "italic" }}>Od.</p>
                        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 8, color: brand.colors.warmGray, letterSpacing: "0.3em", margin: "4px 0 0", textTransform: "uppercase" }}>Oasis Defined</p>
                    </div>
                </div>
            )}
        </div>
        <div style={{ padding: "24px 28px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: brand.colors.warmGray }}>0{number}</span>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, color: brand.colors.charcoal, margin: 0, fontWeight: 600 }}>{name}</p>
            </div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: brand.colors.warmGray, margin: "0 0 12px", lineHeight: 1.6 }}>{description}</p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: brand.colors.charcoal, margin: "0 0 6px" }}><strong>Structure:</strong> {structure}</p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: brand.colors.sageDark, margin: 0 }}>✓ Best for: {bestFor}</p>
        </div>
    </div>
);

const tabs = ['Overview', 'Positioning', 'Voice & Messaging', 'Visual Identity', 'Logo Direction'];

export default function OasisBrandDeck() {
    const [active, setActive] = useState(0);

    return (
        <div style={{ fontFamily: '‘DM Sans’, sans-serif', background: brand.colors.white, minHeight: '100vh' }}>
            <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />

            ```
            {/* Header */}
            <div style={{ background: brand.colors.charcoal, padding: "48px 48px 0" }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: "0.25em", color: brand.colors.sage, textTransform: "uppercase", margin: "0 0 8px" }}>
                    Brand Identity Document
                </p>
                <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 52, fontWeight: 400, color: brand.colors.cream, margin: "0 0 6px", lineHeight: 1.1 }}>
                    Oasis Defined
                </h1>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: brand.colors.warmGray, margin: "0 0 40px", letterSpacing: "0.05em" }}>
                    Interior Design & Space Care · Lagos, Nigeria · Residential + Commercial
                </p>

                {/* Tabs */}
                <div style={{ display: "flex", gap: 0, overflowX: "auto" }}>
                    {tabs.map((t, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            style={{
                                padding: "14px 20px",
                                background: "transparent",
                                border: "none",
                                borderBottom: active === i ? `2px solid ${brand.colors.sage}` : "2px solid transparent",
                                color: active === i ? brand.colors.sage : brand.colors.warmGray,
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: 12,
                                letterSpacing: "0.08em",
                                cursor: "pointer",
                                whiteSpace: "nowrap",
                                transition: "all 0.2s",
                            }}
                        >
                            {t}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tab Content */}
            {active === 0 && (
                <>
                    {/* Hero Brand Essence */}
                    <div style={{ background: brand.colors.sage, padding: "64px 48px", textAlign: "center" }}>
                        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: "0.25em", color: brand.colors.sageDark, textTransform: "uppercase", margin: "0 0 20px" }}>Brand Essence</p>
                        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 44, fontWeight: 400, color: "#fff", margin: "0 0 16px", lineHeight: 1.2 }}>
                            "We don't just style spaces.<br />We define how they feel."
                        </h2>
                        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: brand.colors.sageDark, margin: 0, maxWidth: 560, marginLeft: "auto", marginRight: "auto", lineHeight: 1.7 }}>
                            In a city that never rests, Oasis Defined creates spaces that do. For Lagos homeowners and businesses who want their environments to be more than beautiful — we make them intentional, clean, and deeply calming.
                        </p>
                    </div>

                    <Section title="The Brand at a Glance" subtitle="Overview">
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
                            {[
                                { label: "Category", value: "Interior Design + Space Care" },
                                { label: "Market", value: "Lagos, Nigeria (Residential + Commercial)" },
                                { label: "Positioning", value: "Premium but Approachable" },
                                { label: "Core Promise", value: "Intentional transformation" },
                                { label: "Brand Archetype", value: "The Caregiver + The Creator" },
                                { label: "Price Point", value: "Mid-Premium" },
                            ].map((item) => (
                                <div key={item.label} style={{ borderLeft: `3px solid ${brand.colors.sage}`, paddingLeft: 16 }}>
                                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: "0.15em", color: brand.colors.warmGray, textTransform: "uppercase", margin: "0 0 4px" }}>{item.label}</p>
                                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, color: brand.colors.charcoal, margin: 0, fontWeight: 500 }}>{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </Section>

                    <Section title="Brand Pillars" subtitle="What We Stand For">
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
                            {[
                                { pillar: "Intentionality", icon: "◈", desc: "Every choice is deliberate. Nothing is placed by accident. Spaces are shaped with purpose." },
                                { pillar: "Renewal", icon: "◎", desc: "Transformation goes beyond decoration — we reset how a space feels to the people in it." },
                                { pillar: "Calm", icon: "◯", desc: "In Lagos's pace, calm is a luxury. We bring stillness into the home environment." },
                                { pillar: "Care", icon: "◇", desc: "We maintain what we create. Space care is as important as the design itself." },
                            ].map((p) => (
                                <div key={p.pillar} style={{ padding: "28px 24px", background: brand.colors.cream, borderRadius: 4 }}>
                                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, color: brand.colors.sage, margin: "0 0 10px" }}>{p.icon}</p>
                                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, color: brand.colors.charcoal, margin: "0 0 8px", fontWeight: 600 }}>{p.pillar}</p>
                                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: brand.colors.warmGray, margin: 0, lineHeight: 1.7 }}>{p.desc}</p>
                                </div>
                            ))}
                        </div>
                    </Section>
                </>
            )}

            {active === 1 && (
                <>
                    <Section title="Who We're For" subtitle="Target Audience">
                        <div style={{ marginBottom: 24 }}>
                            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: brand.colors.warmGray, lineHeight: 1.8, maxWidth: 640, margin: "0 0 32px" }}>
                                Oasis Defined serves two distinct but complementary markets. The brand promise — intentional, calm, defined spaces — translates naturally from the home to the workplace. Same philosophy, different context.
                            </p>
                        </div>

                        {/* Residential */}
                        <div style={{ marginBottom: 12 }}>
                            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: brand.colors.sage, margin: "0 0 16px" }}>Residential</p>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginBottom: 32 }}>
                                {[
                                    {
                                        type: "The Busy Professional",
                                        color: brand.colors.sage,
                                        desc: "Lagos professional, 28–45, living in Lekki, VI, Ikoyi or Magodo. Dual income, demanding lifestyle. Wants their home to feel like a reward — not another task to manage.",
                                        traits: ["Time-poor, taste-rich", "Aesthetics-conscious", "Values results", "Willing to pay for quality"],
                                    },
                                    {
                                        type: "The New Homeowner",
                                        color: brand.colors.sageLight,
                                        desc: "Newly relocated or first-time homeowner setting up their space. Needs a trusted guide — someone to make intentional decisions with them, not just for them.",
                                        traits: ["Needs consultation", "Open to full package", "Building their identity", "Instagram-aware"],
                                    },
                                ].map((c) => (
                                    <div key={c.type} style={{ border: `1.5px solid ${c.color}40`, borderRadius: 4, padding: "24px 24px" }}>
                                        <div style={{ width: 8, height: 8, borderRadius: "50%", background: c.color, marginBottom: 14 }} />
                                        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, color: brand.colors.charcoal, margin: "0 0 10px", fontWeight: 600 }}>{c.type}</p>
                                        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: brand.colors.warmGray, margin: "0 0 16px", lineHeight: 1.7 }}>{c.desc}</p>
                                        <div style={{ display: "flex", flexWrap: "wrap" }}>{c.traits.map((t) => <Tag key={t}>{t}</Tag>)}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Commercial */}
                        <div>
                            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: brand.colors.terracotta, margin: "0 0 16px" }}>Commercial</p>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
                                {[
                                    {
                                        type: "The Ambitious Business Owner",
                                        color: brand.colors.terracotta,
                                        desc: "SME owner or founder who understands that their office or studio reflects their brand. Wants the space to communicate professionalism and impress clients from the moment they walk in.",
                                        traits: ["Brand-conscious", "Growth-focused", "Client-facing space", "Values impressions"],
                                    },
                                    {
                                        type: "The Corporate Facility Manager",
                                        color: "#C8956A",
                                        desc: "Office or property manager responsible for maintaining a clean, functional, and pleasant workspace. Needs a reliable, consistent space care partner — not a one-off service.",
                                        traits: ["Retainer-ready", "Values reliability", "Needs ongoing care", "Reports to leadership"],
                                    },
                                ].map((c) => (
                                    <div key={c.type} style={{ border: `1.5px solid ${c.color}40`, borderRadius: 4, padding: "24px 24px" }}>
                                        <div style={{ width: 8, height: 8, borderRadius: "50%", background: c.color, marginBottom: 14 }} />
                                        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, color: brand.colors.charcoal, margin: "0 0 10px", fontWeight: 600 }}>{c.type}</p>
                                        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: brand.colors.warmGray, margin: "0 0 16px", lineHeight: 1.7 }}>{c.desc}</p>
                                        <div style={{ display: "flex", flexWrap: "wrap" }}>{c.traits.map((t) => <Tag key={t} color={c.color + "22"}>{t}</Tag>)}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Section>

                    <Section title="Our Position in the Market" subtitle="Competitive Positioning" dark>
                        <div style={{ marginBottom: 32 }}>
                            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: brand.colors.cream, lineHeight: 1.8, maxWidth: 680 }}>
                                Most Lagos service providers choose a lane — homes <em style={{ color: brand.colors.sageLight }}>or</em> offices, design <em style={{ color: brand.colors.sageLight }}>or</em> cleaning. Oasis Defined holds all four quadrants simultaneously: residential, commercial, design, and ongoing care. That's a position very few own in this market.
                            </p>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 16, marginBottom: 24 }}>
                            {[
                                { who: "Regular Cleaners", gap: "Task-based. No design eye. No transformation." },
                                { who: "Interior Designers", gap: "Residential only. One-and-done. No maintenance." },
                                { who: "Facility Managers", gap: "Commercial-only. Functional, not intentional." },
                                { who: "Lifestyle Brands", gap: "Sell products. Don't transform spaces." },
                                { who: "Oasis Defined ✓", gap: "Residential + commercial. Design + ongoing care. Both markets. Full cycle.", highlight: true },
                            ].map((r) => (
                                <div key={r.who} style={{ background: r.highlight ? brand.colors.sage : "#2C2D29", borderRadius: 4, padding: "20px 20px", gridColumn: r.highlight ? "span 2" : "span 1" }}>
                                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 16, color: r.highlight ? "#fff" : brand.colors.sageLight, margin: "0 0 6px", fontWeight: 600 }}>{r.who}</p>
                                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: r.highlight ? brand.colors.sageDark : brand.colors.warmGray, margin: 0, lineHeight: 1.6 }}>{r.gap}</p>
                                </div>
                            ))}
                        </div>
                        <div style={{ background: "#2C2D29", borderRadius: 4, padding: "20px 24px", borderLeft: `3px solid ${brand.colors.terracotta}` }}>
                            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: brand.colors.warmGray, margin: 0, lineHeight: 1.8 }}>
                                <strong style={{ color: brand.colors.cream }}>Strategic note:</strong> Lead with residential to build brand equity and word-of-mouth. Commercial clients are won through visible residential reputation and portfolio. Don't split the brand — let the same identity speak to both.
                            </p>
                        </div>
                    </Section>

                    <Section title="Brand Positioning Statement" subtitle="The Core Claim">
                        <div style={{ background: brand.colors.cream, borderRadius: 4, padding: "36px 40px", borderLeft: `4px solid ${brand.colors.sage}` }}>
                            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, color: brand.colors.charcoal, margin: "0 0 20px", lineHeight: 1.6 }}>
                                For Lagos homeowners and businesses who want their space to reflect who they are, <em>Oasis Defined</em> is the interior design and space care brand that transforms both homes and workplaces into intentional, calming environments — because a well-defined space isn't just beautiful, it changes how you live and work in it.
                            </p>
                            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: brand.colors.warmGray, margin: 0, letterSpacing: "0.1em", textTransform: "uppercase" }}>Internal use · not a tagline</p>
                        </div>
                    </Section>
                </>
            )}

            {active === 2 && (
                <>
                    <Section title="Tagline Options" subtitle="Voice & Messaging">
                        <TaglineCard
                            tagline="Your space. Intentionally defined."
                            rationale="Speaks directly to the homeowner. Reinforces the brand name. The period after 'your space' creates a confident pause — this is personal."
                            preferred
                        />
                        <TaglineCard
                            tagline="Where calm is by design."
                            rationale="More poetic, lifestyle-forward. Appeals to Lagos clients who are drawn to the sanctuary idea. Works beautifully on visuals."
                        />
                        <TaglineCard
                            tagline="Clean. Calm. Considered."
                            rationale="Punchy three-word structure. Easy to remember. Each word maps to a service pillar. Great for packaging and collateral."
                        />
                        <TaglineCard
                            tagline="Defining the feeling of home."
                            rationale="Warm and emotional. Positions the brand on experience rather than service. Best for above-the-line brand campaigns."
                        />
                    </Section>

                    <Section title="Brand Voice" subtitle="How We Speak">
                        <VoiceCard
                            trait="Calm & Confident"
                            description="We don't over-explain or over-sell. We speak with quiet authority — the way a person who truly knows their craft does."
                            doExample="We'll assess, design, and care for your space from start to finish."
                            dontExample="We offer a wide range of amazing interior design and cleaning solutions for every budget!"
                        />
                        <VoiceCard
                            trait="Warm but Professional"
                            description="We're not clinical or cold. But we're not overly casual either. We talk like a trusted friend who happens to be an expert."
                            doExample="Your home should feel like yours again. Let's make that happen."
                            dontExample="Hey girl! We would love to help you slay your home décor goals 🏠✨"
                        />
                        <VoiceCard
                            trait="Intentional"
                            description="Every word is chosen. No filler, no noise. Short sentences. Clean copy. The writing should feel like the spaces we create."
                            doExample="A clean space is a clear mind."
                            dontExample="At Oasis Defined, we believe that the space you live in is really important to your overall health and well-being and that's why we offer…"
                        />
                    </Section>

                    <Section title="Key Messaging Phrases" subtitle="Brand Language" dark>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                            {[
                                "Your space, defined.",
                                "Intentionally transformed",
                                "Spaces that hold peace",
                                "Calm by design",
                                "Not just cleaned. Cared for.",
                                "We define your environment",
                                "Every corner. Every detail.",
                                "Your oasis awaits.",
                                "A home that holds you",
                                "Design that stays",
                            ].map((phrase) => (
                                <div
                                    key={phrase}
                                    style={{
                                        border: `1px solid ${brand.colors.sage}44`,
                                        borderRadius: 2,
                                        padding: "10px 16px",
                                        fontFamily: "'Cormorant Garamond', serif",
                                        fontSize: 15,
                                        color: brand.colors.cream,
                                        fontStyle: "italic",
                                    }}
                                >
                                    {phrase}
                                </div>
                            ))}
                        </div>
                    </Section>
                </>
            )}

            {active === 3 && (
                <>
                    <Section title="Colour Palette" subtitle="Visual Identity">
                        <div style={{ display: "flex", flexWrap: "wrap", marginBottom: 32 }}>
                            <ColorSwatch hex={brand.colors.charcoal} name="Defined Charcoal" role="Primary / Depth" />
                            <ColorSwatch hex={brand.colors.sage} name="Oasis Sage" role="Brand Accent / CTA" />
                            <ColorSwatch hex={brand.colors.cream} name="Soft Linen" role="Background / Warmth" />
                            <ColorSwatch hex={brand.colors.terracotta} name="Lagos Terracotta" role="Warmth Accent" />
                            <ColorSwatch hex={brand.colors.warmGray} name="Warm Stone" role="Body Text / Neutral" />
                            <ColorSwatch hex={brand.colors.white} name="Oasis White" role="Clean Space / Space" />
                        </div>
                        <div style={{ background: brand.colors.cream, borderRadius: 4, padding: "24px 28px" }}>
                            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: brand.colors.warmGray, margin: "0 0 8px", letterSpacing: "0.1em", textTransform: "uppercase" }}>Palette Rationale</p>
                            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: brand.colors.charcoal, margin: 0, lineHeight: 1.8 }}>
                                The palette balances <strong>calm</strong> (sage green, linen) with <strong>definition</strong> (deep charcoal). Terracotta grounds it in Lagos warmth — a nod to the Nigerian context without being loud about it. The result is a palette that reads premium and serene simultaneously.
                            </p>
                        </div>
                    </Section>

                    <Section title="Typography System" subtitle="Visual Identity">
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
                            <div style={{ border: `1px solid #EDE5D8`, borderRadius: 4, padding: "32px 28px" }}>
                                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: "0.2em", color: brand.colors.terracotta, textTransform: "uppercase", margin: "0 0 12px" }}>Display / Headlines</p>
                                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 40, color: brand.colors.charcoal, margin: "0 0 8px", lineHeight: 1.1, fontWeight: 400 }}>Cormorant<br />Garamond</p>
                                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 14, color: brand.colors.warmGray, margin: "0 0 16px", fontStyle: "italic" }}>Aa Bb Cc 123 — Elegant Serif</p>
                                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: brand.colors.warmGray, margin: 0, lineHeight: 1.7 }}>Used for brand name, section headers, taglines. The serif brings timelessness and calm authority.</p>
                            </div>
                            <div style={{ border: `1px solid #EDE5D8`, borderRadius: 4, padding: "32px 28px" }}>
                                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: "0.2em", color: brand.colors.terracotta, textTransform: "uppercase", margin: "0 0 12px" }}>Body / UI Text</p>
                                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 40, color: brand.colors.charcoal, margin: "0 0 8px", lineHeight: 1.1, fontWeight: 300 }}>DM Sans</p>
                                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: brand.colors.warmGray, margin: "0 0 16px" }}>Aa Bb Cc 123 — Geometric Sans</p>
                                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: brand.colors.warmGray, margin: 0, lineHeight: 1.7 }}>Used for body copy, labels, captions, UI elements. Clean and modern without feeling cold.</p>
                            </div>
                        </div>
                        <div style={{ marginTop: 24, background: brand.colors.charcoal, borderRadius: 4, padding: "32px 36px" }}>
                            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 32, color: brand.colors.cream, margin: "0 0 6px", fontWeight: 400 }}>Oasis Defined</p>
                            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: brand.colors.sage, letterSpacing: "0.25em", textTransform: "uppercase", margin: "0 0 20px" }}>Interior Design & Space Care</p>
                            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, color: brand.colors.cream, margin: "0 0 10px", fontStyle: "italic" }}>
                                "Your space. Intentionally defined."
                            </p>
                            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: brand.colors.warmGray, margin: 0, lineHeight: 1.7 }}>
                                We transform Lagos homes and workplaces into calm, clean environments that reflect the life and brand you're building.
                            </p>
                        </div>
                    </Section>

                    <Section title="Brand Moodboard Direction" subtitle="Visual Identity">
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
                            {[
                                { bg: brand.colors.sage, label: "Sage linen textures" },
                                { bg: brand.colors.cream, label: "Clean white interiors" },
                                { bg: brand.colors.charcoal, label: "Dramatic dark spaces" },
                                { bg: brand.colors.terracotta, label: "Warm material accents" },
                                { bg: brand.colors.sageLight + "99", label: "Natural light & plants" },
                                { bg: brand.colors.warmGray, label: "Refined stone finishes" },
                            ].map((m) => (
                                <div key={m.label} style={{ background: m.bg, height: 80, borderRadius: 4, display: "flex", alignItems: "flex-end", padding: "10px 12px" }}>
                                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: "#ffffffbb", margin: 0, letterSpacing: "0.05em" }}>{m.label}</p>
                                </div>
                            ))}
                        </div>
                        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: brand.colors.warmGray, marginTop: 16, lineHeight: 1.7 }}>
                            Photography direction: natural light, uncluttered compositions, textured materials, human touches (a plant, a book, a linen throw). Avoid overly staged or cold editorial looks.
                        </p>
                    </Section>
                </>
            )}

            {active === 4 && (
                <>
                    <Section title="Logo Concept Directions" subtitle="Logo Direction">
                        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: brand.colors.warmGray, margin: "0 0 32px", lineHeight: 1.7, maxWidth: 600 }}>
                            Three distinct directions below — each a different strategic interpretation of the brand. These are concept sketches to brief a designer with, not final marks.
                        </p>
                        <LogoConceptCard
                            number={1}
                            name="The Wordmark Circle"
                            description="Full brand name in a clean serif, anchored by a circular monogram mark. The circle references both the oasis (a contained, protected space) and the letter O. Minimal, timeless, versatile."
                            structure="Circle mark + OASIS DEFINED wordmark + descriptor line"
                            bestFor="Business cards, letterheads, signage, social profiles"
                            accent={brand.colors.charcoal}
                        />
                        <LogoConceptCard
                            number={2}
                            name="The Leaf Drop Monogram"
                            description="A rotated diamond or leaf-drop shape — suggesting both a water drop (cleanliness, renewal) and a leaf (nature, calm). The brand name stacks vertically below it. Elegant and distinctive."
                            structure="Abstract leaf/drop symbol + stacked OASIS / DEFINED"
                            bestFor="Instagram, uniforms, stamps, premium packaging"
                            accent="#2A3828"
                        />
                        <LogoConceptCard
                            number={3}
                            name="The Arch Lettermark"
                            description="An arch shape above the letters 'Od.' — the arch references a doorway, suggesting transformation and entry into a new kind of space. Sophisticated and editorial. The period signals confidence and finality."
                            structure="Arch motif + Od. lettermark + expanded wordmark secondary"
                            bestFor="High-end branding, editorial use, monogram applications"
                            accent="#1A1A18"
                        />
                    </Section>

                    <Section title="Logo Usage Guidelines" subtitle="Application Notes" dark>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
                            {[
                                { rule: "Minimum size", note: "Never smaller than 24px height on screen, 15mm in print" },
                                { rule: "Clear space", note: "Always maintain space equal to the cap height on all sides" },
                                { rule: "Colour versions", note: "Full colour (sage/cream), Reversed (white), One-colour (charcoal)" },
                                { rule: "Never distort", note: "Do not stretch, skew, or rotate the logo mark" },
                                { rule: "Background", note: "Use on brand colours only — charcoal, cream, sage, white" },
                                { rule: "Typography lock-up", note: "Do not alter the type or spacing in the logo file" },
                            ].map((r) => (
                                <div key={r.rule} style={{ background: "#2C2D29", borderRadius: 4, padding: "20px 20px" }}>
                                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: brand.colors.sage, letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 6px" }}>{r.rule}</p>
                                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: brand.colors.warmGray, margin: 0, lineHeight: 1.6 }}>{r.note}</p>
                                </div>
                            ))}
                        </div>
                    </Section>

                    <Section title="Next Steps" subtitle="Roadmap">
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
                            {[
                                { step: "01", action: "Choose logo direction", detail: "Review the 3 concepts above and select one to develop further with a designer." },
                                { step: "02", action: "Commission logo design", detail: "Brief a graphic designer with this document. Request 3 logo variations per concept chosen." },
                                { step: "03", action: "Build brand kit", detail: "Consolidate final logo, colours, and fonts into a shareable Canva or Figma brand kit." },
                                { step: "04", action: "Design templates", detail: "Create social media, proposal, invoice, and email signature templates." },
                                { step: "05", action: "Launch presence", detail: "Instagram profile, WhatsApp Business setup, and a minimal landing page or linktree." },
                            ].map((s) => (
                                <div key={s.step} style={{ padding: "24px 24px", borderTop: `3px solid ${brand.colors.sage}` }}>
                                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, color: brand.colors.sage + "55", margin: "0 0 8px" }}>{s.step}</p>
                                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, color: brand.colors.charcoal, margin: "0 0 8px", fontWeight: 600 }}>{s.action}</p>
                                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: brand.colors.warmGray, margin: 0, lineHeight: 1.7 }}>{s.detail}</p>
                                </div>
                            ))}
                        </div>
                    </Section>
                </>
            )}

            {/* Footer */}
            <div style={{ background: brand.colors.charcoal, padding: "32px 48px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, color: brand.colors.cream, margin: 0 }}>Oasis Defined · Brand Identity</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: brand.colors.warmGray, margin: 0, letterSpacing: "0.1em" }}>DRAFT v1.1 · 2025</p>
            </div>
        </div>

    );
}