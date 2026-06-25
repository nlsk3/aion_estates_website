/* @ds-bundle: {"format":3,"namespace":"AionEstatesDesignSystem_48e3d1","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Rule","sourcePath":"components/core/Rule.jsx"},{"name":"SectionLabel","sourcePath":"components/core/SectionLabel.jsx"},{"name":"Wordmark","sourcePath":"components/core/Wordmark.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"AreaTag","sourcePath":"components/property/AreaTag.jsx"},{"name":"Pillar","sourcePath":"components/property/Pillar.jsx"},{"name":"PropertyCard","sourcePath":"components/property/PropertyCard.jsx"}],"sourceHashes":{"components/core/Button.jsx":"79c5a9d62281","components/core/Rule.jsx":"6904e81b4314","components/core/SectionLabel.jsx":"ce3cee6a7990","components/core/Wordmark.jsx":"83a4749768a7","components/forms/Field.jsx":"c7a5c13ce82f","components/property/AreaTag.jsx":"c41cc5c76afc","components/property/Pillar.jsx":"9521409ea4d2","components/property/PropertyCard.jsx":"48cb6df0aa22","ui_kits/website/Contact.jsx":"8588a80e4e8a","ui_kits/website/Nav.jsx":"3dbe0856bcb9","ui_kits/website/Sections.jsx":"e039464e957a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AionEstatesDesignSystem_48e3d1 = window.AionEstatesDesignSystem_48e3d1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Aion Estates — Button
 * Sharp-cornered, tracked-uppercase actions. Gold is the primary
 * fill; outline variants sit on photography (light) or cream (dark).
 */
