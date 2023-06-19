type Props = {
  children: React.ReactNode;
};

function ContainerWrapper({ children }: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-gray-300">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        {children}
      </div>
    </main>
  );
}

export default ContainerWrapper;
