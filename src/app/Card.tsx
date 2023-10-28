
type ICardProps = {
  title: string;
  description: string;
  href: string;
}

export const SimpleCard = ({ title, description, href}: ICardProps) => {
  return (
    <a
      href={href}
      className="group rounded-lg border border-white px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 shadow-lg"
      target="_blank"
      rel="noopener noreferrer"
      style={{ borderRadius: '12px' }}
    >
      <p className={`mb-3 text-sm opacity-90`}>
        {title}
      </p>
      <h4 className={`m-0 max-w-[30ch] font-semibold opacity-90`}>
        {description}
      </h4>
    </a>
  );
};

export default function Home() {
  const data = fetch('/api/items');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <SimpleCard title="Ubaid" description="Some text here" href="#"/>
      </div>
    </main>
  );
}