function Button({
  children,
  variant = 'gold',
  size = 'md',
  as = 'button',
  href,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const pad = size === 'sm' ? {
    padding: '11px 28px',
    fontSize: '9.5px'
  } : {
    padding: 'var(--btn-pad-y) var(--btn-pad-x)',
    fontSize: 'var(--label)'
  };
  const base = {
    display: 'inline-block',
    boxSizing: 'border-box',
    fontFamily: 'var(--font-sans)',
    fontWeight: 400,
    letterSpacing: 'var(--tracking-button)',
    textTransform: 'uppercase',
    textDecoration: 'none',
    textAlign: 'center',
    border: '0.5px solid transparent',
    borderRadius: 'var(--radius-none)',
    cursor: disabled ? 'default' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    transition: 'var(--transition-button)',
    ...pad
  };
  const variants = {
    gold: {
      background: 'var(--gold)',
      color: 'var(--charcoal)',
      borderColor: 'var(--gold)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--white)',
      borderColor: 'var(--line-light)'
    },
    'outline-dark': {
      background: 'transparent',
      color: 'var(--charcoal)',
      borderColor: 'var(--line-ink-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--gold)',
      borderColor: 'transparent',
      letterSpacing: 'var(--tracking-label)'
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyle = !disabled && hover ? variant === 'gold' ? {
    opacity: 0.82
  } : variant === 'ghost' ? {
    color: 'var(--charcoal)'
  } : {
    background: 'var(--gold)',
    borderColor: 'var(--gold)',
    color: 'var(--white)'
  } : null;
  const Tag = as === 'a' || href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants[variant],
      ...hoverStyle,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Rule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Aion Estates — Rule
 * The gold hairline. `accent` is the short centred mark under labels;
 * `divider` is the long end-faded line between sections.
 */
function Rule({
  variant = 'accent',
  orientation = 'horizontal',
  align = 'left',
  style,
  ...rest
}) {
  if (variant === 'accent') {
    return /*#__PURE__*/React.createElement("span", _extends({
      "aria-hidden": "true",
      style: {
        display: 'block',
        width: '44px',
        height: '0.5px',
        background: 'var(--gold)',
        margin: align === 'center' ? '0 auto' : 0,
        ...style
      }
    }, rest));
  }
  const isV = orientation === 'vertical';
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    style: {
      display: 'block',
      width: isV ? '0.5px' : '100%',
      minHeight: isV ? '180px' : undefined,
      height: isV ? undefined : '0.5px',
      background: isV ? 'var(--rule-vertical)' : 'var(--rule-horizontal)',
      flexShrink: 0,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Rule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Rule.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Aion Estates — SectionLabel
 * The tracked-uppercase gold eyebrow that opens every section.
 */
function SectionLabel({
  children,
  tone = 'gold',
  style,
  ...rest
}) {
  const color = tone === 'soft' ? 'var(--gold-90)' : 'var(--gold)';
  return /*#__PURE__*/React.createElement("p", _extends({
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--label)',
      fontWeight: 400,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color,
      margin: 0,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Aion Estates — Wordmark
 * AION set in serif over a gold hairline, ESTATES tracked beneath.
 * `tone` adapts the AION colour for cream vs. dark grounds.
 */
function Wordmark({
  tone = 'dark',
  size = 'md',
  href,
  style,
  ...rest
}) {
  const scale = size === 'sm' ? 0.8 : size === 'lg' ? 1.3 : 1;
  const aionColor = tone === 'light' ? 'var(--white)' : 'var(--charcoal)';
  const Tag = href ? 'a' : 'span';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    "aria-label": "Aion Estates",
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: `${4 * scale}px`,
      textDecoration: 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: `${20 * scale}px`,
      fontWeight: 400,
      letterSpacing: 'var(--tracking-wide)',
      lineHeight: 1,
      color: aionColor
    }
  }, "AION"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: '100%',
      height: '0.5px',
      background: 'var(--gold)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: `${8.5 * scale}px`,
      fontWeight: 300,
      letterSpacing: 'var(--tracking-wordmark)',
      textTransform: 'uppercase',
      color: 'var(--gold)'
    }
  }, "ESTATES"));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Aion Estates — Field
 * A labelled input or textarea. Tracked-uppercase label, hairline
 * gold border, sharp corners. Designed for the dark contact ground
 * (`tone="dark"`) but also works on cream (`tone="light"`).
 */
function Field({
  label,
  id,
  type = 'text',
  textarea = false,
  rows = 5,
  placeholder,
  tone = 'dark',
  required = false,
  value,
  onChange,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const onDark = tone === 'dark';
  const labelColor = onDark ? 'var(--stone)' : 'var(--stone)';
  const inputColor = onDark ? 'var(--cream)' : 'var(--charcoal)';
  const fieldBg = onDark ? 'var(--field-bg)' : 'var(--white)';
  const borderColor = focus ? 'var(--field-border-focus)' : 'var(--field-border)';
  const controlStyle = {
    boxSizing: 'border-box',
    width: '100%',
    background: fieldBg,
    border: `0.5px solid ${borderColor}`,
    borderRadius: 'var(--radius-none)',
    color: inputColor,
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--text-md)',
    fontWeight: 300,
    padding: 'var(--field-pad-y) var(--field-pad-x)',
    outline: 'none',
    resize: 'none',
    WebkitAppearance: 'none',
    transition: 'border-color var(--dur-fast) ease'
  };
  const Control = textarea ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '9px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '9.5px',
      fontWeight: 400,
      letterSpacing: 'var(--tracking-button)',
      textTransform: 'uppercase',
      color: labelColor
    }
  }, label), /*#__PURE__*/React.createElement(Control, _extends({
    id: id,
    type: textarea ? undefined : type,
    rows: textarea ? rows : undefined,
    placeholder: placeholder,
    required: required,
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: controlStyle
  }, rest)));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/property/AreaTag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Aion Estates — AreaTag
 * A quiet gold marker for a community / neighbourhood name. Plain by
 * default (middot-separated lists); `outlined` for a hairline chip.
 */
function AreaTag({
  children,
  variant = 'plain',
  style,
  ...rest
}) {
  const base = {
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--text-xs)',
    fontWeight: 400,
    letterSpacing: '0.1em',
    color: 'var(--gold)',
    whiteSpace: 'nowrap'
  };
  if (variant === 'outlined') {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        ...base,
        display: 'inline-block',
        padding: '7px 16px',
        border: '0.5px solid var(--gold-28)',
        textTransform: 'uppercase',
        letterSpacing: '0.16em',
        fontSize: '10px',
        ...style
      }
    }, rest), children);
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...base,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { AreaTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/property/AreaTag.jsx", error: String((e && e.message) || e) }); }

// components/property/Pillar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Aion Estates — Pillar
 * A numbered value statement: serif index in gold, serif heading,
 * light sans body. Used in the "Our Approach" row.
 */
function Pillar({
  num,
  title,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...style
    }
  }, rest), num != null && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-serif)',
      fontSize: '13px',
      fontWeight: 400,
      color: 'var(--gold)',
      letterSpacing: '0.1em',
      marginBottom: '20px'
    }
  }, num), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--display-sm)',
      fontWeight: 400,
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--charcoal)',
      margin: '0 0 16px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-md)',
      fontWeight: 300,
      lineHeight: 'var(--leading-body)',
      color: 'var(--stone)',
      margin: 0
    }
  }, children));
}
Object.assign(__ds_scope, { Pillar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/property/Pillar.jsx", error: String((e && e.message) || e) }); }

// components/property/PropertyCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Aion Estates — PropertyCard
 * An editorial listing card: clay placeholder image (or photo), gold
 * area marker, serif title, light meta row. Sharp corners; lifts only
 * on hover. Extends the brand vocabulary for brokerage surfaces.
 */
function PropertyCard({
  image,
  area,
  title,
  price,
  beds,
  baths,
  sqft,
  status,
  href,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : 'div';
  const meta = [beds != null ? `${beds} Bed` : null, baths != null ? `${baths} Bath` : null, sqft != null ? `${sqft} Sq Ft` : null].filter(Boolean);
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'block',
      textDecoration: 'none',
      background: 'var(--surface)',
      border: '0.5px solid var(--line-ink)',
      borderRadius: 'var(--radius-none)',
      boxShadow: hover ? 'var(--shadow-card)' : 'none',
      transform: hover ? 'translateY(-3px)' : 'translateY(0)',
      transition: 'box-shadow var(--dur-med) var(--ease), transform var(--dur-med) var(--ease)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: '4 / 3',
      overflow: 'hidden'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: 'linear-gradient(140deg,#C9BFAC 0%,#B5A88F 50%,#A0916F 100%)'
    }
  }), status && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '14px',
      left: '14px',
      fontFamily: 'var(--font-sans)',
      fontSize: '9px',
      fontWeight: 400,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--charcoal)',
      background: 'var(--gold)',
      padding: '6px 12px'
    }
  }, status)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 24px 26px'
    }
  }, area && /*#__PURE__*/React.createElement(__ds_scope.AreaTag, {
    style: {
      display: 'block',
      marginBottom: '10px'
    }
  }, area), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '24px',
      fontWeight: 400,
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--charcoal)',
      lineHeight: 1.2,
      margin: '0 0 14px'
    }
  }, title), price && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '20px',
      fontWeight: 400,
      color: 'var(--charcoal)',
      margin: '0 0 16px'
    }
  }, price), meta.length > 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '11px',
      fontWeight: 300,
      letterSpacing: '0.08em',
      color: 'var(--stone)',
      margin: 0
    }
  }, meta.join('  ·  '))));
}
Object.assign(__ds_scope, { PropertyCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/property/PropertyCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
/* global React */
// Aion Estates — Contact (interactive form) & Footer
const {
  SectionLabel,
  Field,
  Button,
  Wordmark
} = window.AionEstatesDesignSystem_48e3d1;
function Contact() {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [sent, setSent] = React.useState(false);
  const set = k => e => setForm(f => ({
    ...f,
    [k]: e.target.value
  }));
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      padding: 'var(--section-v) 0',
      background: 'var(--charcoal)',
      color: 'var(--cream)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-w)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      display: 'grid',
      gridTemplateColumns: '1fr 1.3fr',
      gap: 'var(--grid-gap)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
    tone: "soft",
    style: {
      marginBottom: '44px'
    }
  }, "Contact"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--display-lg)',
      fontWeight: 300,
      lineHeight: 'var(--leading-snug)',
      margin: '0 0 44px'
    }
  }, "Let's begin", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic'
    }
  }, "a conversation.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "mailto:hello@aionestates.com",
    style: contactLink
  }, "hello@aionestates.com"), /*#__PURE__*/React.createElement("a", {
    href: "tel:+14085550000",
    style: contactLink
  }, "(408) 555-0000"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '11px',
      letterSpacing: '0.1em',
      color: 'var(--stone)',
      marginTop: '10px'
    }
  }, "CA DRE #00000000"))), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      border: '0.5px solid var(--gold-28)',
      padding: '48px',
      minHeight: '280px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '10px',
      fontWeight: 400,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--gold)',
      margin: '0 0 18px'
    }
  }, "Message received"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '30px',
      fontWeight: 300,
      fontStyle: 'italic',
      lineHeight: 1.4,
      margin: 0
    }
  }, "Thank you, ", form.name || 'friend', ".", /*#__PURE__*/React.createElement("br", null), "We'll be in touch shortly.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Name",
    id: "name",
    placeholder: "Your name",
    required: true,
    value: form.name,
    onChange: set('name')
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    id: "email",
    type: "email",
    placeholder: "your@email.com",
    required: true,
    value: form.email,
    onChange: set('email')
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Message",
    id: "message",
    textarea: true,
    rows: 5,
    placeholder: "Tell us about your needs\u2026",
    required: true,
    value: form.message,
    onChange: set('message')
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    as: "button",
    type: "submit",
    style: {
      alignSelf: 'flex-start'
    }
  }, "Send Message"))));
}
const contactLink = {
  fontFamily: 'var(--font-sans)',
  fontSize: '15px',
  fontWeight: 300,
  color: 'var(--cream)',
  textDecoration: 'none'
};
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--charcoal)',
      borderTop: '0.5px solid var(--gold-14)',
      padding: '28px var(--gutter)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '16px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '10.5px',
      fontWeight: 300,
      color: 'var(--stone)',
      letterSpacing: '0.06em'
    }
  }, "\xA9 2025 Aion Estates. All rights reserved."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '10.5px',
      fontWeight: 300,
      color: 'var(--stone)',
      letterSpacing: '0.06em'
    }
  }, "CA DRE #00000000"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "Instagram",
    style: {
      color: 'var(--stone)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "20",
    rx: "5",
    ry: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17.5",
    cy: "6.5",
    r: "0.5",
    fill: "currentColor",
    stroke: "none"
  }))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "LinkedIn",
    style: {
      color: 'var(--stone)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "9",
    width: "4",
    height: "12"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "4",
    cy: "4",
    r: "2"
  })))));
}
Object.assign(window, {
  AionContact: Contact,
  AionFooter: Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
/* global React */
// Aion Estates — Nav (scroll state + mobile menu)
const {
  Wordmark,
  Button
} = window.AionEstatesDesignSystem_48e3d1;
function Nav({
  scrolled,
  onNavClick
}) {
  const [open, setOpen] = React.useState(false);
  const links = [{
    label: 'About',
    id: 'philosophy'
  }, {
    label: 'Services',
    id: 'approach'
  }, {
    label: 'The Market',
    id: 'market'
  }];
  const linkColor = scrolled ? 'var(--stone)' : 'rgba(255,255,255,0.8)';
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: scrolled ? '18px var(--gutter)' : '30px var(--gutter)',
      background: scrolled ? 'var(--surface)' : 'transparent',
      boxShadow: scrolled ? 'var(--shadow-nav)' : 'none',
      transition: 'background var(--dur-med) ease, padding var(--dur-med) ease, box-shadow var(--dur-med) ease'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onNavClick('hero'),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    tone: scrolled ? 'dark' : 'light'
  })), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      display: 'flex',
      gap: '40px',
      alignItems: 'center',
      margin: 0,
      padding: 0
    }
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.id
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNavClick(l.id),
    style: {
      cursor: 'pointer',
      textDecoration: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: '11px',
      fontWeight: 400,
      letterSpacing: 'var(--tracking-link)',
      textTransform: 'uppercase',
      color: linkColor,
      transition: 'color var(--dur-fast) ease'
    }
  }, l.label))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Button, {
    variant: scrolled ? 'outline-dark' : 'outline',
    size: "sm",
    onClick: () => onNavClick('contact')
  }, "Contact"))));
}
window.AionNav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
/* global React */
// Aion Estates — Hero & editorial sections
const {
  SectionLabel,
  Rule,
  Button,
  Pillar,
  AreaTag
} = window.AionEstatesDesignSystem_48e3d1;
function Hero({
  onNavClick
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: '640px',
      height: '88vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(155deg,#1E2D40 0%,#162130 45%,#0D1620 100%)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      textAlign: 'center',
      color: 'var(--white)',
      maxWidth: '680px',
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '10px',
      fontWeight: 300,
      letterSpacing: 'var(--tracking-wide)',
      color: 'var(--gold)',
      margin: '0 0 28px'
    }
  }, "SAN FRANCISCO BAY AREA"), /*#__PURE__*/React.createElement(Rule, {
    variant: "accent",
    align: "center",
    style: {
      margin: '0 auto 40px'
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--display-xl)',
      fontWeight: 300,
      lineHeight: 'var(--leading-tight)',
      letterSpacing: 'var(--tracking-tight)',
      margin: '0 0 52px'
    }
  }, "Where legacy meets", /*#__PURE__*/React.createElement("br", null), "the horizon."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => onNavClick('contact')
  }, "Get in Touch")));
}
function Philosophy() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-v) 0',
      background: 'var(--cream)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-w)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    style: {
      marginBottom: '44px'
    }
  }, "Philosophy"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--display-md)',
      fontWeight: 300,
      fontStyle: 'italic',
      lineHeight: 'var(--leading-quote)',
      color: 'var(--charcoal)',
      maxWidth: '820px',
      margin: 0
    }
  }, "Aion Estates was built on a belief that the finest properties in the SF Bay Area deserve representation as timeless as the communities themselves. We move with deliberateness, cultivate relationships across generations, and bring an unwavering standard to every transaction.")));
}
function Approach() {
  const pillars = [{
    num: '01',
    title: 'Representation',
    body: 'Every client receives the full weight of our attention and expertise. We represent your interests with precision, from first showing to final close.'
  }, {
    num: '02',
    title: 'Market Expertise',
    body: 'As Bay Area natives, decades of experience give us an understanding of this market that no algorithm can replicate — neighbourhood by neighbourhood, block by block.'
  }, {
    num: '03',
    title: 'Discretion',
    body: 'Your transaction is your business. We conduct every engagement with the confidentiality and professionalism that high-stakes decisions demand.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-v) 0',
      background: 'var(--surface)',
      borderTop: '0.5px solid var(--line-ink)',
      borderBottom: '0.5px solid var(--line-ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-w)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    style: {
      marginBottom: '44px'
    }
  }, "Our Approach"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch'
    }
  }, pillars.map((p, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: p.num
  }, /*#__PURE__*/React.createElement(Pillar, {
    num: p.num,
    title: p.title,
    style: {
      flex: 1,
      padding: i === 0 ? '0 52px 0 0' : i === pillars.length - 1 ? '0 0 0 52px' : '0 52px'
    }
  }, p.body), i < pillars.length - 1 && /*#__PURE__*/React.createElement(Rule, {
    variant: "divider",
    orientation: "vertical"
  }))))));
}
function Market() {
  const areas = ['Saratoga', 'Los Altos Hills', 'Los Altos', 'Los Gatos', 'Cupertino', 'Campbell'];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-v) 0',
      background: 'var(--cream)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-w)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--grid-gap)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
    style: {
      marginBottom: '44px'
    }
  }, "The Market"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--display-lg)',
      fontWeight: 300,
      lineHeight: 'var(--leading-snug)',
      margin: '0 0 28px',
      color: 'var(--charcoal)'
    }
  }, "The South Bay,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic'
    }
  }, "in full.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-lg)',
      fontWeight: 300,
      lineHeight: 'var(--leading-body)',
      color: 'var(--stone)',
      margin: '0 0 28px'
    }
  }, "From the hillside estates of Saratoga and Los Altos Hills to the tree-lined streets of Los Gatos and Los Altos, the South Bay holds some of the Bay Area's most coveted real estate. We know these communities intimately \u2014 their character, their values, and where exceptional opportunity lives."), /*#__PURE__*/React.createElement("p", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px 18px',
      margin: 0
    }
  }, areas.map(a => /*#__PURE__*/React.createElement(AreaTag, {
    key: a
  }, a)))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      aspectRatio: '4 / 5',
      background: 'linear-gradient(140deg,#C9BFAC 0%,#B5A88F 50%,#A0916F 100%)'
    }
  })));
}
Object.assign(window, {
  AionHero: Hero,
  AionPhilosophy: Philosophy,
  AionApproach: Approach,
  AionMarket: Market
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Rule = __ds_scope.Rule;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.AreaTag = __ds_scope.AreaTag;

__ds_ns.Pillar = __ds_scope.Pillar;

__ds_ns.PropertyCard = __ds_scope.PropertyCard;

})();
