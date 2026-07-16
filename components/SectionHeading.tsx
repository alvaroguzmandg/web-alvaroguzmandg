type SectionHeadingProps = {
  number: string;
  title: string;
  description?: string;
  light?: boolean;
};

export function SectionHeading({ number, title, description, light = false }: SectionHeadingProps) {
  return (
    <header className={`section-heading${light ? " section-heading--light" : ""}`}>
      <span>{number}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </header>
  );
}
