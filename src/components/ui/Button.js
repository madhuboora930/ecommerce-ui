const VARIANTS = {
  primary:
    "bg-gradient-to-r from-gold to-emerald text-ink font-semibold shadow-lg shadow-emerald/20 hover:scale-105",
  ghost: "glass text-white hover:-translate-y-0.5 hover:shadow-[0_0_20px_-6px_var(--color-gold)]",
  outline: "border border-gold/40 text-gold hover:bg-gold/10",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  as: Component = "button",
  ...rest
}) {
  return (
    <Component
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100 ${VARIANTS[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}
